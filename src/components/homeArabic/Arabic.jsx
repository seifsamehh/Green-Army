import React from 'react'
import HeaderAr from '../headerAr/HeaderAr'
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion"
import introVideo from '../../videos/intro.webm'
import introAr from '../../images/intro-ar-lg.webp'
import introSm from '../../images/intro-ar.webp'
import change1 from '../../images/change-1.webp'
import change2 from '../../images/change-2.webp'
import change3 from '../../images/change-3.webp'
import change4 from '../../images/change-4.webp'
import change5 from '../../images/change-5.webp'
import change6 from '../../images/change-6.webp'
import cause1 from '../../images/cause-1.webp'
import cause2 from '../../images/cause-2.webp'
import sun from '../../images/sun.webp'
import warming1 from '../../images/warming-1.webp'
import warming2 from '../../images/warming-2.webp'
import drive from '../../images/drive.webp'
import nature1 from '../../images/nature-1.webp'
import nature2 from '../../images/nature-2.webp'
import nature3 from '../../images/nature-3.webp'
import greenhouse from '../../images/greenhouse.webp'
import talks1 from '../../images/talks-1.webp'
import talks2 from '../../images/talks-2.webp'
import talks3 from '../../images/talks-3.webp'
import effect1 from '../../images/effect-1.webp'
import effect2 from '../../images/effect-2.webp'
import solution1 from '../../images/solution-1.webp'
import solution2 from '../../images/solution-2.webp'
import solution3 from '../../images/solution-3.webp'
import solution4 from '../../images/solution-4.webp'
import solution5 from '../../images/solution-5.webp'
import solution6 from '../../images/solution-6.webp'
import solution7 from '../../images/solution-7.webp'
import solution8 from '../../images/solution-8.webp'
import solution9 from '../../images/solution-9.webp'
import solution10 from '../../images/solution-10.webp'
import nasa from '../../images/nasa-logo.svg'
import './style/arabic.css'
import FooterAr from '../footerAr/FooterAr';

