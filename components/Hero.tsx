import { Hero } from '../types';

type Props = {
  hero: Hero;
};

const HeroCard = ({ hero }: Props) => {
  return (
    <div>
      <span>{hero.name}</span>
    </div>
  );
};

export default HeroCard;
