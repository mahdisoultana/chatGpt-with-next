import Form from '@/components/form';
import Message from '@/components/message';
import { useMessages } from '@/hooks/store';
import { Message as MessageType } from '@/hooks/types';
import { useCallback } from 'react';

function Home() {
  const { messages, setMessages } = useMessages();
  const onSubmit = useCallback((msg: MessageType) => {
    setMessages(msg);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center text-white">
      <article className="relative max-w-xl w-full min-h-screen rounded  m-auto py-6 px-2 space-y-4 pb-24">
        {messages.map((item, i) => (
          <Message i={i} item={item} key={i} />
        ))}
        <Form onSubmit={onSubmit} />
      </article>
    </div>
  );
}

export default Home;
