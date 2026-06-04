
import Image from "next/image";
export default function Comment({img, name, desc, date, status}) {
    const statuses = {
	0: {
	    text: "Pending",
	    style: "bg-primary",
	},
	1: {
	    text: "Approved",
	    style: "bg-success",
	},
    };

    const {
	text: StatusS,
	style: StatusStyle,
    } = statuses[status] ?? {
	text: "Rejected",
	style: "bg-danger",
    };
    console.log(StatusS);
    return(
	<div className="d-flex comment-row p-3">
            <div className="flex-shrink-0">
                <Image src={img} alt="Hello Neighbor" width={48} height={48} className="rounded-circle"/>
            </div>
            <div className="ps-3 flex-grow-1">
		<h6 className="fw-semibold mb-1">
		    {name}
		</h6>

		<p className="text-muted small mb-2">
		    {desc}
		</p>

		<div className="d-flex align-items-center">
		    <span className={`badge ${StatusStyle}`}>
			{StatusS}
		    </span>

		    <small className="text-muted ms-auto">
			{date}
		    </small>
		</div>
	    </div>
        </div>
    );
}
