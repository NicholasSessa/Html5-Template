import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import classes from "./status-card.module.css"

export default function StatusCard({name,icon,status}) {
    const statuses = {
	0: {
	    text: "Online",
	    style: "text-success",
	},
	1: {
	    text: "Away",
	    style: "text-warning",
	},
	2: {
	    text: "Busy",
	    style: "text-danger"
	}
    };

    const {
	text: StatusS,
	style: StatusStyle,
    } = statuses[status] ?? {
	text: "Offline",
	style: "text-muted",
    };
    return(
	<li className={classes.userItem}>
	    <div className={classes.callChat}>
		<button  className={`btn btn-success ${classes.btnCircle} btn`} type="button">
		    <FontAwesomeIcon icon={faPhone}/>
		</button>
		<button className={`btn btn-info ${classes.btnCircle} btn`} type="button">
		    <FontAwesomeIcon icon={faComment}/>
		</button>
	    </div>
	    <a className="d-flex align-items-center" href="javascript:void(0)">
		<img className="img-circle" src={icon} alt="user-img"/>
		<div className="ms-2">
		    <span className="text-dark">
			{name}
			<small className={`d-block ${StatusStyle} d-block`}>{StatusS}</small>
		    </span>
		</div>
	    </a>
	    
	</li>
    );
}
