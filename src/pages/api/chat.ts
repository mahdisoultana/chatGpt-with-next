// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { continueConversation } from '@/controls/generateAnswerChat';
import generateVoice from '@/controls/generateVoice';
import { getResponseType, removeResponseType } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  type: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { message, type } = req.body;

  if (!(message || type)) {
    res.status(404).json({
      //@ts-ignore
      error: 'sorry you should have message or type in your request ',
    });
  }
  try {
    let answer = await continueConversation(message);

    const typeAnswer = getResponseType(answer);
    console.log({ answer }, 'answer from gpt');
    answer = removeResponseType(answer);
    if (typeAnswer == 'audio') {
      const file = await generateVoice(answer);

      //@ts-ignore

      res.status(200).json({ type: typeAnswer, message: file });
    } else {
      res.status(200).json({ type: typeAnswer, message: answer });
    }
  } catch (error) {
    //@ts-ignore
    res.status(404).json({ error });
    // console.log({ error });
  }

  // res.status(200).json({ name: 'hello chat ', resp });
}
