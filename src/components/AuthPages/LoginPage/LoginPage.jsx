import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveLoginInfo } from '../../../store/features/authSlice';
import styles from './LoginPage.module.css';
import { useEffect } from 'react';
const LoginPage = () => {
	//* State initiation
	const initialFormData = Object.freeze({
		username: '',
		password: '',
	});

	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [formData, setFormData] = useState(initialFormData);
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const login = () => {
		const data = JSON.stringify({ username: formData.username, password: formData.password });
		// var data = JSON.stringify({
		// 	username: 'iamnewuser#001',
		// 	password: 'mySuperSec@Pwd#123',
		// });

		var config = {
			method: 'post',
			url: 'http://localhost:5000/api/user/login',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};

		try {
			axios(config)
				.then(function (response) {
					console.log(response.status);
					if (response.status === 401) {
						setShowErrorMessage(true);
					}
					if (response.status === 200) {
						dispatch(saveLoginInfo(response.data.data));
						console.log(JSON.stringify(response.data));
						navigation('/');
					}
				})
				.catch(function (error) {
					setShowErrorMessage(true);
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (isFormSubmitted) login();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFormSubmitted]);

	//* Update state on every key stroke
	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value.trim(),
		});
	};

	//* Form validation and for valid details redirects to home page
	const loginFormValidation = (event) => {
		event.preventDefault();

		setIsFormSubmitted(true);

		const data = JSON.stringify({ username: formData.username, password: formData.password });

		// axios({
		// 	method: 'post',
		// 	url: 'http://localhost:5000/api/user/login',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	data: data,
		// }).then((response) => {
		// 	if (response.status === 200) {
		// 		console.log(response);

		// 		dispatch(saveLoginInfo(response.data.data));
		// 		console.log('OK');
		// 	} else {
		// 		document.getElementById('divAlert').setAttribute('hidden', 'true');
		// 	}
		// });
	};

	return (
		<div className={styles.page}>
			{/* //* OAuth Buttons for Github and Google */}
			{/* <div className="row justify-content-around gap-2">
				<button className="btn btn-dark btn-sm col-sm-5" name="github" type="button">
					<i className="bi-github px-2"></i>
					GitHub
				</button>
				<button className="btn btn-danger btn-sm col-sm-5" name="google" type="button">
					<i className="bi-google px-2"></i>
					Google
				</button>
			</div>
			<br />
			<div className="row">
				<div className="col">
					<hr />
				</div>
				<div className="col-auto">OR</div>
				<div className="col">
					<hr />
				</div>
			</div> */}
			<h2 className="text-center mb-4">
				<u>Welcome back</u>
			</h2>
			{/* //* Shows alert when user submit invalid Credentials */}
			<div
				id="divAlert"
				className="alert alert-warning alert-dismissible fade show"
				role="alert"
				hidden={!showErrorMessage}
			>
				<i className="bi bi-exclamation-diamond"></i>
				<span className="mx-3">Invalid Credentials.</span>
				<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>

			<form onSubmit={loginFormValidation}>
				{/* //* Input field for username  */}
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						className="form-control form-control-sm"
						id="username"
						placeholder="Username"
						autoComplete="username"
						onChange={handleInputChange}
						// ref={prevFormData}
						required
					/>
				</div>

				{/* //* Input field for password  */}
				<div className="mb-3">
					<label htmlFor="current-password" className="form-label">
						Password
					</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						className="form-control form-control-sm"
						id="current-password"
						placeholder="Password"
						onChange={handleInputChange}
						autoComplete="current-password"
						// ref={prevFormData}
						required
					/>

					{/* //* Link to reset password */}
					<div className="mt-1">
						<Link to={`/forgot-password/${123}`} className="link-primary">
							Forgot Password?
						</Link>
					</div>
				</div>

				{/* //* Button to submit details and link to SignupPage */}
				<div className="row justify-content-around">
					<button className="btn btn-primary btn-sm col-sm-4" type="submit">
						<i className="bi bi-box-arrow-in-right px-2"></i>
						Log in
					</button>

					<div className="btn btn-sm col-sm-7" type="button">
						Don't have an account?{' '}
						<Link to="/signup" className="text-underline">
							Sign up
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
