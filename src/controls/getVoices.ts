import axios from 'axios';
const ELEVEN_LAB_API_KEY = process.env.ELEVEN_LAB_API_KEY;

async function GetVoices(message?: string) {
  try {
    const res = await axios.post(`https://api.elevenlabs.io/v1/voices`, {
      headers: {
        'xi-api-key': ELEVEN_LAB_API_KEY,
        accept: 'application/json',
      },
    });
    //   console.log({ ELEVEN_LAB_API_KEY });
    console.log(res);
    return res;
  } catch (error) {
    return { error: 'error occurred while voice respond' };
  }
}

export default GetVoices;
