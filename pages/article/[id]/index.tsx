import { GetServerSideProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { Article } from '../../../types';

type Props = {
  article: Article;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const Article: NextPage<Props> = ({ article }) => {
  return <div>This is article {article.id}</div>;
};

export const getServerSideProps: GetServerSideProps<
  Props,
  Params
> = async context => {
  const { id } = context.params as Params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const article: Article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default Article;
