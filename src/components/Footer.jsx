import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-white dark:bg-dark-900 pt-16 pb-8 border-t border-black/5 dark:border-white/10 text-dark-900 dark:text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 ">
                        <Link to="/" className="text-3xl font-bold tracking-wider flex items-center gap-2 mb-6" dir={t('ltr', 'rtl')}>
                            <span className="text-dark-900 dark:text-white">MR</span>
                            <span className="text-gold-500">EXCEL</span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                            {t(
                                'Transforming operational challenges into scalable digital solutions. Connecting the dots for your business success.',
                                'تحويل التحديات التشغيلية إلى حلول رقمية قابلة للتوسع. نربط نقاط العمل لنجاح أعمالك.'
                            )}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">{t('Quick Links', 'روابط سريعة')}</h4>
                        <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-sm">
                            <li><Link to="/about" className="hover:text-gold-500 transition-colors">{t('About Us', 'من نحن')}</Link></li>
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t('Services', 'الخدمات')}</Link></li>
                            <li><a href="https://www.stepscrm.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">STEPS CRM</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">{t('Contact', 'تواصل')}</h4>
                        <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-gold-500" />
                                <a href="mailto:info@mrexcel-app.com" className="hover:text-gold-500 transition-colors">info@mrexcel-app.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe size={16} className="text-gold-500" />
                                <div className="flex flex-col gap-1">
                                    <a href="https://www.mrexcel-app.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">mrexcel-app.com</a>
                                    <a href="https://www.stepscrm.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">stepscrm.com</a>
                                    <a href="https://www.stepscrm.pro" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">stepscrm.pro</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 mt-4">
                                <a
                                    href="https://maps.app.goo.gl/arMLWWvRbakq4pBH6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500 hover:bg-gold-500/20 transition-all font-semibold"
                                >
                                    <Globe size={14} />
                                    {t('Location on Map', 'موقعنا على الخريطة')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-500 text-sm">© {new Date().getFullYear()} MR EXCEL. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-200 dark:hover:bg-dark-700 transition-all duration-300"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-200 dark:hover:bg-dark-700 transition-all duration-300"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-200 dark:hover:bg-dark-700 transition-all duration-300"><Mail size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
