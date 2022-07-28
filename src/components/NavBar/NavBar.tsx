import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

type IActiveTab = 'dashboard' | 'movies' | 'TV-shows' | 'bookmark';

const NavBar = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__navigation}>
          <div className={styles.navBar__logo} onClick={returnHome}>
            <i className={`ri-clapperboard-fill ${styles.logo}`}></i>
          </div>

          <div className={styles.navBar__menu}>
            <NavLink
              to='/'
            >
               {({isActive}) => (
                  <i 
                    className={`ri-layout-grid-fill ${styles.menu_item} ${isActive ? styles.menu_item_active : ''}`}
                  ></i>
               )}
            </NavLink>
            
            <NavLink
              to='/movies'
            >
               {({isActive}) => (
                  <i 
                  className={`ri-film-fill ${styles.menu_item} ${isActive ? styles.menu_item_active : ''}`}
                  ></i>
               )}
            </NavLink>

            <NavLink
              to='/tvShows'
            >
               {({isActive}) => (
                  <i 
                    className={`ri-tv-fill ${styles.menu_item} ${isActive ? styles.menu_item_active: ''}`}
                  ></i>
               )}
            </NavLink>

            <NavLink
              to='/search'
            >
               {({isActive}) => (
                  <i 
                    className={`ri-search-line ${styles.menu_item} ${isActive ? styles.menu_item_active: ''}`}
                  ></i>
               )}
            </NavLink>

            <NavLink
              to='/bookmarks'
            >
               {({isActive}) => (
                  <i 
                  className={`ri-bookmark-fill ${styles.menu_item} ${isActive ? styles.menu_item_active: ''}`}
                ></i>
               )}
            </NavLink>

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