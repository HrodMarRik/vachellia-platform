// Demo portfolios data for Vachellia platform
const demoPortfolios = [
    {
        id: 'demo_1',
        firstName: 'Marie',
        lastName: 'Dubois',
        title: 'Développeuse Full-Stack',
        location: 'Paris, France',
        description: 'Développeuse expérimentée avec 5 ans d\'expérience en React, Node.js et Python. Spécialisée dans les applications web modernes et les APIs REST.',
        skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
        experience: '5 ans d\'expérience en développement web full-stack chez plusieurs startups tech',
        education: 'Master en Informatique - Université de Paris',
        linkedin: 'https://linkedin.com/in/marie-dubois',
        github: 'https://github.com/marie-dubois',
        website: 'https://marie-dubois.dev',
        userType: 'freelancer',
        createdAt: '2024-01-15T10:30:00Z'
    },
    {
        id: 'demo_2',
        firstName: 'Sophie',
        lastName: 'Laurent',
        title: 'UX/UI Designer',
        location: 'Lyon, France',
        description: 'Designer créative passionnée par l\'expérience utilisateur. Expertise en Figma, Adobe Creative Suite et prototypage interactif.',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototypage', 'User Research'],
        experience: '3 ans d\'expérience en design UX/UI pour des applications mobiles et web',
        education: 'Bachelor en Design Graphique - École de Design Lyon',
        linkedin: 'https://linkedin.com/in/sophie-laurent',
        website: 'https://sophie-laurent.design',
        portfolio: 'https://sophie-laurent.design/portfolio',
        userType: 'freelancer',
        createdAt: '2024-01-20T14:15:00Z'
    },
    {
        id: 'demo_3',
        firstName: 'Pierre',
        lastName: 'Martin',
        title: 'Marketing Digital',
        location: 'Marseille, France',
        description: 'Expert en marketing digital avec une forte expertise en SEO, SEM et réseaux sociaux. Résultats prouvés en croissance d\'audience et conversion.',
        skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Marketing'],
        experience: '4 ans d\'expérience en marketing digital et gestion de campagnes publicitaires',
        education: 'Master en Marketing Digital - Kedge Business School',
        linkedin: 'https://linkedin.com/in/pierre-martin',
        website: 'https://pierre-martin-marketing.com',
        userType: 'freelancer',
        createdAt: '2024-01-25T09:45:00Z'
    },
    {
        id: 'demo_4',
        firstName: 'Jean',
        lastName: 'Dupont',
        title: 'Product Manager',
        location: 'Toulouse, France',
        description: 'Product Manager stratégique avec 7 ans d\'expérience dans le développement de produits tech. Expertise en Agile, Scrum et gestion d\'équipes cross-fonctionnelles.',
        skills: ['Product Strategy', 'Agile', 'Scrum', 'Leadership', 'Data Analysis'],
        experience: '7 ans d\'expérience en product management dans l\'industrie tech',
        education: 'MBA en Management - Toulouse Business School',
        linkedin: 'https://linkedin.com/in/jean-dupont',
        userType: 'jobSeeker',
        createdAt: '2024-02-01T16:20:00Z'
    },
    {
        id: 'demo_5',
        firstName: 'Claire',
        lastName: 'Moreau',
        title: 'Data Scientist',
        location: 'Bordeaux, France',
        description: 'Data Scientist freelance spécialisée en Machine Learning et Intelligence Artificielle. Expertise en Python, R, TensorFlow et analyse de données complexes.',
        skills: ['Python', 'Machine Learning', 'TensorFlow', 'R', 'SQL'],
        experience: '6 ans d\'expérience en data science et machine learning',
        education: 'PhD en Mathématiques Appliquées - Université de Bordeaux',
        linkedin: 'https://linkedin.com/in/claire-moreau',
        github: 'https://github.com/claire-moreau',
        userType: 'freelancer',
        createdAt: '2024-02-05T11:30:00Z'
    },
    {
        id: 'demo_6',
        firstName: 'Thomas',
        lastName: 'Bernard',
        title: 'DevOps Engineer',
        location: 'Nantes, France',
        description: 'DevOps Engineer expérimenté spécialisé en infrastructure cloud et automatisation. Expertise en AWS, Docker, Kubernetes et CI/CD.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        experience: '5 ans d\'expérience en DevOps et infrastructure cloud',
        education: 'Master en Ingénierie Logicielle - École Centrale Nantes',
        linkedin: 'https://linkedin.com/in/thomas-bernard',
        github: 'https://github.com/thomas-bernard',
        userType: 'jobSeeker',
        createdAt: '2024-02-10T13:45:00Z'
    },
    {
        id: 'demo_7',
        firstName: 'Emma',
        lastName: 'Rousseau',
        title: 'Graphic Designer',
        location: 'Lille, France',
        description: 'Graphiste créative avec une approche moderne et minimaliste. Spécialisée en branding, identité visuelle et design print.',
        skills: ['Photoshop', 'Illustrator', 'InDesign', 'Branding', 'Print Design'],
        experience: '4 ans d\'expérience en design graphique et branding',
        education: 'Bachelor en Arts Appliqués - École Supérieure d\'Art de Lille',
        linkedin: 'https://linkedin.com/in/emma-rousseau',
        website: 'https://emma-rousseau.design',
        userType: 'freelancer',
        createdAt: '2024-02-15T15:20:00Z'
    },
    {
        id: 'demo_8',
        firstName: 'Lucas',
        lastName: 'Petit',
        title: 'Business Analyst',
        location: 'Strasbourg, France',
        description: 'Business Analyst stratégique avec une forte expertise en analyse de données business. Spécialisé en Tableau, Power BI et modélisation financière.',
        skills: ['Tableau', 'Power BI', 'Excel', 'SQL', 'Financial Modeling'],
        experience: '3 ans d\'expérience en analyse business et reporting',
        education: 'Master en Finance - EM Strasbourg',
        linkedin: 'https://linkedin.com/in/lucas-petit',
        userType: 'jobSeeker',
        createdAt: '2024-02-20T12:10:00Z'
    }
];

// Function to get demo portfolios
function getDemoPortfolios() {
    return demoPortfolios;
}

// Function to get portfolio by ID
function getPortfolioById(id) {
    return demoPortfolios.find(portfolio => portfolio.id === id);
}

// Function to get portfolios by category
function getPortfoliosByCategory(category) {
    return demoPortfolios.filter(portfolio => {
        switch(category) {
            case 'tech':
                return portfolio.skills.some(skill => 
                    ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'].includes(skill)
                );
            case 'design':
                return portfolio.skills.some(skill => 
                    ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototypage'].includes(skill)
                );
            case 'marketing':
                return portfolio.skills.some(skill => 
                    ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Marketing'].includes(skill)
                );
            case 'business':
                return portfolio.skills.some(skill => 
                    ['Product Strategy', 'Agile', 'Scrum', 'Leadership', 'Tableau', 'Power BI'].includes(skill)
                );
            case 'freelance':
                return portfolio.userType === 'freelancer';
            default:
                return true;
        }
    });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        demoPortfolios,
        getDemoPortfolios,
        getPortfolioById,
        getPortfoliosByCategory
    };
}
