import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact">
          <p>Contact Us</p>
          <a href="mailto:test@gmail.com">test@gmail.com</a>
        </div>
        <div className="resources">
          <p>Resources</p>
          <a href="mailto:test@gmail.com">FAQ</a>
          <a href="mailto:test@gmail.com">Policy</a>
        </div>
        <div className="followus">
          <p>Follow Us</p>
          <a href="mailto:test@gmail.com">Facebook</a>
          <a href="mailto:test@gmail.com">Instagram</a>
        </div>
      </div>
      <div className="footer-text">© 2026 FurBridge. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
