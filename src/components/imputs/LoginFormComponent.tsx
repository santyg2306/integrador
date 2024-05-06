// LoginFormComponent.tsx

import React, { useState } from "react";
import axios from "axios";

interface LoginForm {
  email: string;
  password: string;
}

const LoginFormComponent: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginForm
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    axios
      .post("/api/login", formData)
      .then((response) => {
        alert("Inicio de sesión exitoso");
        // Redireccionar al usuario si es necesario
      })
      .catch((error) => {
        alert(
          "Hubo un error al iniciar sesión. Por favor, verifica tus credenciales e inténtalo de nuevo."
        );
      });
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
    <div className="w-[648px] h-[382px] relative">
      <div
        className="absolute inset-0 rounded-xl bg-white"
        style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)" }}
      />
      <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
        <p className="text-[32px] font-semibold text-center capitalize text-[#272343]">
          iniciar sesión
        </p>
        <div className="w-[584px] h-[50px] mt-8 bg-[#f0f2f3] rounded-xl">
          <input
            type="text"
            placeholder="Email"
            className="w-full h-full px-3 text-base text-left text-[#9a9caa] outline-none bg-transparent border-none"
          />
        </div>
        <div className="w-[584px] h-[50px] mt-4 bg-[#f0f2f3] rounded-xl">
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full h-full px-3 text-base text-left text-[#9a9caa] outline-none bg-transparent border-none"
          />
        </div>

        <div className="flex justify-between items-center w-[584px] mt-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm text-left capitalize text-[#636270]">
              recordar cuenta
            </p>
          </div>
          <a href="http://localhost:3000/nuevaCuenta" className="text-sm font-medium capitalize text-[#636270] hover:text-rojoooo">
            olvidé mi contraseña
          </a>
        </div>
        <div className="flex justify-center items-center  mt-4">
          <button className="px-6 py-3.5 rounded-lg bg-[#bd3c2e] w-[584px] text-white font-semibold text-base capitalize">
            iniciar sesión
          </button>
        </div>
        <p className="flex-grow-0 flex-shrink-0 mt-4 text-sm text-center text-[#272343]">no tienes cuenta?</p> 
        <a className="flex justify-center text-sm font-medium text-center text-[#932013]" href="http://localhost:3000/createAccount">
      registrate
    </a>
      </div>
    </div>
  </div>
  );
};

export default LoginFormComponent;