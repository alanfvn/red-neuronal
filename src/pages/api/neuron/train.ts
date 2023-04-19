import { NextApiRequest, NextApiResponse } from "next"
import { doTraining } from "../util/neuron_man";
import TrainingLog from "../util/models/tlog";

let isTrained = false;
let log: TrainingLog;

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  if(!isTrained){
    log = doTraining()
    isTrained = true;
  }
  res.status(200).json(log)
}
