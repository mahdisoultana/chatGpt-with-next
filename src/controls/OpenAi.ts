// import * as openai from 'openai';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// OpenAI instance creation
const openai = new OpenAIApi(configuration);

async function generateText() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci',
      prompt: 'Hi how are you today ?',
      max_tokens: 7,
      temperature: 0,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
      stop: '\n',
    });
    // console.log(response);
    return response;
  } catch (error: any) {
    console.log('errror !!!!!');
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

export default generateText;
