import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Overwatch</span> Randomizer
      </h1>
      <p className={headerStyles.description}>
        Automatically picks a random hero for you
      </p>
    </div>
  );
};

export default Header;
