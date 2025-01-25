import { NextApiRequest, NextApiResponse } from 'next';


// Fetches two random numbers and returns their sum
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;

  // Construct the absolute URL for endpoint2
  const server = `${protocol}://${host}`

  const url = `${server}/api/random`

  const [random1, random2] = await Promise.all([
    fetch(url).then((res) => res.json()).then((data) => data.randomNumber),
    fetch(url).then((res) => res.json()).then((data) => data.randomNumber)
  ]);
  console.log(random1, random2);
  res.status(200).json({ sum: random1 + random2 });
}