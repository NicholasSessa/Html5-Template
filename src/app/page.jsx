import Breadcrumb from "@/components/breadcrumb";
import ThreeCards from "@/components/dashboard/three-charts";
import classes from "./page.module.css";
import YearlySales from "@/components/dashboard/yearly-sales";
import RecentSales from "@/components/dashboard/recent-sales";
import RecentComments from "@/components/dashboard/recent-comments";
import UserStatus from "@/components/dashboard/user-status"
export default function Page() {
    return(
	<>
	    <div className={classes.pageWrapper}>
		<div className="container mt-4">
		    <ThreeCards/>
		    <YearlySales/>
		    <RecentSales/>
		    <div className="row">
			<RecentComments/>
			<UserStatus/>
		    </div>
		</div>
	    </div>
	</>
    );
}
