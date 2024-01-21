import '../index.css'


export default async function Footer() {
    return (
        <footer className="footer">
            <div className="quick-links">
                <ul>
                    <li className="quick-items"><a href="#">About</a></li>
                    <li className="quick-items"><a href="#">Partners</a></li>
                    <li className="quick-items"><a href="#">Testimonials</a></li>
                    <li className="quick-items"><a href="#">Resources</a></li>
                </ul>
            </div>

            <div className="inner-footer">
                <div className="social-links">
                    <ul>
                        <li className="social-items"><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li className="social-items"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li className="social-items"><a href="#"><i className="fa-brands fa-x-twitter" style={{ color: '#63E6BE' }}></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="outer-footer">
                © 2024 Explore Edu Reisen. All rights reserved
            </div>
        </footer>
    );
}
