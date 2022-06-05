import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import { useRouter } from "next/router";
import { useState } from 'react'
import HakatonHero from "./HakatonHero";

function Layout({ children }) {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuHakatonToggle, setHakatonToggle] = useState(false);

  const navbarOutsiteClickClose = () => {
    setMenuToggle(false);
    setHakatonToggle(false)
  }

  if (router.pathname != "/hakaton")
    return (
      <div onClick={navbarOutsiteClickClose}>
        <div className={styles.containerfluid}>
          <Header setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
          {children}
        </div>
        <Footer />
      </div>
    );
  else {
    return (
      <div onClick={navbarOutsiteClickClose}>
        <HakatonHero
          setHakatonToggle={setHakatonToggle}
          menuHakatonToggle={menuHakatonToggle}
        />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
