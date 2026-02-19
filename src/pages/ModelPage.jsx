import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, TrendingUp, Zap, BarChart3, Globe2, Briefcase } from 'lucide-react';

const ModelPage = () => {
    const { t } = useLanguage();

    const modelHighlights = [
        { icon: <Zap />, title: t('Scalable', 'قابل للتوسع'), text: t('Built for rapid growth and expansion.', 'مصمم للنمو السريع والتوسع.') },
        { icon: <Globe2 />, title: t('Remote First', 'عن بعد'), text: t('Serving global clients with efficiency.', 'خدمة عملاء عالميين بكفاءة عالية.') },
        { icon: <Briefcase />, title: t('Long-term', 'طويل الأمد'), text: t('Strategic partnerships and recurring value.', 'شراكات استراتيجية وقيمة مستمرة.') },
    ];

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('How We Work', 'كيف نعمل')}</h2>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">{t('Business Model & Investment Value', 'نموذج العمل والقيمة الاستثمارية')}</h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold dark:text-white border-b border-gold-500/30 pb-4 inline-block">{t('Business Model', 'نموذج العمل')}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                            {t(
                                'We operate as a remote-first technology partner, serving global clients with optimized operational costs. Our model focus on core scalable solutions that allow businesses to grow without the overhead of massive in-house IT infrastructure.',
                                'نعمل كشريك تقني يعتمد على نموذج العمل عن بُعد، مما يتيح لنا خدمة عملاء حول العالم بتكاليف تشغيلية محسنة. يركز نموذجنا على الحلول الأساسية القابلة للتوسع.'
                            )}
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {modelHighlights.map((h, i) => (
                                <div key={i} className="p-6 bg-gray-50 dark:bg-dark-800 rounded-2xl border border-black/5 dark:border-white/5">
                                    <div className="text-gold-500 mb-4">{h.icon}</div>
                                    <h4 className="font-bold mb-2 dark:text-white">{h.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold dark:text-white border-b border-gold-500/30 pb-4 inline-block">{t('Investment Value', 'القيمة الاستثمارية')}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                            {t(
                                'Operating across three strategic verticals (CRM, ERP, and Digital Infrastructure) creates both horizontal and vertical expansion opportunities, ensuring long-term sustainability.',
                                'العمل عبر ثلاثة محاور استراتيجية (CRM، ERP، والبنية الرقمية) يخلق فرصاً للتوسع الأفقي والرأسي، مما يضمن الاستدامة والنمو.'
                            )}
                        </p>
                        <div className="space-y-4">
                            {[
                                { id: 1, text: t('High Vertical Integration in Real Estate', 'تكامل رأسي عالي في قطاع العقارات') },
                                { id: 2, text: t('Scalable Enterprise ERP Implementation', 'تنفيذ أنظمة ERP مؤسسية قابلة للتوسع') },
                                { id: 3, text: t('Sustainable Digital Infrastructure Services', 'خدمات بنية رقمية مستدامة') }
                            ].map(v => (
                                <div key={v.id} className="flex items-center p-5 bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-black/5 dark:border-white/5">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center text-black font-bold mr-4 rtl:ml-4 rtl:mr-0 shrink-0">
                                        {v.id}
                                    </div>
                                    <span className="text-lg font-medium dark:text-gray-200">{v.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Growth Statistics - New Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-black/5 dark:border-white/10">
                    {[
                        {
                            value: t('90+', '+90'),
                            label: t('Projects Successfully Delivered', 'مشروع تم تنفيذه بنجاح')
                        },
                        {
                            value: t('3 Core', '3 حلول تقنية'),
                            label: t('Technology Solutions', 'متخصصة')
                        },
                        {
                            value: t('Cloud-Based', 'أنظمة سحابية'),
                            label: t('Secure & Scalable Systems', 'آمنة وقابلة للتوسع')
                        },
                        {
                            value: t('Dedicated', 'دعم فني'),
                            label: t('Remote Support', 'عن بُعد باحترافية')
                        }
                    ].map((m, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-2xl md:text-3xl font-bold text-gold-500 mb-2 transition-transform group-hover:scale-110">
                                {m.value}
                            </div>
                            <div className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed">
                                {m.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModelPage;
