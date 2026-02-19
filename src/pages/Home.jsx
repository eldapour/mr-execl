import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, Settings, Chrome, Shield, Zap, Globe, Users, CheckCircle2, Download, ExternalLink, ChevronRight } from 'lucide-react';
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

    const [activeVertical, setActiveVertical] = useState(0);

    const services = [
        {
            title: 'STEPS CRM',
            subtitle: t('Vertical Real Estate CRM', 'نظام إدارة عقاري'),
            desc: t('STEPS CRM is a cloud-based web application developed by real estate marketing experts, purpose-built for real estate developers and brokerage companies.', ' هو نظام سحابي متكامل تم تطويره بواسطة خبراء في التسويق العقاري، ومصمم خصيصًا لشركات التطوير العقاري والوساطة'),
            icon: <Building />,
            link: '/steps-crm'
        },
        {
            title: t('Odoo ERP Implementation', 'تنفيذ أنظمة Odoo ERP'),
            subtitle: t('Complete Business Transformation', 'التحول الرقمي للأعمال'),
            desc: t('We provide end-to-end Odoo ERP implementation services, delivering complete business transformation solutions tailored for small and medium-sized enterprises.', 'نقدم خدمات متكاملة لتنفيذ وتخصيص نظام Odoo ERP للشركات الصغيرة والمتوسطة، وفق منهجية احترافية تضمن نجاح التحول الرقمي.'),
            icon: <Settings />,
            link: '/odoo-erp'
        },
        {
            title: t('Google Business Infrastructure', 'البنية الرقمية لخدمات Google'),
            subtitle: t('Compliance & Monetization', 'الالتزام وتحقيق الدخل'),
            desc: t('Professional setup and compliance management for essential Google business platforms, ensuring accounts are structured according to Google policies.', 'نوفر إعداداً احترافياً لحسابات وأنظمة Google التجارية، مع ضمان الالتزام بسياسات Google وأفضل الممارسات التقنية.'),
            icon: <Chrome />,
            link: '/google-infrastructure'
        }
    ];

    const verticals = [
        {
            id: 'real-estate',
            title: t('Real Estate Technology', 'تكنولوجيا القطاع العقاري'),
            subtitle: t('Vertical CRM for Developers & Brokers', 'نظام CRM متخصص للمطورين والوسطاء'),
            desc: t(
                'Through STEPS CRM, we empower real estate organizations with a purpose-built cloud platform designed by industry experts.',
                'من خلال STEPS CRM نمكّن شركات العقارات من العمل عبر منصة سحابية مصممة خصيصًا بواسطة خبراء السوق العقاري.'
            ),
            impact: t(
                'We transform fragmented sales processes into high-conversion, data-driven pipelines.',
                'نحوّل العمليات البيعية المتفرقة إلى منظومة قائمة على البيانات عالية الكفاءة.'
            ),
            icon: <Building size={24} />,
            features: [
                t('Structured lead lifecycle management', 'إدارة دورة حياة العميل بشكل منظم'),
                t('Sales automation & performance tracking', 'أتمتة عمليات البيع ومتابعة الأداء'),
                t('Marketing-to-sales integration', 'ربط التسويق بالمبيعات'),
                t('Financial visibility & commission tracking', 'شفافية مالية ومتابعة العمولات'),
                t('Real-time executive reporting', 'تقارير لحظية لدعم القرار التنفيذي'),
                t('Inventory Management', 'إدارة المخزون العقاري')
            ]
        },
        {
            id: 'erp',
            title: t('SMB ERP Systems', 'أنظمة ERP للشركات الصغيرة والمتوسطة'),
            subtitle: t('Odoo ERP Implementation for Retail, Services & Distribution', 'تنفيذ Odoo ERP لقطاعات التجزئة والخدمات والتوزيع'),
            desc: t(
                'We architect and implement integrated ERP environments that unify core business operations.',
                'نقوم بتحليل وبناء أنظمة ERP موحدة تربط جميع إدارات الشركة داخل بيئة تشغيل واحدة.'
            ),
            impact: t(
                'With 90+ successful implementations, we bring execution discipline and enterprise-level structure to small and mid-sized businesses.',
                'مع تنفيذ أكثر من 90 مشروعًا ناجحًا، نوفر هيكلة مؤسسية بمعايير احترافية عالية.'
            ),
            icon: <Zap size={24} />,
            features: [
                t('Business process engineering', 'إعادة هندسة العمليات'),
                t('Custom ERP configuration & development', 'إعداد وتخصيص النظام'),
                t('Multi-department integration', 'ربط الإدارات المختلفة'),
                t('Data-driven operational control', 'تحكم تشغيلي قائم على البيانات'),
                t('Scalable system architecture', 'بنية تقنية قابلة للنمو والتوسع')
            ]
        },
        {
            id: 'google',
            title: t('Google Business Ecosystem', 'البنية الرقمية العالمية'),
            subtitle: t('Google Business & Monetization Ecosystem', 'إدارة منظومة Google للأعمال وتحقيق الدخل'),
            desc: t(
                'We structure compliant, scalable, and monetization-ready Google environments for global digital operations.',
                'نقوم ببناء بيئة Google احترافية، متوافقة مع السياسات، وقابلة للتوسع لدعم النمو الرقمي.'
            ),
            impact: t(
                'We ensure your digital presence is not just active — but structured for long-term stability and revenue growth.',
                'نضمن حضورًا رقميًا مستقرًا ومؤهلًا لتحقيق العوائد.'
            ),
            icon: <Globe size={24} />,
            features: [
                t('Google Business Profile optimization', 'تحسين Google Business Profile'),
                t('Developer Console configuration', 'إعداد Google Developer Console'),
                t('AdMob monetization setup', 'تهيئة Google AdMob لتحقيق الدخل'),
                t('Policy compliance & account security', 'مراجعة التوافق مع السياسات'),
                t('Technical infrastructure stabilization', 'تثبيت البنية التقنية للحسابات')
            ]
        },
        {
            id: 'security',
            title: t('The Security & Stability Factor', 'عامل الأمان والاستدامة'),
            subtitle: t('Foundation of Every Solution', 'الأمان التشغيلي وسلامة البيانات'),
            desc: t(
                'Operational security and system integrity are foundational to every solution we implement.',
                'الأمان التشغيلي وسلامة البيانات جزء أساسي من كل مشروع ننفذه.'
            ),
            impact: t(
                'We build technology environments designed to perform — securely and sustainably.',
                'نحن نبني أنظمة مصممة للأداء… بأمان واستدامة.'
            ),
            icon: <Shield size={24} />,
            features: [
                t('End-to-end data protection', 'حماية بيانات متكاملة'),
                t('Automated backup strategies', 'نسخ احتياطية مؤتمتة'),
                t('Cloud-based infrastructure reliability', 'موثوقية بنية سحابية'),
                t('Policy-compliant configurations', 'إعدادات متوافقة مع السياسات'),
                t('Long-term system scalability', 'قابلية توسع طويلة الأمد')
            ]
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div id="dots-container" className="absolute inset-0 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm"
                        style={{ marginTop: '5rem' }}
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
                                    {s.link.startsWith('http') ? (<>
                                        <div className="flex justify-between items-center w-full">
                                            <a href={s.link} target="_blank" className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors font-semibold text-sm">
                                                {t('Visit Site', 'زيارة الموقع')} <ArrowRight className="ml-2 rtl:rotate-180" size={16} />
                                            </a>
                                            <Link to={s.link} className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors font-semibold text-sm">
                                                {t('Learn More', 'اقرأ المزيد')} <ArrowRight className="ml-2 rtl:rotate-180" size={16} />
                                            </Link>
                                        </div>
                                    </>
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
                            { label: t('90+ PROJECT DELIVIERD IN LAST 3 YEARS', '90 مشروع تم تسليمها في اخر 3 سنوات'), value: '90+' },
                            { label: t('15+ YEARS COMPUND EXPERIENCE', 'اكثر من 15 سنة خبرة مجمعة'), value: '15+' },
                            { label: t('99% OF SUPPORT TICKETS SOLVED IN FIRST DAY', '99% من تذاكر الدعم الفني تم حلها في اقل من 24 ساعة'), value: '99%' },
                            { label: t('24/7 MCS REMOTE SUPPORT', 'دعم فني على مدار الساعة من خلال ام سي اس'), value: '24/7' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl md:text-4xl font-bold text-gold-500 mb-2 leading-tight">{stat.value}</div>
                                <div className="text-gray-400 text-[10px] md:text-sm uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vertical Focus */}
            <section className="py-24 bg-white dark:bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Industry Focus', 'تركيزنا الصناعي')}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{t('Specialized Verticals', 'القطاعات المتخصصة')}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                {t(
                                    'We don’t just deliver software — we design structured business ecosystems. Our strength lies in deep industry specialization across three strategic verticals, enabling measurable impact, operational clarity, and scalable growth.',
                                    'نحن لا نقدم برامج فقط — بل نقوم ببناء منظومات تشغيل متكاملة. تعتمد قوتنا على التخصص العميق في ثلاثة محاور استراتيجية تضمن أثرًا ملموسًا، وتحكمًا تشغيليًا واضحًا، ونموًا قابلًا للتوسع'
                                )}
                            </p>
                            <div className="space-y-4">
                                {verticals.map((item, i) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveVertical(i)}
                                        className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group ${activeVertical === i
                                            ? 'bg-gold-500/10 border-gold-500/50 shadow-lg shadow-gold-500/5'
                                            : 'bg-gray-50 dark:bg-dark-900/50 border-black/5 dark:border-white/5 hover:border-gold-500/30'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 text-left rtl:text-right">
                                            <div className={`transition-all duration-300 ${activeVertical === i ? 'text-gold-500 scale-110' : 'text-gray-400 group-hover:text-gold-500'}`}>
                                                {item.icon}
                                            </div>
                                            <span className={`font-bold transition-colors ${activeVertical === i ? 'text-dark-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                                {item.title}
                                            </span>
                                        </div>
                                        <ChevronRight size={20} className={`text-gold-500 transition-transform duration-300 rtl:rotate-180 ${activeVertical === i ? 'translate-x-1 rtl:-translate-x-1' : 'opacity-0'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeVertical}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative glass-card p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        {verticals[activeVertical].icon}
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                                            {verticals[activeVertical].icon}
                                        </div>
                                        <div>
                                            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-[10px] mb-1">
                                                {verticals[activeVertical].title}
                                            </h4>
                                            <div className="h-px bg-gold-500/20 w-12"></div>
                                        </div>
                                    </div>

                                    <h5 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white leading-tight">
                                        {verticals[activeVertical].subtitle}
                                    </h5>

                                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                                        {verticals[activeVertical].desc}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {verticals[activeVertical].features.map((f, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm text-dark-800 dark:text-gray-300 group/item">
                                                <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center group-hover/item:bg-gold-500 transition-colors">
                                                    <CheckCircle2 size={12} className="text-gold-500 group-hover/item:text-white transition-colors" />
                                                </div>
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 rounded-2xl bg-gold-500/5 border border-gold-500/10 italic text-gray-700 dark:text-gray-200 text-sm leading-relaxed relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
                                        {verticals[activeVertical].impact}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
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
