import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './HomePage.module.css';
import QueryCard from '../UI/QueryCard/QueryCard';

const HomePage = () => {
	const [experts, setExperts] = useState([]);
	useEffect(() => {
		console.log('UseEffect');
		const getData = () => {
			axios({
				method: 'get',
				url: 'http://localhost:5000/api/post',
			})
				.then((response) => {
					console.dir(response.data);
					setExperts(response.data);
				})
				.catch((error) => {
					alert(error.message || 'Error occurred while fetching data in home page');
				});
		};

		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="h-100 m-auto container" id={styles.grid}>
			<div className={styles.queryCard}>
				{experts.map((expert, index) => (
					<div className={styles.queryCard} key={index}>
						<QueryCard
							description={expert.description}
							tags={expert.tags.join(' ')}
							id={expert._id}
							key={index}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
