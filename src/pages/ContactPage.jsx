import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Globe, MapPin, Send, Phone, MessageSquare } from 'lucide-react';

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
                                    <p className="text-gray-500 dark:text-gray-400">info@mrxcel-app.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('Visit Website', 'موقعنا')}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">www.mrxcel-app.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white">{t('Global Live Support', 'دعم فني مباشر')}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">24/7 Remote Assistance</p>
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
