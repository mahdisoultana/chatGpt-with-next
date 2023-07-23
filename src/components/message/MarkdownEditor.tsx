import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'; // Choose your preferred syntax highlighting style
import { toast } from 'react-toastify';
function MarkdownEditor({ children }: { children: string }) {
  const [b, setB] = useState(false);

  useEffect(() => {
    setB(true);
  }, []);

  const options = {
    overrides: {
      code: {
        component: CodeBlockRenderer,
      },
    },
  };

  return b ? (
    <Markdown
      className="w-full prose-sm  prose-pre:mt-0  prose-pre:pt-0 prose-code:mt-0"
      options={options}
    >
      {children}
    </Markdown>
  ) : null;
}

export default MarkdownEditor;
const CodeBlockRenderer = ({
  className,
  children,
}: {
  className: string;
  children: string;
}) => {
  const language = className?.replace('lang-', '');
  const [added, setAdded] = useState(true);
  const handleClick = () => {
    setAdded((s) => !s);
    toast(
      <p className="font-light">
        <code
          className={`relative  text-[10px] w-full block bg-gray-800 p-2 rounded-sm border ${
            added ? 'border-green-500/50' : 'border-red-500/50'
          } `}
        >
          {`${
            children.length > 10 ? `${children.slice(0, 30)}.... ` : children
          } `}
          <span className="absolute top-0 right-0 text-[8px] p-1 bg-gray-700 rounded">
            {'<code/>'}
          </span>
        </code>
        <span className="block mt-2 text-sm font-light">
          {added ? 'added' : 'removed'}! 👍
        </span>
      </p>,
      {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      },
    );
  };
  return (
    <div className="relative">
      {/* {added ? (
        <button
          onClick={handleClick}
          className="p-1  absolute top-1 right-1 rounded-full bg-green-500 hover:bg-red-500"
        >
          <FaPlus size="10" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="p-1  absolute top-1 right-1 rounded-full bg-red-500 hover:bg-green-500 "
        >
          <FaMinus size="10" />
        </button>
      )} */}
      <SyntaxHighlighter language={language} style={atomDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
