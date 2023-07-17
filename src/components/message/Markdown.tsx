import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

function Markdown({ children }: { children: string }) {
  const [b, setB] = useState(false);
  useEffect(() => {
    setB(true);
  }, []);
  return b ? (
    <ReactMarkdown
      className="w-full prose prose-yellow prose-pre:bg-slate-600 prose-pre:text-slate-100 text-white"
      rehypePlugins={[rehypeHighlight]}
    >
      {children}
    </ReactMarkdown>
  ) : null;
}

export default Markdown;
