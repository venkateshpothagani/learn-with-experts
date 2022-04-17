import styles from './PostAnswerPage.module.css';

const PostAnswerPage = (props) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="container">
			<div>
				<h1 className="mb-3">
					<u>Query :-</u>
				</h1>
				<div className={styles.question}>
					Lorem ipsum do-lor sit amet consectetur adipisicing elit. Atque soluta vitae natus quod repellat
					iste sit earum aliquam quo optio officia voluptate dicta totam, et mollitia expedita quidem.
					Exercitationem, reiciendis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel
					alias, cumque nesciunt vero aperiam praesentium quidem expedita modi, voluptatibus numquam ex porro
					dolorum blanditiis exercitationem quis eius! Et, id.
				</div>
			</div>
			<hr />
			<h1>
				<u>Give Answer</u>

				<form onSubmit={onFormSubmit}>
					<textarea name="answer" className="my-3 form-control" cols="30" rows="10"></textarea>
					<input type="submit" className="btn btn-primary" value="Submit Answer" />
				</form>
			</h1>
		</div>
	);
};

export default PostAnswerPage;
