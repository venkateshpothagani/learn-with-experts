import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container my-3 d-flex flex-wrap justify-content-center">
        <div className="">
          <Link
            to="https://www.facebook.com/learn-with-experts"
            rel="noopener noreferrer"
            target="_blank"
            className="p-3"
          >
            <i className="bi bi-facebook text-white"></i>
          </Link>
          <Link
            to="https://www.instagram.com/learn-with-experts"
            rel="noopener noreferrer"
            target="_blank"
            className="p-3"
          >
            <i className="bi bi-instagram text-white"></i>
          </Link>
          <Link
            to="https://www.twitter.com/learn-with-experts"
            rel="noopener noreferrer"
            target="_blank"
            className="p-3"
          >
            <i className="bi bi-twitter text-white"></i>
          </Link>
          <Link
            to="https://www.github.com/learn-with-experts"
            rel="noopener noreferrer"
            target="_blank"
            className="p-3"
          >
            <i className="bi bi-git text-white"></i>
          </Link>
        </div>
        <div className="text-white">2022 &copy; Learn With Experts</div>
      </div>
    </footer>
  );
};

export default Footer;
