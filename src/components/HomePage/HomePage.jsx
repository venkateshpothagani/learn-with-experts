import styles from "./HomePage.module.css";
import image from "../../assets/images/logo.png";

import UserCard from "../UI/UserCard/UserCard";

const HomePage = () => {
  const openChat = (event) => {
    console.log("Chat window is opened");
  };

  const viewProfile = (event) => {
    console.log("Thanks for view");
  };

  const details = {
    name: "Venkatesh Pothagani",
    dp: image,
    expertize: ["Java", "Python", "CSS"],
    interested: [
      "Java",
      "Functional Programming",
      "Object Oriented Programming",
    ],
    viewProfile: viewProfile,
    openChat: openChat,
  };
  return (
    <div>
      <div className={styles.feed}>
        <div className="row gap-2 justify-content-around">
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
          <UserCard {...details} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
