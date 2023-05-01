import Form from '@/components/form';
import Message from '@/components/message';
import { useMessages } from '@/hooks/store';
import { Message as MessageType } from '@/hooks/types';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect } from 'react';

async function requestMessage(request: MessageType) {
  if (request.sender == 'me') {
    //we need to ask chagpt with this prompt message
    console.log(
      'we need to ask chagpt with this prompt message🐱‍🏍🐱‍🏍',
      `''` + request.message + `''`,
    );
    // return fetch(...).then(res=>res)
  }
}
function Home(props: GetServerSideProps) {
  useEffect(() => {
    axios.get('/api/chatgpt').then((res) => {
      console.log(res.data);
    });
  }, []);
  // console.log(props);
  const { messages, setMessages } = useMessages();
  const onSubmit = useCallback((msg: MessageType) => {
    setMessages(msg);
    requestMessage(msg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
export async function getServerSideProps() {
  return {
    props: {
      response: 'Hello',
    },
  };
}

export default Home;
