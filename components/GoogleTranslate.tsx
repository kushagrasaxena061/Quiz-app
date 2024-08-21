"use client"
// components/GoogleTranslate.tsx
import { useEffect } from 'react';

const GoogleTranslate: React.FC = () => {
    useEffect(() => {
        const scriptId = 'google-translate-script';
        const existingScript = document.getElementById(scriptId);

        // Only add the script if it doesn't already exist
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            script.onload = () => {
                // Initialize Google Translate when the script is loaded
                (window as any).googleTranslateElementInit = () => {
                    new (window as any).google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            includedLanguages: 'en,hi',
                            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
                        },
                        'google_translate_element'
                    );
                };
            };
            script.onerror = () => {
                console.error('Failed to load Google Translate script.');
            };
            document.body.appendChild(script);
        }

        // Cleanup function to remove script if needed
        return () => {
            const script = document.getElementById(scriptId);
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div id="google_translate_element" className="translate-button"></div>
    );
};

export default GoogleTranslate;