const Arabic = _ => {
  return (
    <article className='home-ar overflow-x-hidden'>
      <HeaderAr/>
      {/* start intro */}
      <section className='page-intro-ar flex justify-center items-center flex-col gap-12'>
        <div id="app" className='flex items-center w-full'>
          <div className="image flex justify-center">
            <img src={introAr} className="lg" alt='intro arabic' />
            <img src={introSm} className="sm" alt='intro arabic' />
          </div>
          <div className="title flex justify-center items-center">
            <div className="title-inner">
              <div className="cafe">
                <div className="cafe-inner">الجيش</div>
              </div>
              <div className="mozart">
                <div className="mozart-inner">الأخضر</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end intro */}
      {/* start abstract */}
      <section className="abstract-ar flex items-center py-16 overflow-hidden">
        <div className="right-part">
          <p>من المتوقع أن يؤدي تغير المناخ إلى تفاقم الظواهر المتطرفة المرتبطة بالحرارة والتي تؤثر على صحة الإنسان والنظم البيئية والإيكولوجية. إن تأثيرات تغير المناخ واضحة بالفعل في مصر
وعالميا</p>
          <p className='my-8'>غالبًا ما ترتبط موجات الحرارة بحالات الجفاف وحرائق الغابات التي تحدث
آثار بمليارات الدولارات على المجتمعات الوطنية والعالمية. يبدو أن هذه الظواهر تتزايد في تواترها وشدتها ومدتها ، وتؤثر على العلاقة بين الماء والطاقة والغذاء مع ما يترتب على ذلك من آثار على الهياكل الاجتماعية والاقتصادية</p>
          <p>بيئي
تشمل العوامل المشتركة المرتبطة بموجات الحرارة والإجهاد الحراري والتي تؤثر على الصحة تلوث الهواء (PM2.5 - جزيئات لا تقدر بثمن يبلغ أقطارها 2.5 ميكرومتر وأصغر) ، وتدهور الظروف الصحية الموجودة مسبقًا ، وتوافر البنية التحتية أو عدم توفرها. (على سبيل المثال ، تكييف الهواء ، والقدرة الكافي</p>
        </div>
        <div className="left-part w-full text-center">
          <Parallax translateY={["-170px", "200px"]}>
            <h1 className='font-thin text-7xl'>الملخص</h1>
          </Parallax>
        </div>
      </section>
      {/* end abstract */}
      {/* start changes */}
      <section className="changes-ar flex justify-center overflow-x-hidden items-center flex-col gap-8 h-screen">
        <Parallax translateX={[-20, 10]}>
          <div className="gallery flex gap-4">
            <img src={change1} alt="change 1" className='logo' />
            <img src={change2} alt="change 2" className='logo' />
            <img src={change3} alt="change 3" className='logo' />
            <img src={change4} alt="change 4" className='logo' />
            <img src={change5} alt="change 5" className='logo' />
            <img src={change6} alt="change 6" className='logo' />
          </div>
        </Parallax>
        <h1 className='text-7xl'>التغيرات المناخية</h1>
        <Parallax translateX={[10, -30]}>
          <div className="gallery-2 flex gap-4">
            <img src={change6} alt="change 6" className='logo' />
            <img src={change5} alt="change 5" className='logo' />
            <img src={change4} alt="change 4" className='logo' />
            <img src={change3} alt="change 3" className='logo' />
            <img src={change2} alt="change 2" className='logo' />
            <img src={change1} alt="change 1" className='logo' />
          </div>
        </Parallax>
      </section>
      {/* end changes */}
      {/* start intro ar */}
      <section className="intro-ar flex items-center py-16 overflow-hidden">
        <div className="right-part">
          <p>ومع ذلك ، فإن هذه الفترة الحالية من الاحترار تحدث بسرعة أكبر من أي أحداث سابقة.
لقد أصبح من الواضح أن البشرية تسببت في معظم الاحترار في القرن الماضي
.إطلاق الغازات المسببة للاحتباس الحراري - التي يشار إليها عادة باسم غازات الاحتباس الحراري - إلى الطاقة
حياتنا الحديثة</p>
          <p className='my-8'>نحن نقوم بذلك من خلال حرق الوقود الأحفوري ، والزراعة ، واستخدام الأراضي ، وغيرها من الأنشطة التي تؤدي إلى تغير المناخ. بلغت غازات الدفيئة أعلى مستوياتها منذ 800 ألف عام. هذا الارتفاع السريع يمثل مشكلة لأنه يغير مناخنا بمعدل سريع جدًا بحيث يتعذر على الكائنات الحية التكيف معه</p>
          <p>يشمل تغير المناخ ارتفاع درجات الحرارة ، والظواهر الجوية المتطرفة ، وارتفاع مستويات سطح البحر ، وتحول مجموعات الحياة البرية وموائلها<br/> ومجموعة من التأثيرات الأخرى. ارتفعت درجة حرارة الأرض بمقدار 1.3 درجة مئوية في المتوسط ​​مقارنة بمناخ ما قبل الصناعة ، ويرجع ذلك أساسًا<br/> إلى حرق البشر للفحم والنفط والغاز. يستمر الاحتباس الحراري في الزيادة عند 0.1 درجة مئوية تقريبًا كل خمس سنوات. تشمل الآثار المترتبة على الاحتباس الحراري موجات الحرارة الشديدة ، والجفاف ، وحرائق الغابات ، والعواصف ، والفيضانات ، وارتفاع مستوى سطح البحر ، وذوبان الأنهار الجليدية والصفائح الجليدية ، وفشل المحاصيل ، وانقراض الأنواع ، وفقدان النظام البيئي ، والضغط على النظم البشرية (المياه ، والغذاء ، والبنية التحتية ، والاقتصاد. والتأمين وما إلى ذلك)</p>
        </div>
        <div className="left-part w-full text-center">
          <Parallax translateY={["-170px", "200px"]}>
            <h1 className='font-thin text-7xl'>المقدمة</h1>
          </Parallax>
        </div>
      </section>
      {/* end intro ar */}
      {/* start video ar */}
      <section className="video-ar flex justify-center">
        <video controls loop>
          <source src={introVideo} type="video/webm" />
        </video>
      </section>
      {/* end video ar */}
      {/* start causes ar */}
      <section className="causes-ar py-12">
        <Parallax translateX={[20, -10]}>
          <h1 className='font-thin text-7xl text-end'>الأسباب</h1>
        </Parallax>
        <div className="upper-part flex items-center justify-around">
          <motion.img src={cause1} alt="cause 1" loading='lazy'
          drag
          dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }} />
          <div className="content text-end">
            <h2 className='text-3xl font-semibold mb-4'>ما هو تغير المناخ؟</h2>
            <p className='leading-loose'>المناخ العالمي هو النظام المتصل بالشمس والأرض والمحيطات والرياح والأمطار والثلج<br/> والغابات والصحاري والسافانا وكل ما يفعله الناس أيضًا. يمكن وصف مناخ مكان ما ،<br/> على سبيل المثال ، نيويورك ، بأنه هطول الأمطار ، وتغير درجات الحرارة خلال العام ،<br/> وما إلى ذلك. لكن المناخ العالمي هو أكثر من "متوسط" مناخات أماكن معينة</p>
          </div>
        </div>
        <div className="footer-part flex items-center justify-around">
          <div className="content text-end">
            <h2 className='text-3xl font-semibold mb-4'>نظام المناخ</h2>
            <p className='leading-loose'>يتضمن وصف المناخ العالمي كيف ، على سبيل المثال ، يغذي ارتفاع درجة حرارة المحيط الهادئ<br/> الأعاصير التي تهب بقوة أكبر ، وتسقط المزيد من الأمطار وتسبب المزيد من الضرر ، ولكنها أيضًا<br/> تحولات تيارات المحيطات العالمية التي تذوب جليد القارة القطبية الجنوبية مما يؤدي ببطء إلى<br/> ارتفاع مستوى سطح البحر حتى جديد. ستكون يورك تحت الماء. هذا الترابط النظامي هو الذي<br/> يجعل تغير المناخ العالمي مهمًا للغاية ومعقدًا للغاية</p>
          </div>
          <motion.img src={cause2} alt="cause 2" loading='lazy' 
          drag
          dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
        </div>
      </section>
      {/* end causes ar */}
      {/* start sun ar */}
      <section className="sun-ar flex justify-center items-center flex-col h-screen bg-black overflow-hidden">
        <Parallax translateY={["-200px", "100px"]}>
          <img src={sun} alt="sun" className='logo' />
        </Parallax>
        <h1 className='text-8xl'>الاحتباس الحرارى</h1>
      </section>
      {/* end sun ar */}
      {/* start global warming ar */}
      <section className="global-warming-ar py-12 flex justify-around items-center">
        <div className="right-part flex justify-center flex-col gap-8">
          <motion.img src={warming1} alt="warming 1" loading='lazy' 
          drag
          dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
          <motion.img src={warming2} alt="warming 2" loading='lazy' 
          drag
          dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
        </div>
        <div className="left-part text-end">
          <p>لطالما عمل الغلاف الجوي للأرض مثل صوبة زجاجية لالتقاط حرارة الشمس ، مما يضمن تمتع الأرض بدرجات حرارة<br/> سمحت بظهور أشكال الحياة كما نعرفها ، بما في ذلك البشر. بدون الدفيئة في الغلاف الجوي ، ستكون الأرض شديدة<br/> البرودة. ومع ذلك ، فإن الاحتباس الحراري هو ما يعادل دفيئة ذات<br/> زجاج عاكس عالي الكفاءة تم تركيبه بطريقة خاطئة</p>
          <p className='my-8'>من الناحية الأيونية ، قد يأتي أفضل دليل على ذلك من حدث التبريد الرهيب الذي حدث منذ حوالي 1500 عام. تسبب<br/> انفجاران بركانيان هائلان ، بعد عام واحد بعد الآخر ، في انتشار الكثير من الغبار الأسود في الغلاف الجوي العلوي لدرجة أن<br/> القليل من ضوء الشمس يمكن أن يخترق ، وتراجعت درجات الحرارة. فشلت المحاصيل ومات الناس جوعا وبدأ الموت<br/> الأسود مسيرته. عندما سقط الغبار ببطء على الأرض ، تمكنت الشمس مرة أخرى من تحذير العالم وعادت الحياة إلى طبيعتها</p>
          <p>اليوم ، لدينا مشكلة معاكسة ، واليوم ، لا تكمن المشكلة في قلة دفء الشمس الذي يصل إلى الأرض ، ولكن هناك<br/> الكثير من الحرارة التي يتم احتجازها في غلافنا الجوي. يرتفع بشكل أسرع من أي وقت مضى في التاريخ. تقدم وكالة<br/> ناسا دورة تدريبية ممتازة في علم الاحتباس الحراري</p>
        </div>
      </section>
      {/* end global warming ar */}
      {/* start global drive ar */}
      <section className="global-drive-ar py-12 flex justify-around items-center">
        <div className="right-part">
          <motion.img src={drive} alt="drive" loading='lazy' 
          drag
          dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
        </div>
        <div className="left-part text-end">
          <Parallax translateX={[10, -20]}>
            <h1 className='text-6xl font-thin mb-6'>كيف يؤدي الاحتباس الحراري<br/> إلى تغير المناخ؟</h1>
          </Parallax>
          <p>الحرارة هي الطاقة وعندما تضيف الطاقة إلى أي تغييرات تحدث في النظام ، لأن جميع الأنظمة في نظام المناخ العالمي متصلة ببعضها البعض <br/> فإن إضافة الطاقة الحرارية يتسبب في تغير المناخ العالمي ككل ، فمعظم العالم مغطى بالمحيطات التي ترتفع درجة<br/> حرارتها. عندما ترتفع درجة حرارة المحيط ، يتبخر المزيد من المياه إلى غيوم ، وحيث تتشكل العواصف مثل الأعاصير والأعاصير <br/> تكون النتيجة عواصف كثيفة الاستهلاك للطاقة ، والغلاف الجوي الأكثر دفئًا يجعل الأنهار الجليدية والتجمعات الثلجية الجبلية <br/> والغطاء الجليدي القطبي ، والدرع الجليدي العظيم. البروز من القارة القطبية الجنوبية يذوب ويرفع مستوى سطح البحر. تغير التغيرات<br/> في درجات الحرارة الأنماط العظيمة للرياح التي تجلب الرياح الموسمية في آسيا والأمطار والثلوج حول العالم ، مما يجعل الجفاف والطقس<br/> غير المتوقع أكثر شيوعًا ، ولهذا توقف العلماء عن التركيز فقط على ظاهرة الاحتباس الحراري والتركيز الآن على الموضوع الأكبر المتمثل في تغير المناخ</p>
        </div>
      </section>
      {/* end global drive ar */}
      {/* start causes global ar */}
      <section className="causes-global-ar py-12 overflow-x-hidden text-end">
        <Parallax translateX={[10,-20]}>
          <h1 className='text-6xl font-thin mb-6'>ما الذي يسبب الاحتباس الحراري؟</h1>
        </Parallax>
        <div className="upper-part flex justify-around items-center gap-6 p-4">
          <p>يحدث الاحتباس الحراري عندما يتجمع ثاني أكسيد الكربون (CO<sub>2</sub>) وملوثات الهواء الأخرى في الغلاف الجوي وتمتص أشعة الشمس والإشعاع الشمسي الذي ارتد عن سطح الأرض. عادةً ما يتسرب هذا الإشعاع إلى الفضاء ، لكن هذه الملوثات ، التي يمكن أن تستمر لسنوات إلى قرون في الغلاف الجوي ، تحبس الحرارة وتتسبب في ارتفاع درجة حرارة الكوكب. تُعرف هذه الملوثات المسببة للاحتباس الحراري - على وجه التحديد ثاني أكسيد الكربون والميثان وأكسيد النيتروز وبخار الماء والغازات المفلورة الاصطناعية - باسم غازات الاحتباس الحراري ، ويسمى تأثيرها تأثير الاحتباس الحراري</p>
          <p>على الرغم من أن الدورات والتقلبات الطبيعية قد تسببت في تغير مناخ الأرض عدة مرات على مدار 800000 سنة الماضية ، فإن عصرنا الحالي من الاحتباس الحراري يُعزى بشكل مباشر إلى النشاط البشري - على وجه التحديد إلى حرقنا للوقود الأحفوري مثل الفحم والنفط والبنزين والوقود الطبيعي. الغاز ، مما يؤدي إلى ظاهرة الاحتباس الحراري. أكبر مصدر لغازات الاحتباس الحراري في الولايات المتحدة هو النقل (29 في المائة) ، يليه عن كثب إنتاج الكهرباء (28 في المائة) والنشاط الصناعي (22 في المائة)</p>
          <p>يتطلب الحد من التغير المناخي الخطير إجراء تخفيضات كبيرة في الانبعاثات واستخدام بدائل للوقود الأحفوري في جميع أنحاء العالم. النبأ السار هو أن البلدان في جميع أنحاء العالم قد التزمت رسميًا - كجزء من اتفاقية باريس للمناخ لعام 2015 - بخفض انبعاثاتها من خلال وضع معايير جديدة وصياغة سياسات جديدة لتلبية أو حتى تجاوز تلك المعايير. النبأ السيئ هو أننا لا نعمل بالسرعة الكافية. لتجنب أسوأ آثار تغير المناخ ، يخبرنا العلماء أننا بحاجة إلى تقليل انبعاثات الكربون العالمية بنسبة تصل إلى 40 في المائة بحلول عام 2030. ولكي يحدث ذلك ، يجب على المجتمع العالمي اتخاذ خطوات فورية وملموسة: لإزالة الكربون من توليد الكهرباء بشكل عادل. الانتقال من الإنتاج المعتمد على الوقود الأحفوري إلى مصادر الطاقة المتجددة مثل الرياح والطاقة الشمسية ؛ لكهربة سياراتنا وشاحناتنا ؛ ولتعظيم كفاءة الطاقة في المباني والأجهزة والصناعات</p>
        </div>
        <div className="middle-part flex justify-around items-center my-8">
          <img src={nature1} alt="nature 1" />
          <img src={nature2} alt="nature 2" />
          <img src={nature3} alt="nature 3" />
        </div>
      </section>
      {/* end causes global ar */}
      {/* start green house ar */}
      <section className="greenhouse-ar flex justify-around py-12 overflow-hidden">
        <div className="left-part">
          <Parallax translateY={[-20, 120]}>
            <img src={greenhouse} alt="green house" className='logo' />
          </Parallax>
        </div>
        <div className="right-part text-end p-4">
          <h1 className='text-6xl font-thin mb-6'>ما هي أهم غازات الاحتباس الحراري؟</h1>
            <p>الغازات الدفيئة الأكثر شيوعًا والأكثر شيوعًا هي ثاني أكسيد الكربون أو ثاني أكسيد الكربون ، في الواقع ، نظرًا لأنها شائعة جدًا <br/> يستخدمها العلماء كمعيار أو
