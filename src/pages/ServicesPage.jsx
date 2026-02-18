import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building, Settings, Chrome, ArrowRight, Shield, MessageCircle, ExternalLink } from 'lucide-react';

const ServicesPage = () => {
    const { t } = useLanguage();

    const businessLines = [
        {
            title: 'STEPS CRM',
            titleEn: 'STEPS CRM',
            titleAr: 'STEPS CRM',
            subtitle: t('Vertical Real Estate CRM', 'نظام إدارة عقاري'),
            icon: <Building className="text-gold-500" />,
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
            link: 'https://www.stepscrm.com',
            demoLink: 'https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY'
        },
        {
            title: t('Odoo ERP Implementation', 'تنفيذ أنظمة Odoo ERP'),
            titleEn: 'Odoo ERP Implementation',
            titleAr: 'تنفيذ أنظمة Odoo ERP',
            subtitle: t('Business Transformation', 'التحول الرقمي للأعمال'),
            icon: <Settings className="text-gold-500" />,
            desc: t(
                'End-to-end Odoo ERP implementation delivery for SMEs. With 90+ successful projects, we provide structured methodology from analysis to deployment and ongoing support.',
                'نقدم خدمات متكاملة لتنفيذ وتخصيص نظام Odoo ERP للشركات الصغيرة والمتوسطة، وفق منهجية احترافية تضمن نجاح التحول الرقمي.'
            ),
            features: [
                t('Process Analysis & Architecture', 'تحليل العمليات وبناء الحلول'),
                t('Configuration & Customization', 'إعداد وتخصيص النظام'),
                t('Custom Module Development', 'تطوير وحدات مخصصة'),
                t('Third-party Integration', 'ربط النظام مع أنظمة خارجية'),
                t('Testing & Production Deployment', 'الاختبار والإطلاق الفعلي'),
                t('Training & Knowledge Transfer', 'تدريب المستخدمين ونقل الخبرة')
            ]
        },
        {
            title: t('Google Business Infrastructure', 'البنية الرقمية لخدمات Google'),
            titleEn: 'Google Business Infrastructure',
            titleAr: 'البنية الرقمية لخدمات Google',
            subtitle: t('Compliance & Monetization', 'الالتزام وتحقيق الدخل'),
            icon: <Chrome className="text-gold-500" />,
            desc: t(
                'Professional setup and compliance management for Google business platforms. We ensure your digital presence is structured according to best practices for growth and stable monetization.',
                'نوفر إعداداً احترافياً لحسابات وأنظمة Google التجارية، مع ضمان الالتزام بسياسات Google وأفضل الممارسات التقنية لضمان الاستقرار والنمو.'
            ),
            features: [
                t('Business Profile Optimization', 'إعداد وتحسين Business Profile'),
                t('Developer Console Configuration', 'إعداد Developer Console'),
                t('AdMob Setup & Monetization', 'إعداد AdMob وتجهيزه للدخل'),
                t('Policy Compliance Review', 'مراجعة التوافق مع السياسات'),
                t('Technical Issue Resolution', 'حل المشكلات التقنية للحسابات')
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Our Expertise', 'خبراتنا')}</h2>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">{t('Business Lines & Solutions', 'خطوط الأعمال والحلول')}</h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('We provide integrated technology solutions that drive modernization and efficiency across various business sectors.', 'نقدم حلولاً تقنية متكاملة تدفع عجلة التحديث والكفاءة عبر مختلف قطاعات الأعمال.')}</p>
                </div>

                <div className="space-y-12">
                    {businessLines.map((item, i) => (
                        <div key={i} className="group glass-card rounded-3xl p-8 md:p-12 border border-black/5 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/3">
                                    <div className="w-20 h-20 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 text-4xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 dark:text-white">{item.title}</h3>
                                    <p className="text-gold-500 font-semibold uppercase tracking-wider text-xs mb-4">{item.subtitle}</p>
                                    <div className="flex flex-wrap gap-4 mb-4">
                                        {item.link && (
                                            <a href={item.link} target="_blank" className="inline-flex items-center text-gold-500 hover:text-gold-400 font-bold gap-2">
                                                {t('Visit Platform', 'زيارة المنصة')} <ArrowRight size={18} />
                                            </a>
                                        )}
                                        {item.demoLink && (
                                            <a href={item.demoLink} target="_blank" className="inline-flex items-center text-red-500 hover:text-red-400 font-bold gap-2">
                                                {t('Watch Demo', 'مشاهدة عرض توضيحي')} <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="lg:w-2/3 border-l border-black/5 dark:border-white/10 lg:pl-12">
                                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <div className="grid sm:grid-cols-2 gap-4 grow">
                                            {item.features.map((f, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-dark-800 dark:text-gray-300">
                                                    <Shield size={16} className="text-gold-500" />
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full sm:w-auto mt-6 pt-6 border-t border-black/5 dark:border-white/10 sm:mt-0 sm:pt-0 sm:border-0">
                                            <a
                                                href={`https://wa.me/201050007513?text=${encodeURIComponent(`Hello, I am interested in ${item.titleEn} / مرحباً، أنا مهتم بـ ${item.titleAr}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all duration-300 w-full sm:w-auto shadow-lg shadow-green-500/20 active:scale-95"
                                            >
                                                <MessageCircle size={20} />
                                                {t('Order Service', 'اطلب الخدمة')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
