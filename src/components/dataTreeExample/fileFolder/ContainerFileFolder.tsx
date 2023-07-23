import { useRecoilState, useRecoilValue } from 'recoil';
import { childFamily, selectedAtom } from '../atoms';

const ContainerFileFolder = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const item = useRecoilValue(childFamily(id));
  if (!item) return null;
  return (
    <div
      onClick={() => {
        if (item.type === 'file') {
          setSelected((prevSelected) => ({
            file: id,
            folder: prevSelected?.folder,
          }));
        } else {
          setSelected({ file: null, folder: id });
        }
      }}
      className={`${
        selected?.file == id
          ? 'bg-gray-700/10 dark:bg-gray-400/10 border border-blue-500/50 rounded-sm '
          : selected?.folder == id
          ? ' border-l-blue-600/50  dark:bg-gray-500/10 dark:border-l-green-500  '
          : ''
      } px-1 pb-[1px] border-l-[2px]  cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default ContainerFileFolder;
