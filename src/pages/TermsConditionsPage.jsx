import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsConditionsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-white via-gold-50/30 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center rounded-2xl border border-gold-500/20 bg-white/90 dark:bg-dark-800/70 dark:border-white/10 backdrop-blur-sm shadow-sm px-6 py-10 mb-8">
                    <p className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs sm:text-sm font-semibold px-3 py-1 mb-4">
                        {t('Legal Document', 'مستند قانوني')}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                        {t('Terms & Conditions', 'الشروط والأحكام')}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('For All MR EXCEL Products and Services', 'لجميع منتجات وخدمات MR EXCEL')}
                    </p>
                </div>

                <div className="grid gap-5 text-gray-700 dark:text-gray-300">
                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('1. Acceptance', '1. القبول')}
                        </h2>
                        <p>
                            {t(
                                'By accessing or using MR EXCEL platform, you agree to be bound by these Terms and Conditions. If you do not agree, you must stop using the website and services.',
                                'باستخدامك موقع ومنصة MR EXCEL فإنك توافق على الالتزام بهذه الشروط والأحكام. في حال عدم موافقتك، يرجى التوقف عن استخدام الموقع والخدمات.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('2. Nature of Services', '2. طبيعة الخدمة')}
                        </h2>
                        <p className="mb-2">
                            {t(
                                'MR Excel Software provides cloud-based ERP services including:',
                                'تقدم شركة مستر إكسيل للبرمجيات خدمات أنظمة تخطيط موارد المؤسسات (ERP) القائمة على الحوسبة السحابية، بما في ذلك:'
                            )}
                        </p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Software access', 'توفير البرنامج')}</li>
                            <li>{t('Cloud hosting', 'الاستضافة السحابية')}</li>
                            <li>{t('Technical support', 'الدعم الفني')}</li>
                            <li>{t('Training', 'التدريب')}</li>
                            <li>{t('System updates', 'التحديثات')}</li>
                        </ul>
                        <p className="mt-3">{t('Services are provided on a subscription basis.', 'الخدمة تقدم بنظام الاشتراك.')}</p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('3. Subscription & Users', '3. الاشتراك وعدد المستخدمين')}
                        </h2>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Minimum subscription: Five (5) users.', 'الحد الأدنى للاشتراك خمسة (5) مستخدمين.')}</li>
                            <li>{t('No maximum user limit.', 'لا يوجد حد أقصى لعدد المستخدمين.')}</li>
                            <li>{t('Additional users are subject to additional fees.', 'يمكن إضافة مستخدمين إضافيين مقابل رسوم إضافية.')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('4. Fees & Payment', '4. الرسوم والسداد')}
                        </h2>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Fees are due at the beginning of each subscription cycle.', 'تستحق الرسوم في بداية كل دورة اشتراك.')}</li>
                            <li>{t('A three (3) day grace period applies.', 'فترة سماح للسداد ثلاثة (3) أيام.')}</li>
                            <li>{t('Failure to pay may result in service suspension.', 'في حال التأخر يحق للشركة تعليق الخدمة.')}</li>
                            <li>{t('Non-payment exceeding 30 days may result in account termination.', 'استمرار التأخر أكثر من 30 يوم يجيز إنهاء الحساب.')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('5. Acceptable Use', '5. الاستخدام المقبول')}
                        </h2>
                        <p className="mb-2">{t('Users shall not:', 'يُحظر على المستخدم:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Introduce malicious code.', 'إدخال أي فيروسات أو أكواد ضارة.')}</li>
                            <li>{t('Attempt unauthorized access.', 'محاولة اختراق النظام.')}</li>
                            <li>{t('Disrupt system operations.', 'تعطيل الخدمة أو التأثير عليها.')}</li>
                            <li>{t('Share login credentials.', 'مشاركة بيانات الدخول مع الغير.')}</li>
                        </ul>
                        <p className="mt-3">{t('Users are fully liable for violations.', 'ويتحمل المستخدم كامل المسؤولية عن أي أضرار تنتج عن مخالفته.')}</p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('6. Intellectual Property', '6. الملكية الفكرية')}
                        </h2>
                        <p className="mb-2">
                            {t(
                                'All intellectual property rights remain exclusively owned by the Company.',
                                'جميع حقوق الملكية الفكرية للبرنامج والتحديثات والتطويرات مملوكة حصريًا للشركة.'
                            )}
                        </p>
                        <p>
                            {t(
                                'Access is granted as a service only; no ownership rights are transferred.',
                                'يتم تقديم الخدمة بنظام الاستخدام فقط دون نقل ملكية أو ترخيص دائم.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('7. Updates', '7. التحديثات')}
                        </h2>
                        <p>
                            {t(
                                'The Company may issue updates and enhancements without additional infrastructure fees.',
                                'يجوز للشركة إصدار تحديثات وتحسينات دورية دون رسوم إضافية تخص بيئة التشغيل الأساسية.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('8. Technical Support', '8. الدعم الفني')}
                        </h2>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Support is provided during official working hours.', 'يتم تقديم الدعم خلال ساعات العمل الرسمية.')}</li>
                            <li>{t('Maximum response time is 48 hours from report time.', 'الحد الأقصى للاستجابة 48 ساعة من وقت الإبلاغ.')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('9. Training', '9. التدريب')}
                        </h2>
                        <p className="mb-2">{t('Training is provided according to the selected package.', 'توفر الشركة تدريبًا مجانيًا وفق الباقة المتفق عليها.')}</p>
                        <p>{t('Additional training is subject to separate fees.', 'أي تدريب إضافي يخضع لرسوم منفصلة.')}</p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('10. Termination', '10. إنهاء الخدمة')}
                        </h2>
                        <p className="mb-2">{t('The Company may suspend or terminate accounts for:', 'يجوز للشركة تعليق أو إنهاء الحساب في حال:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Material breach', 'الإخلال الجسيم بالشروط')}</li>
                            <li>{t('Non-payment', 'التأخر في السداد')}</li>
                            <li>{t('Misuse', 'إساءة استخدام النظام')}</li>
                        </ul>
                        <p className="mt-3">{t('Users will be granted limited time to download their data upon termination.', 'عند الإنهاء يتم منح المستخدم مهلة لتحميل بياناته.')}</p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('11. Limitation of Liability', '11. حدود المسؤولية')}
                        </h2>
                        <p className="mb-2">{t('The Company shall not be liable for:', 'لا تتحمل الشركة مسؤولية:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Internet outages', 'انقطاع الإنترنت لدى المستخدم')}</li>
                            <li>{t('User data entry errors', 'أخطاء إدخال البيانات')}</li>
                            <li>{t('Indirect or consequential damages', 'أي أضرار غير مباشرة أو تبعية')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-gold-500/30 dark:border-gold-500/20 bg-gold-50/40 dark:bg-dark-800/80 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                            {t('12. Governing Law', '12. القانون الواجب التطبيق')}
                        </h2>
                        <p>
                            {t(
                                'These Terms are governed by the laws of the Arab Republic of Egypt. Cairo Courts shall have jurisdiction.',
                                'تخضع هذه الشروط لقوانين جمهورية مصر العربية وتختص محاكم القاهرة بنظر النزاعات.'
                            )}
                        </p>
                    </section>
                </div>

                <div className="mt-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    {t('Terms & Conditions', 'الشروط والأحكام')}
                    {' • '}
                    {t('Arabic / English Version', 'نسخة عربية / إنجليزية')}
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;
