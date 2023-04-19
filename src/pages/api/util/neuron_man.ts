import { OR_TABLE, AND_TABLE } from "./tables"
import Neuron from "./models/neuron"
import TrainingLog from "./models/tlog"
import trainNeuron from "./training"

//neurons
const orNeuron = new Neuron([1.5, 0.5, 1.5])
const andNeuron = new Neuron([])

function doTraining(){

  const cloneOr = JSON.parse(JSON.stringify(orNeuron));
  const cloneAnd = JSON.parse(JSON.stringify(andNeuron));

  const tlog = new TrainingLog()

  tlog.setStartWeights({
    "or": cloneOr.weights,
    "and": cloneAnd.weights
  })

  const iters_or = trainNeuron(OR_TABLE, orNeuron)
  const iters_and = trainNeuron(AND_TABLE, andNeuron)

  tlog.setIterations({
    "or": iters_or,
    "and": iters_and
  })

  tlog.setEndWeights({
    "or": orNeuron.getWeights(),
    "and": andNeuron.getWeights()
  })

  return tlog
}


function predictAnd(x1: number, x2: number){
  andNeuron.setInputs([1, x1, x2])
  return andNeuron.calcOut()
}

function predictOr(x1: number, x2: number){
  orNeuron.setInputs([1, x1, x2])
  return orNeuron.calcOut()
}

export {
  doTraining,
  predictAnd,
  predictOr
}
