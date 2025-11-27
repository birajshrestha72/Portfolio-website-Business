import './css/footer.css'
import logo from './assets/logo.png'
import fbfav from './assets/sociallogo/fblogo.png'
import tiktokfav from './assets/sociallogo/tiktoklogo.png'
import igfav from './assets/sociallogo/iglogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section company">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>&copy; 2025 Disneyland Pokhara</p>
          <p>*Accessable for disabled*</p>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>📞 +977-981234567</p>
          <p>📧 disneylandpokhara@gmail.com</p>
          <p>🏠 Khahare-6, Lakeside, Pokhara, Nepal</p>
        </div>

        {/* Column 3: Sitemap */}
        <div className="footer-section sitemap">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/about">👥 About Us</a></li>
            <li><a href="/games-services">🎮 Games & Services</a></li>
            <li><a href="/locations">📍 Our Locations</a></li>
            <li><a href="#">🔝 Back to Top</a></li>
          </ul>
        </div>

        {/* Column 4: Legal & Social */}
        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/DisneylandPokhara"><img src={fbfav} alt="Facebook"/></a>
            <a href="https://www.tiktok.com/@pokharadisneyland7"><img src={tiktokfav} alt="TikTok"/></a>
            <a href="https://www.instagram.com/pokharadisneypark/"><img src={igfav} alt="Instagram"/></a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
