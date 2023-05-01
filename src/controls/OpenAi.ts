const axios = require('axios');

const apiKey = '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';

async function generateText(message: string) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: message,
        max_tokens: 50,
        n: 1,
        stop: ['\n'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}

export default generateText;
