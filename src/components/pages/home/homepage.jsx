export default function HomePage(){
    return(
        <main>
            <article>
                <strong>
                    <em>
                    <h2>{process.env.REACT_APP_SITE_TITLE}</h2>
                    </em>
                </strong>
                 <p>
                    এটি একটি আর্থিক সামাজিক সেবামূলক প্রতিষ্ঠান যা গ্রামীণ হতদরিদ্রদের ক্ষুদ্র ঋণ প্রদানের মাধ্যমে স্বাবলম্বী হতে সাহায্য করে।
                 </p>
            </article>
        </main>
    );
};