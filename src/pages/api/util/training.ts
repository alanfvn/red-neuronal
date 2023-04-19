import Neuron from "./models/neuron";

const isTrained = (arr: boolean[]) => arr.every(Boolean)

function trainNeuron(table: number[][], neuron: Neuron){
  const training = [false, false, false, false]
  let iterations = 0;

  while(!isTrained(training)){
    for(let i=0; i< table.length; i++){
      const values = table[i]
      if(values === undefined) return -1

      const x1 = values[0]
      const x2 = values[1]
      const expOut = values[2]

      if(x1 === undefined || x2 === undefined || expOut === undefined) return -1

      //we add always a 1 because thats the umbral value and 
      //is also consider a input.
      neuron.setInputs([1, x1, x2])

      let out = neuron.calcErr(expOut)
      neuron.recalcWeights(out)
      training[i] = out === 0
      iterations++;
    }
  }

  return iterations
}

export default trainNeuron
