import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

type IActiveTab = 'dashboard' | 'movies' | 'TV-shows' | 'bookmark';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>('dashboard');

  const handleTabClick = (tab: string) => {
    switch (tab) {
      case 'dashboard': {
        setActiveTab('dashboard');
        break;
      }
      case 'movies': {
        setActiveTab('movies');
        break;
      }
      case 'TV-shows': {
        setActiveTab('TV-shows');
        break;
      }
      case 'bookmark': {
        setActiveTab('bookmark');
        break;
      }
    }
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__navigation}>
        <div className={styles.navBar__logo}>
          <i className={`ri-clapperboard-fill ${styles.logo}`}></i>
        </div>

        <div className={styles.navBar__menu}>
          <i 
            className={`ri-layout-grid-fill ${styles.menu_item} ${styles.menu_item_active}`}
          ></i>
          <i 
            className={`ri-film-fill ${styles.menu_item}`}
          ></i>
          <i 
            className={`ri-tv-fill ${styles.menu_item}`}
          ></i>
          <i 
            className={`ri-bookmark-fill ${styles.menu_item}`}
          ></i>
        </div>
      </div>

      <div className={styles.navBar__utils}>
        <div className={styles.navBar__profile}>

        </div>
      </div>
    </nav>
  )
}

export default NavBar