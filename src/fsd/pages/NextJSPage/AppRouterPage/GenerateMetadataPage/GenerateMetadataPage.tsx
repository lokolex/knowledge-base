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

const GenerateMetadataPage = () => {
  const { theme } = useTheme();
  const style =
    theme === 'light' ? solarizedLight : theme === 'purple' ? shadesOfPurple : solarizedDark;

  return (
    <div className="mt-9">
      <h1 className="text-4xl text-center mb-7">Динамические Meta Data</h1>
      <p>
        Если вы хотите использовать динамическую информацию для установки заголовка страницы и
        метаописания (например, использовать данные, полученные из API), используйте функцию{' '}
        <span className="text-pink-400">generatedMetadata()</span> :
      </p>
      <div className="max-w-[767px] mb-6 mt-2">
        <SyntaxHighlighter language="typescript" style={style}>
          {`
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params then fetch data

  // return an object
  return {
    title: blogPost.title,
    description: blogPost.description,
  };
}
          `}
        </SyntaxHighlighter>
      </div>
      <p>
        В приведенном ниже законченном и рабочем примере мы получим фиктивную публикацию в блоге по
        ее идентификатору из этого общедоступного API:
      </p>
      <div className="max-w-[767px] mb-6 mt-2">
        <SyntaxHighlighter language="php" style={style}>
          {`https://api.slingacademy.com/v1/sample-data/blog-posts/[id]`}
        </SyntaxHighlighter>
      </div>
      <p>
        Давайте посмотрим, как мы реализуем{' '}
        <span className="text-pink-400">generateMetadata()</span> функцию в действии. В app каталоге
        вашего проекта добавьте папку с именем blog-posts, затем внутри этой папки добавьте еще одну
        новую папку с именем [id]. Создайте файл с именем page.tsx внутри [id] папки.
      </p>
      <div className="max-w-[767px] mb-6 mt-2">
        <SyntaxHighlighter language="typescript" style={style}>
          {`// app/blog-posts/[id]/page.tsx

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;
  const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts/' + id;

  // fetch data
  const data = await fetch(url).then((res) => res.json());
  const blogPost = data.blog;
  console.log(blogPost);

  return {
    title: blogPost.title,
    description: blogPost.description,
  };
}

// page content
export default function Page({ params }: Props) {
  return (
    <></>
  );
}`}
        </SyntaxHighlighter>
      </div>
      <p>
        Обратите внимание, что вы не можете экспортировать metadata объект и{' '}
        <span className="text-pink-400">generateMetadata()</span> функцию из одного и того же
        сегмента маршрута.
      </p>
      <p>
        Еще одним важным моментом является то, что на страницах и макетах вы можете свободно
        получать данные там, где они используются, не беспокоясь о производительности.{' '}
        <span className="text-pink-400">Next.js</span> автоматически выполняет дедупликацию запросов
        в дереве. Например, не имеет значения, отправляете ли вы 2{' '}
        <span className="text-pink-400">GET</span> запроса к одной и той же конечной точке{' '}
        <span className="text-pink-400">API</span> в 2 файлах{' '}
        <span className="text-pink-400">layout.tsx</span> и{' '}
        <span className="text-pink-400">page.tsx</span> получаете одни и те же данные.
      </p>
    </div>
  );
};

export default GenerateMetadataPage;
