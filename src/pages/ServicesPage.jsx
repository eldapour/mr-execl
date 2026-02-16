import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building, Settings, Chrome, ArrowRight, Shield, MessageCircle } from 'lucide-react';

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
                'A comprehensive cloud-based ecosystem designed specifically for real estate developers and brokerages. It streamlines the lead lifecycle, automates sales processes, and integrates marketing and financial operations into one unified dashboard.',
                'نظام سحابي متكامل مخصص للمطورين العقاريين وشركات الوساطة. يعمل على تسهيل إدارة دورة حياة العملاء، أتمتة عمليات المبيعات، وربط العمليات التسويقية والمالية في لوحة تحكم موحدة.'
            ),
            features: [
                t('Lead Lifecycle Management', 'إدارة دورة حياة العملاء'),
                t('Sales Automation', 'أتمتة المبيعات'),
                t('Integrated Marketing', 'تسويق متكامل'),
                t('Inventory Management', 'إدارة الوحدات والعقارات')
            ],
            link: 'https://www.stepscrm.com'
        },
        {
            title: t('Odoo ERP Implementation', 'تنفيذ أنظمة Odoo'),
            titleEn: 'Odoo ERP Implementation',
            titleAr: 'تنفيذ أنظمة Odoo',
            subtitle: t('Finance & Audit', 'تدقيق مالي وتنفيذ'),
            icon: <Settings className="text-gold-500" />,
            desc: t(
                'Expert analysis and implementation of Odoo ERP systems for Small and Medium Enterprises (SMBs). We specialize in Retail, Distribution, and Services sectors, ensuring a smooth transition to a fully digital enterprise resource planning environment.',
                'تحليل وتنفيذ احترافي لأنظمة Odoo ERP للشركات الصغيرة والمتوسطة. متخصصون في قطاعات التجزئة، التوزيع، والخدمات، لضمان انتقال سلس إلى إدارة موارد مؤسسية رقمية بالكامل.'
            ),
            features: [
                t('Process Analysis', 'تحليل العمليات'),
                t('Data Migration', 'نقل البيانات'),
                t('Custom Workflows', 'تخصيص سير العمل'),
                t('Staff Training', 'تدريب الفريق')
            ]
        },
        {
            title: t('Google Infrastructure', 'خدمات Google للأعمال'),
            titleEn: 'Google Infrastructure',
            titleAr: 'خدمات Google للأعمال',
            subtitle: t('Consoles & Digital Presence', 'البنية الرقمية والوجود'),
            icon: <Chrome className="text-gold-500" />,
            desc: t(
                'Setting up professional digital foundations using Googles powerful business suite. From Google Business Profiles to Developer Consoles and AdMob monetization, we ensure your business is optimized for the global digital market.',
                'إعداد أسس رقمية احترافية باستخدام مجموعة خدمات Google للأعمال. من ملفات Google Business إلى منصات المطورين وأنظمة AdMob، نضمن تحسين عملك للسوق الرقمي العالمي.'
            ),
            features: [
                t('Developer Console Setup', 'إعداد منصات المطورين'),
                t('AdMob Monetization', 'نظام تحقيق الدخل AdMob'),
                t('Business Profile Optimization', 'تحسين ملفات الأعمال'),
                t('Analytics Integration', 'ربط منصات التحليل')
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
                                    {item.link && (
                                        <a href={item.link} target="_blank" className="inline-flex items-center text-gold-500 hover:text-gold-400 font-bold gap-2">
                                            {t('Visit Platform', 'زيارة المنصة')} <ArrowRight size={18} />
                                        </a>
                                    )}
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
