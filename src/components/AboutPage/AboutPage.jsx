import styles from './AboutPage.module.css';

const AboutPage = () => {
	return (
		<div className="h-100 m-auto">
			<h3>Designed and developed by</h3>
			<ol>
				<li>Nirosha Pothagani</li>
				<li>Sri Harshini</li>
				<li>Sravani</li>
			</ol>
			Under guidance of <span className={styles.high}>Prof. Vijay Kumar</span>
		</div>
	);
};

export default AboutPage;
