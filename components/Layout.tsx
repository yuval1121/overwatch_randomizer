import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Meta from './Meta';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
        ]}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
