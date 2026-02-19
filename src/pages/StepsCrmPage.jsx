import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Building, Users, CheckCircle2, BarChart, DollarSign, Activity, PieChart, TrendingUp, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const StepsCrmPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('Lead and Client Management', 'إدارة العملاء والمحتملين'),
            icon: <Users className="w-6 h-6" />,
            desc: t('Centralize all your leads and client data in one secure place.', 'مركزية جميع بيانات العملاء والمحتملين في مكان واحد آمن.')
        },
        {
            title: t('Sales Pipeline Tracking', 'متابعة مراحل البيع'),
            icon: <TrendingUp className="w-6 h-6" />,
            desc: t('Visualize and manage your sales pipeline from initial contact to closing.', 'تخيل وإدارة خط سير المبيعات من الاتصال الأولي إلى الإغلاق.')
        },
        {
            title: t('Marketing Campaign Performance', 'قياس أداء الحملات التسويقية'),
            icon: <BarChart className="w-6 h-6" />,
            desc: t('Track the ROI of your marketing campaigns in real-time.', 'تتبع عائد الاستثمار لحملاتك التسويقية في الوقت الحقيقي.')
        },
        {
            title: t('Commission and Financial Follow-up', 'متابعة العمولات والجوانب المالية'),
            icon: <DollarSign className="w-6 h-6" />,
            desc: t('Automate commission calculations and financial tracking.', 'أتمتة حسابات العمولات والتتبع المالي.')
        },
        {
            title: t('Team Performance Monitoring', 'تقييم أداء فرق المبيعات'),
            icon: <Activity className="w-6 h-6" />,
            desc: t('Gain insights into your team\'s performance and productivity.', 'احصل على رؤى حول أداء فريقك وإنتاجيته.')
        },
        {
            title: t('Real-time Reporting & Analytics', 'تقارير لحظية تدعم اتخاذ القرار'),
            icon: <PieChart className="w-6 h-6" />,
            desc: t('Make data-driven decisions with comprehensive real-time reports.', 'اتخذ قرارات مبنية على البيانات مع تقارير شاملة في الوقت الحقيقي.')
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
                                {t('Steps CRM', 'STEPS CRM')}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-dark-900 dark:text-white"
                        >
                            STEPS CRM
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gold-500 mb-8 font-medium"
                        >
                            {t('Vertical Real Estate CRM', 'نظام إدارة علاقات العملاء العقاري المتخصص')}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            {t(
                                'STEPS CRM is a cloud-based web application developed by real estate marketing experts, purpose-built for real estate developers and brokerage companies.',
                                'STEPS CRM هو نظام سحابي متكامل تم تطويره بواسطة خبراء في التسويق العقاري، ومصمم خصيصًا لشركات التطوير العقاري والوساطة.'
                            )}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-red-600/30"
                            >
                                <ExternalLink size={20} />
                                {t('Watch Demo', 'عرض توضيحي للنظام')}
                            </a>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-gold-500/30"
                            >
                                {t('Request Access', 'طلب الوصول')}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white dark:bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-dark-900 dark:text-white">
                            {t('Automate & Streamline', 'أتمتة وتبسيط العمليات')}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            {t(
                                'STEPS CRM enables real estate organizations to centralize operations, increase conversion rates, and enhance sales team productivity.',
                                'يوفر STEPS CRM بيئة تشغيل موحدة تساعد شركات العقارات على زيادة معدلات التحويل ورفع كفاءة الفرق البيعية.'
                            )}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-gray-50 dark:bg-dark-900 border border-black/5 dark:border-white/5 hover:border-gold-500/30 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video / Product Overview Section */}
            <section className="py-20 bg-gray-50 dark:bg-dark-900 border-t border-black/5 dark:border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Product Overview', 'نظرة عامة على المنتج')}</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dark-900 dark:text-white">
                                {t('See STEPS CRM in Action', 'شاهد STEPS CRM في العمل')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                {t(
                                    'Explore our comprehensive video library demonstrating the power and flexibility of STEPS CRM. From lead management to advanced reporting, see how our system can transform your real estate operations.',
                                    'استكشف مكتبة الفيديو الشاملة لدينا التي توضح قوة ومرونة STEPS CRM. من إدارة المحتملين إلى التقارير المتقدمة، شاهد كيف يمكن لنظامنا تحويل عملياتك العقارية.'
                                )}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    t('Detailed Walkthroughs', 'شروحات تفصيلية'),
                                    t('Feature Highlights', 'أبرز الميزات'),
                                    t('Best Practices', 'أفضل الممارسات'),
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-dark-800 dark:text-gray-200">
                                        <CheckCircle2 className="text-gold-500 w-5 h-5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
                            >
                                <ExternalLink size={20} />
                                {t('Watch Full Playlist on YouTube', 'شاهد القائمة الكاملة على يوتيوب')}
                            </a>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
                                {/* Placeholder for video thumbnail or embed */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                                    <a
                                        href="https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                                    >
                                        <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-white border-b-10 border-b-transparent ml-1"></div>
                                    </a>
                                </div>
                                <a
                                    href="https://youtube.com/playlist?list=PLLbjPPN9Ueb548HxoPjCdv1qdMnqewH_H&si=vvnqjzKAWuaGd_VY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full"
                                >
                                    <img
                                        src="/assets/step-crm-light.png"
                                        alt="STEPS CRM Demo"
                                        className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gold-600 text-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t('Ready to Upgrade Your Real Estate Operations?', 'هل أنت مستعد لترقية عملياتك العقارية؟')}
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        {t(
                            'Join leading real estate developers and brokers who trust STEPS CRM.',
                            'انضم إلى كبار المطورين والوسطاء العقاريين الذين يثقون في STEPS CRM.'
                        )}
                    </p>
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

export default StepsCrmPage;
