import fs from 'fs';
('use client');

import dynamic from 'next/dynamic';
import { RingLoader } from 'react-spinners';
const Home = dynamic(() => import('@/components/pages/home/Home'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <RingLoader color="white" />
    </div>
  ),
});
function index() {
  return <Home />;
}

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
export default index;
