import styles from './UserCard.module.css';
// import { Link } from 'react-router-dom';

const UserCard = (props) => {
	console.table(props);
	return (
		<div className={styles.container}>
			<div className="name">
				<h2>{props.fullName}</h2>
				<h4>@{props.username}</h4>
			</div>
			<div className={styles.desc}>{props.description}</div>
			<div className={styles.tech}>
				<div className={styles.interested}>
					<p className={styles.techHeader}>Interested in</p>
					<p className={styles.techItem}>{props.interested[0]}</p>
					<p className={styles.techItem}>{props.interested[1]}</p>
					<p className={styles.techItem}>{props.interested[2]}</p>
				</div>
				<div className={styles.expert}>
					<p className={styles.techHeader}>Expertize in</p>
					<p className={styles.techItem}>{props.expert[0]}</p>
					<p className={styles.techItem}>{props.expert[1]}</p>
					<p className={styles.techItem}>{props.expert[2]}</p>
				</div>
			</div>
			{/* <div className="d-flex justify-content-between">
				<Link to="profile/username" id={styles.profile} className="btn btn-secondary">
					Profile
				</Link>
				<Link to="chat/username" id={styles.chat} className="btn btn-primary">
					Chat
				</Link>
			</div> */}
		</div>
	);
};

export default UserCard;
