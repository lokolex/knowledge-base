'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  solarizedDark,
  shadesOfPurple,
  solarizedLight,
  rainbow,
  vs2015,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from 'next-themes';

interface ICodeComponentsProps {
  code: string | string[];
  language: 'typescript' | 'htmlbars' | 'php' | 'javascript' | 'css' | 'scss' | 'bash' | 'shell';
}

const CodeComponent = (props: ICodeComponentsProps) => {
  const { code, language } = props;
  const { theme } = useTheme();
  const style =
    theme === 'light' ? solarizedLight : theme === 'purple' ? shadesOfPurple : solarizedDark;

  return (
    <SyntaxHighlighter language={language} style={style}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;
