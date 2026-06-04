import classes from './top-bar.module.css'
import Image from 'next/image'

export default function TopBar() {
    return(
	<>
	    <div className={classes.topbar} >
		<nav className={`navbar top-navbar navbar-expand-md navbar-dark`}>
		    <div className={classes.navbarHeader}>
			
			<a className={`navbar-brand`}>
			    <b className ={classes.logoIcon}>
				<img src="/images/logo-icon.png" alt="homepage"  />
			    </b>
			    <span className={classes.logoText}>
				<img src="/images/logo-text.png" alt="homepage"  />
				
			    </span>
			</a>
			{/* <a class="
			    nav-toggler
			    waves-effect waves-light
			    text-dark
			    d-block d-md-none
			    " href="javascript:void(0)"><i class="ti-menu ti-close"></i></a> */}
		    </div>
		    <div className={`navbar-collapse show ${classes.dark}`} id="navbarSupportedContent">
			<ul className={`navbar-nav ms-auto d-flex align-items-center`}>
			    <li >
				<form role="search" className={`${classes.appSearch} d-none d-md-block me-3`}>
				    <input type="text" placeholder="Search..." className={`form-control mt-0`} />
				    <a href="" className={classes.leButton}>
					<i></i>
				    </a>
				</form>
			    </li>
			    <li>
				<a className={classes.profilePic} href="#">
				    <img src="/images/users/varun.jpg" alt="user-img" width="36" className={classes.imgCircle} /><span
																     className="text-white font-medium">Steave</span></a>
			    </li>
			</ul>
		    </div> 
		</nav> 
	    </div>
	</>	
    );
}
