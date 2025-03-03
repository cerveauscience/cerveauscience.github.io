document.addEventListener('DOMContentLoaded', function() {
    const langSwitch = document.getElementById('langSwitch');

    // Langue par défaut : français
    let currentLang = localStorage.getItem('lang') || 'fr';
    applyLanguage(currentLang);

    langSwitch.addEventListener('click', () => {
        currentLang = (currentLang === 'fr') ? 'en' : 'fr';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);

        const translations = {
            fr: {
                accueil: "Accueil",
                math: "Mathématiques",
                neuro: "Neurosciences",
                imagerie: "Imagerie Cérébrale",
                recherche: "Monde de la Recherche"
            },
            en: {
                accueil: "Home",
                math: "Mathematics",
                neuro: "Neurosciences",
                imagerie: "Brain Imaging",
                recherche: "Research World"
            }
        };

        document.querySelector('a[data-i18n="accueil"]').innerText = translations[lang].accueil;
        document.querySelector('a[data-i18n="math"]').innerText = translations[lang].math;
        document.querySelector('a[data-i18n="neuro"]').innerText = translations[lang].neuro;
        document.querySelector('a[data-i18n="imagerie"]').innerText = translations[lang].imagerie;
        document.querySelector('a[data-i18n="recherche"]').innerText = translations[lang].recherche;

        langSwitch.innerText = (lang === 'fr') ? '🇫🇷 / 🇬🇧' : '🇬🇧 / 🇫🇷';
    }
});
