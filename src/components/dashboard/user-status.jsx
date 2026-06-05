import classes from "./dashboard.module.css"
import StatusCard from "@/components/parts/status-card";
export default function UserStatus() {
    return(
	<div className="col-lg-4 col-md-12 col-sm-12">
	    <div className={`card ${classes.whiteBox} p-0`}>
		<div className={classes.cardHeading}>
		    <h3 className={`${classes.boxTitle} mb-0`}>
			User Status
		    </h3>
		</div>
		<div className="card-body">
		    <ul className={classes.chatOnline}>
			<StatusCard
			    name="John Doe"
			    icon="/images/users/agent.jpg"
			    status={0}  
			/>
			<StatusCard
			    name="Christina Massanger"
			    icon="/images/users/4.jpg"
			    status={1}
			/>
			<StatusCard
			    name="Robert Chase"
			    icon="/images/users/d4.jpg"
			    status={2}
			/>
			<StatusCard
			    name="Vsauce Micheal"
			    icon="/images/users/5.jpg"
			    status={-1}
			/>
		    </ul>
		</div>
	    </div>
	</div>
    );
}
