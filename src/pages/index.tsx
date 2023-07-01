import Form from '@/components/form';
import Message from '@/components/message';
import MessageLoading from '@/components/message/Loading';
import AppContext from '@/context/ContextProvider';
import { useMessages } from '@/hooks/store';
import { Message as MessageType } from '@/hooks/types';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';

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
type StatusType = 'idle' | 'loading' | 'error' | 'success';
function Home(props: GetServerSideProps) {
  const { messages, setMessages } = useMessages();

  const [status, setStatus] = useState<StatusType>('idle');

  const onSubmit = useCallback(async (msg: MessageType) => {
    setMessages(msg);

    try {
      setStatus('loading');

      let message = null;

      console.log(msg);
      if (msg.type == 'audio') {
        const res = await requestMessage(msg);

        console.log({ res });
        message = `/audio/${res.message}`;
      } else {
        message = 'hello world';
      }

      setMessages({ type: msg.type, message, sender: 'chatGPT' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }, []);

  return (
    <AppContext>
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center text-white">
        <article className="relative max-w-xl w-full min-h-screen rounded  m-auto py-6 px-2 space-y-2 pb-24">
          {messages.map((item, i) => (
            <Message i={i} item={item} key={i} />
          ))}

          <AnimatePresence>
            {status == 'loading' && <MessageLoading />}
          </AnimatePresence>
          <Form onSubmit={onSubmit} />
        </article>
      </div>
    </AppContext>
  );
}
import fs from 'fs';
import path from 'path';

// directory path
const dir = 'public/audio';

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
