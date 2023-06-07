import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

export default function Services() {
  useDocumentTitle("আমাদের সেবাসমূহ | daridra.com")
  return (
    <main>
      <article>
        <h2>
          আমাদের সেবাসমূহঃ-
        </h2>
        <ul>
          <li>
            ক্ষুদ্র ঋণ
          </li>
          <li>
            ভিপিএস
          </li>
          <li>
            ফিক্সড ডিপোজিট
          </li>
          <li>
            সঞ্চয় জমা
          </li>
        </ul>
      </article>
    </main>
  );
};
