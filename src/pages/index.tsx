import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redes neuronales</title>
      </Head>
      <main className="flex flex-col h-screen">
        <h1 className="text-center text-3xl font-bold underline italic mt-5">
          Redes Neuronales
        </h1>
        <article className="flex flex-row justify-center mt-10">

          <div className="w-2/4">
            {/* este div es para el log */}
            <div className="flex flex-col items-center h-5/6">
              <h2 className="font-bold mb-3">Mensajes</h2>
              <textarea disabled={true} 
                className="resize-none w-4/5 h-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
          </div>

          <div className="w-2/4">
            {/* este div es para el calculo de redes neuronales */}
            <form>
              <div className="mb-5">
                <div className="mb-3">
                  <label className="font-bold">Cálculo AND</label>
                </div>
                <div className="flex flex-col w-3/4 gap-3">

                  <input 
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Primer valor" 
                    required={true} 
                    maxLength={1}
                  />

                  <input 
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Segundo valor" 
                    required={true} 
                    maxLength={1}
                  />

                  <input 
                    disabled={true}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  />

                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3">
                  <label className="font-bold">Cálculo AND</label>
                </div>
                <div className="flex flex-col w-3/4 gap-3">
                  <input 
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Primer valor" 
                    required={true} 
                    maxLength={1}
                  />

                  <input 
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Segundo valor" 
                    required={true} 
                    maxLength={1}
                  />

                  <input 
                    disabled={true}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    required={true} 
                  />
                </div>

              </div>
              <div className="flex mt-5 w-full">
                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4"/>
              </div>
            </form>
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
