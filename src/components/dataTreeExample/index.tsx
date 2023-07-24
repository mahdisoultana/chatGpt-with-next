import Item from './Item';
import { Tree } from './atoms';
import OpenEditor from './toolbar/OpenEditor';

import Toolbar from './toolbar/Toolbar';
function DataTreeExample() {
  return (
    <main className="w-[300px] bg-gray-950 h-full flex-shrink-0">
      <OpenEditor />
      <Toolbar />
      <ul className="h-[500px]  overflow-auto">
        <Item id={'root'} parentId="root" />
      </ul>
      {/* <Selected /> */}
    </main>
  );
}
// function Selected() {
//   const selected = useRecoilValue(selectedAtom);
//   // console.log(selected);
//   return <></>;
// }
const GenerateTree = ({ tree }: { tree: Tree }) => {
  return <></>;
};

export default DataTreeExample;

// const generateTree = (): Child[] => {
//   return [...new Array(5)].map((_, i) => ({
//     id: v4(),
//     name: i + '.js',
//     children: null,
//     type: 'file',
//   }));
// };