قياس الأشياء التي تدفئ الجو. الميثان ، غازات الدفيئة الهامة الأخرى ، على سبيل المثال ،
يكون<br/> الاحترار 28-36 مرة مثل ثاني أكسيد الكربون عندما يكون في الغلاف الجوي العلوي (أكثر غازات الدفيئة التي نوقشت شيوعًا<br/> هي: 1- ثاني أكسيد الكربون أو
ينتج ثاني أكسيد الكربون في أي وقت يتم فيه حرق شيء ما. إنه أكثر غازات الدفيئة شيوعًا <br/> ويتكون من
بعض التدابير تقريبًا يتم استخدامه كعلامة من قبل الولايات المتحدة
وكالة حماية البيئة ، على سبيل المثال <br/> بسبب انتشارها في كل مكان. يتم تعيين ثاني أكسيد الكربون أ
القدرة على إحداث الاحترار العالمي<br/> أو احتمالية الاحترار العالمي تبلغ 1
            </p>
            <p className='my-8'>يتم إنتاج الميثان أو الميثان في العديد من عمليات الاحتراق وأيضًا عن طريق التحلل اللاهوائي ، على سبيل المثال <br/> في حقول الأرز المغمورة بالمياه ، ومعدة الخنازير والبقر ، وبرك روث الخنازير. يتحلل الميثان في غضون 10 سنوات<br/> تقريبًا ، ولكنه يمثل مقدمة لـ
الأوزون ، في حد ذاته غازات الدفيئة الهامة. CH4 على إحداث الاحترار العالمي من 28 إلى 36
            </p>
            <p>أكسيد النيتروز في الباران <br/>(غاز الضحك) ،
NO / N2O أو أكاسيد النيتروجين ببساطة هو منتج ثانوي لـ
إنتاج الأسمدة واستخدامها ، والعمليات الصناعية الأخرى  واحتراق بعض المواد. يدوم أكسيد النيتروز وقتًا طويلاً جدًا في الغلاف الجوي ، ولكن عند نقطة 100 عام مقارنةً بثاني أكسيد الكربون ، فإن قدرته على الاحترار العالمي هي 265-298
            </p>
            <p className='my-8'>تم إنشاء الغازات المفلورة كبديل لمواد التبريد المستنفدة لطبقة الأوزون ، ولكنها أثبتت أنها طويلة الأمد للغاية<br/> وتؤدي إلى ارتفاع درجة حرارة الغازات المسببة للاحتباس الحراري. ليس لديهم مصادر طبيعية <br/> لكنهم بالكامل
من صنع الإنسان. في المائة عام من المقارنة ،
تتراوح قدرة الاحترار العالمي الخاصة بها<br/> من 1800 إلى 8000 و
بعض المتغيرات أعلى 10000
            </p>
            <p>يستخدم سادس فلوريد الكبريت أو SF6 في الإجراءات الطبية المتخصصة ، ولكن في المقام الأول فيما يسمى بالمواد العازلة للكهرباء ، وخاصة السوائل<br/> العازلة للكهرباء.
هذه تستخدم كعوازل في الجهد العالي
تطبيقات مثل المحولات وتبديل الشبكة
هيأ. يدوم سداسي فلوريد الكبريت لآلاف السنين في الغلاف الجوي العلوي ويبلغ قدرته على إحداث الاحترار العالمي 22800
            </p>
        </div>
      </section>
      {/* end green house ar */}
      {/* start talks ar */}
      <section className="talks-ar flex justify-around items-center gap-4 py-12 text-end">
        <Parallax translateY={[-5, 10]}>
          <div className="left-part p-4 flex flex-col gap-4">
            <div className="box-1">
              <h1 className='text-6xl font-thin mb-6'>ما هو الكربون الأسود وكيف يسبب الاحتباس الحراري؟</h1>
              <p>
              الكربون الأسود (BC) عبارة عن جزيئات صغيرة من الكربون يتم إطلاقها
 نتيجة الاحتراق غير الكامل للوقود الأحفوري ،
الوقود الحيوي والكتلة الحيوية. هذه الجسيمات للغاية
صغيرة ، تتراوح من 10 ميكرومتر (ميكرومتر ، PM10) ، وحجم بكتيريا واحدة إلى أقل من 2.5 ميكرومتر (PM2.5) ، وعرض واحد على ثلاثين لشعر الإنسان وصغير بما يكفي للمرور عبر جدران الرئة البشرية و في مجرى الدم. على الرغم من أن BC - فكر في عمود الدخان من المدخنة أو النار - يسقط من الغلاف الجوي السفلي في أيام ، بينما يتم تعليقه في الهواء ، فإنه يمتص حرارة الشمس بشكل أكثر فعالية بملايين المرات من ثاني أكسيد الكربون. عندما تحمل الرياح BC فوق الثلج أو الأنهار الجليدية أو القمم الجليدية حيث تسقط على السطح الأبيض العاكس عادة ، فإنها تكون ضارة بشكل خاص لأنها تساهم بشكل مباشر في الذوبان. بشكل عام ، تعتبر BC ثاني أكبر مساهم في الاحتباس الحراري بعد ثاني أكسيد الكربون
              </p>
            </div>
            <div className="box-2 flex items-end flex-col">
              <h1 className='text-6xl font-thin mb-6'>ما هي أهم مصادر غازات الدفيئة والكربون الأسود؟</h1>
              <p className='mb-4'>Fossil fuel and related uses of coal and petroleum are the
              أهم مصادر غازات الدفيئة والكربون الأسود (توليد الطاقة ، الصناعة ، النقل ، المباني). الزراعة هي المصدر الثاني الأكثر أهمية (الحيوانات - الأبقار والخنازير) ، وإنتاج الأعلاف ، والغذاء الكيميائي المكثف
الإنتاج ، وكذلك إنتاج الأرز غير المقشور
إزالة الغابات مدفوعة بالرغبة في التوسع في المساحات المزروعة.
تشير الدراسات الجديدة إلى أن الزراعة هي الأكبر
المساهم في انبعاثات الجسيمات في الولايات المتحدة والدول الزراعية المتقدمة الأخرى.) تشمل المصادر الطبيعية لغازات الدفيئة والكربون الأسود حرائق الغابات وحرائق السافانا والبراكين
              </p>
              <motion.img src={talks1} alt="talks 1" loading='lazy'
              drag
              dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }} />
            </div>
          </div>
        </Parallax>
        <Parallax translateY={[10,0]}>
          <div className="right-part p-4">
            <h1 className='text-6xl font-thin mb-6'>ما الدليل الذي لدينا على تغير المناخ؟</h1>
            <p>الدليل الأكثر إقناعًا لتغير المناخ الذي يمتلكه العلماء حول تغير المناخ هو البيانات طويلة المدى المتعلقة بمستويات ثاني أكسيد الكربون في الغلاف الجوي ودرجة الحرارة العالمية ، ومستوى سطح البحر ، وامتداد الجليد ، والسجل الأحفوري ، و
