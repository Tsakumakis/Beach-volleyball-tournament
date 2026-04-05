const translations = {
    'en': {
        'welcome-under-main':'We are excited to announce our first tournament!',
        'welcome': 'Welcome to the N.A.O.K Beach Volleyball Tournament',
        'home': 'Home',
        'about': 'About',
        'register': 'Register',
        'side-main': 'Here you can find all the information about the tournament, including rules, schedule, and registration details. Stay tuned for updates and get ready to compete!',
        'main-main': 'Before registration, please read the rules and other F.A.Q in the about section, dont hesitate to call us if you want to ask a question.'
    },

    'el': {
        'welcome': 'Καλώς ήρθατε στο Τουρνουά Beach Volley του Ν.Α.Ο.Κ',
        'home': 'Αρχική',
        'about': 'Πληροφορίες',
        'register': 'Εγγραφή',
        'side-main': 'Εδω μπορειτε να βρειτε ολες της πληροφοριες για το τουρνουα οπως, τους κανονες,τις ημερομινιες και οδηγιες εγγραφης. Μεινετε συντονισμενη για ενημεροσεις και ετοιμαστητε να αγωνιστιτε.',
        'welcome-under-main':'Ειμαστε ενθουσιασμενη να ανακηνωσουμε το πρωτο τουρνουα',
        'main-main': 'Πριν την εγγραφη, παρακαλω διαβαστε τους κανονες και αλλες συχνες ερωτησης στης "πληροφοριες", μην δυχαστητε να μας παρετε τηλεφονω αν εχετε καποια ερωτηση.'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    // Find all elements with a data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
});