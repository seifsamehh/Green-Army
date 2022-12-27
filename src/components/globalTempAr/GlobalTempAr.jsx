import React from 'react'
import HeaderAr from '../headerAr/HeaderAr'
import { Link } from "react-router-dom";
import temp from '../../images/temp.webp'
import video from '../../videos/global.webm'
import './style/globaltempar.css'
import FooterAr from '../footerAr/FooterAr';

const GlobalTempAr = _ => {
  return (
    <section className='global-temp-ar text-end'>
      <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
      <HeaderAr/>
      <div className="heading flex justify-between items-center">
          <nav className='flex gap-6 ml-6'>
            <Link to="/OceanAr" className="link link--elara">
              <span>احترار المحيطات</span>
            </Link>
            <Link to="/SeaLevelAr" className="link link--elara">
              <span>مستوى سطح البحر</span>
            </Link>
            <Link to="/SeaIceAr" className="link link--elara">
              <span>جليد البحر</span>
            </Link>
          </nav>
          <h1 className='text-7xl font-thin mb-6 mt-20 pr-4'>درجة الحرارة العالمية</h1>
      </div>
      <div className="upper flex gap-8 mb-8 p-4">
        <div className="right-part w-full">
          <img src={temp} alt="global temperature" loading='lazy' className='mb-8' />
        </div>
        <div className="left-part">
          <p>الخلاصة الرئيسية: تعادل متوسط ​​درجة حرارة سطح الأرض العالمية في عام 2020 مع عام 2016 باعتباره العام الأكثر سخونة على الإطلاق <br/> واستمرارًا لاتجاه الاحترار على المدى الطويل بسبب الأنشطة البشرية.

يوضح هذا الرسم البياني التغير في درجة حرارة سطح الأرض مقارنة بالمتوسط<br/> ​​طويل الأجل من 1951 إلى 1980. وقد حدثت تسعة عشر عامًا من أشد الأعوام حرارة منذ عام 2000 ، باستثناء عام 1998. وقد تعادل عام 2020 مع عام 2016 وهو أعلى<br/> عام مسجل منذ ذلك الحين بدأ حفظ السجلات في عام 1880 (المصدر: NASA / GISS). تتطابق تحليلات وكالة ناسا بشكل عام مع التحليلات المستقلة التي أعدتها وحدة أبحاث المناخ والإدارة الوطنية للمحيطات والغلاف الجوي (NOAA).

يوضح الرسم المتحرك الموجود على اليمين التغير في درجات حرارة سطح الأرض. يظهر اللون الأزرق الداكن مناطق أكثر برودة من المتوسط. يظهر اللون الأحمر الداكن مناطق أكثر دفئًا من المتوسط. يتم تسوية الاختلافات قصيرة المدى باستخدام متوسط ​​تشغيل لمدة 5 سنوات لجعل الاتجاهات أكثر وضوحًا في هذه الخريطة.

يوضح رقم "درجة الحرارة العالمية" على لوحة معلومات الصفحة الرئيسية تغير درجة الحرارة العالمية منذ عام 1880 ، مقارنة بخط الأساس لناسا 1951-1980.

البيانات المعروضة هي الأحدث المتاحة ، ويتم تحديثها سنويًا
          </p>
        </div>
      </div>
      <div className="bottom flex justify-center">
        <video controls muted loop>
          <source src={video} type='video/webm' />
        </video>
      </div>
      <FooterAr/>
    </section>
  )
}

export default GlobalTempAr