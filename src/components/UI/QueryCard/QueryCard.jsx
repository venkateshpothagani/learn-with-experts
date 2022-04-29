import { Link } from 'react-router-dom';

import styles from './QueryCard.module.css';

const QueryCard = (props) => {
	console.table(props)
	return (
		<div className="container box">
			{/* <div className="row d-flex justify-content-between">
				<div className="col-sm-2"> {props.fullName} </div>
				<div className="col-sm-2" id={styles.date}></div>
			</div> */}
			{/* <hr /> */}
			<div className="">{props.description}</div>
			<hr />
			<div className="">{props.tags}</div>
			<hr />
			<div className="row d-flex justify-content-between mx-1">
				<Link to={`/answers/${props.id}`} className="col-sm-2 my-2 btn btn-outline-secondary">
					View Answers
				</Link>
				<Link to={`/post-answer/${props.id}`} className="col-sm-2 my-2 btn btn-outline-primary">
					Give Answer
				</Link>
			</div>
		</div>
	);
};

export default QueryCard;
