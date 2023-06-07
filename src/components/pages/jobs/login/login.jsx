import "./login.css";

export default function ApplicantLogIn(){
    return(
        <main>
            <article>
                <h1>আবেদনকারী লগইনঃ-</h1>
                <form action="" method="get">
                    <section>
                    <label htmlFor="Applicant ID">আইডি লিখুন</label>
                    <input type="number" name="Applicant ID" id="ApplicantID"/>
                    </section>
                    <section>
                        <label htmlFor="Applicant Mobile Number">মোবাইল নম্বর লিখুন</label>
                        <input type="tel" name="Applicant Mobile Number" id="ApplicantMobile" />
                    </section>
                    <section>
                        <label htmlFor="Applicant Password">পাসওয়ার্ড লিখুন</label>
                        <input type="password" name="Applicant Password" id="ApplicantPassword"/>
                    </section>
                    <div class="form-button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </article>
        </main>
    );
};