توزيع الأنواع. تُظهر هذه البيانات ، التي تعود إلى ملايين السنين ، وجود علاقة قوية بين مستويات ثاني أكسيد الكربون ودرجة الحرارة. تُظهر البيانات الحديثة اتجاهًا إلى زيادة درجة الحرارة وارتفاع مستويات ثاني أكسيد الكربون بدءًا من أوائل القرن التاسع عشر
            </p>
            <p>نظرًا لأن جميع أجزاء المناخ العالمي مرتبطة ببعضها البعض ، فقد تمكن العلماء من إنشاء نماذج لكيفية عمل التغييرات الناتجة عن التدفئة في النظام بأكمله والظهور في مناطق مختلفة ، على سبيل المثال ، مستوى سطح البحر ، والطقس القاسي ، وحركة الأسماك الأنواع في المحيط. يعد اختبار ما إذا كانت التغييرات المتوقعة قد حدثت أم لا طريقة مهمة للتحقق من الأساس
نظرية
            </p>
            <img src={talks2} alt="talks 2" loading='lazy' />
            <img src={talks3} alt="talks 3" loading='lazy' />
          </div>
        </Parallax>
      </section>
      {/* end talks ar */}
      {/* start effects ar */}
      <section className="effects-ar py-12 overflow-x-hidden text-end">
        <h1 className='text-6xl font-thin mb-6 mr-4'>الآثار</h1>
        <div className="upper flex gap-8 p-4">
          <div className="left-part">
            <p>كيف يؤثر تغير المناخ على محيطات العالم؟
