import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Settings, Chrome, Shield, Zap, Globe, Users, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { t } = useLanguage();
    const { isDark } = useTheme();

    useEffect(() => {
        // Background dots logic
        const createDots = () => {
            const container = document.getElementById('dots-container');
            if (!container) return;
            const dotCount = 30;
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'absolute w-1 h-1 bg-gold-500 rounded-full opacity-50 animate-float';
                dot.style.left = `${Math.random() * 100}%`;
                dot.style.top = `${Math.random() * 100}%`;
                dot.style.animationDelay = `${Math.random() * 5}s`;
                dot.style.animationDuration = `${3 + Math.random() * 7}s`;
                container.appendChild(dot);
            }
        };
        createDots();
    }, []);

    const services = [
        {
            title: 'STEPS CRM',
            subtitle: t('Vertical Real Estate CRM', 'نظام إدارة عقاري'),
            desc: t('Cloud-based system for real estate developers and brokerages. Purpose-built for automation and pipeline tracking.', 'نظام سحابي مخصص للمطورين العقاريين وشركات الوساطة. مصمم لأتمتة العمليات ومتابعة مراحل البيع.'),
            icon: <Building />,
            link: 'https://www.stepscrm.com'
        },
        {
            title: t('Odoo ERP Implementation', 'تنفيذ أنظمة Odoo'),
            subtitle: t('Finance & Audit', 'تدقيق مالي وتنفيذ'),
            desc: t('End-to-end ERP implementation for SMBs with over 90 successful projects.', 'تحليل وتنفيذ وتخصيص نظام Odoo للشركات الصغيرة والمتوسطة بأكثر من 90 مشروعاً ناجحاً.'),
            icon: <Settings />,
            link: '/services'
        },
        {
            title: t('Google Infrastructure', 'خدمات Google للأعمال'),
            subtitle: t('Consoles & Compliance', 'البنية الرقمية والالتزام'),
            desc: t('Professional setup of Google Business Profiles, Developer Consoles, and AdMob.', 'إعداد احترافي للبنية الرقمية: ملفات الأعمال، منصة المطورين، وأنظمة AdMob.'),
            icon: <Chrome />,
            link: '/services'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <div id="dots-container" className="absolute inset-0 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm"
                    >
                        <span className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold">
                            {t('Digital Transformation', 'التحول الرقمي')}
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        <span className="block text-dark-900 dark:text-white">MR EXCEL</span>
                        <span className="text-gold-gradient block mt-2">
                            {t('CONNECTING THE DOTS', 'نربط نقاط العمل')}
                        </span>
                    </h1>

                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
                        {t(
                            'We build integrated operational ecosystems that connect sales, marketing, finance, and core business processes.',
                            'نركز على بناء أنظمة تشغيل متكاملة تربط بين العمليات التجارية، المبيعات، التسويق، والإدارة المالية داخل بيئة تقنية موحدة.'
                        )}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
                            {t('Explore Solutions', 'اكتشف حلولنا')}
                        </Link>
                        <a
                            href="/assets/company-profile.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-black/20 dark:border-white/20 hover:border-gold-500 hover:text-gold-400 text-dark-900 dark:text-white font-semibold rounded transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            {t('Company Profile', 'بروفايل الشركة')}
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-dark-900 to-transparent"></div>
            </section>

            {/* Services Summary */}
            <section className="py-24 bg-gray-50 dark:bg-dark-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Our Services', 'خدماتنا')}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold dark:text-white">{t('Business Lines', 'خطوط الأعمال')}</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-gold-500/50 transition-all duration-300"
                            >
                                <div className="p-8">
                                    <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 text-gold-500 text-2xl group-hover:scale-110 transition-transform">
                                        {s.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 dark:text-white">{s.title}</h4>
                                    <p className="text-gold-500 text-xs tracking-wider mb-4 uppercase">{s.subtitle}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 min-h-[60px]">{s.desc}</p>
                                    {s.link.startsWith('http') ? (
                                        <a href={s.link} target="_blank" className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors font-semibold text-sm">
                                            {t('Visit Site', 'زيارة الموقع')} <ArrowRight className="ml-2 rtl:rotate-180" size={16} />
                                        </a>
                                    ) : (
                                        <Link to={s.link} className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors font-semibold text-sm">
                                            {t('Learn More', 'اقرأ المزيد')} <ArrowRight className="ml-2 rtl:rotate-180" size={16} />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Trust Metrics */}
            <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: t('Projects Delivered', 'مشروع تم تسليمه (3 سنوات)'), value: '90+' },
                            { label: t('Years Experience', 'خبرة مجمعة'), value: '15+' },
                            { label: t('Support Solved', 'حل التذاكر في أقل من 24 ساعة'), value: '99%' },
                            { label: t('MCS Remote Support', 'دعم فني MCS عن بُعد'), value: '24/7' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-5xl font-bold text-gold-500 mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vertical Focus */}
            <section className="py-24 bg-white dark:bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Specialized Verticals', 'القطاعات المتخصصة')}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{t('Deep Industry Specialization', 'تركيزنا الصناعي')}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                {t(
                                    'We don\'t just deliver software — we design structured business ecosystems. Our strength lies in deep industry specialization.',
                                    'نحن لا نقدم برامج فقط — بل نقوم ببناء منظومات تشغيل متكاملة. تعتمد قوتنا على التخصص العميق في محاور استراتيجية.'
                                )}
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: t('Real Estate Technology', 'تكنولوجيا القطاع العقاري'), icon: <Building size={20} /> },
                                    { title: t('SMB ERP Systems', 'أنظمة ERP للشركات الصغيرة والمتوسطة'), icon: <Zap size={20} /> },
                                    { title: t('Google Business Ecosystem', 'البنية الرقمية العالمية'), icon: <Globe size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-900/50 rounded-xl border border-black/5 dark:border-white/5 group hover:border-gold-500/30 transition-all">
                                        <div className="text-gold-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                                        <span className="font-bold dark:text-gray-200">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-3xl opacity-30"></div>
                            <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5">
                                <Shield className="text-gold-500 mb-6" size={48} />
                                <h4 className="text-2xl font-bold mb-4 dark:text-white">{t('The Security & Stability Factor', 'عامل الأمان والاستدامة')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 mb-6">
                                    {t(
                                        'Operational security and system integrity are foundational to every solution we implement. We build for performance.',
                                        'الأمان التشغيلي وسلامة البيانات جزء أساسي من كل مشروع ننفذه. نحن نبني أنظمة مصممة للأداء بأمان واستدامة.'
                                    )}
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        t('End-to-end Data Protection', 'حماية بيانات متكاملة'),
                                        t('Automated Backup Strategies', 'نسخ احتياطية مؤتمتة'),
                                        t('Cloud Infrastructure Reliability', 'موثوقية بنية سحابية'),
                                        t('Policy-compliant Configurations', 'إعدادات متوافقة مع السياسات'),
                                        t('Long-term System Scalability', 'قابلية توسع طويلة الأمد')
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-dark-800 dark:text-gray-300">
                                            <CheckCircle2 size={16} className="text-gold-500" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRM Showcase */}
            <section className="py-24 bg-gray-50 dark:bg-dark-900 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Vertical CRM', 'نظام CRM متخصص')}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">STEPS CRM</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                {t(
                                    'A cloud-based web application purpose-built for real estate developers and brokerage companies to centralize operations and increase conversion.',
                                    'نظام سحابي متكامل تم تطويره بواسطة خبراء في التسويق العقاري، مصمم خصيصاً لشركات التطوير والوساطة لزيادة معدلات التحويل.'
                                )}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:scale-105 transition-all"
                                >
                                    {t('Watch Demo', 'مشاهدة عرض توضيحي')}
                                    <ExternalLink size={16} />
                                </a>
                                <a href="/assets/company-profile.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:scale-105 transition-all">
                                    {t('Company Profile', 'بروفايل الشركة')}
                                    <Download size={16} />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={isDark ? "/assets/step-crm-light.png" : "/assets/step-crm-dark.png"}
                                    alt="STEPS CRM Interface"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                            {/* Decorative background element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* The Process */}
            <section className="py-24 bg-gray-50 dark:bg-dark-900 border-y border-black/5 dark:border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Methodology', 'منهجيتنا')}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold dark:text-white">{t('From Audit to Launch', 'من التحليل حتى الإطلاق')}</h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: t('Audit', 'التدقيق'), desc: t('Detailed analysis of current systems.', 'تحليل دقيق للأنظمة الحالية.') },
                            { step: '02', title: t('Design', 'التصميم'), desc: t('Architecting the solution.', 'بناء هيكل الحل التقني.') },
                            { step: '03', title: t('Deploy', 'التنفيذ'), desc: t('Implementation & Migration.', 'التنفيذ الفعلي ونقل البيانات.') },
                            { step: '04', title: t('Scale', 'التوسع'), desc: t('Ongoing growth & support.', 'النمو المستمر والدعم.') }
                        ].map((s, i) => (
                            <div key={i} className="relative group text-center">
                                <div className={`text-8xl font-bold text-black/5 dark:text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-gold-500/10 transition-colors uppercase select-none`}>{s.step}</div>
                                <div className="relative z-10 pt-10">
                                    <h4 className="text-xl font-bold mb-2 dark:text-white">{s.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{s.desc}</p>
                                </div>
                                {i < 3 && <div className={`hidden lg:block absolute top-1/2 ${t('-right-4', '-left-4')} w-8 h-[2px] bg-gold-500/20`}></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden bg-white dark:bg-dark-800">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 dark:text-white">
                        {t('Ready to Connect the Dots?', 'هل أنت مستعد لربط النقاط؟')}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                        {t(
                            'Let’s build your integrated digital ecosystem today. Your business transformation starts with a single conversation.',
                            'لنقم ببناء نظامك الرقمي المتكامل اليوم. تحول عملك يبدأ بمحادثة واحدة.'
                        )}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold-600 hover:bg-gold-500 text-black font-bold rounded-xl transition-all hover:scale-105 hover:shadow-xl group">
                        {t('Start Your Journey', 'ابدأ رحلتك معنا')}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
