import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
// import { auth } from './firebase';


const Login = () => {
  const navigate = useNavigate(); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const userCredential = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
      const user = userCredential.user;
      console.log("Logged in as:", user.email);
      navigate('/home'); 
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
