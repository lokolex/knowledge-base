import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { combinatorsData } from '../data';

type Keys = keyof (typeof combinatorsData)[0];

interface ICombinatorspointProps extends Record<Keys, string> {}

const CombinatorsPoint = (props: ICombinatorspointProps) => {
  const { cssCode, htmlCode, text1, text2, title } = props;
  return (
    <div className="mt-7">
      <h2 className="text-2xl text-center mb-2">{title}</h2>
      <p>{text1}</p>
      <div className="max-w-[600px] mt-3">
        <SyntaxHighlighter language="htmlbars" style={ocean}>
          {htmlCode}
        </SyntaxHighlighter>
      </div>
      <div className="max-w-[600px] mt-3">
        <SyntaxHighlighter language="css" style={ocean}>
          {cssCode}
        </SyntaxHighlighter>
      </div>
      <p className="mt-2">{text2}</p>
    </div>
  );
};

export default CombinatorsPoint;
