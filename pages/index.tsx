import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { Article } from '../types';

type Props = {
  articles: Article[];
};

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Store Project</title>
        <meta name="description" content="Store website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
