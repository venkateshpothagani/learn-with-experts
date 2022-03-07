import styles from "./UserCard.module.css";

const UserCard = (props) => {
  const expertize = props.expertize.map((element, index) => (
    <span key={index} className="badge bg-success col-auto">
      {element}
    </span>
  ));
  const interested = props.interested.map((element, index) => (
    <span key={index} className="badge bg-success col-auto">
      {element}
    </span>
  ));

  return (
    <div className={styles.userCard}>
      <div className="text-center">
        <img src={props.dp} alt={props.name} className={styles.img} />
      </div>
      <div>
        <div>
          <h2 className="text-decoration-underline">{props.name}</h2>
        </div>
        <div className="m-2 gap-4">
          <div>
            <h6>Expertize Technology</h6>
            <div className="row justify-content-around gap-1">{expertize}</div>
          </div>
          <div>
            <h6>Interested Technology</h6>
            <div className="row justify-content-around gap-1">{interested}</div>
          </div>
        </div>
        <div className="d-grid gap-2 mx-auto">
          <button
            className="btn btn-secondary btn-sm "
            onClick={props.openChat}
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
