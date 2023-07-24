import { IoGitBranchOutline } from 'react-icons/io5';
import {
  VscAccount,
  VscDebugAltSmall,
  VscExtensions,
  VscFiles,
  VscSettingsGear,
} from 'react-icons/vsc';
import { Tooltip } from 'react-tooltip';
function Plugins() {
  return (
    <main className="w-[40px] pb-2 bg-[#181C26] h-[95vh] flex flex-col">
      <span
        id="files"
        className="h-12 w-10 border-l-[#d4dded] border-l-2 flex cursor-pointer justify-center items-center"
      >
        <VscFiles size="22" />
      </span>

      <span
        id="git"
        className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center"
      >
        <IoGitBranchOutline size="28" />
      </span>
      <span
        id="debug"
        className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center"
      >
        <VscDebugAltSmall size="25" />
      </span>
      <span
        id="extension"
        className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center"
      >
        <VscExtensions size="22" />
      </span>
      <span
        id="account"
        className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center mt-auto"
      >
        <VscAccount size="22" />
      </span>
      <span
        id="settings"
        className="h-12 w-10   text-gray-700 hover:text-gray-200 cursor-pointer  flex justify-center items-center "
      >
        <VscSettingsGear size="22" />
      </span>
      {['files', 'git', 'debug', 'extension', 'account', 'settings'].map(
        (i) => (
          <Tooltip
            anchorId={i}
            place="right"
            content={i}
            className="text-[9px] capitalize text-gray-100 h-[20px] shadow-black shadow bg-gray-900 opacity-1  flex justify-center items-center w-12 z-[1000] "
          />
        ),
      )}
    </main>
  );
}

export default Plugins;
