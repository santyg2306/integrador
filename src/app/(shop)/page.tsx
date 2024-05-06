import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="barra anuncios flex place-items-center justify-center mt-10 mb-10">
        <div className="w-[909px] h-[631px] rounded-[20px] mr-2 relative" style={{ background: "linear-gradient(to left, #c45b51 0%, #bc2717 55.4%, #5f0e05 100%)", boxShadow: "4px 4px 9.399999618530273px 0 rgba(0,0,0,0.25)", }} >
          <img
            src="anuncio1.svg"
            className=" absolute ml-80 mt-[106px] rounded-20"
            alt="Anuncio"
          />

          <p className="w-[528px] text-[70px] font-bold text-left text-white ml-11 mt-11">
            Revisa tu bolsa y cotiza
          </p>

          <div className="flex items-center ml-16 mt-24 mb-20">
            <svg
              width={3}
              height={61}
              viewBox="0 0 3 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line x1="1.5" x2="1.5" y2={61} stroke="#BD3C2E" stroke-width={3} />
            </svg>

            <div className="w-[65px] h-[41px] rounded-[13px] flex items-center ml-2  bg-[#75d3dd]">
              <p className="absolute  ml-0.5 text-3xl font-medium  text-white">
                30% de descueto
              </p>
            </div>
          </div>

          <a
            href="http://localhost:3000/auth/nuevaCuenta"
            className="w-[223px] h-[63px] rounded-[27px] flex items-center justify-center ml-20  bg-white border border-gray-300 hover:bg-gray-200 focus:outline-none focus:border-blue-500"
          >
            <p className="text-[28px] font-semibold text-center text-[#bd3c2e]">
              Mirar ahora
            </p>
          </a>
        </div>

        <div className="flex flex-col">
          <div
            className="w-[555px] h-[412px] rounded-[20px] mb-2 flex flex-col  items-center " style={{ background: "linear-gradient(to bottom, #75d3dd 30.5%, #d9d9d9 100%)", boxShadow: "5px 4px 4px 0 rgba(0,0,0,0.25)", }}>
            <img
              src="anuncio2.svg"
              className=" absolute ml-9 mt-[170px] rounded-20"
              alt="Anuncio"
            />
            <p className=" text-6xl font-bold mt-5 text-[#1d6d76]">
              <span className=" text-6xl font-bold  text-[#1d6d76]">
                Materiales de la
              </span>
              <br />
              <span className=" text-6xl font-bold text-center text-[#1d6d76]">
                mejor calidad
              </span>
            </p>

            <a href="http://localhost:3000/catalogo" className="w-[176.97px] h-7 flex justify-between items-center mt-3 transition duration-300 ease-in-out hover:text-[#1d6d76] hover:underline">
              <p className="text-[28px] font-medium text-center text-[#1d6d76]">Mirar ahora</p>
              <svg
                width={22}
                height={20}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5"
                preserveAspectRatio="none"
              >
                <path
                  d="M20.9115 10.9414C21.4314 10.4215 21.4314 9.57852 20.9115 9.0586L12.4389 0.586005C11.919 0.0660839 11.076 0.0660839 10.5561 0.586005C10.0362 1.10593 10.0362 1.94888 10.5561 2.4688L18.0873 10L10.5561 17.5312C10.0362 18.0511 10.0362 18.8941 10.5561 19.414C11.076 19.9339 11.919 19.9339 12.4389 19.414L20.9115 10.9414ZM0 11.3313L19.9701 11.3313V8.66866L0 8.66866L0 11.3313Z"
                  fill="#1D6D76"
                />
              </svg>
            </a>


          </div>

          <div className="w-[555px] h-[209px] rounded-[20px] bg-gradient-to-b flex flex-col items-center from-[#262424] to-[#5f5a5a]" style={{ boxShadow: "5px 4px 4px 0 rgba(0,0,0,0.25)" }}>

            <p className="text-3xl font-bold text-center text-[#d9d9d9]">
              <span className="text-3xl font-bold text-center text-[#d9d9d9]">Contamos con un extenso</span>
              <br />
              <span className="text-3xl font-bold text-center text-[#d9d9d9]"> catalogo</span>
            </p>


            <div className="w-[204px] h-11 rounded-[27px] flex items-center justify-between mt-16 bg-[#bd3c2e]" >
              <p className=" ml-3 mb-1 text-[28px] font-medium text-white">
                Mirar ahora
              </p>
              <svg
                width={22}
                height={20}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 mt-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M20.9115 10.9414C21.4314 10.4215 21.4314 9.57852 20.9115 9.0586L12.4389 0.586005C11.919 0.0660839 11.076 0.0660839 10.5561 0.586005C10.0362 1.10593 10.0362 1.94888 10.5561 2.4688L18.0873 10L10.5561 17.5312C10.0362 18.0511 10.0362 18.8941 10.5561 19.414C11.076 19.9339 11.919 19.9339 12.4389 19.414L20.9115 10.9414ZM0 11.3313L19.9701 11.3313V8.66866L0 8.66866L0 11.3313Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="barra marcas w-full h-[164px] flex flex-row items-center justify-between bg-[#bd3c2e]">

        <a className="flex-grow" href="http://localhost:3000/nuevaCuenta">
          <img src="argos.svg" className="mx-auto pb-6" />
        </a>
        <a className="flex-grow" href="http://localhost:3000/nuevaCuenta">
          <img src="cemex.svg" className="mx-auto" />
        </a>
        <a className="flex-grow" href="http://localhost:3000/nuevaCuenta">
          <img src="pintuco.svg" className="mx-auto" />
        </a>
        <a className="flex-grow" href="http://localhost:3000/nuevaCuenta">
          <img src="alfa.svg" className="mx-auto" />
        </a>
        <a className="flex-grow" href="http://localhost:3000/nuevaCuenta">
          <img src="corona.svg" className="mx-auto" />
        </a>
      </div>

      <div className="categorias populares">
        <div className="flex justify-between items-center px-10 w-full h-[52.83px] mt-24 ">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#1a1a1a]">
            Categorías populares
          </p>
          <div className="  flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 rounded-[43px]">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#bd3c2e]">
              Mirar todo
            </p>
            <svg
              width={17}
              height={15}
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[15px] h-[12.05px]"
              preserveAspectRatio="none"
            >
              <path
                d="M15.9994 7.41785H0.99939"
                stroke="#BD3C2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.9494 1.39282L15.9994 7.41682L9.9494 13.4418"
                stroke="#BD3C2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mb-1 mt-10 px-10 flex justify-between items-center gap-1">
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="cemento1.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Cemento
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="aislante.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              aislante
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="ladrillo.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Ladrillo
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="corcho.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              corcho
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="pintura.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              pinturas
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="resina.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Resinas
            </p>
          </div>
        </div>

        <div className="mb-5 px-10 flex justify-between items-center gap-1">
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="marmol.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Marmol
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="arena.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Arenas y grava
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="asfalto.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Asfalto
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="caucho.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Caucho
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="concreto.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Concreto
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[235.61px] h-[296.15px] relative gap-4 pt-4 pb-6 rounded-[5px] bg-white border border-[#e6e6e6] hover:border-red-500" style={{ boxShadow: "0px 0px 30px 0 rgba(39,35,67,0.12)", transition: "border-color 0.3s" }}>
            <img src="polietileno.svg" className="flex-grow-0 flex-shrink-0 w-[190px] h-[130px] object-none" />
            <p className="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-medium text-center text-[#1a1a1a]">
              Polietileno
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center px-10 mt-10 ">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#1a1a1a]">
            mas comprados
          </p>
          <div className="  flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 rounded-[43px]">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#bd3c2e]">
              Mirar todo
            </p>
            <svg
              width={17}
              height={15}
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[15px] h-[12.05px]"
              preserveAspectRatio="none"
            >
              <path
                d="M15.9994 7.41785H0.99939"
                stroke="#BD3C2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.9494 1.39282L15.9994 7.41682L9.9494 13.4418"
                stroke="#BD3C2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mas comprados flex items-center justify-center mx-10">
          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 rounded-[5px] " >
              <p className=" text-[16.4924259185791px] text-left text-white">
               
              </p>
            </div>
            <img
              src="cemento.png"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                  Cemento Cemex 50KG
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                  $14.99
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
              <p className=" text-[16.4924259185791px] text-left text-white">
               
              </p>
            </div>
            <img
              src="blanca.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                  Pintura blanca Pintuco
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                  $20.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
              <p className=" text-[16.4924259185791px] text-left text-white">
                
              </p>
            </div>
            <img
              src="bano.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                Inodoro Corona
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                  $50.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px] pt-12 bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            
            <img
              src="marmol1.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                  marmol
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                  $9.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
              <p className=" text-[16.4924259185791px] text-left ">
               
              </p>
            </div>
            <img
              src="ladrillos.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                ladrillos
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                $34.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>
        <div className="mas comprados pb-24 flex items-center justify-center mx-10">
          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
              <p className=" text-[16.4924259185791px] text-left">
                
              </p>
            </div>
            <img
              src="tejas.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                tejas
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                $20.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
              <p className=" text-[16.4924259185791px] text-left">
                
              </p>
            </div>
            <img
              src="silicona.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                Silicona Pintuco
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                  $20.99
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5" >
              <p className=" text-[16.4924259185791px] text-left">
               
              </p>
            </div>
            <img
              src="estuco.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                Estuco Sapolin
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                $12.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5 " >
             
            </div>
            <img
              src="esmalte.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                Esmalte madera Tonner
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                $9.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="w-[311px] h-[385.22px]  bg-white border border-[#e8e8e8]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
            <div className="w-[95px] h-8  flex items-center justify-center  ml-5 mt-5" >
              
                
            </div>
            <img
              src="arena1.svg"
              className=" w-[299.22px] h-[270.95px] relative  bottom-[20px] object-none"
            />

            <div className="flex items-center mx-5 pb-7 justify-between">
              <div className=" flex flex-col  ">
                <p className="text-[16.4924259185791px]  text-[#4d4d4d]">
                Arena Promaco 40KG
                </p>
                <p className=" text-[18.848485946655273px] font-medium  text-[#1a1a1a]">
                $34.00
                </p>
              </div>
              <div className="flex ">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex "

                >
                  <circle cx="23.5606" cy="23.5606" r="23.5606" fill="#F2F2F2" />
                  <path
                    d="M19.6642 19.6901H16.7191L14.7557 30.4887H32.4262L30.4628 19.6901H27.5177M19.6642 19.6901V16.745C19.6642 14.5763 21.4222 12.8183 23.5909 12.8183C25.7596 12.8183 27.5177 14.5763 27.5177 16.745V19.6901M19.6642 19.6901H27.5177M19.6642 19.6901V22.6352M27.5177 19.6901V22.6352"
                    stroke="#1A1A1A"
                    stroke-width="1.53144"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
