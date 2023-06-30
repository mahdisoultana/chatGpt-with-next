// import * as openai from 'openai';
import { Configuration, OpenAIApi } from 'openai';

import axios from 'axios';
import dotenv from 'dotenv';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_BASE_URL = 'https://api.openai.com/v1/engines';

async function generateText(message = '') {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/text-davinci-003/completions`,
      {
        prompt: message,
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      },
    );
    const answer = response.data.choices[0].text.trim();
    return answer;
  } catch (error) {
    console.error('Error:', error);

    return { error: 'An error occurred' };
  }
}

export default generateText;
