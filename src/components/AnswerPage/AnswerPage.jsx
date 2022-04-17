import ViewAnswers from '../ViewAnswers/ViewAnswers';

const AnswerPage = (props) => {
	return (
		<div className="container">
			<div className="mb-3">
				<h1>
					<u>Question :-</u>
				</h1>
				<b>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita, veritatis consectetur
					labore ea quo aperiam exercitationem dolore amet molestiae, delectus placeat temporibus, sint harum
					laborum quia nulla quam dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas
					iusto ad veniam voluptate officia quaerat necessitatibus inventore molestias laudantium? Eligendi
					nemo expedita quam hic, a magni dicta ullam nisi!
				</b>
			</div>
			<div>
				<h1>
					<u>Answers :-</u>
				</h1>
				<ViewAnswers />
				<ViewAnswers />
				<ViewAnswers />
			</div>
		</div>
	);
};

export default AnswerPage;
