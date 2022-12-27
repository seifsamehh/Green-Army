import React from 'react'
import HeaderAr from '../headerAr/HeaderAr'
import { Link } from "react-router-dom";
import level1 from '../../images/level-1.webp'
import level2 from '../../images/level-2.webp'
import './style/sealevelar.css'
import FooterAr from '../footerAr/FooterAr';

const SeaLevelAr = _ => {
  return (
    <section className='sea-level-ar text-end'>
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
                <Link to="/SeaLevelAr" className="link link--elara active">
                <span>مستوى سطح البحر</span>
                </Link>
                <Link to="/SeaIceAr" className="link link--elara">
                <span>جليد البحر</span>
                </Link>
            </nav>
            <h1 className='text-7xl font-thin mb-6 mt-20 pr-4'>مستوى سطح البحر</h1>
        </div>
        <div className="upper flex gap-8 mb-8 p-4">
            <div className="right-part w-full">
                <img src={level1} alt="Sea level 1" loading='lazy' className='mb-8' />
                <img src={level2} alt="Sea level 2" loading='lazy' />
            </div>
            <div className="left-part">
                <p>
                    نصيحة أساسية: ترتفع مستويات البحار العالمية نتيجة للاحتباس الحراري الذي يسببه الإنسان ، مع المعدلات الأخيرة التي لم يسبق لها<br/> مثيل على مدى أكثر من 2500 عام الماضية
                    ارتفاع مستوى سطح البحر ناتج بشكل أساسي عن عاملين مرتبطين بالاحترار العالمي<br/> المياه المضافة من ذوبان الصفائح الجليدية والأنهار الجليدية ، وتوسع مياه البحر مع ارتفاع درجة حرارتها. يتتبع الرسم البياني الأول<br/> التغير في مستوى سطح البحر العالمي منذ عام 1993 ، كما لوحظ من قبل الأقمار الصناعية.
                    يُظهر الرسم البياني الثاني ، المأخوذ من<br/> مقياس المد والجزر الساحلي وبيانات الأقمار الصناعية ، مدى تغير مستوى سطح البحر من حوالي عام 1900 إلى عام 2018. العناصر<br/> ذات الإيجابيات (+) هي عوامل تؤدي إلى زيادة مستوى سطح البحر العالمي ، في حين أن السالب (-) هي ما سبب انخفاض مستوى سطح البحر. يتم عرض هذه العناصر في الوقت الذي كانت تؤثر فيه على مستوى سطح البحر.
                    البيانات المعروضة هي الأحدث المتاحة ، مع تأخير لمدة أربعة إلى خمسة أشهر اللازمة للمعالجة
                </p>
            </div>
      </div>
      <FooterAr/>
    </section>
  )
}

export default SeaLevelAr