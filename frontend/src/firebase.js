// v9 互換インポート
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 既存の設定
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// アプリの初期化
const app = initializeApp(firebaseConfig);

// Auth インスタンスの取得
const auth = getAuth();

export { auth };
