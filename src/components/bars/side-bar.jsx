import React from 'react';
import classes from './side-bar.module.css';

import { faClock } from "@fortawesome/free-solid-svg-icons";

import SideElement from "@/components/parts/side-element"
export default function SideBar() {
    return(
	<aside className={classes.sidebar}>
	    <div className={classes.scrollSidebar}>
		<nav >
		    <ul className={classes.nav }>
			<SideElement
			    name="Dashboard"
			    icon={faClock}
			    active={false}
			    link="/"
			/>
		    </ul>
		    
		</nav>
	    </div>
	</aside>
    );
}
