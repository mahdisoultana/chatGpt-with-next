import DataTreeExample from '@/components/dataTreeExample';
import { motion } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { chatIsOpen } from '../atoms/home';
import Plugins from './Plugins';
import AsideChat from './asideChat';
import Main from './main';

function Home() {
  return (
    <div className=" min-h-[90vh]   w-full   h-[94vh] overflow-y-auto overflow-x-hidden flex items-start   text-white  relative mt-8">
      <main className="flex w-full h-full ">
        <Plugins />
        <DataTreeExample />
        <Main />
        <AgentIconAndChat />
      </main>
    </div>
  );
}
function AgentIconAndChat() {
  const [isOpen, setOpen] = useRecoilState(chatIsOpen);
  return (
    <motion.div
      initial={{
        x: '100%',
        width: '0px',
      }}
      animate={{
        x: isOpen ? '0%' : '100%',
        width: isOpen ? '550px' : '0px',
        transition: { ease: 'linear', duration: 0.3 },
      }}
    >
      <motion.div
        style={{
          opacity: isOpen ? 1 : 0,
        }}
        className="flex-shrink-0 relative  h-full overflow-hidden z-[100] "
      >
        <span
          onClick={() => {
            setOpen(false);
          }}
          className="absolute left-4 top-0 z-[100] text-white text-3xl cursor-pointer hover:text-blue-400 hover:scale-110"
        >
          <IoCloseCircleOutline />
        </span>
        <AsideChat />
      </motion.div>
    </motion.div>
  );
}

export default Home;
