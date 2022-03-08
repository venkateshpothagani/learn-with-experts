const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container my-3 d-flex flex-wrap justify-content-center">
        <div className="">
          <a href="https://www.facebook.com/learn-with-experts" className="p-3">
            <i class="bi bi-facebook text-white"></i>
          </a>
          <a
            href="https://www.instagram.com/learn-with-experts"
            className="p-3"
          >
            <i class="bi bi-instagram text-white"></i>
          </a>
          <a href="https://www.twitter.com/learn-with-experts" className="p-3">
            <i class="bi bi-twitter text-white"></i>
          </a>
          <a href="https://www.github.com/learn-with-experts" className="p-3">
            <i class="bi bi-git text-white"></i>
          </a>
        </div>
        <div className="text-white">2022 &copy; Learn With Experts</div>
      </div>
    </footer>
  );
};

export default Footer;
