import type { GetStaticProps, NextPage } from 'next';
import HeroPicker from '../components/HeroPicker';
import { Hero } from '../types';

type Props = {
  heroes: Hero[];
};

const Home: NextPage<Props> = ({ heroes }) => {
  return (
    <div>
      <HeroPicker heroes={heroes} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const url = process.env.VERCEL_URL;
  const res = await fetch(`${url}/api/staticdata`);
  const heroes = await res.json();

  return {
    props: { heroes },
  };
};

export default Home;
