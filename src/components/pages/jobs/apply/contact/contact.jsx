import React from 'react';
import "./contact.css";

export default function ApplicantContacts() {
  return (
    <section className='applicant-contacts'>        
        <section id='present-address' className='applicant-address'>
            <h4>স্থায়ী ঠিকানা</h4>
            <div className="Village">
                <label htmlFor="Village-Road">বাড়ি ও রাস্তা/গ্রাম</label>
                <input required type="text" placeholder='Village-Road' id='Village' />
            </div>
            <div className="Upazila">
                <label htmlFor="Sub-district">উপজেলা/থানা/পৌরসভা</label>
                <input required type="text" placeholder='Upazila/Thana' id='Upazila' />
            </div>
            <div className="District">
                <label htmlFor="District">জেলা/শহর</label>
                <input required type="text" placeholder='Town/District' id='District' />
            </div>
            <div className="Division">
                <label htmlFor="Division">বিভাগ</label>
                <input required type="text" placeholder='Division/State' id='Division'/>
            </div>
        </section>
        <section id='parmanent-address' className='applicant-address'>
            <h4>বর্তমান ঠিকানা</h4>
            <div className="Village">
                <label htmlFor="Village-Road">বাড়ি ও রাস্তা/গ্রাম</label>
                <input required type="text" placeholder='Village-Road' id='Village' />
            </div>
            <div className="Upazila">
                <label htmlFor="Sub-district">উপজেলা/থানা/পৌরসভা</label>
                <input required type="text" placeholder='Upazila/Thana' id='Upazila' />
            </div>
            <div className="District">
                <label htmlFor="District">জেলা/শহর</label>
                <input required type="text" placeholder='Town/District' id='District' />
            </div>
            <div className="Division">
                <label htmlFor="Division">বিভাগ</label>
                <input required type="text" placeholder='Division/State' id='Division'/>
            </div>
        </section>
        <section className="email-phone">
            <div className="mobile-number">
                <label htmlFor="Applicant-Mobile-Number">মোবাইল নম্বর</label>
                <input required type="tel" placeholder='Mobile Number' id='Phone'/>
            </div>
            <div className="email-address">
                <label htmlFor="Appliacnt-Email-Address">ইমেইল ঠিকানা</label>
                <input required type="email" placeholder='Email Address' id='Email'/>
            </div>
        </section>        
    </section>
  )
}
