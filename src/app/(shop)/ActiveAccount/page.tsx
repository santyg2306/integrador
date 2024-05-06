import Image from "next/image";
 
export default function () {
    return (
 
 
 
        <div className="flex justify-center items-center">
            <div className="w-[648px] h-[382px] flex-col flex justify-between items-center rounded-xl mt-10 mb-10 bg-white" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)" }}>
                <div className="w-[348px] h-[84px]">
 
                    <div className="flex justify-center flex-col mt-11">
                        <p className="text-[32px] font-semibold text-center capitalize text-[#272343]">
                            Tu cuenta ya esta activa
                        </p>
                        <div className="flex-col mt-6 text-lg text-[#636270]">
                            <div className="flex justify-center ml-2 my-0">
                                Felicidades
                            </div>
                            <div className="flex justify-center ml-2 my-0">
                                Gracias por hacer parte de la
                            </div>
                            <div className="flex justify-center ml-2 my-0">
                                familia EasyMats
                            </div>
                        </div>
                    </div>
                </div>
 
 
                <a href="http://localhost:3000" className="flex justify-center items-center w-[584px] relative gap-3 px-6 py-3.5 mb-11 rounded-lg bg-[#bd3c2e] text-white font-semibold capitalize">
                    <span className="flex-grow-0 flex-shrink-0">
                        Empezar a Comprar
                    </span>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}