// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileContents = await fs.readFile(jsonDirectory + '/heroes.json');
  const data = JSON.parse(fileContents.toString());
  res.status(200).json(data);
}