يقول تغير المناخ التابع للأمم المتحدة إن المحيط لطالما تحمل وطأة آثار الاحتباس الحراري من صنع الإنسان. باعتباره أكبر بالوعة كربون على كوكب الأرض ، يمتص المحيط الحرارة الزائدة والطاقة المنبعثة من ارتفاع انبعاثات غازات الاحتباس الحراري المحصورة في نظام الأرض. اليوم ، يمتص المحيط حوالي 90 في المائة من الحرارة الناتجة عن ارتفاع الانبعاثات. مع ارتفاع درجة حرارة المحيطات والطاقة المفرطة ، يؤدي تغير درجة الحرارة إلى تأثيرات متتالية لا مثيل لها ، بما في ذلك ذوبان الجليد ، وارتفاع مستوى سطح البحر ، وموجات الحرارة البحرية ، وتحمض المحيطات. تؤدي هذه التغييرات في النهاية إلى إحداث تأثير دائم على التنوع البيولوجي البحري ، وحياة المجتمعات الساحلية وسبل عيشها وما وراءها - بما في ذلك حوالي 680 مليون شخص يعيشون في المناطق الساحلية المنخفضة ، ما يقرب من 2 مليار شخص يعيشون في نصف المدن الساحلية الكبرى في العالم ، ما يقرب من نصفهم. من سكان العالم (3.3 مليار) يعتمدون على الأسماك للحصول على البروتين ، وحوالي 60 مليون شخص يعملون في مصايد الأسماك وقطاع تربية الأحياء المائية في جميع أنحاء العالم. فيما يلي بعض النتائج الرئيسية لتأثيرات
تغير المناخ في المحيط
            </p>
            <p>يقول برنامج الأمم المتحدة للبيئة إن كل واحدة من الشعاب المرجانية في العالم يمكن أن تبيض بحلول نهاية القرن إذا استمرت المياه في الارتفاع. يحدث تبيض المرجان عندما تفقد الشعاب الطحالب المجهرية التي تحافظ على حياتها تحت الضغط. بدأ حدث التبييض العالمي الأخير في عام 2014 وامتد إلى عام 2017 - وانتشر عبر المحيط الهادئ والهندي والمحيط الأطلسي. فقدان التنوع البيولوجي البحري يؤدي ارتفاع درجات الحرارة إلى زيادة مخاطر الخسارة التي لا رجعة فيها للنظم الإيكولوجية البحرية والساحلية. اليوم ، لوحظت تغييرات واسعة النطاق ، بما في ذلك الأضرار التي لحقت بالشعاب المرجانية وأشجار المانغروف التي تدعم الحياة في المحيطات ، وهجرة الأنواع إلى خطوط العرض والارتفاعات الأعلى حيث يمكن أن تكون المياه أكثر برودة. أحدث التقديرات الصادرة عن منظمة الأمم المتحدة للتربية والعلم والثقافة تحذر من أن أكثر من نصف الأنواع البحرية في العالم قد تكون على وشك الانقراض
