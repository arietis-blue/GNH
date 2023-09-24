from fastapi import FastAPI, Depends, HTTPException, status, Response, Header
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin import auth, credentials, firestore
import firebase_admin
from dotenv import load_dotenv
import os

load_dotenv()
firebase_cred_path = os.environ.get('FIREBASE_RELATIVE_PATH')

# # Firebase証明書のパスを確認
# if firebase_cred_path is None:
#     raise ValueError("The FIREBASE_RELATIVE_PATH environment variable is not set")

# # Firebase証明書ファイルの存在を確認
# if not os.path.exists(firebase_cred_path):
#     raise ValueError(f"The specified Firebase credential file does not exist: {firebase_cred_path}")

cred = credentials.Certificate(firebase_cred_path)
firebase_admin.initialize_app(cred)
db = firestore.client()

async def get_current_user(authorization: str = Header(...)):
    try:
        decoded_token = auth.verify_id_token(authorization)
        return decoded_token
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
        )


# frontendのurl
origins = [
    "http://localhost:3000",  
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello")
def read_root():
    return {"message": "Hello, world!"}

@app.get("/private/", tags=["private"])
async def read_private_route(current_user: dict = Depends(get_current_user)):
    return {"message": "You have access to this data", "user": current_user}

@app.post("/upload")
def add_location_data(current_user: dict = Depends(get_current_user)):
    doc_ref = db.collection("users").document("user_id")
    doc_ref.set({
        "user": current_user,
        "age": 30,
    })

@app.get("/load")
def add_location_data(current_user: dict = Depends(get_current_user)):
    doc_ref = db.collection("user").document("user_id")
    doc = doc_ref.get()
    if doc.exists:
        print(f"Document data: {doc.to_dict()}")
    else:
        print("No such document!")

# ホテルデータを保存
@app.post("/hotel/")
async def create_hotel(hotel_name: str, email: str, password: str, hotel_id: str):
    hotel_data = {
        'hotel_name': hotel_name,
        'email': email,
        'password': password,
        'hotel_id': hotel_id
    }
    db.collection('hotels').document(hotel_id).set(hotel_data)
    return {"message": "Hotel created", "hotel": hotel_data}

# sightデータを保存
@app.post("/sight/")
async def create_sight(shop_name: str, hotel_id: str, category: str, sub_category: str, description: str, latitude: float, longitude: float, shop_url: str):
    sight_data = {
        'shop_name': shop_name,
        'hotel_id': hotel_id,
        'category': category,
        'sub_category': sub_category,
        'description': description,
        'latitude': latitude,
        'longitude': longitude,
        'shop_url': shop_url
    }
    # 新しいドキュメントを自動生成してデータを追加
    db.collection('sights').add(sight_data)
    return {"message": "Sight created", "sight": sight_data}





