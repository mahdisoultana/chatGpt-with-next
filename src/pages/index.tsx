import Form from '@/components/form';
import Message from '@/components/message';
import MessageLoading from '@/components/message/Loading';
import { useMessages } from '@/hooks/store';
import { Message as MessageType } from '@/hooks/types';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';

async function requestMessage(request: MessageType) {
  const res = await axios.post('/api/chatgpt', {
    message: request.message,
  });

  console.log(res.data);
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
      const data = await requestMessage(msg);
      setMessages({ type: 'text', message: data.response, sender: 'chatGPT' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }, []);

  return (
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
  );
}
export async function getServerSideProps() {
  return {
    props: {
      response: 'Hello',
    },
  };
}

export default Home;
