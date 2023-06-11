import React from 'react';
import './education.css'

export default function Educations() {
  return (
    <section className="education-details">
      <table className='education-data'>
        <caption><h3>শিক্ষাগত যোগ্যতা</h3></caption>
        <tr>
          <th>            ক্র.          </th>
          <th>পরীক্ষার ধরণ</th>
          <th> বোর্ডের নাম</th>
          <th>পরীক্ষার সাল</th>
          <th>ফলাফল</th>
          <th>ফলাফলের ধরণ</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="SSC-complete" id="SSC-complete" />
          </td>
          <td>
            <input type="text" name="SSC-Exam " id="SSC-Exam" placeholder='মাধ্যমিক/সমমান' />
          </td>
          <td>
            <input type="text" name="SSC-Board" id="SSC-Board" placeholder='পরীক্ষার বোর্ড' />
          </td>
          <td>
            <input type="number" name="SSC-Year" id="SSC-Year" placeholder='পাশের সাল' min={1965} max={2065} />
          </td>
          <td>
            <input type="text" name="SSC-Result" id="SSC-Result" placeholder='রেজাল্ট' />
          </td>
          <td>
          <select name="SSC-Result-Type" id="SSC-Result-Type" >
            <option value="G.P.A. Out of 4.00">G.P.A. Out of 4.00</option>
            <option value="G.P.A. Out of 5.00">G.P.A. Out of 5.00</option>
            <option value="শ্রেণি ভিত্তিক">শ্রেণি ভিত্তিক</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="HSC-complete" id="HSC-complete" />
          </td>
          <td>
            <input type="text" name="HSC-Exam " id="HSC-Exam" placeholder='উচ্চ মাধ্যমিক/সমমান' />
          </td>
          <td>
            <input type="text" name="HSC-Board" id="HSC-Board" placeholder='পরীক্ষার বোর্ড' />
          </td>
          <td>
            <input type="number" name="HSC-Year" id="HSC-Year" placeholder='পাশের সাল' min={1965} max={2065} />
          </td>
          <td>
            <input type="text" name="HSC-Result" id="HSC-Result" placeholder='রেজাল্ট' />
          </td>
        
          <td>
          <select name="HSC-Result-Type" id="HSC-Result-Type" >
            <option value="G.P.A. Out of 4.00">G.P.A. Out of 4.00</option>
            <option value="G.P.A. Out of 5.00">G.P.A. Out of 5.00</option>
            <option value="শ্রেণি ভিত্তিক">শ্রেণি ভিত্তিক</option>
          </select>
          </td>
        </tr>
        
        <tr>
          <td>
            <input type="checkbox" name="Graduation-complete" id="Graduation-complete" />
          </td>
          <td>
            <input type="text" name="Graduation-Exam " id="Graduation-Exam" placeholder='স্নাতক/সমমান' />
          </td>
          <td>
            <input type="text" name="Graduation-Board" id="Graduation-Board" placeholder='পরীক্ষার বোর্ড' />
          </td>
          <td>
            <input type="number" name="Graduation-Year" id="Graduation-Year" placeholder='পাশের সাল' min={1965} max={2065} />
          </td>
          <td>
            <input type="text" name="Graduation-Result" id="Graduation-Result" placeholder='রেজাল্ট' />
          </td>
          <td>
          <select name="Graduation-Result-Type" id="Graduation-Result-Type" >
            <option value="G.P.A. Out of 4.00">G.P.A. Out of 4.00</option>
            <option value="G.P.A. Out of 5.00">G.P.A. Out of 5.00</option>
            <option value="শ্রেণি ভিত্তিক">শ্রেণি ভিত্তিক</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="Post-Graducation-complete" id="Post-Graducation-complete" />
          </td>
          <td>
            <input type="text" name="Post-Graducation-Exam " id="Post-Graducation-Exam" placeholder='স্নাতকোত্তর/সমমান' />
          </td>
          <td>
            <input type="text" name="Post-Graducation-Board" id="Post-Graducation-Board" placeholder='পরীক্ষার বোর্ড' />
          </td>
          <td>
            <input type="number" name="Post-Graducation-Year" id="Post-Graducation-Year" placeholder='পাশের সাল' min={1965} max={2065} />
          </td>
          <td>
            <input type="text" name="Post-Graducation-Result" id="Post-Graducation-Result" placeholder='রেজাল্ট' />
          </td>
          <td>
          <select name="Post-Graduation-Result-Type" id="Post-Graduation-Result-Type" >
            <option value="G.P.A. Out of 4.00">G.P.A. Out of 4.00</option>
            <option value="G.P.A. Out of 5.00">G.P.A. Out of 5.00</option>
            <option value="শ্রেণি ভিত্তিক">শ্রেণি ভিত্তিক</option>
          </select>
          </td>
        </tr>
      </table>
    </section>
  );
};
