import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí puedes enviar los datos de inicio de sesión a tu servidor o realizar la autenticación del lado del cliente
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      <div className="w-[648px] h-[382px] relative">
        <div className="absolute inset-0 rounded-xl bg-white" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)" }} />
        <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
          <p className="text-[32px] font-semibold text-center capitalize text-[#272343]">
            Iniciar Sesión
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-[584px] h-[50px] mt-8 bg-[#f0f2f3] rounded-xl">
              <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} className="w-full h-full px-3 text-base text-left text-[#9a9caa] outline-none bg-transparent border-none" />
            </div>
            <div className="w-[584px] h-[50px] mt-4 flex items-center justify-between bg-[#f0f2f3] rounded-xl">
              <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} className="w-full h-full px-3 text-base text-left text-[#9a9caa] outline-none bg-transparent border-none" />
            </div>
            <div className="flex justify-between items-center w-[584px] mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm text-left capitalize text-[#636270]">Recordar Cuenta</p>
              </div>
              <a href="http://localhost:3000/nuevaCuenta" className="text-sm font-medium capitalize text-[#636270] hover:text-rojoooo">Olvidé mi Contraseña</a>
            </div>
            <div className="flex justify-center items-center  mt-4">
              <button type="submit" className="px-6 py-3.5 rounded-lg bg-[#bd3c2e] w-[584px] text-white font-semibold text-base capitalize">
                Iniciar Sesión
              </button>
            </div>
          </form>
          <p className="flex-grow-0 flex-shrink-0 mt-4 text-sm text-center text-[#272343]">¿No tienes cuenta?</p>
          <a className="flex justify-center text-sm font-medium text-center text-[#932013]" href="http://localhost:3000/createAccount">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default Login;