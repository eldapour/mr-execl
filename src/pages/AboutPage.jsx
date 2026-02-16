import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, ChartLine, Network, Cloud, Users } from 'lucide-react';

const AboutPage = () => {
    const { t } = useLanguage();

    const features = [
        { icon: <ChartLine className="text-gold-500" />, title: t('Scalable Growth', 'نمو قابل للتوسع') },
        { icon: <Network className="text-gold-500" />, title: t('Integrated Systems', 'أنظمة مترابطة') },
        { icon: <Cloud className="text-gold-500" />, title: t('Cloud Solutions', 'حلول سحابية') },
        { icon: <Users className="text-gold-500" />, title: t('Remote Expert', 'خبراء عن بعد') },
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Who We Are', 'من نحن')}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">
                            {t('Global Remote Technology Solutions', 'حلول تقنية عن بُعد بمستوى عالمي')}
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                            {t(
                                'MR EXCEL is specialized in digital transformation and enterprise system implementation. Our methodology is built on deep market understanding and transforming operational challenges into scalable digital solutions that enhance efficiency and long-term business value.',
                                'شركة متخصصة في تقديم حلول التحول الرقمي والأنظمة المؤسسية عن بُعد. نعمل وفق منهجية تعتمد على فهم عميق لاحتياجات السوق وتحويل التحديات التشغيلية إلى حلول رقمية قابلة للتوسع.'
                            )}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-gold-500">
                                <h4 className="font-bold text-xl mb-3 dark:text-white">{t('Our Vision', 'رؤيتنا')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {t(
                                        'To become a trusted digital transformation partner for growth-oriented businesses seeking structured scalability.',
                                        'أن نكون شريك التحول الرقمي الموثوق للشركات الطامحة إلى النمو المنظم والتوسع المستدام.'
                                    )}
                                </p>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-gold-500">
                                <h4 className="font-bold text-xl mb-3 dark:text-white">{t('Our Mission', 'مهمتنا')}</h4>
                                <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-3">
                                    <li className="flex items-center gap-2"><Check className="text-gold-500" size={16} /> {t('Process Automation', 'أتمتة العمليات')}</li>
                                    <li className="flex items-center gap-2"><Check className="text-gold-500" size={16} /> {t('Data Management', 'إدارة البيانات')}</li>
                                    <li className="flex items-center gap-2"><Check className="text-gold-500" size={16} /> {t('Operational Optimization', 'رفع كفاءة الفرق')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-gold-500/10 rounded-full blur-3xl opacity-30"></div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            {features.map((f, i) => (
                                <div key={i} className={`bg-gray-50 dark:bg-dark-700 p-8 rounded-2xl border border-black/5 dark:border-white/5 ${i % 2 !== 0 ? 'translate-y-8' : ''}`}>
                                    <div className="mb-4 text-4xl">{f.icon}</div>
                                    <h4 className="font-bold text-lg dark:text-white">{f.title}</h4>
                                    <div className="h-1 w-12 bg-gold-500 rounded mt-4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
