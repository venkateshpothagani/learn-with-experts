const AnswerCard = (props) => {
	return (
		<div className="container">
			{/* <div className="d-flex justify-content-between mb-3">
				<span>{props.fullName}</span>
				<span>{props.timestamp}</span>
			</div> */}
			<div>{props.description}</div>
			<hr />
		</div>
	);
};

export default AnswerCard;
