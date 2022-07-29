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
  const res = await fetch('http://localhost:3000/api/staticdata');
  const heroes = await res.json();
  
  return {
    props: { heroes },
  };
};

export default Home;
