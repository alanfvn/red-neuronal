import { NextApiRequest, NextApiResponse } from "next"
import { predictOr, predictAnd} from "../util/neuron_man";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { or_1, or_2, and_1, and_2},
  } = req;

  const or1 = Number(or_1)
  const or2 = Number(or_2)
  const and1 = Number(and_1)
  const and2 = Number(and_2)

  if(![or1, or2, and1, and2].every(x=> x==1 || x==0)){
    res.status(400).json({"error": "Invalid input values"})
    return
  }

  const prediction_or = predictOr(or1, or2)
  const prediction_and = predictAnd(and1, and2)

  res.status(200).json({
    prediction_or,
    prediction_and
  })
}
