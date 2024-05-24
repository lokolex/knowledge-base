import CodeComponent from '@/fsd/shared/ui/CodeComponent/CodeComponent';

const UseFirstRender = () => {
  const codeText = `
  import { useEffect, useRef } from 'react';

  export const useFirstRender = () => {
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
      isFirstRender.current = false;

      return () => {
        isFirstRender.current = true;
      };
    }, []);

    return isFirstRender.current;
  };
  `;
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-center">useFirstRender</h2>
      <div className="max-w-[767px] mb-6 mt-2 mx-auto">
        <CodeComponent code={codeText} language="typescript" />
      </div>
    </div>
  );
};

export default UseFirstRender;
