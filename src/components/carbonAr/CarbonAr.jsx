import React from 'react'
import carbon1 from '../../images/carbon-1.webp'
import carbon2 from '../../images/carbon-2.webp'
import video from '../../videos/co2.webm'
import FooterAr from '../footerAr/FooterAr'
import HeaderAr from '../headerAr/HeaderAr'
import './style/carbonAr.css'

const CarbonAr = _ => {
  return (
    <section className='carbon-ar'>
        <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
      <HeaderAr/>
      <h1 className='text-7xl font-thin mb-6 mt-20 pr-4 text-end'>ثاني أكسيد الكربون</h1>
      <div className="upper flex gap-8 mb-8 p-4">
        <div className="right-part">
          <img src={carbon1} alt="carbon 1" loading='lazy' className='mb-8' />
          <img src={carbon2} alt="carbon 2" loading='lazy' />
        </div>
        <div className="left-part text-end">
          <p>ثاني أكسيد الكربون (CO2) هو غاز مهم للاحتباس الحراري ، أو غاز الدفيئة ، الذي يأتي من استخراج وحرق الوقود الأحفوري <br/>(مثل الفحم والنفط والغاز الطبيعي) ، من حرائق الغابات ، ومن العمليات الطبيعية مثل الانفجارات البركانية. يوضح الرسم البياني الأول مستويات ثاني أكسيد الكربون في الغلاف الجوي<br/> التي تم قياسها في مرصد ماونا لوا ، هاواي ، في السنوات الأخيرة ، مع إزالة التغيرات الموسمية الطبيعية. يوضح الرسم البياني الثاني<br/> مستويات ثاني أكسيد الكربون خلال الدورات الجليدية الثلاث الأخيرة للأرض ، كما تم التقاطها بواسطة فقاعات الهواء المحبوسة في الصفائح الجليدية والأنهار الجليدية.
منذ بداية العصر الصناعي (في القرن الثامن عشر) ، أدت الأنشطة البشرية إلى زيادة ثاني أكسيد الكربون في الغلاف الجوي بنسبة 50٪ - مما يعني أن كمية ثاني أكسيد الكربون أصبحت الآن 150٪ من قيمتها في عام 1750</p>
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

export default CarbonAr