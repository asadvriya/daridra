import { Suspense, lazy } from "react";
import useDocumentTitle from "../../../../useDocumentTitle";
import { useSubmit } from "react-router-dom";
import "./apply.css";
const ApplicantContacts = lazy(()=>import("./contact/contact"));
const Personal = lazy (()=>import("./personal/personal"));
const Educations = lazy(()=>import("./education/education"));


export default function ApplicantApply(){
    useDocumentTitle("নতুন চাকরির আবেদন | daridra.com")
    return(
        <main>
            <section className="job-application">
                <h2>নতুন আবেদন</h2>
                <form action="/jobs/login" method="get" className="applicant-application">
                    <Suspense fallback={<div>loading...</div>}><Personal/></Suspense>
                    <Suspense fallback={<div>loading...</div>}><ApplicantContacts/></Suspense>
                    <Suspense fallback={<div>loading...</div>}><Educations/></Suspense>
                    <section className="job-form-button">
                    <button className="submit-job" type="submit" value={useSubmit}>Submit Your Job Application</button>
                    </section>
                </form>
            </section>
        </main>
    );
};