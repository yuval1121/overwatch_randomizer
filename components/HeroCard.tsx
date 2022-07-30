import { Hero } from '../types';

type Props = {
  hero: Hero;
};

const HeroCard = ({ hero }: Props) => {
  return <span>{hero.name}</span>;
};

export default HeroCard;
