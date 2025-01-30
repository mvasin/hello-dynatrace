import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomNumber = Math.floor(Math.random() * 1000)
  if (randomNumber > 300) throw new Error(`The random number is ${randomNumber} I don't feel like returning a number greater than 500`)
  res.status(200).json({ randomNumber });
}