import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useLoginApi from '../../hooks/api/userLoginApi';
import { useUserContext } from '../../context/UserProvider';
const Conditions = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters long'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
});

const Authentication = () => {
  const { loginUser } = useLoginApi();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Message, setMessage] = useState('');
  const [Errors, setErrors] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { setUserName } = useUserContext();
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      setErrors({ username: '', password: '' });
      await Conditions.validate(
        { username: Username, password: Password },
        { abortEarly: false }
      );

      if (Username === 'demo_login' && Password === 'demo_login') {
        navigate('/dashboard');
      } else {
        const response: any = await loginUser(Username, Password);
        setLoading(false);
        console.log(response);
        setMessage(`${response.data?.message}`);
        const newUser = response.data?.name;
        setUserName(newUser);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error: any) {
      setLoading(false);
      if (error.name === 'ValidationError') {
        const validationErrors: any = {};
        error.inner.forEach((err: any) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setMessage('Oops! Something went wrong, please try again.');
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center mt-20 sm:mt-5">
      <div className="mt-20 border-neutral-700 border-2 rounded-lg px-5 py-5">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-widest">
          <span className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">
            Login
          </span>
        </h2>

        <div className={`${loading ? 'blur-sm' : ''} transition duration-300`}>
          <form onSubmit={handleLogin} className="bg-transparent">
            <div className="ml-[3.25rem]">
              <label
                htmlFor="username"
                className="text-xl mx-auto px-3 py-3 text-orange-700 tracking-wider"
              >
                Username:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className={`bg-transparent hover:border-neutral-600 text-xl tracking-wider text-neutral-400`}
              />
              {Errors.username && (
                <p className="text-neutral-500 mt-2">{Errors.username}</p>
              )}
            </div>
            <div className="ml-[3.25rem] mt-3">
              <label
                htmlFor="password"
                className="text-xl mx-auto px-3 py-3 text-orange-700 tracking-wider"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-transparent hover:border-neutral-600 text-xl tracking-wider text-neutral-400`}
                autoComplete="off"
              />
              {Errors.password && (
                <p className="text-neutral-500 mt-2">{Errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex justify-center items-center px-2 py-1 mt-2 mx-auto sm:mt-3 text-2xl bg-gradient-to-r from-slate-900 to-slate-500 rounded-lg"
            >
              Dive-In
            </button>
            <p className="text-center text-sm text-slate-500">
              Demo login: Username - demo_login, Password - demo_login
            </p>
          </form>
        </div>
        <div className="flex justify-center items-center text-neutral-700 lg:text-xl sm:text-sm">
          {Message && <p>{Message}</p>}
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
