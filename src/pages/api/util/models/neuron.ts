class Neuron{

  private inputs: number[]
  private weights: number[]

  constructor(iweight: number[]) {
    this.inputs = []
    this.weights = iweight

    // generate random number near the umbral and with a 5% tolerance 
    if(iweight.length !== 3){
      for(let i = 0; i < 3; i++){
        let w0 = 1
        this.weights[i] = this.getRandomNear(w0, 5)
      }
    }
  }

  public setInputs(inp: number[]){
    this.inputs = inp
  }

  public getWeights(){
    return this.weights
  }

  public getRandomNear(x: number, percentRange: number){
    const min = x * (1 - percentRange / 100);
    const max = x * (1 + percentRange / 100);
    return Math.random() * (max-min) + min;
  }

  public recalcWeights(error: number){
    // dont recalculate the weights
    if(error == 0){
      return
    }
    for(let i = 0; i < this.inputs.length; i++){
      const wi = this.weights[i]
      const xi = this.inputs[i]
      if(xi === undefined || wi === undefined) throw new Error("Please check your weights or inputs!")
      this.weights[i] = wi + (error*xi)
    }
  }

  // outputs
  public calcErr(expected: number){
    const out = expected - this.calcOut()
    return out
  }

  public calcOut(){
    // y(t) = f[sum(w_i * x_i -0)]
    let sum = 0

    for(let i = 0; i < this.inputs.length; i++){
      const xi = this.inputs[i]
      const wi = this.weights[i]
      if(xi === undefined || wi === undefined) throw new Error("Please check your weights or inputs!")
      sum += xi * wi
    }
    // step function
    const stepFunc = sum >= 0 ? 1 : 0;
    return stepFunc
  }
}

export default Neuron