بحلول عام 2100. مع ارتفاع درجة الحرارة بمقدار 1.1 درجة مئوية اليوم ، فإن ما يقدر بنحو 60 في المائة من النظم الإيكولوجية البحرية في العالم لديها
تم تدهورها بالفعل أو يتم استخدامها بشكل غير مستدام.
يهدد الاحترار البالغ 1.5 درجة مئوية بتدمير 70 إلى 90 في المائة من الشعاب المرجانية ، وتعني الزيادة بمقدار درجتين مئويتين خسارة ما يقرب من 100 في المائة - نقطة اللاعودة
            </p>
          </div>
          <div className="right-part">
            <p>ارتفاع مستوى سطح البحر
تسارعت في العقود الأخيرة بسبب زيادة فقدان الجليد في المناطق القطبية في العالم. تظهر أحدث البيانات من المنظمة العالمية للأرصاد الجوية أن
بلغ المتوسط ​​العالمي لمستوى سطح البحر رقمًا قياسيًا جديدًا
مرتفعًا في عام 2021 ، حيث يرتفع بمتوسط ​​4.5 ملم سنويًا خلال الفترة من 2013 إلى 2021. جنبًا إلى جنب مع تكثيف الأعاصير المدارية ، أدى ارتفاع مستوى سطح البحر إلى تفاقم الأحداث المتطرفة مثل العواصف المميتة والمخاطر الساحلية مثل الفيضانات والتعرية والانهيارات الأرضية ، التي يُتوقع حدوثها الآن على الأقل مرة واحدة سنويًا في العديد من المواقع. حدثت مثل هذه الأحداث مرة كل قرن تاريخيًا.
علاوة على ذلك ، تقول الهيئة الحكومية الدولية المعنية بتغير المناخ (IPCC) أن العديد من المناطق ، مثل غرب المحيط الهادئ المداري ، وجنوب غرب المحيط الهادئ ، وشمال المحيط الهادئ ، وجنوب غرب المحيط الهندي ، وجنوب المحيط الأطلسي ، تواجه بحرًا أسرع بشكل كبير- ارتفاع المستوى
            </p>
            <p>تضاعف تواتر موجات الحر البحرية ، وأصبحت أطول أمداً وأكثر كثافة واتساعًا. تقول الهيئة الحكومية الدولية المعنية بتغير المناخ أن التأثير البشري كان المحرك الرئيسي لزيادة حرارة المحيطات التي لوحظت منذ سبعينيات القرن الماضي. حدثت غالبية موجات الحر بين عامي 2006 و 2015 ، مما تسبب في تبيض المرجان والشعاب المرجانية على نطاق واسع
انحلال. في عام 2021 ، شهد ما يقرب من 60 في المائة من سطح المحيط في العالم موجة واحدة على الأقل من موجات الحرارة البحرية
            </p>
          </div>
        </div>
        <div className="bottom flex justify-center items-center gap-4">
          <Parallax translateX={[-20,10]}>
            <img src={effect1} alt="effect 1" />
          </Parallax>
          <Parallax translateX={[20,-10]}>
            <img src={effect2} alt="effect 2" />
          </Parallax>
        </div>
      </section>
      {/* end effects ar */}
      {/* start effect climate ar */}
      <section className="effect-climate-ar h-screen flex justify-center items-center overflow-y-hidden">
        <Parallax translateY={["-200px", "100px"]}>
          <div className="content text-center p-8">
            <h1 className='text-7xl font-thin mb-6'>ما هي آثار تغير المناخ؟</h1>
            <p>يؤثر المناخ المتغير على نمو المحاصيل وصحة الإنسان ،
