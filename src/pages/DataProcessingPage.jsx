import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DataProcessingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-white via-gold-50/30 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center rounded-2xl border border-gold-500/20 bg-white/90 dark:bg-dark-800/70 dark:border-white/10 backdrop-blur-sm shadow-sm px-6 py-10 mb-8">
                    <p className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs sm:text-sm font-semibold px-3 py-1 mb-4">
                        {t('Legal Document', 'مستند قانوني')}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                        {t('Data Processing', 'اتفاقية معالجة البيانات')}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('Privacy Policy for All MR EXCEL Products', 'سياسة الخصوصية لجميع منتجات MR EXCEL')}
                    </p>
                </div>

                <div className="grid gap-5 text-gray-700 dark:text-gray-300">
                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('1. Scope', '1. نطاق التطبيق')}</h2>
                        <p>
                            {t(
                                'This Policy applies globally to all users of MR EXCEL products.',
                                'تنطبق هذه السياسة على جميع مستخدمي منتجات الشركة عالميًا.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('2. Data Collected', '2. البيانات التي نجمعها')}</h2>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Identification data (name, email, phone)', 'بيانات التعريف (الاسم - البريد - الهاتف)')}</li>
                            <li>{t('Business data', 'بيانات المؤسسة')}</li>
                            <li>{t('Usage data', 'بيانات الاستخدام')}</li>
                            <li>{t('Technical data (IP, cookies, logs)', 'بيانات تقنية (IP - Cookies - Logs)')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('3. Legal Basis (GDPR)', '3. الأساس القانوني للمعالجة (وفق GDPR)')}</h2>
                        <p className="mb-2">{t('Processing is based on:', 'نعالج البيانات استنادًا إلى:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Contract performance', 'تنفيذ عقد')}</li>
                            <li>{t('Legitimate interest', 'مصلحة مشروعة')}</li>
                            <li>{t('Consent', 'موافقة صريحة')}</li>
                            <li>{t('Legal obligation', 'التزام قانوني')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('4. Data Use', '4. استخدام البيانات')}</h2>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Service provision', 'تشغيل الخدمات')}</li>
                            <li>{t('Performance improvement', 'تحسين الأداء')}</li>
                            <li>{t('Security protection', 'الحماية الأمنية')}</li>
                            <li>{t('Legal compliance', 'الامتثال القانوني')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('5. International Transfers', '5. نقل البيانات دوليًا')}</h2>
                        <p>
                            {t(
                                'Data may be transferred outside the EEA under Standard Contractual Clauses (SCCs).',
                                'قد يتم نقل البيانات خارج المنطقة الاقتصادية الأوروبية مع تطبيق ضمانات تعاقدية قياسية (Standard Contractual Clauses).'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('6. Data Retention', '6. الاحتفاظ بالبيانات')}</h2>
                        <p>
                            {t(
                                'Data is retained during subscription and applicable statutory retention periods.',
                                'يتم الاحتفاظ بالبيانات طوال مدة الاشتراك وللفترة القانونية اللاحقة.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('7. Data Subject Rights', '7. حقوق أصحاب البيانات')}</h2>
                        <p className="mb-2">{t('Users may request:', 'يحق لك:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Access', 'الوصول')}</li>
                            <li>{t('Rectification', 'التصحيح')}</li>
                            <li>{t('Erasure', 'الحذف')}</li>
                            <li>{t('Restriction', 'تقييد المعالجة')}</li>
                            <li>{t('Data portability', 'نقل البيانات')}</li>
                            <li>{t('Objection', 'الاعتراض')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('8. Security Measures', '8. التدابير الأمنية')}</h2>
                        <p className="mb-2">{t('We implement:', 'نطبق:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Encryption', 'تشفير البيانات')}</li>
                            <li>{t('Access controls', 'ضوابط وصول')}</li>
                            <li>{t('Continuous security monitoring', 'مراقبة أمنية مستمرة')}</li>
                            <li>{t('Periodic backup systems', 'نسخ احتياطية دورية')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-gold-500/30 dark:border-gold-500/20 bg-gold-50/40 dark:bg-dark-800/80 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 dark:text-white">
                            {t('Data Processing Agreement (DPA)', 'اتفاقية معالجة البيانات (DPA)')}
                        </h2>
                        <p className="mb-2">{t('Under this DPA:', 'بموجب هذه الاتفاقية:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7 mb-4">
                            <li>{t('User = Data Controller', 'المستخدم هو "Controller"')}</li>
                            <li>{t('Company = Data Processor', 'الشركة هي "Processor"')}</li>
                        </ul>
                        <p className="mb-2">{t('The Company agrees to:', 'تلتزم الشركة بـ:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Process data only on documented instructions', 'معالجة البيانات فقط وفق تعليمات المستخدم')}</li>
                            <li>{t('Ensure confidentiality', 'ضمان سرية الموظفين')}</li>
                            <li>{t('Implement appropriate safeguards', 'تطبيق تدابير أمنية مناسبة')}</li>
                            <li>{t('Notify data breaches within 72 hours', 'إخطار المستخدم بأي خرق خلال 72 ساعة')}</li>
                            <li>{t('Delete or return data upon termination', 'حذف أو إعادة البيانات عند انتهاء العقد')}</li>
                        </ul>
                        <p className="mt-4">
                            {t(
                                'Sub-processors are bound by equivalent contractual safeguards.',
                                'لا يتم تعيين معالجين فرعيين إلا بضمانات تعاقدية مماثلة.'
                            )}
                        </p>
                    </section>
                </div>
                <div className="mt-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    <p>
                        {t(
                            'This policy is provided in Arabic and English. In case of conflict, the governing language is defined by contract.',
                            'تم توفير هذه السياسة بالعربية والإنجليزية. وفي حال التعارض تُحدَّد اللغة الحاكمة وفق العقد.'
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataProcessingPage;
