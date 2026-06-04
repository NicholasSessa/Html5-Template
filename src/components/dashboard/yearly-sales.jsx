import classes from "./dashboard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Chart from "@/components/graph/yearly-sales-chart"



export default function YearlySales() {
    return(
	<>
	    <div className="row">
		<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
		    <div className={classes.whiteBox}>
			<h3 className={classes.boxTitle}>Products Yearly Sales</h3>
			<div className="d-md-flex">
			    <ul className={`list-inline d-flex ms-auto`}>
				<li className="ps-3">
				    {/*there is a custom class in the css for this but I dont know if I should use it*/}
				    <h5 style={{fontSize: '16px', fontWeight: 400}}><FontAwesomeIcon icon={faCircle} className="me-1 text-info" style={{width: "12px"}}></FontAwesomeIcon>Mac</h5>
				</li>
				<li className="ps-3">
				    <h5 style={{fontSize: '16px', fontWeight: 400}}>
					<FontAwesomeIcon icon={faCircle} className={`me-1 ${classes.textInverse}`}  style={{width: "12px"}}></FontAwesomeIcon>Windows
				    </h5>
				</li>
			    </ul>
			</div>
			<div style={{height: "405px", width: "100%", minWidth: "0"}}>
			    <Chart/>
			</div>
		    </div>
		</div>
	    </div>
	</>
    );
}
