import React from 'react';
import classes from './side-bar.module.css';

export default function SideBar() {
    return(
	<aside className={classes.sidebar}>
	    <div className={classes.scrollSidebar}>
		<nav >
		    <ul className={classes.nav }>
			<li className={`pt-2`}>
			    <a className={`${classes.link}  ${classes.active}`}
			       href="/"
			       aria-expanded="false">
				<i  className={classes.icon} aria-hidden="true">
				</i>
				<span className={classes.close}>Dashboard</span>
			    </a>
			</li>
		    </ul>
			       
		</nav>
	    </div>
	</aside>
    );
}
