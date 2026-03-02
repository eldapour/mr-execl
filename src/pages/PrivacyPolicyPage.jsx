import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-white via-gold-50/30 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center rounded-2xl border border-gold-500/20 bg-white/90 dark:bg-dark-800/70 dark:border-white/10 backdrop-blur-sm shadow-sm px-6 py-10 mb-8">
                    <p className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs sm:text-sm font-semibold px-3 py-1 mb-4">
                        {t('Legal Document', 'مستند قانوني')}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                        {t('Privacy Policy', 'سياسة الخصوصية')}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('For All MR EXCEL Products and Services', 'لجميع منتجات وخدمات MR EXCEL')}
                    </p>
                </div>

                <div className="grid gap-5 text-gray-700 dark:text-gray-300">
                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('1. Data Collection', '1. جمع البيانات')}</h2>
                        <p className="mb-2">{t('We may collect:', 'نقوم بجمع البيانات التالية:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Registration information (name, email, phone)', 'بيانات التسجيل (الاسم - البريد الإلكتروني - الهاتف)')}</li>
                            <li>{t('Account and usage data', 'بيانات الحساب والاستخدام')}</li>
                            <li>{t('Technical data (IP address, browser type, system logs)', 'بيانات تقنية (IP - نوع المتصفح - سجلات النظام)')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('2. Use of Data', '2. استخدام البيانات')}</h2>
                        <p className="mb-2">{t('Data is used to:', 'يتم استخدام البيانات لأغراض:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Provide services', 'تشغيل الخدمة')}</li>
                            <li>{t('Deliver support', 'الدعم الفني')}</li>
                            <li>{t('Improve performance', 'تحسين الأداء')}</li>
                            <li>{t('Comply with legal obligations', 'الامتثال القانوني')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('3. Data Protection', '3. حماية البيانات')}</h2>
                        <p className="mb-2">
                            {t(
                                'We implement appropriate technical and organizational measures to safeguard data against:',
                                'نلتزم بتطبيق إجراءات تقنية وتنظيمية لحماية البيانات من:'
                            )}
                        </p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Unauthorized access', 'الوصول غير المصرح به')}</li>
                            <li>{t('Alteration, disclosure, or loss', 'التعديل أو الإفصاح أو الفقد')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('4. Data Sharing', '4. مشاركة البيانات')}</h2>
                        <p className="mb-2">{t('We do not sell or rent user data.', 'لا يتم بيع أو تأجير بيانات المستخدمين.')}</p>
                        <p>{t('Data may be shared with authorized service providers under confidentiality obligations.', 'قد تتم مشاركتها مع مزودي خدمة تقنيين ملتزمين بالسرية.')}</p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('5. Data Retention', '5. الاحتفاظ بالبيانات')}</h2>
                        <p>
                            {t(
                                'Data is retained during the subscription period and for a reasonable legal retention period thereafter.',
                                'يتم الاحتفاظ بالبيانات طوال مدة الاشتراك، ولمدة قانونية معقولة بعد الإنهاء.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('6. User Rights', '6. حقوق المستخدم')}</h2>
                        <p className="mb-2">{t('Users may request:', 'للمستخدم الحق في:')}</p>
                        <ul className="list-disc ps-6 space-y-2 leading-7">
                            <li>{t('Access to their data', 'طلب الوصول إلى بياناته')}</li>
                            <li>{t('Correction of inaccuracies', 'طلب تصحيحها')}</li>
                            <li>{t('Deletion where legally permissible', 'طلب حذفها (وفقًا للمتطلبات القانونية)')}</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-dark-800/60 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('7. Cookies', '7. ملفات تعريف الارتباط')}</h2>
                        <p>
                            {t(
                                'We use cookies to enhance user experience and analyze platform performance.',
                                'يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الأداء.'
                            )}
                        </p>
                    </section>

                    <section className="rounded-2xl border border-gold-500/30 dark:border-gold-500/20 bg-gold-50/40 dark:bg-dark-800/80 p-5 sm:p-7 shadow-sm">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">{t('8. Policy Updates', '8. التعديلات')}</h2>
                        <p>
                            {t(
                                'We may update this policy. Continued use constitutes acceptance of such updates.',
                                'يجوز تحديث هذه السياسة، ويعد استمرار الاستخدام موافقة على التحديثات.'
                            )}
                        </p>
                    </section>
                </div>

                <div className="mt-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    {t('Privacy Policy', 'سياسة الخصوصية')}
                    {' • '}
                    {t('Arabic / English Version', 'نسخة عربية / إنجليزية')}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
