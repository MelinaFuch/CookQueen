// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {recipesData} from "../data.js";

export default function handler(req, res) {
  res.status(200).json(recipesData[1])
}
