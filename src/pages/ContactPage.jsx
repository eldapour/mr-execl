import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, MapPin, Send, Phone } from 'lucide-react';

const ContactPage = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-gold-500 text-sm tracking-widest uppercase font-bold mb-2">{t('Get In Touch', 'تواصل معنا')}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{t('Contact Our Experts', 'تحدث مع خبرائنا')}</h3>

                        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
                            {t(
                                'Have a question or ready to start your digital transformation journey? Our team is here to help you connect the dots.',
                                'لديك سؤال أو مستعد لبدء رحلة التحول الرقمي؟ فريقنا هنا لمساعدتك في ربط نقاط العمل.'
                            )}
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('Email Us', 'راسلنا')}</h4>
                                    <a href="mailto:info@mrexcel-app.com" className="text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">info@mrexcel-app.com</a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <Globe size={24} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-bold text-lg dark:text-white">{t('Visit Our Websites', 'مواقعنا')}</h4>
                                    <a href="https://www.mrexcel-app.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">www.mrexcel-app.com</a>
                                    <a href="https://www.stepscrm.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">www.stepscrm.com</a>
                                    <a href="https://www.stepscrm.pro" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">www.stepscrm.pro</a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('Our Location', 'موقعنا')}</h4>
                                    <a href="https://maps.app.goo.gl/arMLWWvRbakq4pBH6" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">
                                        {t('View on Google Maps', 'عرض على خرائط جوجل')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="0" fill="currentColor" className="fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.357-5.225c0-5.427 4.405-9.849 9.839-9.849 2.628 0 5.099 1.024 6.958 2.882a9.818 9.818 0 012.883 6.957c-.001 5.427-4.407 9.846-9.84 9.846"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('WhatsApp Support', 'دعم واتساب')}</h4>
                                    <a
                                        href="https://wa.me/201050007513?text=Hello%20%F0%9F%91%8B%20%20I%20came%20through%20website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 dark:text-gray-400 hover:text-[#25D366] transition-colors"
                                    >
                                        {t('Chat with us', 'تحدث معنا')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5">
                        <h4 className="text-2xl font-bold mb-8 dark:text-white">{t('Send a Message', 'أرسل رسالة')}</h4>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold dark:text-gray-300">{t('Full Name', 'الاسم الكامل')}</label>
                                    <input type="text" className="w-full bg-gray-50 dark:bg-dark-800 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold dark:text-gray-300">{t('Email Address', 'البريد الإلكتروني')}</label>
                                    <input type="email" className="w-full bg-gray-50 dark:bg-dark-800 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all dark:text-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold dark:text-gray-300">{t('Subject', 'الموضوع')}</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-dark-800 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all dark:text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold dark:text-gray-300">{t('Message', 'الرسالة')}</label>
                                <textarea rows="5" className="w-full bg-gray-50 dark:bg-dark-800 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all dark:text-white"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                <span>{t('Send Message', 'إرسال الرسالة')}</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
