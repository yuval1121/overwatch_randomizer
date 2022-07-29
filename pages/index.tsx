import type { GetStaticProps, NextPage } from 'next';
import ArticleList from '../components/ArticleList';
import { Article } from '../types';

type Props = {
  articles: Article[];
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles: Article[] = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
