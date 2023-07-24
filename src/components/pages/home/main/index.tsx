import MarkdownData from '@/components/message/MarkdownEditor';
import { dummyCode } from '@/dummy';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { chatIsOpen } from '../../atoms/home';
function Main() {
  const [isOpen, setOpen] = useRecoilState(chatIsOpen);
  return (
    <div className="w-full h-[calc(100vh-35px)] overflow-auto relative  ">
      <MarkdownData>{'```jsx ' + dummyCode + '```'}</MarkdownData>
      {!isOpen && (
        <span
          onClick={() => setOpen(true)}
          className="rounded-full w-10 h-10 border-2  z-[90] hover:border-2 hover:border-green-300 fixed top-10 right-4 overflow-hidden hover:scale-110 cursor-pointer"
        >
          <Image src="/jane.jpg" width="100" height="100" alt="jane agent" />
        </span>
      )}
    </div>
  );
}

export default Main;
