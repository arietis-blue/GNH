import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { auth } from './firebase.jsx'; 

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const userCredential = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
      const user = userCredential.user;
      console.log("Logged in as:", user.email);
      navigate('/');
      setShowModal(false);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <button onClick={() => setShowModal(true)} className="rounded-lg px-4 py-2 bg-green-800 text-white">
        Hotel Login
      </button>

      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div>
                    <label className="block text-gray-700">メールアドレス</label>
                    <input name="email" type="email" placeholder="email" className="mt-1 px-2 py-1 w-full border rounded" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700">パスワード</label>
                    <input name="password" type="password" placeholder="password" className="mt-1 px-2 py-1 w-full border rounded" />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue sm:ml-3 sm:w-auto sm:text-sm">
                    ログイン
                  </button>
                  <button onClick={() => setShowModal(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    キャンセル
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
