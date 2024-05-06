import Image from "next/image";

export default function () {
  return (

    <div className="flex items-center justify-center">

<div className="w-[792px] h-[851px] relative my-7 ">
  <svg
    width={792}
    height={851}
    viewBox="0 0 792 851"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-[-1px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.5 18C0.5 8.33503 8.33502 0.5 18 0.5H774C783.665 0.5 791.5 8.33502 791.5 18V833C791.5 842.665 783.665 850.5 774 850.5H18C8.335 850.5 0.5 842.665 0.5 833V18Z"
      fill="#F8F8F8"
      stroke="#B3B3B3"
    />
  </svg>
  <div className="flex flex-col justify-start items-start w-[263px] absolute left-[493px] top-[575px]">
  <label htmlFor="codigoPostal" className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
    Codigo postal
  </label>
  <input id="codigoPostal" type="text" className="w-[263px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
<div className="flex flex-col justify-start items-start w-[263px] absolute left-[35px] top-[581px]">
  <label htmlFor="telefono" className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
    Telefono
  </label>
  <input id="telefono" type="text" className="w-[263px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
<div className="flex flex-col justify-start items-start w-[263px] absolute left-[35px] top-[482px]">
  <label htmlFor="direccion" className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
    Direccion
  </label>
  <input id="direccion" type="text" className="w-[263px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
<div className="flex flex-col justify-start items-start w-[263px] absolute left-[493px] top-[482px]">
  <label htmlFor="departamento" className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
    Departamento
  </label>
  <input id="departamento" type="text" className="w-[263px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
<div className="flex flex-col justify-start items-start w-[263px] absolute left-[493px] top-[383px]">
  <label htmlFor="localidad" className="flex-grow-0 flex-shrink-0 w-[263px] text-[17.187095642089844px] text-left text-neutral-700">
    Localidad
  </label>
  <input id="localidad" type="text" className="w-[263px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
<div className="flex flex-col justify-start items-start w-[412px] absolute left-[35px] top-[383px]">
  <label htmlFor="nombreApellidos" className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
    Nombre 
  </label>
  <input id="nombreApellidos" type="text" className="w-[120px] h-[50px] relative overflow-hidden border border-gray-300 rounded-lg bg-[#b1b1b1]"/>
</div>
 

  <a href="http://localhost:3000/final" className="flex justify-center items-center w-[222px] h-[41px] absolute left-[283px] top-[767px] gap-[8.593548774719238px] px-[22.91613006591797px] rounded-[2.15px] bg-[#bd3c2e]">
    <p className="flex-grow-0 flex-shrink-0 text-[11.458065032958984px] font-bold text-left uppercase text-white">
        Comprar
    </p>
</a>

  <p className="w-[721px] absolute left-[34px] top-[708px] text-[17.187095642089844px] text-left text-[#5e5e5e]">
    Total estimado $105.00
  </p>

  <div className="flex flex-col justify-start items-start w-[263px] rounded-[2.15px] absolute left-[35px] top-[90px]">
  <p className="text-neutral-700">
    Seleccione el método de pago
  </p>
  <select className="w-[263px] h-[50px] rounded-[5px] bg-[#b1b1b1]">
    <option value="visa">Visa</option>
    <option value="mastercard">Mastercard</option>
    <option value="amex">American Express</option>
    <option value="diners">Diners Club</option>
  </select>
</div>

<div className="flex flex-col justify-start items-start w-[263px] absolute left-[35px] top-[189px]">
  <p className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
    numero de targeta
  </p>
  <input
    className="flex-grow-0 flex-shrink-0 w-[263px] h-[50px] pl-[12px] pr-[12px] pb-[11px] pt-[11px] rounded-lg bg-[#b1b1b1] border-[1px] border-solid border-neutral-300"
    type="text"
   
  />
</div>
<div className="flex flex-col justify-start items-start w-[188px] absolute left-[568px] top-[189px]">
  <p className="flex-grow-0 flex-shrink-0 w-[584px] text-[17.187095642089844px] text-left text-neutral-700">
    Codigo de seguridad
  </p>
  <input
    className="flex-grow-0 flex-shrink-0 w-[188px] h-[50px] pl-[12px] pr-[12px] pb-[11px] pt-[11px] rounded-lg bg-[#b1b1b1] opacity-70"
    type="text"
   
  />
</div>
  <div className="flex flex-col justify-start items-start w-[180px] absolute left-[347px] top-[189px]">
  <p className="text-[17.187095642089844px] text-left text-neutral-700">
    Fecha de caducidad
  </p>
  <input
    className="w-[190px] h-[50px] pl-[12px] pr-[12px] pb-[11px] pt-[11px] rounded-lg bg-[#b1b1b1] opacity-70"
    type="text"
    placeholder="MM/YY"
  />
</div>
  <p className="absolute left-[267px] top-[25px] text-[32px] font-semibold text-center capitalize text-[#272343]">
    Metodo de pago
  </p>
  <p className="absolute left-[183px] top-[325px] text-[32px] font-semibold text-center capitalize text-[#272343]">
    Informacion de facturacion
  </p>
</div>


    </div>

    

    
  );
}
