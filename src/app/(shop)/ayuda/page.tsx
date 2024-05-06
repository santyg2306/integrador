import Image from "next/image";
 
export default function () {
  return (
 
    <div className="flex flex-col items-center">
 
      <p className="text-5xl font-semibold text-center text-black mt-24 mb-16">
        ¿Cómo podemos ayudarte hoy?
      </p>
 
      <div className="w-full max-w-[800px] relative mb-16 flex justify-center items-center">
        <input
          type="text"
          placeholder="Buscar una pregunta"
          className="w-[584px] h-[50px] pl-10 opacity-80 rounded-lg bg-gray-500 text-black focus:outline-none"
        />
      </div>
 
 
      <div className="w-[613px] h-[498px] bg-gradient-to-b from-white to-red-500 border border-gray-500 mb-16 rounded-lg shadow-md">
        <p className="text-5xl font-semibold text-center text-black mt-16 mb-16">
          Obtenga ayuda personalizada y vea sus pedidos recientes
        </p>
 
        <div className="w-72 h-16 relative mb-10 ml-40 flex justify-center items-center">
          <a href="http://localhost:3000/login">
            <button className="flex justify-center items-center w-full h-full gap-2 px-9 py-4 rounded-[38.7px] bg-[#bc2717] text-white font-semibold focus:outline-none">
              Iniciar sesión
            </button>
          </a>
        </div>
 
 
        <div className="flex justify-center items-center mt-4">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-gray-700">
            ¿No tienes cuenta?
          </p>
          <a className="text-sm font-medium text-red-800 ml-1 transition-colors hover:text-white" href="http://localhost:3000/createAccount">
            Regístrate
          </a>
        </div>
      </div>
 
 
      <p className="text-5xl font-semibold text-center text-black mb-16">
        Preguntas frecuentes
      </p>
 
      <p className="w-[1022px] h-[2015px] text-[32.345035552978516px] text-left">
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] font-bold text-left text-[#d85b50]">
          Productos
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Cuáles son los principales materiales de construcción que ofrece EasyMats?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] font-light text-left text-black">
          Principales materiales de construcción: EasyMats ofrece una amplia gama de materiales de
          construcción, entre ellos, bloques, cemento, cerámicas, acero, madera, herramientas y otros
          insumos esenciales para proyectos de construcción.
        </span>
        <br />
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Cómo puedo saber qué tipo de material es el más adecuado para mi proyecto de construcción?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] font-light text-left text-black">
          Asesoramiento en selección de materiales: Puedes recibir asesoramiento personalizado de nuestro
          equipo de ventas para determinar qué tipo de material se adapta mejor a tu proyecto. Ofrecemos
          recomendaciones basadas en tus necesidades específicas y características del proyecto.
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] font-bold text-left text-[#d85b50]">
          Envíos
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Cuánto tiempo se tarda en recibir un pedido de EasyMats?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] text-left text-black">
          Tiempo de entrega: El tiempo de entrega varía según la ubicación y la disponibilidad de los
          productos. Normalmente, proporcionamos estimaciones claras durante el proceso de compra, y
          nuestro equipo logístico trabaja para garantizar entregas rápidas y eficientes.
        </span>
        <br />
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Ofrecen envío internacional?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] text-left text-black">
          Envío internacional: Sí, EasyMats ofrece envío internacional. Puedes coordinar detalles
          específicos con nuestro equipo de ventas para obtener información sobre la disponibilidad y los
          costos asociados.
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] font-bold text-left text-[#d85b50]">
          Garantía
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Tienen garantía los productos de EasyMats?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] text-left text-black">
          Garantía de productos: Sí, nuestros productos están respaldados por garantías específicas. La
          duración y los términos de la garantía pueden variar según el tipo de producto.
        </span>
        <br />
        <br />
        <span className="w-[1022px] h-[2015px] font-semibold mb-4 text-[32.345035552978516px] text-left text-black">
          ¿Cómo puedo hacer valer la garantía de un producto?
        </span>
        <br />
        <span className="w-[1022px] h-[2015px] text-[32.345035552978516px] text-left text-black">
          Hacer valer la garantía: Si experimentas problemas con un producto, ponte en contacto con
          nuestro servicio al cliente. Te proporcionaremos orientación sobre cómo hacer valer la garantía
          y resolveremos cualquier problema de manera oportuna.
        </span>
        <br />
        <br />
      </p>
 
 
    </div>
 
 
 
 
 
  );
}