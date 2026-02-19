import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building, Settings, Chrome, ArrowRight, Shield, MessageCircle, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const { t } = useLanguage();

    const businessLines = [
        {
            title: 'STEPS CRM',
            titleEn: 'STEPS CRM',
            titleAr: 'STEPS CRM',
            subtitle: t('Vertical Real Estate CRM', 'نظام إدارة عقاري'),
            icon: <Building />,
            desc: t(
                'STEPS CRM is a cloud-based web application purpose-built for real estate developers and brokerage companies to automate and streamline operations, increase conversion rates, and enhance productivity.',
                'STEPS CRM هو نظام سحابي متكامل تم تطويره بواسطة خبراء في التسويق العقاري، ومصمم خصيصاً لشركات التطوير العقاري والوساطة لأتمتة وتنظيم العمليات البيعية.'
            ),
            features: [
                t('Lead & Client Management', 'إدارة العملاء المحتملين'),
                t('Sales Pipeline Tracking', 'متابعة مراحل البيع'),
                t('Marketing Campaign Performance', 'قياس أداء الحملات التسويقية'),
                t('Commission & Financial Follow-up', 'متابعة العمولات والجوانب المالية'),
                t('Team Performance Monitoring', 'تقييم أداء فرق المبيعات'),
                t('Real-time Reporting & Analytics', 'تقارير لحظية تدعم اتخاذ القرار')
            ],
            link: '/steps-crm',
            demoLink: 'https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY',
            color: 'blue'
        },
        {
            title: t('Odoo ERP Implementation', 'تنفيذ أنظمة Odoo ERP'),
            titleEn: 'Odoo ERP Implementation',
            titleAr: 'تنفيذ أنظمة Odoo ERP',
            subtitle: t('Complete Business Transformation', 'التحول الرقمي للأعمال'),
            icon: <Settings />,
            desc: t(
                'We provide end-to-end Odoo ERP implementation services, delivering complete business transformation solutions tailored for small and medium-sized enterprises.',
                'نقدم خدمات متكاملة لتنفيذ وتخصيص نظام Odoo ERP للشركات الصغيرة والمتوسطة، وفق منهجية احترافية تضمن نجاح التحول الرقمي.'
            ),
            features: [
                t('Business process analysis & solution architecture', 'تحليل العمليات وبناء الحلول المناسبة'),
                t('ERP system configuration & customization', 'إعداد وتخصيص النظام حسب احتياجات النشاط'),
                t('Custom module development & enhancements', 'تطوير وحدات مخصصة وتحسينات برمجية'),
                t('Integration with third-party systems', 'ربط النظام مع أنظمة خارجية'),
                t('System testing & production deployment', 'الاختبار والإطلاق الفعلي'),
                t('End-user training & knowledge transfer', 'تدريب المستخدمين'),
                t('Ongoing technical support', 'دعم فني مستمر')
            ],
            link: '/odoo-erp',
            color: 'gold'
        },
        {
            title: t('Google Business Infrastructure', 'البنية الرقمية لخدمات Google'),
            titleEn: 'Google Business Infrastructure',
            titleAr: 'البنية الرقمية لخدمات Google',
            subtitle: t('Compliance & Monetization', 'الالتزام وتحقيق الدخل'),
            icon: <Chrome />,
            desc: t(
                'We provide professional setup and compliance management for essential Google business platforms, ensuring accounts are structured according to Google policies and best practices.',
                'نوفر إعداداً احترافياً لحسابات وأنظمة Google التجارية، مع ضمان الالتزام بسياسات Google وأفضل الممارسات التقنية.'
            ),
            features: [
                t('Google Business Profile setup & optimization', 'إعداد وتحسين Google Business Profile'),
                t('Google Developer Console configuration', 'إعداد Google Developer Console'),
                t('Google AdMob setup & monetization readiness', 'إعداد وربط Google AdMob وتجهيزه لتحقيق الدخل'),
                t('Policy compliance & account status review', 'مراجعة التوافق مع سياسات Google'),
                t('Technical issue resolution & infrastructure structuring', 'حل المشكلات التقنية المتعلقة بالحسابات')
            ],
            link: '/google-infrastructure',
            color: 'green'
        }
    ];

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 bg-gray-50 dark:bg-dark-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-gold-500/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 mb-4 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm"
                    >
                        <Sparkles size={16} className="text-gold-500" />
                        <span className="text-gold-500 text-xs md:text-sm tracking-widest uppercase font-bold">
                            {t('Our Expertise', 'خبراتنا المتخصصة')}
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-bold mb-6 text-dark-900 dark:text-white"
                    >
                        {t('Business Lines & Solutions', 'خطوط الأعمال والحلول')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
                    >
                        {t(
                            'We provide integrated technology solutions that drive modernization and efficiency across various business sectors.',
                            'نقدم حلولاً تقنية متكاملة تدفع عجلة التحديث والكفاءة عبر مختلف قطاعات الأعمال.'
                        )}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 ">
                    {businessLines.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col h-full bg-white dark:bg-dark-800 rounded-3xl md:rounded-4xl p-6 md:p-8 border border-black/5 dark:border-white/5 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl md:rounded-4xl"></div>

                            {/* Icon */}
                            <div className="relative mb-6 md:mb-8">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-2xl md:text-3xl text-gold-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500/20 rounded-full blur-md animate-pulse"></div>
                            </div>

                            {/* Content */}
                            <div className="grow">
                                <p className="text-gold-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">{item.subtitle}</p>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-dark-900 dark:text-white group-hover:text-gold-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8 line-clamp-3 text-xs md:text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                    {item.desc}
                                </p>

                                {/* Mini Features List */}
                                <div className="space-y-3 mb-8">
                                    {item.features.slice(0, 4).map((f, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-dark-800 dark:text-gray-300">
                                            <div className="shrink-0 w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle2 size={12} className="text-gold-500" />
                                            </div>
                                            <span className="leading-snug">{f}</span>
                                        </div>
                                    ))}
                                    {item.features.length > 3 && (
                                        <p className="text-[10px] text-gray-400 ml-8 rtl:mr-8 italic">+{item.features.length - 3} {t('more features...', 'ميزات إضافية...')}</p>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="relative pt-6 border-t border-black/5 dark:border-white/5 space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center text-gold-500 hover:text-gold-400 font-bold gap-2 text-sm group/btn transition-all"
                                    >
                                        {t('Learn More', 'اقرأ المزيد')}
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                                    </Link>

                                    {item.demoLink && (
                                        <a
                                            href={item.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/10 text-red-600 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                        >
                                            <ExternalLink size={14} />
                                            {t('Watch Demo', 'مشاهدة عرض')}
                                        </a>
                                    )}
                                </div>

                                <a
                                    href={`https://wa.me/201050007513?text=${encodeURIComponent(`Hello, I am interested in ${item.titleEn} / مرحباً، أنا مهتم بـ ${item.titleAr}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-black rounded-2xl font-bold transition-all duration-300 w-full shadow-lg shadow-gold-500/20 active:scale-95 group/wa"
                                >
                                    <MessageCircle size={20} className="group-hover/wa:scale-110 transition-transform" />
                                    {t('Order Service Now', 'اطلب الخدمة الآن')}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 pt-10 border-t border-black/5 dark:border-white/5 text-center"
                >
                    <p className="text-gray-400 text-sm italic">
                        {t(
                            'All solutions are delivered according to international standards with certified professional support.',
                            'يتم تقديم كافة الحلول وفق المعايير العالمية مع دعم احترافي معتمد.'
                        )}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;

