interface WeightStorage {
  [key: string]: number[]
}

interface IterStorage{
  [key: string]: number
}

class TrainingLog{
  //initial weights for the neurons
  private startWeights: WeightStorage 

  //end weights for the neurons
  private endWeights: WeightStorage 

  //store the iterations
  private iterations: IterStorage

  constructor(){
    this.startWeights = {}
    this.endWeights = {}
    this.iterations = {}
  }

  public setStartWeights(values: WeightStorage){
    this.startWeights = values
  }

  public setEndWeights(values: WeightStorage){
    this.endWeights = values
  }

  public setIterations(values: IterStorage){
    this.iterations = values
  }

  public getIterations(){
    return this.iterations
  }

  public getStartWeights(){
    return this.startWeights
  }

  public getEndWeights(){
    return this.endWeights
  }
}

export default TrainingLog
