import { useEffect, useState } from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { ReactMediaRecorder } from 'react-media-recorder';

function ButtonRecorder() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
        if (mediaBlobUrl) {
          // Assuming you have a Blob object called "audioBlob"

          // Create an audio element with the Blob URL as the source
          const audio = new Audio(mediaBlobUrl);
          console.log(audio, mediaBlobUrl);
        }
        return (
          <>
            <button
              className={` w-[60px] h-[60px]  mx-2 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-tl from-blue-400 to-green-500 ${
                status == 'recording' && 'animate-pulse'
              }`}
              onClick={status == 'recording' ? stopRecording : startRecording}
            >
              <BsFillMicFill className=" text-3xl text-white " />
            </button>
          </>
        );
      }}
    />
  ) : null;
}

export default ButtonRecorder;
