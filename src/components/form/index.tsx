import { Message } from '@/hooks/types';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import Slide from '../animation/Slide';
const ButtonRecorder = dynamic(() => import('@/components/ButtonRecorder'), {
  ssr: false,
});

function Form({ onSubmit }: { onSubmit: (msg: Message) => void }) {
  const [text, setText] = useState('what is your name ?');

  return (
    <form
      onSubmit={(e) => {
        // console.log('clicked');
        e.preventDefault();
        if (text) {
          onSubmit({ message: text, type: 'text', sender: 'me' });
          setText('');
        }
      }}
      className="bg-gray-100 text-gray-900 h-[60px] w-full flex items-center xl:rounded-t-md overflow-hidden"
    >
      <input
        className="w-full outline-none  h-full bg-gray-100  p-4 text-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative w-[60px] h-[60px] flex-shrink-0 mr-2">
        <AnimatePresence>
          {text.length > 0 ? (
            <Slide key={1}>
              <button className="w-full h-full flex items-center justify-center text-blue-700 text-3xl">
                <IoSend />
              </button>
            </Slide>
          ) : (
            <Slide key={2}>
              <ButtonRecorder onSubmit={onSubmit} />
            </Slide>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

export default Form;
