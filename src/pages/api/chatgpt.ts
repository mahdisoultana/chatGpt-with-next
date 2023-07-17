import generateAnswer from '@/controls/generateAnswer';
import generateVoice from '@/controls/generateVoice';
import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { message, type } = req.body;
  console.log({ message });

  try {
    const answer = await generateAnswer(message);

    if (type == 'audio') {
      const file = await generateVoice(answer);

      //@ts-ignore

      res.status(200).json({ type, message: file });
    }

    if (type == 'text') {
      res.status(200).json({ type, message: answer });
    }
  } catch (error) {
    console.log({ error });
  }
}
