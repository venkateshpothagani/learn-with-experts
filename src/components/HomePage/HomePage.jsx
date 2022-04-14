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
    <div className="h-100 m-auto">
      <div className={styles.feed}>
      </div>
    </div>
  );
};

export default HomePage;
