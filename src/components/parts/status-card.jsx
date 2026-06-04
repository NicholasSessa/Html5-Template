import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import classes from "./status-card.module.css"
export default function StatusCard() {
    return(
	<li>
	    <div className={classes.callChat}>
		<button className="btn btn-success text-white btn-circle btn" type="button">
		    <FontAwesomeIcon icon={faPhone}/>
		</button>
		<button className="btn btn-info btn-circle btn" type="button">
		    <FontAwesomeIcon icon={faComment}/>
		</button>
	    </div>
	    
	</li>
    );
}
