import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

function useExtractCode(markdown: string) {
  const codeBlocks: string[] = [];
  const processor = unified().use(remarkParse);
  const ast = processor.parse(markdown);
  console.log({ processor, ast });

  visit(ast, 'code', (node) => {
    codeBlocks.push(node.value);
  });

  return codeBlocks;
}

export default useExtractCode;
