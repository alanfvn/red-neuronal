import Head from "next/head";
import { FormEvent, useState } from "react";

export default function Home({data}: any){

  const [input, setInput] = useState({
    "or_1": null,"or_2": null,
    "and_1": null,"and_2": null,
    "or_r": null, "and_r": null
  })

  const sw = data.startWeights
  const ew = data.endWeights
  const iter = data.iterations

  const text = `
==================
Datos neurona "OR"
==================

Pesos iniciales = ${sw["or"]}
Pesos finales = ${ew["or"]}
Cantidad de iteraciones = ${iter["or"]}

==================
Datos neurona "AND"
==================

Pesos iniciales = ${sw["and"]}
Pesos finales = ${ew["and"]}
Cantidad de iteraciones = ${iter["and"]}
`


  const handleInput = (e: any) =>{
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const {or_1, or_2, and_1, and_2} = input
    const good = [or_1, or_2, and_1, and_2].every(x => x == "0" || x == "1")

    if(!good){
      alert('Por favor verifica los valores')
      return 
    }else{
      return
    }

    const resp = await fetch(`http://localhost:3000/api/neuron/train`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})

    const value = await resp.json()
  }


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
              <h2 className="font-bold mb-3">Log</h2>
              <textarea 
                disabled={true} 
                value={text}
                className="resize-none w-4/5 h-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
          </div>

          <div className="w-2/4">
            {/* este div es para el calculo de redes neuronales */}
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <div className="mb-3">
                  <label className="font-bold">Cálculo AND</label>
                </div>
                <div className="flex flex-col w-3/4 gap-3">

                  <input 
                    name="or_1"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Primer valor" 
                    required={true} 
                    maxLength={1}
                    onChange={handleInput}
                  />

                  <input 
                    name="or_2"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Segundo valor" 
                    required={true} 
                    maxLength={1}
                    onChange={handleInput}
                  />

                  <input 
                    disabled={true}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={input["or_r"] ?? "-"}
                  />

                </div>
              </div>

              <div className="mb-5">
                <div className="mb-3">
                  <label className="font-bold">Cálculo AND</label>
                </div>
                <div className="flex flex-col w-3/4 gap-3">
                  <input 
                    name="and_1"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Primer valor" 
                    required={true} 
                    maxLength={1}
                    onChange={handleInput}
                  />

                  <input 
                    name="and_2"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Segundo valor" 
                    required={true} 
                    maxLength={1}
                    onChange={handleInput}
                  />

                  <input 
                    disabled={true}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    required={true} 
                    value={input["and_r"] ?? "-"}
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
  )
}

export async function getServerSideProps(context: any) {

  const resp = await fetch(`http://localhost:3000/api/neuron/train`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  const data = await resp.json()
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}
