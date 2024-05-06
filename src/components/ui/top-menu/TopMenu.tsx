import { toCamelCase } from '../../../shared/utils/utils'
export const TopMenu = () => {
    const navItems = ["Inicio", "Categorias","Acerca de nosotros", "Ayuda"]
    return (
        <header>
            <div className="topbarra w-full h-10 bg-white border border-[#b1b1b1] container mx-auto flex items-center justify-between">
                <div className="ubicacion container mx-auto px-10 flex items-center justify-between ">
                    <img src="ping.svg" alt="Descripción de la imagen" className="w-19 h-22 rounded-full" />
                    <p className="text-[10px] text-left container mx-auto px-1 ">
                        <span className="text-[10px] text-left text-[#5e5e5e]">Entrega en:</span><br /><span
                            className="text-[10px] font-bold text-left text-neutral-700">Actualizar localizacion</span >
                    </p>
                </div>


                <div className="inicio sesion container mx-auto px-10 flex items-center justify-end ">
                    <p className="text-[13.333333969116211px] text-center  text-[#5e5e5e] ">es</p>
                    <img src="Arrow 1.svg" className="w-3 h-3" />
                    <svg
                        width="2"
                        height="18"
                        viewBox="0 0 1 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="mx-3"
                    >
                        <line x1="0.5" x2="0.5" y2="18" stroke="#5E5E5E"></line>
                    </svg>
                    <a href="http://localhost:3000/login" className="text-[13.333333969116211px] text-center text-[#5e5e5e] hover:text-rojoooo">Iniciar sesión / Crear cuenta
                    </a>
                </div>
            </div>

            <div className="middlebarra w-full h-[92px] bg-white  flex justify-between items-center px-12 p-8">
               <a href='http://localhost:3000'>
                <img src="logo horizontal 1.svg" className="flex-shrink-0 w-[158px] h-[69.23px] flex items-center justify-between " />
                </a>
                <div className="flex-grow- flex-shrink-0  w-[442px] h-[41px] bg-white border border-[#b1b1b1] rounded-lg flex justify-center">
                    <input type="text" placeholder="Buscar" className="w-full h-full px-4 bg-transparent border-none focus:outline-none" />
                    <button className="flex-shrink-0 h-full px-3 flex items-center bg-rojoooo text-white rounded-lg"> Buscar</button>
                </div>

                <div className="favoritos-carrito flex items-center justify-between flex-shrink-0">

                    <a href="/favoritos" id="link">
                        <img src="vector.svg" id="imagen1" className="w-[27px] h-[23px]" alt="Link to Favoritos" />  
                    </a>
                    <svg
                        width="2"
                        height="33"
                        viewBox="0 0 1 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="mx-2 justify-center"
                    >
                        <line x1="0.5" x2="0.5" y2="18" stroke="#5E5E5E"></line>
                    </svg>
                    <a href="/cart" id="link">
                    <img src="cart.svg" className="w-[32px] h-[30px]" />
                    </a>
                    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[27px] w-[68.34px] relative gap-0">
                        <p className="flex-grow-0 flex-shrink-0 text-[9.28125px] text-left text-[#5e5e5e]">Carrito</p>
                        <p className="flex-grow-0 flex-shrink-0 text-[11.8125px] font-medium text-left text-black">$57.00</p>
                    </div>

                </div>


            </div>
            <div className="w-full h-[60px] bg-grissss flex justify-between items-center ">
                <div className="windows flex justify-between gap-7 pl-16 items-center">
                    {navItems.map((item, index) => (
                        <a href={`/${toCamelCase(item)}`} key={index} className="text-15 font-semibold text-center text-griss hover:text-rojoooo ">{item}</a>
                    ))}
                </div>
                <div className='flex justify-between items-center gap-2 pr-16'>
                    <img src="phone 1.svg" className='w-[28px] h-[28px]' />
                    <p className="text-sm font-medium text-left text-griss">(304) 453-8564</p>
                </div>
            </div>
        </header>



    )
}