import React from 'react'
import FooterAr from '../footerAr/FooterAr'
import HeaderAr from '../headerAr/HeaderAr'
import footprint from '../../images/carbon-footprint.webp'
import './style/carbonFootAr.css'

const CarbonFootAr = _ => {
  return (
    <section className='footprint-ar'>
        <df-messenger
            intent="WELCOME"
            chat-title="GreenArmy"
            agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
            language-code="en"
            chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
        <HeaderAr/>
        <div className="content flex flex-col justify-center items-center gap-8 p-8">
            <h1 className='text-6xl font-thin mb-6'>كيف تحسب بصمتك الكربونية ؟</h1>
            <h2 className='text-4xl'>"ما هي بصمة الكربون؟" أنت تسأل</h2>
            <p className='text-center'>
            كلنا نترك أثرا على كوكبنا. فكر في بصمتك الكربونية على أنها تأثيرك الشخصي.
            من الناحية الفنية ، فإن بصمتك الكربونية هي كمية غازات الدفيئة التي تنتجها بوحدات ثاني أكسيد الكربون. يتم تحديد هذه البصمة حسب نمط حياتك وأنشطتك اليومية ، مثل السفر (السيارة والطائرة والقطار وما إلى ذلك) ، والاستخدام الكهربائي ، واستهلاك المنتجات والخدمات ، والأطعمة التي تتناولها ، وما إلى ذلك.
            تعد غازات الدفيئة هي المساهم الرئيسي في العديد من القضايا البيئية اليوم ، بما في ذلك التلوث وتغير المناخ والاحتباس الحراري.
            </p>
            <img src={footprint} alt="carbon footprint" loading='lazy' />
            <p className='text-center'>
هناك عدد من الموارد المجانية عبر الإنترنت التي توضح كيفية حساب بصمتك الكربونية ، بما في ذلك الآلة الحاسبة سهلة الاستخدام ، أو هذه الآلة الحاسبة من The Nature Conservancy ، أو هذه من وكالة حماية البيئة (EPA).

ألكسندرا شيمو باري ، مؤلفة كتاب "معادلة البيئة" ، توصلت إلى صيغة تشرح كيفية حساب بصمتك الكربونية في المنزل أيضًا! ببساطة اتبع الخطوات أدناه.

اضرب فاتورة الكهرباء الشهرية في 105
اضرب فاتورة الغاز الشهرية في 105
اضرب فاتورة الزيت الشهرية في 113
اضرب إجمالي الأميال السنوية على سيارتك في 0.79
اضرب عدد الرحلات التي قمت بها في العام الماضي (4 ساعات أو أقل) في 1100
اضرب عدد الرحلات التي قمت بها العام الماضي (4 ساعات أو أكثر) في 4400
أضف 184 إذا لم تقم بإعادة تدوير الجرائد
أضف 166 إذا لم تقم بإعادة تدوير الألومنيوم والقصدير
أضف 1-8 معًا لإجمالي بصمتك الكربونية
ضع في اعتبارك أن البصمة الكربونية "المثالية" (أو البصمة "المنخفضة") تتراوح من 6000 إلى 15999 رطلاً في السنة. 16000-22000 يعتبر متوسط. أقل من 6000 يعتبر منخفضًا جدًا. أكثر من 22000؟ قد ترغب في أخذ بعض هذه الممارسات "الخضراء الحية" في الاعتبار
            </p>
            <a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/" target="_blank">
                <button className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text text-2xl">احسب</span>
                    </span>
                </button>
            </a>
        </div>
        <FooterAr/>
    </section>
  )
}

export default CarbonFootAr