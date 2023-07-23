import Arrow from '@/components/shared/Arror';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';
import { BsFileEarmarkPlus } from 'react-icons/bs';

function OpenEditor() {
  return (
    <article className="flex justify-between items-center  border py-1  bg-gray-300/10   border-blue-500/0 pl-3 cursor-pointer   border-t-transparent">
      <div className="ml-2 relative">
        <Arrow isOpen={true} className="text-sm -top-[1px] -left-4" />
        <p className="text-[8px] font-extrabold tracking-wider uppercase">
          Open Editor
        </p>
      </div>
      <div className="  flex items-center justify-end   pr-2 ">
        <div
          title=" add file"
          className=" cursor-pointer    flex items-center justify-center hover:opacity-50 pl-1"
          //  onClick={() => createFolder('file')}
        >
          <BsFileEarmarkPlus size="13" />
        </div>
        <div
          title="save all"
          className=" cursor-pointer     flex items-center justify-center hover:opacity-50 pl-1"
          //  onClick={() => createFolder('folder')}
        >
          <BiSave />
        </div>
        <div
          title="save all"
          className=" cursor-pointer     flex items-center justify-center hover:opacity-50 pl-1"
          //  onClick={() => createFolder('folder')}
        >
          <AiOutlineCloseSquare />
        </div>
      </div>
    </article>
  );
}

export default OpenEditor;
