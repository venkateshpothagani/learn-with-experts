import styles from './HomePage.module.css';

import QueryCard from '../UI/QueryCard/QueryCard';

const HomePage = () => {
	return (
		<div className="h-100 m-auto" id={styles.grid}>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
			<div className={styles.queryCard}>
				<QueryCard />
			</div>
		</div>
	);
};

export default HomePage;
