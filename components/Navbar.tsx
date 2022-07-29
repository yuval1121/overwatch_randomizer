import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import ThemeIcon from './ThemeIcon';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ThemeIcon />
    </nav>
  );
};

export default Navbar;
