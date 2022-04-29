/* eslint-disable react-hooks/exhaustive-deps */
import AnswerCard from '../UI/AnswerCard/AnswerCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AnswerPage = (props) => {
	const [question, setQuestion] = useState('');
	const [answers, setAnswers] = useState([]);
	const [showAnswers, setShowAnswers] = useState(false);

	const id = useParams().id;

	useEffect(() => {
		axios.get(`http://localhost:5000/api/post/${id}`).then((res) => {
			setQuestion(res.data.data.description);
		});
	}, []);

	const onButtonClick = () => {
		setShowAnswers(true);
	};

	useEffect(() => {
		axios.get(`http://localhost:5000/api/comment/${id}`).then((res) => {
			console.table(res.data);
			setAnswers(res.data);
		});
	}, [showAnswers]);

	return (
		<div className="container">
			<div className="mb-3">
				<h1>
					<u>
						<h3>Question :-</h3>
					</u>
				</h1>
				<b>{question}</b>
			</div>
			<div>
				<div className="d-flex justify-content-between">
					<div>
						<u>
							<h3>Answers :-</h3>
						</u>
					</div>
					<div>
						{/* <button onClick={onButtonClick} className="btn btn-sm btn-outline-primary">
							Show Answers
						</button> */}
					</div>
				</div>
				{/* {JSON.stringify(answers)} */}
				{answers.map((answer, index) => {
					return (
						<AnswerCard
							fullName={answer.fullName}
							timestamp={Date().toString(answer.timestamp)}
							description={answer.description}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AnswerPage;
