import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 dark:bg-dark-900 min-h-screen">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-8 dark:text-white text-center">
                    {t('Privacy & Policy', 'سياسة الخصوصية')}
                </h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        {t('Content coming soon...', 'المحتوى قادم قريباً...')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
