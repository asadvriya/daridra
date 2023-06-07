 import "./nav.css";
 export default function Nav(){
    return(
        <nav className="mb7 br7">
            <a href="/">প্রথম পাতা</a>
            <a href="/services">আমাদের সেবাসমুহ</a>
            <a className="about-us" href="/about-us">আমাদের সম্পর্কে জানুন</a>
            <a href="/rules">নিয়মনীতি</a>
            <button className="job-menu">চাকরির আবেদন
            <div className="fly-menu">
                <a href="/jobs/login">আবেদনকারী লগইন</a>
                <a href="/jobs/apply">নতুন আবেদন</a>
            </div>
            </button>
            <a href="/contact-us">যোগাযোগ করুন</a>            
        </nav>
    )
 }