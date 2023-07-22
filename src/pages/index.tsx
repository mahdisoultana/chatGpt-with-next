import Form from '@/components/form';
import Message from '@/components/message';
import MessageLoading from '@/components/message/Loading';
import AppContext from '@/context/ContextProvider';
import { useMessages } from '@/hooks/store';
import { Message as MessageType } from '@/hooks/types';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import fs from 'fs';
import { GetServerSideProps } from 'next';
import React, { useCallback, useEffect, useState } from 'react';

// directory path
const dir = 'public/audio';
async function requestMessage(request: MessageType) {
  let res = null;
  if (request.type == 'audio') {
    res = await axios.post('/api/chatgpt', {
      message: request.transcript,
      type: 'audio',
    });
  } else {
    res = await axios.post('/api/chatgpt', {
      message: request.message,
      type: 'text',
    });
  }

  // {type: 'audio', text: 'hello Matthew how are you', audio:vaule}
  return res.data;
}
async function requestMessage2(request: MessageType) {
  let res = null;
  if (request.type == 'audio') {
    res = await axios.post('/api/chat', {
      message: request.transcript,
      type: 'audio',
    });
  } else {
    res = await axios.post('/api/chat', {
      message: request.message,
      type: 'text',
    });
  }

  // {type: 'audio', text: 'hello Matthew how are you', audio:vaule}
  return res.data;
}
type StatusType = 'idle' | 'loading' | 'error' | 'success';
function Home(props: GetServerSideProps) {
  const { messages, setMessages } = useMessages();
  const containerRef = React.useRef<any>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [status]);
  const onSubmit = useCallback(async (msg: MessageType) => {
    setMessages(msg);

    try {
      setStatus('loading');

      let message = null;

      const res = await requestMessage2(msg);

      if (res.type == 'audio') {
        console.log('inside audio 😊😊😊😊');
        console.log({ res });
        message = `/audio/${res.message}`;
      } else {
        message = res.message;
      }

      setMessages({ type: res.type || 'text', message, sender: 'chatGPT' });

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }, []);

  return (
    <AppContext>
      <div className=" min-h-screen   w-full bg-gray-900  h-screen overflow-y-auto flex items-start justify-center text-white  ">
        <article className="relative max-w-md w-full h-full  rounded  ml-auto py-6 pb-0 flex flex-col justify-between ">
          <div
            className="space-y-3   px-2 max-h-[86vh] overflow-auto pb-4"
            ref={containerRef}
          >
            {messages.map((item, i) => (
              <Message i={i} item={item} key={i} />
            ))}
            <AnimatePresence>
              {status == 'loading' && <MessageLoading />}
            </AnimatePresence>
          </div>

          <div className="flex-shrink-0 pb-4">
            <Form
              onSubmit={onSubmit}
              className="bg-gray-600/50 font-light text-white focus:border-gray-100"
            />
          </div>
        </article>
      </div>
    </AppContext>
  );
}

const deleteAudioFolder = () => {
  // delete directory recursively
  fs.rmdir(dir, { recursive: true }, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`${dir} is deleted!`);
    fs.mkdir(dir, (err) => {
      console.log(`${dir} is created!`);
    });
  });
};

export async function getServerSideProps() {
  if (fs.existsSync(dir)) {
    deleteAudioFolder();
  } else {
    fs.mkdir(dir, (err) => {
      console.log(`${dir} is initialized !`);
    });
  }

  return {
    props: {
      response: 'Hello',
    },
  };
}

export default Home;
