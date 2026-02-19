import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Chrome, Search, Shield, Globe, Settings, Activity, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleInfrastructurePage = () => {
    const { t } = useLanguage();

    const servicesList = [
        {
            title: t('Google Business Profile setup & optimization', 'إعداد وتحسين Google Business Profile'),
            icon: <Search className="w-6 h-6" />,
        },
        {
            title: t('Google Developer Console configuration', 'إعداد Google Developer Console'),
            icon: <Settings className="w-6 h-6" />,
        },
        {
            title: t('Google AdMob setup & monetization readiness', 'إعداد وربط Google AdMob وتجهيزه لتحقيق الدخل'),
            icon: <Activity className="w-6 h-6" />,
        },
        {
            title: t('Policy compliance & account status review', 'مراجعة التوافق مع سياسات Google'),
            icon: <Shield className="w-6 h-6" />,
        },
        {
            title: t('Technical issue resolution & infrastructure structuring', 'حل المشكلات التقنية المتعلقة بالحسابات'),
            icon: <CheckCircle2 className="w-6 h-6" />,
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/5 dark:bg-gold-500/5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block mb-4 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm"
                        >
                            <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
                                {t('Digital Presence', 'التواجد الرقمي')}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-dark-900 dark:text-white"
                        >
                            Google Business Infrastructure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gold-500 mb-8 font-medium"
                        >
                            {t('Compliance & Scalable Ecosystem', 'البنية الرقمية لخدمات Google')}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            {t(
                                'We provide professional setup and compliance management for essential Google business platforms, ensuring accounts are structured according to Google policies and best practices.',
                                'نوفر إعداداً احترافياً لحسابات وأنظمة Google التجارية، مع ضمان الالتزام بسياسات Google وأفضل الممارسات التقنية.'
                            )}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-gold-500/30"
                            >
                                {t('Consult Our Experts', 'استشر خبرائنا')}
                            </Link>
                            <a
                                href="/assets/company-profile.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-black/20 dark:border-white/20 hover:border-gold-500 text-dark-900 dark:text-white font-bold rounded-lg transition-all flex items-center gap-2"
                            >
                                <Download size={20} />
                                {t('Download Profile', 'تحميل ملف الشركة')}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services List Grid */}
            <section className="py-20 bg-white dark:bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-dark-900 dark:text-white">
                            {t('Our Services Include', 'تشمل خدماتنا')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-gray-50 dark:bg-dark-900 border border-black/5 dark:border-white/5 hover:border-gold-500/30 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark-900 dark:text-white leading-tight">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem / Impact Section */}
            <section className="py-20 bg-gray-50 dark:bg-dark-900 border-t border-black/5 dark:border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-dark-900 dark:text-white">
                            {t('Stable, Compliant & Scalable Ecosystem', 'بيئة رقمية مستقرة، آمنة، وقابلة للتوسع')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">
                            {t(
                                'We ensure businesses operate with a stable, compliant, and scalable Google ecosystem that supports growth and digital monetization.',
                                'نضمن تشغيل بيئة Google مستقرة، آمنة، وقابلة للتوسع لدعم النمو الرقمي وتحقيق العائد.'
                            )}
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl border border-black/5 dark:border-white/5">
                                <h4 className="font-bold text-gold-500 mb-2">{t('Compliance', 'الالتزام')}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('Adhering to Google\'s strict platform policies.', 'الالتزام بسياسات Google الصارمة.')}</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl border border-black/5 dark:border-white/5">
                                <h4 className="font-bold text-gold-500 mb-2">{t('Growth', 'النمو')}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('Optimized for visibility and user reach.', 'تحسين الظهور والوصول للمستخدمين.')}</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl border border-black/5 dark:border-white/5">
                                <h4 className="font-bold text-gold-500 mb-2">{t('Monetization', 'تحقيق الدخل')}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('Structured for sustainable revenue streams.', 'تهيئة مسارات مستدامة لتحقيق الدخل.')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gold-600 text-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t('Ready to Structure Your Google Ecosystem?', 'هل أنت مستعد لتنظيم بيئتك الرقمية على Google؟')}
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-xl"
                    >
                        {t('Get Started Today', 'ابدأ اليوم')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GoogleInfrastructurePage;
