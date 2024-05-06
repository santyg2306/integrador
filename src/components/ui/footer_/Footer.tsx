export const Footer = () => {
    return (

        <div className="w-auto h-[145.8px] bg-[#f7f7f7] relative flex justify-between items-center">
            <div className="flex flex-col justify-start items-start gap-[3.5999999046325684px] ml-24">
                <p className="flex-grow-0 flex-shrink-0 text-[21.599998474121094px] font-semibold text-left text-[#1a1a1a]">Suscribete</p>
                <p className="flex-grow-0 flex-shrink-0 w-[403.2px] text-[12.59999942779541px] text-left text-[#999]">
                    <span className="text-[12.59999942779541px]">Suscríbete para no perderte ninguna de nuestras ofertas</span><br />
                    <span className="text-[12.59999942779541px]">y productos nuevos</span>
                </p>
            </div>
            <div className="mr-24 flex items-center justify-between w-[442.8px] rounded-[41.4px] bg-white border-[0.9px] border-[#e6e6e6]">
                <input type="text" placeholder="Digite su correo" className="flex-grow-0 flex-shrink-0 text-[14.399999618530273px] text-left text-[#808080] border-none outline-none ml-5" />
                <button className="px-9 py-[14.399999618530273px] rounded-[38.7px] bg-[#bc2717] text-[14.399999618530273px] font-semibold text-white cursor-pointer">
                    Suscribirse
                </button>
            </div>
        </div>
    )
}