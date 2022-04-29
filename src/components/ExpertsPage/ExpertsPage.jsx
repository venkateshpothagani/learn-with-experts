import { useEffect } from 'react';
import axios from 'axios';
import UserCard from '../UI/UserCard/UserCard';
import styles from './ExpertsPage.module.css';
import { useState } from 'react';

const ExpertsPage = () => {
	const [experts, setExperts] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/expert')
			.then((response) => {
				console.dir(response.data);
				setExperts(response.data);
			})
			.catch((error) => {
				alert(`Error: ${error.message || 'Internal Server Error'}`);
			});
	}, []);

	return (
		<div className=" container">
			<h3 className="text-center">
				<u>Experts</u>
			</h3>
			<div id={styles.grid}>
				{experts.map((expert, index) => (
					<div className={styles.queryCard} key={index}>
						<UserCard
							description={expert.description}
							fullName={expert.fullName}
							username={expert.username}
							interested={expert.expertizedTech}
							expert={expert.interestedTech}
							key={index}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExpertsPage;
