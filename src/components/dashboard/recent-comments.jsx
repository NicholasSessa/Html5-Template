import classes from "./dashboard.module.css";
import Comment from "@/components/parts/comments"
export default function RecentComments() {
    const comments = [
  {
    name: "James Anderson",
    image: "plugins/images/users/varun.jpg",
    status: "Pending",
    statusClass: "bg-primary",
    date: "April 14, 2024",
  },
  {
    name: "Michael Jorden",
    image: "plugins/images/users/genu.jpg",
    status: "Approved",
    statusClass: "bg-success",
    date: "April 14, 2024",
  },
  {
      name: "Johnathan Doeting",
      image: "plugins/images/users/ritesh.jpg",
      status: "Rejected",
      statusClass: "bg-danger",
      date: "April 14, 2024",
  },
    ];
    const users = [
  {
    name: "Varun Dhavan",
    image: "plugins/images/users/varun.jpg",
    status: "online",
    statusClass: "text-success",
  },
  {
    name: "Genelia Deshmukh",
    image: "plugins/images/users/genu.jpg",
    status: "Away",
    statusClass: "text-warning",
  },
  {
      name: "Ritesh Deshmukh",
      image: "plugins/images/users/ritesh.jpg",
      status: "Busy",
      statusClass: "text-danger",
  },
    ];
    return (

	    <div className="col-md-12 col-lg-8 col-sm-12">
		<div className={`card ${classes.whiteBox} p-0`}>
		    <div className="card-body py-2">
			<h3 className={`${classes.boxTitle} mb-0`}>
			    Recent Comments
			</h3>
		    </div>
		    <div className="comment-widgets">
			<Comment img="/images/users/varun.jpg"
				 name="John Hutcherson"
				 desc="The Whistle Baby"
				 date="June 3, 2026"
				 status={0} />
			<Comment img="/images/users/genu.jpg"
				 name="Taylor Swift"
				 desc="Not the Goat"
				 date="June 2, 2026"
				 status={1} />
			<Comment img="/images/users/d3.jpg"
				 name="Dave Strider"
				 desc="I warned you about the stairs bro"
				 date="April 13, 2009"
				 status={-1} />
		    </div>
		</div>
	    </div>


    );
}
