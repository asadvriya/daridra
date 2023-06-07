import React from 'react';
import "./personal.css";

export default function Personal() {
  return (
    <section className='personal-info'>
        <h3>ব্যাক্তিগত তথ্যঃ</h3>
        <section className="personal-data">
        <div className="applicant-name">
            <label htmlFor="applicant-name">আবেদনকারীর নাম</label>
            <input required type="text" placeholder="Applicant Name" id="applicant-name"/>
        </div>
        <div className="applicant-post">
            <label htmlFor="applicant-post">নির্ধারিত পোস্ট</label>
            <input required list="job-list" id="selected-job" placeholder='Select Job'/>
            <datalist id="job-list">
                <option value="Choice 1">Designaton 1</option>
                <option value="Choice 2">Designaton 2</option>
                <option value="Choice 3">Designaton 3</option>
                <option value="Choice 4">Designaton 4</option>
            </datalist>                            
        </div>
        <div className="father-name">
            <label htmlFor="applicant-father-name">পিতার নাম</label>
            <input required type="text" placeholder="Father's Name" id="father-name"/>
        </div>
        <div className="mother-name">
            <label htmlFor="applicant-mother-name">মাতার নাম</label>
            <input required type="text" placeholder="Mother's Name" id="mother-name"/>
        </div>
        <div className="date-of-birth">
            <label htmlFor="date-of-birth">জন্ম তারিখ</label>
            <input required type="date" id="date-of-birth"/>
        </div>
        <div className="NID">
            <label htmlFor="Nationa Identity Card No.">জাতীয় পরিচয়পত্র নম্বর</label>
            <input required type="number" placeholder="NID/Smart Card No." id="nid" />
        </div>
        <div className="religion">
            <label htmlFor="applicant-religion">ধর্ম</label>
            <input required list="religions" id="religion" placeholder='Select Religion'/>
            <datalist id="religions">
                <option value="Islam">ইসলাম</option>
                <option value="Hindi">হিন্দু</option>
                <option value="Christian">খ্রিস্টান</option>
                <option value="Buddha">বৌদ্ধ</option>
                <option value="Others">অন্যান্য</option>
            </datalist>
        </div>
        <div className="gender">
            <label htmlFor="applicant-gender">লিঙ্গ</label>
            <input required list="genders" id="gender" placeholder='Select Gender'/>
            <datalist id="genders">
                <option value="Male">পুরুষ</option>
                <option value="Female">নারী</option>
                <option value="Others">অন্যান্য</option>
            </datalist>
        </div>
        <div className="nationality">
            <label htmlFor="applicant-nationality">জাতীয়তা</label>
            <input required list='nationalities' id='nationality' placeholder='Nationality'/>
            <datalist id='nationalities'>
                <option value="Bangladeshi">বাংলাদেশী</option>
                <option value="Other">অন্য</option>
            </datalist>
        </div>
        <div className="maritial-status">
            <label htmlFor="applicant-maritial-status">বৈবাহিক অবস্থা</label>
            <input required list="maritials" id='marriage' placeholder='Maritial Status' />
            <datalist id='maritials'>
                <option value="Married">বিবাহিত</option>
                <option value="Unmarried">অবিবাহিত</option>
                <option value="Others">অন্যান্য</option>
            </datalist>
        </div>
        </section>
    </section>
  );
};
