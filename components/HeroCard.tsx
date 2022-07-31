import { Hero } from '../types';

type Props = {
  hero: Hero | null;
};

const HeroCard = ({ hero }: Props) => {
  return <span>{hero && hero.name}</span>;
};

export default HeroCard;
