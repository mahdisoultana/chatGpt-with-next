import { useSpeech } from '@/context/ContextProvider';
import { Message } from '@/hooks/types';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { useReactMediaRecorder } from 'react-media-recorder';
function ButtonRecorder({ onSubmit }: { onSubmit: (msg: Message) => void }) {
  const urlRef = useRef('');
  const MsgRef = useRef('');
  const { startListening, stopListening, listening, transcript } = useSpeech();

  React.useEffect(() => {
    if (listening) {
      MsgRef.current = transcript;
    } else {
      MsgRef.current = '';
    }
  }, [transcript]);
  console.log(MsgRef.current);
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,

    onStart: () => {
      MsgRef.current = '';
      startListening();
    },
    onStop(blobUrl) {
      if (
        typeof blobUrl == 'string' &&
        blobUrl.length > 0 &&
        blobUrl !== urlRef.current
      ) {
        onSubmit({
          message: blobUrl,
          transcript: MsgRef.current,
          type: 'audio',
          sender: 'me',
        });
        stopListening();
        urlRef.current = blobUrl;
      }
    },
  });

  return (
    <>
      <button
        type="button"
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
        {status == 'recording' ? (
          <div className="fixed top-0 left-0 bg-black/60 w-full h-full flex items-center justify-center">
            {[-1, 3].map((i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [1, 0.1],
                  scale: [0.5, 2],
                  transition: {
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  },
                }}
                className="absolute w-[100px] h-[100px] bg-gray-500/20  rounded-full  "
              ></motion.span>
            ))}
            <motion.div layoutId="recIcon">
              <BsFillMicFill className=" text-[6rem] text-green-600 animate-pulse " />
            </motion.div>
          </div>
        ) : (
          <motion.div layoutId="recIcon">
            <BsFillMicFill className=" text-xl text-sky-500 " />
          </motion.div>
        )}
      </button>
    </>
  );
}

export default ButtonRecorder;
