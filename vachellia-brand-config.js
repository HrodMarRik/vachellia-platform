// Configuration de la marque Vachellia
const VachelliaBrand = {
    // Couleurs principales selon la charte graphique
    colors: {
        primary: '#2D5A5A',      // Teal principal
        secondary: '#D4AF37',     // Gold
        accent: '#00C896',       // Emerald
        lightBlue: '#4A90E2',    // Bleu clair
        lightGreen: '#7ED321',   // Vert clair
        coral: '#FF6B6B',        // Corail
        purple: '#8B5CF6',       // Violet
        orange: '#FF8C42',       // Orange
        lightGray: '#F5F7FA',    // Gris clair
        dark: '#1e293b',         // Sombre
        light: '#ffffff'         // Blanc
    },
    
    // Typographie
    typography: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        weights: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800
        }
    },
    
    // Espacements
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem'
    },
    
    // Bordures
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '20px',
        full: '50%'
    },
    
    // Ombres
    shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
        md: '0 4px 8px rgba(0, 0, 0, 0.12)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.16)',
        xl: '0 16px 32px rgba(0, 0, 0, 0.20)'
    },
    
    // Animations
    animations: {
        duration: {
            fast: '0.15s',
            normal: '0.3s',
            slow: '0.5s'
        },
        easing: {
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out'
        }
    },
    
    // Breakpoints responsive
    breakpoints: {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1400px'
    }
};

// Fonction pour appliquer les styles de marque
function applyVachelliaBrand() {
    const root = document.documentElement;
    
    // Appliquer les couleurs CSS
    Object.entries(VachelliaBrand.colors).forEach(([key, value]) => {
        root.style.setProperty(`--vachellia-${key}`, value);
    });
    
    // Appliquer la typographie
    root.style.setProperty('--vachellia-font-family', VachelliaBrand.typography.fontFamily);
    
    // Appliquer les espacements
    Object.entries(VachelliaBrand.spacing).forEach(([key, value]) => {
        root.style.setProperty(`--vachellia-spacing-${key}`, value);
    });
    
    // Appliquer les bordures
    Object.entries(VachelliaBrand.borderRadius).forEach(([key, value]) => {
        root.style.setProperty(`--vachellia-radius-${key}`, value);
    });
    
    // Appliquer les ombres
    Object.entries(VachelliaBrand.shadows).forEach(([key, value]) => {
        root.style.setProperty(`--vachellia-shadow-${key}`, value);
    });
}

// Fonction pour obtenir une couleur
function getVachelliaColor(colorName) {
    return VachelliaBrand.colors[colorName] || '#2D5A5A';
}

// Fonction pour obtenir un espacement
function getVachelliaSpacing(spacingName) {
    return VachelliaBrand.spacing[spacingName] || '1rem';
}

// Fonction pour obtenir une ombre
function getVachelliaShadow(shadowName) {
    return VachelliaBrand.shadows[shadowName] || '0 4px 8px rgba(0, 0, 0, 0.12)';
}

// Appliquer automatiquement les styles au chargement
document.addEventListener('DOMContentLoaded', applyVachelliaBrand);

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        VachelliaBrand,
        applyVachelliaBrand,
        getVachelliaColor,
        getVachelliaSpacing,
        getVachelliaShadow
    };
}
