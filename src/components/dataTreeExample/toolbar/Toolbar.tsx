import Arrow from '@/components/shared/Arror';
import { produce } from 'immer';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { HiOutlineFolderPlus } from 'react-icons/hi2';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { TiDocumentDelete } from 'react-icons/ti';
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { v4 } from 'uuid';
import {
  Child,
  allowedCreate,
  childFamily,
  selectedAtom,
  selectedFolder,
} from '../atoms';

function Toolbar() {
  const [state, setOpenFolder] = useRecoilState(selectedFolder);
  const setSelected = useSetRecoilState(selectedAtom);
  const [allowedCreateBool, setAllowedCreate] = useRecoilState(allowedCreate);
  // setSelected folder or file when create to do tomorrow 7/14/2023
  const callback = useRecoilCallback(
    ({ set }) =>
      (item: Child, { id, type }: { id: string; type: 'file' | 'folder' }) => {
        if (allowedCreateBool) {
          set(childFamily(item.id), item);

          set(childFamily(id), {
            parent: item.id,
            name: `rename ${type}`,
            id,
            children: [],
            type,
          });
          setAllowedCreate(false);
          if (item.type === 'folder') {
            setSelected({ file: null, folder: id });
          } else {
            setSelected((prevSelected) => ({
              file: id,
              folder: prevSelected?.folder,
            }));
          }
        }
      },
  );
  if (!state) return null;

  const { folder: selectedF, isOpen } = state;

  const createFolder = (type: 'file' | 'folder') => {
    if (selectedF.name == 'loading...') return;

    const id = v4();

    const newFileFolder = produce(selectedF, (draft) => {
      let children = draft.children;
      if (children == null) {
        draft.children = [
          {
            parent: selectedF.id,
            id,
            children: null,
            name: `rename ${type}`,
          },
        ];
      } else {
        draft.children = [
          ...children,
          {
            parent: selectedF.id,
            id,
            children: null,
            name: `rename ${type}`,
          },
        ];
      }
    });

    // console.log({ newFileFolder });
    setOpenFolder();
    callback(newFileFolder, { id, type });
  };
  return (
    <article className="flex justify-between items-center  border   bg-gray-300/20   border-blue-500/50 pl-3 cursor-pointer     pr-2 py-1 mb-1">
      <div className="ml-2 relative">
        <Arrow isOpen={false} className="text-sm -top-[1px] -left-4" />
        <p className="text-[8px] font-extrabold tracking-wider uppercase">
          ChatGPT-With-Next
        </p>
      </div>
      <div className="  flex items-center justify-end ">
        <div
          title={`rename  `}
          className=" cursor-pointer   flex items-center justify-center hover:opacity-50 pl-1"
        >
          <MdDriveFileRenameOutline />
        </div>
        <DeleteIcon />
        <div
          title=" add file"
          className=" cursor-pointer    flex items-center justify-center hover:opacity-50 pl-1"
          onClick={() => createFolder('file')}
        >
          <BsFileEarmarkPlus size="13" />
        </div>
        <div
          title=" add folder"
          className=" cursor-pointer     flex items-center justify-center hover:opacity-50 pl-1"
          onClick={() => createFolder('folder')}
        >
          <HiOutlineFolderPlus />
        </div>
      </div>
    </article>
  );
}
const DeleteIcon = () => {
  const [selectedState, setSelected] = useRecoilState(selectedAtom);
  let selected: string = '';
  if (selectedState?.file) {
    selected = selectedState?.file;
  } else {
    if (selectedState?.folder) {
      selected = selectedState?.folder;
    }
  }

  const value = useRecoilValue(childFamily(selected));
  const parentValue = useRecoilValue(childFamily(value?.parent || ''));
  if (!value) return null;
  console.log({ parentValue });
  return (
    <div
      title="delete"
      className=" cursor-pointer   flex items-center justify-center hover:opacity-50 pl-1"
    >
      <TiDocumentDelete />
    </div>
  );
};

export default Toolbar;
