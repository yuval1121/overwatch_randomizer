import { Checkbox, createStyles } from '@mantine/core';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Hero } from '../types';

const useStyles = createStyles(() => ({
  rolepicker: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '1rem',
    columnGap: '0.5rem',
  },
}));

type Props = {
  heroes: Hero[];
  heroPool: Hero[];
  setHeroPool: Dispatch<SetStateAction<Hero[]>>;
};

const RolePicker = ({ heroes, heroPool, setHeroPool }: Props) => {
  const { classes } = useStyles();
  const [isTank, setIsTank] = useState(true);
  const [isDps, setIsDps] = useState(true);
  const [isSupport, setIsSupport] = useState(true);

  const onClickHandler = (
    e: ChangeEvent<HTMLInputElement>,
    role: 'dps' | 'support' | 'tank'
  ) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === role)));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== role));
    }

    switch (role) {
      case 'dps': {
        setIsDps(e.currentTarget.checked);
        break;
      }
      case 'support': {
        setIsSupport(e.currentTarget.checked);
        break;
      }
      case 'tank': {
        setIsTank(e.currentTarget.checked);
        break;
      }
    }
  };

  return (
    <div className={classes.rolepicker}>
      <Checkbox
        checked={isTank}
        onChange={e => onClickHandler(e, 'tank')}
        label="Tank"
      />
      <Checkbox
        checked={isDps}
        onChange={e => onClickHandler(e, 'dps')}
        label="DPS"
      />
      <Checkbox
        checked={isSupport}
        onChange={e => onClickHandler(e, 'support')}
        label="Support"
      />
    </div>
  );
};

export default RolePicker;
