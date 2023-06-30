import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import dotenv from 'dotenv';
import generateVoice from '@/controls/generateVoice';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_BASE_URL = 'https://api.openai.com/v1/engines';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { message, type } = req.body;
  console.log({ message });
  try {
    if (type == 'audio') {
      const voiceResponse = await generateVoice('Hey Mahdi how are you ?');
      //@ts-ignore

      res.status(200).json({ type, message: voiceResponse });
    }

    if (type == 'text') {
      res.status(200).json({ type, message });
    }
  } catch (error) {
    console.log({ error });
  }
  // try {
  //   const response = await axios.post(
  //     `${API_BASE_URL}/text-davinci-003/completions`,
  //     {
  //       prompt: message,
  //       max_tokens: 50,
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${OPENAI_API_KEY}`,
  //       },
  //     },
  //   );

  //   const answer = response.data.choices[0].text.trim();
  //   res.status(200).json({ answer });
  // } catch (error) {
  //   console.error('Error:', error);
  //   res.status(500).json({ error: 'An error occurred' });
  // }
}
