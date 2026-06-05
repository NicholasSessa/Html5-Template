import classes from "./side-element.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function SideElement({name,icon,active,link}) {
    return(
	<li className={`pt-2`}>
	    <Link className={`${classes.link}  ${active ? classes.active : ""}`}
	       href={link}
	       aria-expanded="false">
		<FontAwesomeIcon  icon={icon} style={{height: "16px",width: "16px",fontSize: "14px"}} />
		<span>{name}</span>
	    </Link>
	</li>

    );
}
