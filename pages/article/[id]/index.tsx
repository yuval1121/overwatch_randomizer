import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import type { ParsedUrlQuery } from 'querystring';
import { Article } from '../../../types';

type Props = {
  article: Article;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const { id } = context.params as Params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const article: Article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles: Article[] = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getServerSideProps: GetServerSideProps<
//   Props,
//   Params
// > = async context => {
//   const { id } = context.params as Params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   const article: Article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export default Article;
