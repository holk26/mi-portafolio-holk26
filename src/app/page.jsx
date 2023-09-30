import Layout from "@/components/Layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <main className="px-4 sm:px-6 md:px-8"> {/* Agregar clases para el padding */}
        <div className="flex flex-col-reverse sm:flex-row h-screen bg-gray-900 text-white"> {/* Reorganizar el orden en dispositivos pequeños */}
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-center p-4 sm:p-7"> {/* Agregar padding */}
            <h1 className="text-4xl sm:text-6xl font-bold">Homero Cabrera A.</h1> {/* Ajustar el tamaño de fuente para dispositivos pequeños */}
            <h2 className="text-2xl sm:text-4xl font-bold">FullStack Developer</h2> {/* Ajustar el tamaño de fuente para dispositivos pequeños */}
            <p className="text-base sm:text-lg mt-2"> {/* Ajustar el tamaño de fuente para dispositivos pequeños */}
              Soy un profesional en Desarrollo de Software y Tecnólogo en Análisis y Desarrollo de Sistemas de Información con experiencia en asesoría y servicio al cliente, automatización de procesos, pruebas de funcionamiento y manejo de bases de datos. Domino lenguajes como C#, PHP, Python, JavaScript, HTML y CSS, así como herramientas como SQL Server, MySQL, Oracle y Visual Studio. Me enfoco en obtener resultados, planificar y buscar mejoras continuas.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-center overflow-hidden">
          <div className="relative w-64 h-64 sm:w-96 sm:h-96 overflow-hidden rounded-full border-4 border-gray-700">
  <Image
    src="/images/profile.jpeg"
    alt="Developer"
    width={600}
    height={600}
    className="object-cover w-full h-full"
  />
  
</div>

          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

