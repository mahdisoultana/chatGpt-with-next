import { Message } from '@/hooks/types';
import { useRef } from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { useReactMediaRecorder } from 'react-media-recorder';

function ButtonRecorder({ onSubmit }: { onSubmit: (msg: Message) => void }) {
  const urlRef = useRef('');
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    askPermissionOnMount: true,
    onStop(blobUrl) {
      if (
        typeof blobUrl == 'string' &&
        blobUrl.length > 0 &&
        blobUrl !== urlRef.current
      ) {
        onSubmit({
          message: blobUrl,
          type: 'audio',
          sender: 'me',
        });
        urlRef.current = blobUrl;
        const audio = new Audio(blobUrl);
        console.log(audio);
      }
    },
  });
  // return (
  //   <ReactMediaRecorder
  //     audio
  //     render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
  //       if (
  //         typeof mediaBlobUrl == 'string' &&
  //         mediaBlobUrl.length > 0 &&
  //         mediaBlobUrl !== urlRef.current
  //       ) {
  //         onSubmit({
  //           message: mediaBlobUrl,
  //           type: 'audio',
  //           sender: 'me',
  //         });
  //         urlRef.current = mediaBlobUrl;
  //         const audio = new Audio(mediaBlobUrl);
  //         console.log(audio);
  //       }
  return (
    <>
      <button
        className={` w-full h-full  rounded-full flex-shrink-0 flex items-center justify-center   ${
          status == 'recording' && 'animate-pulse'
        }`}
        onClick={() => {
          if (status == 'recording') {
            stopRecording();
          } else {
            startRecording();
          }
        }}
      >
        <BsFillMicFill className=" text-3xl text-blue-500 " />
      </button>
    </>
  );
  //     }}
  //   />
  // );
}

export default ButtonRecorder;
