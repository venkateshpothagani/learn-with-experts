import { Link } from 'react-router-dom';

import styles from './QueryCard.module.css';

const QueryCard = (props) => {
	return (
		<div className="container box">
			<div className="row d-flex justify-content-between">
				<div className="col-sm-2">Venkatesh</div>
				<div className="col-sm-2" id={styles.date}>
					15/23/23
				</div>
			</div>
			<hr />
			<div className="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse consectetur quis aspernatur cum
				nulla beatae? Doloribus amet deleniti, rem ea, eum natus totam repellat, inventore quaerat molestiae
				officia voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae libero fugit
				ipsa atque porro esse nostrum iste doloremque adipisci saepe ex asperiores, aliquid necessitatibus
				cumque. Illo dignissimos tempore libero?
			</div>
			<hr />
			<div className="">Tags</div>
			<hr />
			<div className="row d-flex justify-content-between mx-1">
				<Link to={`/answers/sdfdfs`} className="col-sm-2 my-2 btn btn-outline-secondary">
					View Answers
				</Link>
				<Link to={`/post-answer/sdsdf`} className="col-sm-2 my-2 btn btn-outline-primary">
					Give Answer
				</Link>
			</div>
		</div>
	);
};

export default QueryCard;
