import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Navbar = ({ pages }) => (
    <div>
        <nav>
            <ul className={styles.bar}>
                {
                    pages.map((page, index) => (page.showInNavbar ? (
                        <li key={index}>
                            <Link className={styles.element} to={page.pageLink}>{page.displayName}</Link>
                        </li>
                    ) : null))
                }
            </ul>
        </nav>
    </div>
);

export default memo(Navbar);
