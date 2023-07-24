import useDocumentTitle from "../../../useDocumentTitle";
import "./contacts.css";
import founder from "./founder.jpg";
import chairman from "./chairman.jpg";
import director from "./director.jpg";
import managingDirector from "./managingDirector.jpg";
import adviser from "./adviser.jpg";
export default function Contacts() {
    useDocumentTitle("যেকোনো প্রয়োজনে যোগাযোগ করুন | daridra.com")
  return (
    <main>        
        <article>
        <h2>
            যেকোনো প্রয়োজনে যোগাযোগ করুনঃ-
        </h2>
        <section id="founder-contact" className="contacts">
            <article className="info">
                <h3 className="title">
                    প্রতিষ্ঠাতাঃ
                </h3>
                <h4 className="name">
                    মোঃ সোহাগ আলী
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01949-003648</span>
                </div>
            </article>
            <img src={founder} alt="ছবি: মোঃ সোহাগ আলী" />
        </section>
        <section id="chairman-contact" className="contacts">
            <article className="info">
                <h3 className="title">
                    চেয়ারম্যান
                </h3>
                <h4 className="name">
                    মোঃ সোহাগ আলী
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01949-003648</span>
                </div>
            </article>
            <img src={chairman} alt="ছবি: মোঃ সোহাগ আলী" />
        </section>
        <section id="managing-director-contact" className="contacts">
            <article className="info">
                <h3 className="title">
                    ম্যানেজিং ডাইরেক্টরঃ
                </h3>
                <h4 className="name">
                    মোছাঃ স্মৃতি আক্তার
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01700-516210</span>
                </div>
            </article>
            <img src={managingDirector} alt="ছবি: মোছাঃ স্মৃতি আক্তার" />
        </section>
        <section id="director-contact" className="contacts">
            <article className="info">
                <h3 className="title">
                    ডাইরেক্টরঃ
                </h3>
                <h4 className="name">
                    মোঃ শামীম আহমেদ
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01628-196882</span>
                </div>
            </article>
            <img src={director} alt="ছবি: মোঃ শামীম আহমেদ" />
        </section>
        <section id="adviser-contact" className="contacts">
            <article className="info">
                <h3 className="title">
                    উপদেষ্টাঃ
                </h3>
                <h4 className="name">
                    শেখ শামীম আহমেদ
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01714-359692</span>
                </div>
            </article>
            <img src={adviser} alt="ছবি: শেখ শামীম আহমেদ" />
        </section>
        </article>
    </main>
  )
}
