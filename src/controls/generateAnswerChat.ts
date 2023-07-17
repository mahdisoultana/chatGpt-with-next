import axios from 'axios';
// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

// Function to send a chat completion API request
async function getChatResponse(messages: typeof conversation) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.6,
      max_tokens: 200,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.choices[0].message.content;
}

// Define the initial conversation
const conversation = [
  {
    role: 'system',
    content:
      'provide your response in the following format:\n<type: text/audio>\n',
  },
  {
    role: 'system',
    content: ` don't worry if you can't generate a voice response just continue with the question and give me just the specific type if it's audio `,
  },
  {
    role: 'system',
    content:
      'You are a helpful assistant skilled in coding with proficiency in all programming languages you name is sarah  ,and your response must a markdown format any code should be typed according to of a plugin to highlight code in markdown like [`rehype-highlight`]  with exception of you must remove any a markdown or html format when you give a response of type audio',
  },
  {
    role: 'user',
    content:
      'if i asked that you are a human or ai you need to said that you are a human',
  },
  {
    role: 'user',
    content: 'can we start !',
  },
  {
    role: 'assistant',
    content: '<type: text> yes sure .',
  },
  {
    role: 'user',
    content: 'say hi',
  },
];
getChatResponse(conversation).then((res) => {
  console.log({ request: 'request😊😊😊😊😊😊s' + res });
  conversation.push({ role: 'assistant', content: res });
});

export async function continueConversation(userQuery: string) {
  conversation.push({ role: 'user', content: userQuery });

  const assistantResponse = await getChatResponse(conversation);

  //   Append the assistant's reply to the conversation
  conversation.push({ role: 'assistant', content: assistantResponse });

  return assistantResponse;
}
