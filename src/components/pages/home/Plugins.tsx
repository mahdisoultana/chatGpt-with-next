import {
  VscAccount,
  VscDebugAltSmall,
  VscExtensions,
  VscFiles,
  VscSettingsGear,
} from 'react-icons/vsc';
function Plugins() {
  return (
    <main className="w-[40px] pb-2 bg-[#181C26] min-h-[94vh] flex flex-col">
      <span className="h-12 w-10 border-l-[#d4dded] border-l-2 flex cursor-pointer justify-center items-center">
        <VscFiles size="22" />
      </span>
      <span className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center">
        <VscDebugAltSmall size="25" />
      </span>
      <span className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center">
        <VscExtensions size="22" />
      </span>
      <span className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center mt-auto">
        <VscAccount size="22" />
      </span>
      <span className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center ">
        <VscSettingsGear size="22" />
      </span>
    </main>
  );
}

export default Plugins;
