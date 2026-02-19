import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const { lang, toggleLanguage, t } = useLanguage();
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('Home', 'الرئيسية'), path: '/' },
        { name: t('About', 'من نحن'), path: '/about' },
        { name: t('Business Lines', 'خطوط الأعمال'), path: '/services' },
        { name: t('Model', 'نموذج العمل'), path: '/model' },
        { name: t('Contact', 'تواصل معنا'), path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark-900/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={isDark ? "/assets/mr-execl-logo-dark.png" : "/assets/mr-execl-logo.png"}
                        alt="MR EXCEL"
                        className="h-20 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-gold-500' : 'hover:text-gold-400 text-dark-800 dark:text-gray-300'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-6 h-6">
                        <button onClick={toggleTheme} className="text-dark-800 dark:text-gray-300 hover:text-gold-500 transition-colors">
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button onClick={toggleLanguage} className="border border-gold-500/50 px-3 py-1 rounded hover:bg-gold-500 hover:text-black transition-all flex items-center gap-2 text-xs font-bold tracking-widest text-dark-900 dark:text-white">
                            <Globe size={14} />
                            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="text-dark-800 dark:text-gray-300">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="text-gold-500 text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out bg-white dark:bg-dark-800 border-b border-black/5 dark:border-white/10 ${isOpen ? 'top-full opacity-100' : '-top-96 opacity-0'}`}>
                <div className="flex flex-col p-6 gap-6">
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-gold-400 text-dark-900 dark:text-white">
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="text-gold-500 font-bold text-left">
                        {t('Switch to Arabic', 'التبديل للإنجليزية')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
