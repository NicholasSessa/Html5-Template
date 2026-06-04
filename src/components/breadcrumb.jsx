import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200','300','400','600','700','800']
})


import classes from './breadcrumb.module.css'
export default function Breadcrumb() {
    return(
	<>
	    <div className={`${classes.pageBreadcrumb} bg-white`}>
		<div className="row align-items-center">
		    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
			<h4 className={`${classes.pageTitle} ${nunito.className}`}>Profile page</h4>
		    </div>
		    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
			<div className="d-md-flex">
			    <ol className={`${classes.breadcrumb} ms-auto`}>
				<li><a href="#" className="fw-normal">Dashboard</a></li>
			    </ol>
			</div>
		    </div>
		</div>
	    </div>
	</>
    );
}
