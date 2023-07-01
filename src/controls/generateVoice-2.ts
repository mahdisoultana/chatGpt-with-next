import axios from 'axios';
const ELEVEN_LAB_API_KEY = process.env.ELEVEN_LAB_API_KEY;
import fs from 'fs';
import path from 'path';

async function generateVoice(message?: string) {
  return new Promise<string>((resolve, reject) => {
    try {
      fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM`,
        {
          method: 'POST',
          body: JSON.stringify({
            text: 'great  ! ',
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.5,
            },
          }),
          headers: {
            accept: 'audio/mpeg', // Set the expected response type to audio/mpeg.
            'content-type': 'application/json', // Set the content type to application/json.
            'xi-api-key': `692ae314729fad03d54fcea566a0238a`, // Set the API key in the headers.
          },
        },
      )
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((data) => {
          const audioBlob = new Blob([data], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);

          //  setAudioData(audioUrl);
          resolve(audioUrl);
        });
    } catch (error) {
      reject(error);
      console.log({ error });
    }
  });
}

export default generateVoice;
