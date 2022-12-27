import React from 'react'
import HeaderAr from '../headerAr/HeaderAr'
import { Link } from "react-router-dom";
import seaIce from '../../images/seaIce.webp'
import video from '../../videos/Ice.webm'
import './style/seacIceAr.css'
import FooterAr from '../footerAr/FooterAr';

const SeaIceAr = _ => {
  return (
    <section className='sea-ice-ar text-end'>
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
                <Link to="/SeaIceAr" className="link link--elara active">
                    <span>جليد البحر</span>
                </Link>
            </nav>
            <h1 className='text-7xl font-thin mb-6 mt-20 pr-4'>جليد البحر</h1>
        </div>
        <div className="upper flex gap-8 mb-8 p-4">
            <div className="right-part w-full">
                <img src={seaIce} alt="Sea ICe" loading='lazy' className='mb-8' />
            </div>
            <div className="left-part">
                <p>الخلاصة الرئيسية: حجم الجليد البحري في القطب الشمالي الصيفي يتقلص بنسبة 12.6٪ كل عقد نتيجة للاحترار العالمي

يصل الجليد البحري<br/> في القطب الشمالي إلى أدنى حد له (المنطقة التي تُظهر فيها أجهزة استشعار الأقمار الصناعية أن وحدات البكسل الفردية مغطاة بنسبة 15٪ على الأقل بالجليد) كل شهر سبتمبر.<br/> سبتمبر يتقلص الجليد البحري في القطب الشمالي الآن بمعدل 12.6٪ لكل عقد ، مقارنة بمتوسط مداه خلال الفترة من 1981 إلى 2010. يوضح هذا الرسم البياني حجم الجليد البحري في القطب الشمالي في شهر سبتمبر من كل عام منذ أن بدأت عمليات مراقبة الأقمار الصناعية في عام 1979. الشهرية القيمة المعروضة هي متوسط الملاحظات اليومية عبر شهر سبتمبر خلال كل عام ويتم قياسها من الأقمار الصناعية.

تُظهر الخريطة المتحركة أدناه الحجم الأدنى للجليد البحري في القطب الشمالي المُقاس كل عام منذ عام 1979 ، بناءً على ملاحظات الأقمار الصناعية. يعتبر مدى الجليد البحري لعام 2012 هو الأدنى في سجل الأقمار الصناعية
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

export default SeaIceAr