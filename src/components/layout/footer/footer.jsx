
import "./footer.css";
export default function Footer(){
    const today = new Date();
    return(
        <footer className="br7">
            <div className="copyright">
                &copy; {today.getFullYear()} {process.env.REACT_APP_SITE_TITLE} কর্তৃক স্বত্বাধিকারী।
            </div>
            <div className="footer-developed">
                <div className="developedby">
                    <span><b>Developed By: </b></span><a href="https://asadvriya.web.app"> Md. Asad Chowdhary</a>
                </div>
                <ul className="footer-details">
                        <li>
                            <a href="/about">About US</a>
                        </li>
                        <li>
                            <a href="/terms">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy & Policy</a>
                        </li>
                </ul>
            </div>
        </footer>
    );
};