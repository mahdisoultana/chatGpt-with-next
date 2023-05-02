import generateText from '@/controls/OpenAi';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const resData = await generateText();
  // console.log({ data });
  res.status(200).json({ message: resData?.data });
}
