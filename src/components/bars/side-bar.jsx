import React from 'react';
import styles from './side-bar.module.css';

export default function SideBar() {
    return (
        <aside className={`${styles.leftSidebar} ${styles.sidebarBgSkin6}`}>
            <div className={styles.scrollSidebar}>
                <nav className={styles.sidebarNav}>
                    <ul id="sidebarnav" className={styles.in}>
                        <li className={`${styles.sidebarItem} ${styles.pt2}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="index.html" aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Dashboard</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem} ${styles.selected}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="profile.html" aria-expanded="false">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Profile</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="basic-table.html" aria-expanded="false">
                                <i className="fa fa-table" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Basic Table</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="fontawesome.html" aria-expanded="false">
                                <i className="fa fa-font" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Icon</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="map-google.html" aria-expanded="false">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Google Map</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="blank.html" aria-expanded="false">
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Blank Page</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="404.html" aria-expanded="false">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Error 404</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="authentication-login.html" aria-expanded="false">
                                <i className="fas fa-arrow-alt-circle-right" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Login</span>
                            </a>
                        </li>
                        <li className={`${styles.sidebarItem}`}>
                            <a className={`${styles.sidebarLink} ${styles.wavesEffect} ${styles.wavesDark}`} href="authentication-register.html" aria-expanded="false">
                                <i className="far fa-registered" aria-hidden="true"></i>
                                <span className={styles.hideMenu}>Register</span>
                            </a>
                        </li>
                        <li className={`${styles.textCenter} ${styles.p20}`}>
                            <a href="https://www.wrappixel.com/templates/ampleadmin/?ref=33" className={`${styles.btn} ${styles.danger} ${styles.textWhite}`} target="_blank">
                                Upgrade to Pro
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
