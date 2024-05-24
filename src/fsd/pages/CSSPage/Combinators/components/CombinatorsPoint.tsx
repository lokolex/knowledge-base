import { combinatorsData } from '../data';
import CodeComponent from '@/fsd/shared/ui/CodeComponent/CodeComponent';

type Keys = keyof (typeof combinatorsData)[0];

interface ICombinatorspointProps extends Record<Keys, string> {}

const CombinatorsPoint = (props: ICombinatorspointProps) => {
  const { cssCode, htmlCode, text1, text2, title } = props;
  return (
    <div className="mt-7">
      <h2 className="text-2xl text-center mb-2">{title}</h2>
      <p>{text1}</p>
      <div className="mt-3">
        <CodeComponent language="htmlbars" code={htmlCode} />
      </div>
      <div className="mt-3">
        <CodeComponent language="css" code={cssCode} />
      </div>
      <p className="mt-2">{text2}</p>
    </div>
  );
};

export default CombinatorsPoint;
