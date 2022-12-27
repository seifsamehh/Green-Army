import React from 'react'
import HeaderAr from '../headerAr/HeaderAr'
import { Link } from "react-router-dom";
import ocean1 from '../../images/ocean-1.webp'
import ocean2 from '../../images/ocean-2.webp'
import './style/oceanar.css'
import FooterAr from '../footerAr/FooterAr';

const OceanAr = _ => {
  return (
    <section className='ocean-ar text-end'>
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
                <Link to="/OceanAr" className="link link--elara active">
                <span>احترار المحيطات</span>
                </Link>
                <Link to="/SeaLevelAr" className="link link--elara">
                <span>مستوى سطح البحر</span>
                </Link>
                <Link to="/SeaIceAr" className="link link--elara">
                <span>جليد البحر</span>
                </Link>
            </nav>
            <h1 className='text-7xl font-thin mb-6 mt-20 pr-4'>احترار المحيطات</h1>
        </div>
        <div className="upper flex gap-8 mb-8 p-4">
            <div className="right-part w-full">
                <img src={ocean1} alt="ocean warming 1" loading='lazy' className='mb-8' />
                <img src={ocean2} alt="ocean warming 2" loading='lazy' />
            </div>
            <div className="left-part">
                <p>
                يحدث 90 في المائة من الاحتباس الحراري في المحيط ، مما يتسبب في زيادة الحرارة الداخلية للمياه منذ بدء التسجيل<br/> الحديث في عام 1955 ، كما هو موضح في الرسم البياني العلوي. (تشير المنطقة الزرقاء المظللة إلى هامش عدم اليقين<br/> بنسبة 95٪). ويظهر هذا الرسم البياني التقديرات السنوية لأول 2000 متر من عمق المحيط.
                تمثل كل نقطة بيانات في<br/> الرسم البياني العلوي متوسط ​​خمس سنوات. على سبيل المثال ، تمثل قيمة 2018 متوسط ​​التغيير في المحتوى الحراري<br/> للمحيطات (منذ 1955) للأعوام 2016 إلى 2021 بما في ذلك.
                يتتبع الرسم البياني السفلي التغيرات الشهرية في المحتوى الحراري<br/> للمحيط لعمود الماء بأكمله (من أعلى إلى قاع المحيط) من عام 1992 إلى عام 2019 ، مع دمج الملاحظات من الأقمار الصناعية <br/> والأدوات الموجودة في المياه ، ونماذج الكمبيوتر.
                تتسبب الحرارة المخزنة في المحيط في تمدد مياهه ، وهو المسؤول عن ثلث<br/> إلى نصف ارتفاع مستوى سطح البحر في العالم. يتم تخزين معظم الطاقة المضافة على السطح ، على عمق من صفر إلى 700 متر. كانت السنوات العشر الماضية أكثر العقود دفئًا في المحيط منذ القرن التاسع عشر على الأقل. كان عام 2021 هو العام الأكثر دفئًا المسجل في المحيط وشهد أعلى مستوى سطح البحر في العالم
                </p>
            </div>
      </div>
      <FooterAr/>
    </section>
  )
}

export default OceanAr