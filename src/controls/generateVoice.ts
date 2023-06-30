import axios from 'axios';
const ELEVEN_LAB_API_KEY = process.env.ELEVEN_LAB_API_KEY;

async function generateVoice(message: string) {
  try {
    // Set the API key for ElevenLabs API.
    // Do not use directly. Use environment variables.
    const API_KEY = ELEVEN_LAB_API_KEY;
    // Set the ID of the voice to be used.
    const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

    // Set options for the API request.

    const options = {
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      headers: {
        accept: 'audio/mpeg', // Set the expected response type to audio/mpeg.
        'content-type': 'application/json', // Set the content type to application/json.
        'xi-api-key': `${API_KEY}`, // Set the API key in the headers.
      },
      data: {
        text: message, // Pass in the inputText as the text to be converted to speech.
      },
      responseType: 'arraybuffer', // Set the responseType to arraybuffer to receive binary data as response.
    };

    // Send the API request using Axios and wait for the response.
    //@ts-ignore
    const speechDetails = await axios.request(options);

    // Return the binary audio data received from the API response.

    return speechDetails.data;
  } catch (error) {
    console.log({ error });
  }
}

export default generateVoice;
