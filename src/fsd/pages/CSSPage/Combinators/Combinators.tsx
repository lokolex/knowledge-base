import CombinatorsPoint from './components/CombinatorsPoint';

import { combinatorsData } from './data';

interface ICombinatorsProps {
  title: string;
}

export default function Combinators(props: ICombinatorsProps) {
  const { title } = props;
  return (
    <div className="mt-6">
      <h1 className="text-center font-bold text-2xl mb-10 md:text-4xl">{title}</h1>
      {combinatorsData.map((point) => (
        <CombinatorsPoint key={point.title} {...point} />
      ))}
    </div>
  );
}
