/* eslint-disable react-hooks/exhaustive-deps */
import styles from './PostAnswerPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PostAnswerPage = (props) => {
	const initialFormData = Object.freeze({
		answer: '',
	});
	const user = useSelector((state) => state.saveLoginInfo.value);
	const [question, setQuestion] = useState();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [formData, setFormData] = useState(initialFormData);
	console.table(user);
	const onFormSubmit = (event) => {
		event.preventDefault();
		setIsFormSubmitted(true);
	};

	const id = useParams().id;

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value.trim(),
		});
	};

	useEffect(() => {
		axios.get(`http://localhost:5000/api/post/${id}`).then((res) => {
			console.table(res.data);
			setQuestion(res.data.data);
		});
	}, []);

	const navigation = useNavigate();
	useEffect(() => {
		const data = {
			description: formData.answer,
			userRef: user.id,
			postRef: id,
		};
		console.table(data);
		if (isFormSubmitted)
			axios
				.post('http://localhost:5000/api/comment', data, {
					headers: { Authorization: `Bearer ${user.accessToken}` },
				})
				.then((res) => {
					if (res.status === 201) {
						navigation(`/answers/${id}`);
					} else {
						console.dir(res);
					}
				})
				.catch((error) => {
					navigation('/login');
				});
	}, [isFormSubmitted]);

	return (
		<div className="container">
			<div>
				<h1 className="mb-3">
					<u>Query :-</u>
				</h1>
				<div className={styles.question}>{question?.description}</div>
			</div>
			<hr />
			<h1>
				<u>Give Answer</u>

				<form onSubmit={onFormSubmit}>
					<textarea
						name="answer"
						className="my-3 form-control"
						cols="30"
						rows="10"
						onChange={handleInputChange}
					></textarea>
					<input type="submit" className="btn btn-primary" value="Submit Answer" />
				</form>
			</h1>
		</div>
	);
};

export default PostAnswerPage;
