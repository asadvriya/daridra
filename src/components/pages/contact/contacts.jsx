import useDocumentTitle from "../../../useDocumentTitle";
import "./contact.css";
import contact from "./contact.jpg";
export default function Contacts() {
    useDocumentTitle("যেকোনো প্রয়োজনে যোগাযোগ করুন | daridra.com")
  return (
    <main>        
        <article>
        <h2>
            যেকোনো প্রয়োজনে যোগাযোগ করুনঃ-
        </h2>
        <section className="contacts">
            <article className="info">
                <h3 className="title">
                    প্রতিষ্ঠাতাঃ
                </h3>
                <h4 className="name">
                    মোঃ সোহাগ আলী
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01743-191401</span>
                </div>
            </article>
            <img src={contact} alt="ছবি: মোঃ সোহাগ আলী" />
        </section>
        <section className="contacts">
            <article className="info">
                <h3 className="title">
                    চেয়ারম্যান
                </h3>
                <h4 className="name">
                    মোঃ সোহাগ আলী
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01XXX-XXXXXX</span>
                </div>
            </article>
            <img src={contact} alt="ছবি: মোঃ সোহাগ আলী" />
        </section>
        <section className="contacts">
            <article className="info">
                <h3 className="title">
                    ম্যানেজিং ডাইরেক্টরঃ
                </h3>
                <h4 className="name">
                    মোছাঃ স্মৃতি আক্তার
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01XXX-XXXXXX</span>
                </div>
            </article>
            <img src={contact} alt="ছবি: মোছাঃ স্মৃতি আক্তার" />
        </section>
        <section className="contacts">
            <article className="info">
                <h3 className="title">
                    ডাইরেক্টরঃ
                </h3>
                <h4 className="name">
                    মোঃ শামীম আহমেদ
                </h4>
                <div className="mobile">
                    <h3>মোবাইল নং-</h3>
                    <span className="number">01XXX-XXXXXX</span>
                </div>
            </article>
            <img src={contact} alt="ছবি: মোঃ শামীম আহমেদ" />
        </section>
        <section className="contacts">
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
            <img src={contact} alt="ছবি: শেখ শামীম আহমেদ" />
        </section>
        </article>
    </main>
  )
}
