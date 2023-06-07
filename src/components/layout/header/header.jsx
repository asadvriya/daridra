import logo from "../../../logo.webp";
import "./header.css";
export default function Header(){
    return(
        <header className="mb7 br7">
            <img src={logo} height="100px" width="111px"alt="logo" className="logo"/>
            <h1 className="heading">{process.env.REACT_APP_SITE_TITLE}</h1>
        </header>
    );
};