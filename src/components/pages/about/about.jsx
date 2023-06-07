import useDocumentTitle from "../../../useDocumentTitle";

export default function AboutUs() {
  useDocumentTitle("আমাদের সম্পর্কে জানুন | daridra.com")
  return (
    <main>
        <article>
            <h1>
                আমাদের সম্পর্কেঃ-
            </h1>
            <p>
            {process.env.REACT_APP_SITE_TITLE} একটি আর্থিক সামাজিক ও সেবামূলক প্রতিষ্ঠান যা হতদরিদ্রদের ক্ষুদ্র ঋণ প্রদানের মাধ্যমে স্বাবলম্বী হতে সাহায্য করে।
            </p>
        </article>
    </main>
  );
};