بينما قد يحتاج الكثير من الناس إلى مغادرة منازلهم. إنها الأماكن
أنواع معينة معرضة بشكل متزايد لخطر الانقراض. الآثار
تغير المناخ حقيقي ،
وهم يحدثون بالفعل.
يعتمد مستوى تغير المناخ الذي سنراه على كيفية حدوث ذلك
سرعان ما نخفض انبعاثات غازات الاحتباس الحراري الخطرة.
حتى لو أوقفنا جميع الانبعاثات اليوم ، فلن نتمكن من ذلك
منع بعض التغييرات.
ومع ذلك ، فكلما أسرعنا في خفض الانبعاثات ، قل حجم
ستكون التغييرات
            </p>
          </div>
        </Parallax>
      </section>
      {/* end effect climate ar */}
      {/* start solutions ar */}
      <section className='solutions-ar py-12'>
        <Parallax translateX={[10, -30]}>
          <h1 className='text-7xl font-thin pl-4 text-center'>حلول</h1>
        </Parallax>
        <div className="container">
            <div className="box-1 flex justify-center items-center overflow-hidden">
                <div className="right-part w-full text-end">
                  <p><span className='text-5xl font-thin'>وفر الطاقة في المنزل</span><br/>يتم تشغيل الكثير من الكهرباء والحرارة لدينا من الفحم والنفط والغاز. استخدم طاقة أقل عن طريق خفض التدفئة والتبريد ، أو التحول إلى مصابيح LED والأجهزة الكهربائية الموفرة للطاقة ، أو غسل ملابسك بالماء البارد ، أو تعليق الأشياء لتجف بدلاً من استخدام مجفف. يمكن أن يؤدي تحسين كفاءة الطاقة في منزلك ، من خلال عزل أفضل على سبيل المثال ، أو استبدال فرن الزيت أو الغاز بمضخة حرارية كهربائية إلى تقليل انبعاثات الكربون بما يصل إلى 900 كيلوغرام من مكافئ ثاني أكسيد الكربون سنويًا</p>
                </div>
                <div className="left-part w-full">
                    <motion.img src={solution1} alt="solution 1" loading='lazy' className='logo'            
                      drag
                      dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
                </div>
            </div>
            <div className="box-2 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>المشي أو ركوب الدراجة أو استخدام وسائل النقل العام</span><br/>
                الطرق في العالم مسدودة بالمركبات ، ومعظمها يحرق الديزل أو البنزين. سيقلل المشي أو ركوب الدراجة بدلاً من القيادة من انبعاثات غازات الاحتباس الحراري - ويساعد على صحتك ولياقتك البدنية. للمسافات الطويلة ، فكر في ركوب القطار أو الحافلة. ومرافقي السيارات كلما أمكن ذلك. يمكن للعيش الخالي من السيارات أن يقلل من انبعاثات الكربون لديك بما يصل إلى 2 طن من مكافئ ثاني أكسيد الكربون سنويًا مقارنة بأسلوب الحياة باستخدام السيارة</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution2} alt="solution 2" loading='lazy' className='logo'           
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-3 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>تناول المزيد من الخضروات</span><br/>
                إن تناول المزيد من الخضروات والفواكه والحبوب الكاملة والبقوليات والمكسرات والبذور ، وتقليل اللحوم ومنتجات الألبان ، يمكن أن يقلل بشكل كبير من تأثيرك على البيئة. ينتج عن إنتاج الأطعمة النباتية عمومًا تقليل انبعاثات غازات الاحتباس الحراري ويتطلب طاقة وأرضًا ومياه أقل. يمكن أن يؤدي التحول من نظام غذائي مختلط إلى نظام غذائي نباتي إلى تقليل بصمتك الكربونية بما يصل إلى 500 كيلوغرام من مكافئ ثاني أكسيد الكربون سنويًا (أو ما يصل إلى 900 كيلوغرام لنظام غذائي نباتي)</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution3} alt="solution 3" loading='lazy' className='logo'           
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-4 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>ضع في اعتبارك سفرك</span><br/>
                تحرق الطائرات كميات كبيرة من الوقود الأحفوري ، مما ينتج عنه انبعاثات كبيرة من غازات الاحتباس الحراري. وهذا يجعل أخذ عدد أقل من الرحلات الجوية أحد أسرع الطرق لتقليل تأثيرك على البيئة. عندما تستطيع ، يمكنك الالتقاء افتراضيًا ، أو ركوب القطار ، أو تخطي تلك الرحلة الطويلة تمامًا. يمكن أن يؤدي القيام برحلة عودة أقل لمسافات طويلة إلى تقليل انبعاثات الكربون بما يصل إلى 2 طن تقريبًا من مكافئ ثاني أكسيد الكربون</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution4} alt="solution 4" loading='lazy' className='logo'         
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-5 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>تخلص من كميات أقل من الطعام</span><br/>
                عندما ترمي الطعام بعيدًا ، فأنت أيضًا تهدر الموارد والطاقة التي تم استخدامها في زراعته وإنتاجه وتعبئته ونقله. وعندما يتعفن الطعام في مكب النفايات ، فإنه ينتج غاز الميثان ، أحد غازات الدفيئة القوية. لذا استخدم ما تشتريه وقم بتحويل أي بقايا طعام إلى سماد. يمكن أن يقلل تقليل هدر الطعام من بصمتك الكربونية بما يصل إلى 300 كيلوغرام من مكافئ ثاني أكسيد الكربون سنويًا</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution5} alt="solution 5" loading='lazy' className='logo'        
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-6 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>
تقليل وإعادة الاستخدام والإصلاح وإعادة التدوير</span><br/>
تتسبب الإلكترونيات والملابس والأشياء الأخرى التي نشتريها في انبعاثات الكربون في كل مرحلة من مراحل الإنتاج ، من استخراج المواد الخام إلى التصنيع ونقل البضائع إلى السوق. لحماية مناخنا ، قم بشراء أشياء أقل ، وتسوق أشياء مستعملة ، وأصلح ما يمكنك ، وأعد تدويره. ينتج كل كيلوغرام من المنسوجات حوالي 17 كيلوغراماً من مكافئ ثاني أكسيد الكربون. شراء عدد أقل من الملابس الجديدة - وغيرها من السلع الاستهلاكية - يمكن أن يقلل من انبعاثات الكربون</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution6} alt="solution 6" loading='lazy' className='logo'       
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-7 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>قم بتغيير مصدر الطاقة في منزلك</span><br/>
                اسأل شركة المرافق الخاصة بك عما إذا كانت طاقة منزلك تأتي من النفط أو الفحم أو الغاز. إن أمكن ، تحقق مما إذا كان يمكنك التبديل إلى مصادر متجددة مثل الرياح أو الطاقة الشمسية. أو قم بتركيب الألواح الشمسية على سطح منزلك لتوليد الطاقة لمنزلك. يمكن أن يؤدي تحويل منزلك من النفط أو الغاز أو الطاقة التي تعمل بالفحم إلى مصادر الطاقة المتجددة ، مثل الرياح أو الطاقة الشمسية ، إلى تقليل انبعاثات الكربون بما يصل إلى 1.5 طن من مكافئ ثاني أكسيد الكربون سنويًا</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution7} alt="solution 7" loading='lazy' className='logo'        
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-8 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>قم بالتبديل إلى سيارة كهربائية</span><br/>
                إذا كنت تخطط لشراء سيارة ، ففكر في شراء سيارة كهربائية ، مع طرح طرازات أكثر وأرخص في السوق. في العديد من البلدان ، تساعد السيارات الكهربائية في الحد من تلوث الهواء وتسبب انبعاثات غازات الاحتباس الحراري أقل بكثير من المركبات التي تعمل بالغاز أو الديزل. لكن العديد من السيارات الكهربائية لا تزال تعمل بالكهرباء المنتجة من الوقود الأحفوري ، وتتطلب البطاريات والمحركات معادن نادرة غالبًا ما يكون لها تكاليف بيئية واجتماعية عالية. يمكن أن يؤدي التحول من سيارة تعمل بالبنزين أو الديزل إلى سيارة كهربائية إلى تقليل انبعاثات الكربون بنسبة تصل إلى 2 طن من مكافئ ثاني أكسيد الكربون سنويًا. يمكن أن توفر لك السيارة الهجينة ما يصل إلى 700 كيلوغرام من مكافئ ثاني أكسيد الكربون</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution8} alt="solution 8" loading='lazy' className='logo'        
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-9 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>اجعل أموالك مهمة</span><br/>
                كل شيء ننفق المال عليه يؤثر على الكوكب. لديك القدرة على اختيار السلع والخدمات التي تدعمها. لتقليل تأثيرك على البيئة ، اختر المنتجات من الشركات التي تستخدم الموارد بشكل مسؤول وملتزمة بخفض انبعاثات الغازات والنفايات. إذا كان لديك أموال يتم استثمارها من أجلك ، من خلال صندوق معاشات تقاعدية على سبيل المثال ، فقد يكون ذلك لدعم الوقود الأحفوري أو إزالة الغابات. التأكد من استثمار مدخراتك في أعمال مستدامة بيئيًا يمكن أن يقلل بشكل كبير من انبعاثات الكربون</p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution9} alt="solution 9" loading='lazy' className='logo'     
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
            <div className="box-10 flex justify-center items-center overflow-hidden">
              <div className="right-part w-full text-end">
                <p><span className='text-5xl font-thin'>تكلم للمشاركة</span><br/>
                تحدث بصوت عال واجعل الآخرين يشاركون في اتخاذ الإجراءات. إنها واحدة من أسرع الطرق وأكثرها فعالية لإحداث فرق. تحدث إلى جيرانك وزملائك وأصدقائك وعائلتك. دع أصحاب الأعمال يعرفون أنك تدعم التغييرات الجريئة. مناشدة القادة المحليين والعالميين للتحرك الآن. العمل المناخي مهمة لنا جميعًا. وهذا يهمنا جميعًا. لا أحد يستطيع أن يفعل كل شيء بمفرده
                </p>
              </div>
              <div className="left-part w-full">
                <motion.img src={solution10} alt="solution 10" loading='lazy' className='logo'       
                  drag
                  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}/>
              </div>
            </div>
        </div>
      </section>
      {/* end solutions */}
      {/* start faq */}
      <df-messenger
          intent="WELCOME"
          chat-title="GreenArmy"
          agent-id="b24a5e7f-c923-4df5-8ee2-7a7765d3ed73"
          language-code="en"
          chat-icon="https://i.ibb.co/LPnB19d/support.png"
        ></df-messenger>
      {/* end faq */}
      {/* start reference ar */}
      <section className="reference-ar py-12">
        <h1 className='text-7xl font-thin pr-4 mb-8 text-center'>المرجع</h1>
        <div className="content flex flex-col justify-center items-center gap-8">
          <a href="https://climate.nasa.gov/" target="_blank">
            <img src={nasa} alt="nasa" loading='lazy' className='logo' />
          </a>
        </div>
      </section>
      {/* end reference */}
      <FooterAr/>
    </article>
  )
}

export default Arabic