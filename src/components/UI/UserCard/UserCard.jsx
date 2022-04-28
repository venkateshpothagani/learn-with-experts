import styles from './UserCard.module.css';
// import { Link } from 'react-router-dom';

const UserCard = (props) => {
	return (
		<div className={styles.container}>
			<div className="name">
				<h2>Student Name</h2>
				{/* <h4>@student</h4> */}
			</div>
			<div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.....</div>
			<div className={styles.tech}>
				<div className={styles.interested}>
					<p className={styles.techHeader}>Interested in</p>
					<p className={styles.techItem}>Tech</p>
					<p className={styles.techItem}>Tech</p>
					<p className={styles.techItem}>Tech</p>
				</div>
				<div className={styles.expert}>
					<p className={styles.techHeader}>Expertize in</p>
					<p className={styles.techItem}>Tech</p>
					<p className={styles.techItem}>Tech</p>
					<p className={styles.techItem}>Tech</p>
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
