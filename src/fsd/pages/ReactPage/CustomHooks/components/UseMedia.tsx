import CodeComponent from '@/fsd/shared/ui/CodeComponent/CodeComponent';

const UseMedia = () => {
  const codeText = `
  import { useEffect, useState } from 'react';

  const isBrowser = typeof window !== 'undefined';

  const getInitialState = (query: string, defaultState?: boolean) => {
    if (defaultState !== undefined) {
      return defaultState;
    }

    if (isBrowser) {
      return window.matchMedia(query).matches;
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '"useMedia" When server side rendering, defaultState should be defined to prevent a hydration mismatches.'
      );
    }

    return false;
  };

  const useMedia = (query: string, defaultState?: boolean) => {
    const [state, setState] = useState(getInitialState(query, defaultState));

    useEffect(() => {
      let mounted = true;
      const mql = window.matchMedia(query);
      const onChange = () => {
        if (!mounted) {
          return;
        }
        setState(!!mql.matches);
      };

      mql.addEventListener('change', onChange);
      setState(mql.matches);

      return () => {
        mounted = false;
        mql.removeEventListener('change', onChange);
      };
    }, [query]);

    return state;
  };

  export default useMedia;
  `;
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-center">useMedia</h2>
      <div className="max-w-[767px] mb-6 mt-2 mx-auto">
        <CodeComponent code={codeText} language="typescript" />
      </div>
    </div>
  );
};

export default UseMedia;
