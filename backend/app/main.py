from fastapi import FastAPI, Depends, HTTPException, status, Response, Header
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin import auth, credentials
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


