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
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__navigation}>
          <div className={styles.navBar__logo}>
            <i className={`ri-clapperboard-fill ${styles.logo}`}></i>
          </div>

          <div className={styles.navBar__menu}>
            <i 
              className={`ri-layout-grid-fill ${styles.menu_item} ${activeTab === 'dashboard' ? styles.menu_item_active
              : ''}`}
              onClick={() => handleTabClick('dashboard')}
            ></i>
            <i 
              className={`ri-film-fill ${styles.menu_item} ${activeTab === 'movies' ? styles.menu_item_active
              : ''}`}
              onClick={() => handleTabClick('movies')}
            ></i>
            <i 
              className={`ri-tv-fill ${styles.menu_item} ${activeTab === 'TV-shows' ? styles.menu_item_active
              : ''}`}
              onClick={() => handleTabClick('TV-shows')}
            ></i>
            <i 
              className={`ri-bookmark-fill ${styles.menu_item} ${activeTab === 'bookmark' ? styles.menu_item_active
              : ''}`}
              onClick={() => handleTabClick('bookmark')}
            ></i>
          </div>

          <div className={styles.navBar__profile}>
            <img 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a5635c50160831.58c8ff8bc211a.png"
              className={styles.navBar__avatar}
              alt="avatar" 
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar