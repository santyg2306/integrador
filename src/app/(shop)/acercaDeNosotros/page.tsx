import React from 'react';
 
function MyComponent() {
  return (
    <div>
      <div className="mx-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 items-start">
        <div className="order-2 md:order-1 mb-8 md:mb-0">
          <p className="text-5xl mb-4 font-semibold text-black">
            Acerca de EasyMats
          </p>
          <p className="text-2xl text-[#54545c] mb-24 ">
            En EasyMats, nos enorgullece ser tu socio confiable en el mundo de la construcción. Desde nuestra fundación en 1998, nos hemos comprometido a proporcionar materiales de construcción de la más alta calidad y servicios excepcionales a nuestros clientes. Estamos aquí para brindarte soluciones innovadoras y personalizadas para tus proyectos de construcción, asegurando resultados sobresalientes en cada paso del camino.
          </p>
        </div>
        <div className="text-left order-1 md:order-2 mb-24">
          <img src="planos.svg" className="w-110 h-auto" alt="Descripción de la imagen" />
        </div>
      </div>
 
      <div className="mx-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 items-start">
        <div className="order-2 md:order-1 mb-8 md:mb-0">
          <img src="almacen.svg" className="w-110 h-auto" />
        </div>
        <div className="text-left order-1 md:order-2 mb-24">
          <p className="text-5xl mb-4 font-semibold text-black">
            Misión
          </p>
          <p className="text-2xl text-[#54545c] mb-24 ">
            Proveer a nuestros clientes con materiales de construcción de alta calidad, ofreciendo soluciones integrales que superen sus expectativas, manteniendo un compromiso constante con la eficiencia y la satisfacción del cliente.
          </p>
        </div>
      </div>
 
      <div className="mx-20 mt-40 grid grid-cols-1 md:grid-cols-2 gap-x-20 items-start">
        <div className="order-2 md:order-1 mb-8 md:mb-0">
          <p className="text-5xl mb-4 font-semibold text-black">
            Visión
          </p>
          <p className="text-2xl text-[#54545c] mb-24 ">
            Ser líderes en la industria de venta y distribución de materiales para construcción, destacándose por la excelencia en productos y servicios, contribuyendo al desarrollo sostenible de las comunidades donde operamos.
          </p>
        </div>
        <div className="text-left order-1 md:order-2 mb-24">
          <img src="descarga.svg" className="w-110 h-auto" alt="Descripción de la imagen" />
        </div>
      </div>
 
      <div className="mx-20 mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 items-start">
        <div className="order-2 md:order-1 mb-8 md:mb-0">
          <img src="asistente.svg" className="w-110 h-auto" />
        </div>
        <div className="text-left order-1 md:order-2 mb-24">
          <p className="text-5xl mb-4 font-semibold text-black">
            Equipo EasyMats
          </p>
          <p className="text-2xl text-[#54545c] mb-24 ">
            Nuestro equipo está formado por profesionales apasionados y dedicados que comparten el compromiso de proporcionar soluciones excepcionales a nuestros clientes. Estamos aquí para asesorarte en cada paso del camino, desde la selección de materiales hasta la entrega final.
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default MyComponent;