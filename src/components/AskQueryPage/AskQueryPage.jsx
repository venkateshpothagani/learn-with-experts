import { useState } from 'react';

const AskQueryPage = () => {
	const initialFormData = Object.freeze({
		query: '',
		tags: '',
	});

	const [formData, setFormData] = useState(initialFormData);

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value.trim(),
		});
	};

	const validateForm = (event) => {
		event.preventDefault();
		console.log(`Description :- ${formData.query}`);
		console.log(`Description :- ${formData.tags}`);
	};

	return (
		<div className="h-100 m-auto container">
			<h1>
				<u>Ask Query</u>
			</h1>
			<form onSubmit={validateForm}>
				<div className="mb-3">
					<label htmlFor="query" className="form-label">
						Describe query
					</label>
					<textarea
						className="form-control"
						id="query"
						name="query"
						rows="3"
						cols={90}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div className="mb-3">
					<label htmlFor="tags" className="form-label">
						Tags
					</label>
					<input
						type="text"
						className="form-control"
						id="tags"
						name="tags"
						placeholder="Tags - Ex:- Python, Loops"
						onChange={handleInputChange}
					/>
				</div>
				<input type="submit" className="btn btn-primary px-4" value="Submit Query" />
			</form>
		</div>
	);
};

export default AskQueryPage;
