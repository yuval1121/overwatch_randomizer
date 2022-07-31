import { Checkbox } from '@mantine/core';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Hero } from '../types';

type Props = {
  heroes: Hero[];
  heroPool: Hero[];
  setHeroPool: Dispatch<SetStateAction<Hero[]>>;
};

const RolePicker = ({ heroes, heroPool, setHeroPool }: Props) => {
  const [isTank, setIsTank] = useState(true);
  const [isDps, setIsDps] = useState(true);
  const [isSupport, setIsSupport] = useState(true);

  const tankClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'tank')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'tank'));
    }
    setIsTank(e.currentTarget.checked);
  };

  const dpsClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'dps')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'dps'));
    }
    setIsDps(e.currentTarget.checked);
  };

  const supportClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'support')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'support'));
    }
    setIsSupport(e.currentTarget.checked);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '1rem',
        columnGap: '0.5rem',
      }}
    >
      <Checkbox checked={isTank} onChange={tankClickHandler} label="Tank" />
      <Checkbox checked={isDps} onChange={dpsClickHandler} label="DPS" />
      <Checkbox
        checked={isSupport}
        onChange={supportClickHandler}
        label="Support"
      />
    </div>
  );
};

export default RolePicker;
