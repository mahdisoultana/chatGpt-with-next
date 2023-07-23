import { Message } from '@/hooks/types';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import Slide from '../animation/Slide';
const ButtonRecorder = dynamic(() => import('@/components/ButtonRecorder'), {
  ssr: false,
});

function Form({
  onSubmit,
  className = '',
}: {
  className: string;
  onSubmit: (msg: Message) => void;
}) {
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
      className={`${className} h-[40px] w-full flex items-center rounded overflow-hidden`}
    >
      <input
        className="w-full outline-none  h-full  bg-transparent   p-4 py-1 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative w-[40px] h-[40px] flex-shrink-0">
        <AnimatePresence>
          {text.length > 0 ? (
            <Slide key={1}>
              <button className="w-full h-full  flex items-center justify-center text-teal-400 text-lg">
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
