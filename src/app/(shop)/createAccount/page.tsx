
import Image from "next/image";
 
export default function () {
    return (
 
        <div className="flex justify-center items-center">
            <div className="w-[648px] h-[851px] flex-col justify-between items-start rounded-xl mt-10 mb-10 bg-white" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", padding: "20px" }}>
 
                <div className="ml-8  flex flex-col items-start justify-between gap-6" >
                    <p className="text-[32px] font-semibold text-left capitalize text-[#272343]">
                        crea tu cuenta
                    </p>
                    <div className="flex flex-col justify-start items-start w-[263px] relative">
                        <p className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
                            Nombre
                        </p>
                        <input
                            type="text"
                            className="w-[263px] h-[50px] relative overflow-hidden px-4 text-[17.187095642089844px] text-neutral-700 rounded-lg bg-[#F0F2F3]"
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
 
                    <div className="flex flex-col justify-start items-start w-[263px] relative">
                        <p className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
                            Apellido
                        </p>
                        <input
                            type="text"
                            className="w-[263px] h-[50px] relative overflow-hidden px-4 text-[17.187095642089844px] text-neutral-700 rounded-lg bg-[#F0F2F3]"
                            placeholder="Ingresa tu apellido"
                        />
                    </div>
 
                    <div className="flex flex-col justify-start items-start w-[298px] relative">
                        <p className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
                            Correo Electrónico
                        </p>
                        <input
                            type="email"
                            className="w-[298px] h-[50px] relative overflow-hidden px-4 text-[17.187095642089844px] text-neutral-700 rounded-lg bg-[#F0F2F3]"
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>
 
                    <div className="flex flex-col justify-start items-start w-[263px] relative">
                        <p className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
                            Contraseña
                        </p>
                        <input
                            type="password"
                            className="w-[263px] h-[50px] relative overflow-hidden px-4 text-[17.187095642089844px] text-neutral-700 rounded-lg bg-[#F0F2F3]"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
 
                    <div className="flex flex-col justify-start items-start w-[263px] relative">
                        <p className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
                            Confirmar contraseña
                        </p>
                        <input
                            type="password"
                            className="w-[263px] h-[50px] relative overflow-hidden px-4 text-[17.187095642089844px] text-neutral-700 rounded-lg bg-[#F0F2F3]"
                            placeholder="Confirmar contraseña"
                        />
                    </div>
 
                </div>
                <div className="flex flex-grow items-center justify-between mt-10">
                    <svg
                        className=""
                        width={176}
                        height={1}
                        viewBox="0 0 176 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <line x1={176} y1="0.505859" x2="-0.000016646" y2="0.5" stroke="black" />
                    </svg>
 
                    <p className="text-[14.399999618530273px] text-center text-black">O inicia sesion en un click</p>
                    <svg
                        className=""
                        width={176}
                        height={1}
                        viewBox="0 0 176 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <line x1={176} y1="0.505859" x2="-0.000016646" y2="0.5" stroke="black" />
                    </svg>
 
                </div>
                <div className="flex flex-row items-center justify-between mx-20 mt-6">
                    <div className=" w-[100px] h-[85px] flex flex-col justify-start items-center relative overflow-hidden px-6 py-2 bg-[#f8f8f8] border border-[#bd3c2e]">
                        <img
                            src="Google.svg"
                            className="flex-grow-0 flex-shrink-0 w-[47px] h-[47px] object-cover"
                        />
                        <p className="flex-grow-0 flex-shrink-0 text-[14.399999618530273px] text-left text-[#932013]">
                            Google
                        </p>
                    </div>
 
                    <div className="w-[100px] h-[85px] flex flex-col justify-start items-center relative overflow-hidden px-6 py-2 bg-[#f8f8f8] border border-[#bd3c2e]">
                        <img
                            src="Facebook.svg"
                            className="flex-grow-0 flex-shrink-0 w-[47px] h-[47px] object-contain"
                        />
                        <p className="flex-grow-0 flex-shrink-0 w-[71px] text-[14.399999618530273px] text-left text-[#932013]">
                            Facebook
                        </p>
                    </div>
 
                    <div className="w-[100px] h-[85px] flex flex-col justify-start items-center relative overflow-hidden px-6 py-2 bg-[#f8f8f8] border border-[#bd3c2e]">
                        <img
                            src="Apple.svg"
                            className="flex-grow-0 flex-shrink-0 w-[47px] h-[47px] object-contain"
                        />
                        <p className="flex-grow-0 flex-shrink-0 text-[14.399999618530273px] text-left text-[#932013]">
                            Apple
                        </p>
                    </div>
                </div>
 
                <div className="flex justify-center flex-row items-center mx-20 mt-10">
                    <div className="flex justify-center items-center h-[50px] w-[222px] relative gap-[8.593548774719238px] px-[22.91613006591797px] rounded-[4.50px] bg-[#bd3c2e]">
                        <a href="http://localhost:3000/ActiveAccount" className="flex-grow-0 flex-shrink-0 text-base font-bold text-left uppercase text-white">
                            Crear cuenta
                        </a>
                    </div>
                </div>
            </div>
        </div>
 
 
 
 
    );
}  