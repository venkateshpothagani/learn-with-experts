import styles from './UserCard.module.css';

const UserCard = (props) => {
	return (
		<div className={styles.container}>
			<div className="name">
				<h2>Venkatesh Pothagani</h2>
				<h4>@venkatesh530</h4>
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
			<input id={styles.profile} className="btn btn-secondary" type="button" value="View Profile" />
			<input id={styles.chat} className="btn btn-primary" type="button" value="Let's Chat" />
		</div>
	);
};

export default UserCard;
