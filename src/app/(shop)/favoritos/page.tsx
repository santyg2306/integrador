import Image from "next/image";

export default function () {
    return (

        <div className="flex justify-between items-start w-[1323px]">
        {/* Ordenar por */}
        <div className="flex items-center gap-4">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            {/* Iconos de ordenar */}
          </svg>
          <p className="text-base">
            Ordenar por <span className="text-[#6d737a]">Mejor valorados</span>
          </p>
        </div>
        
        {/* Filtros */}
        <div className="flex gap-8">
          <p className="text-base font-semibold">Todos los productos</p>
          <p className="text-base">En stock</p>
          <p className="text-base">En descuento</p>
          <p className="text-base">Mejores valorados</p>
        </div>
      </div>
      



    );
}

