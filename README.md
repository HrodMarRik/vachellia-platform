# Vachellia - Plateforme de Mise en Relation Professionnelle

## 🚀 Description
Vachellia est une plateforme moderne qui révolutionne la mise en relation professionnelle en combinant le meilleur de LinkedIn (réseautage professionnel) et Tinder (simplicité et rapidité).

## ✨ Fonctionnalités

### 🎨 Design Moderne
- **Mode sombre/clair** avec toggle persistant
- **Couleurs modernes** : Teal (#2D5A5A), Gold (#D4AF37), Emerald (#00C896)
- **Animations fluides** et transitions CSS
- **Design responsive** mobile-first
- **Logo Vachellia** intégré dans toutes les pages

### 🔧 Fonctionnalités Techniques
- **Bootstrap 5.3** pour la base responsive
- **Font Awesome 6.4** pour les icônes
- **Google Fonts (Inter)** pour la typographie
- **CSS Grid** pour les layouts modernes
- **JavaScript ES6+** pour les interactions

### 📱 Pages Disponibles
- `index.html` - Page d'accueil avec hero section
- `portfolio.html` - Grille de profils interactifs
- `about.html` - À propos de Vachellia
- `pricing.html` - Plans tarifaires
- `blog.html` - Blog et actualités
- `contact.html` - Formulaire de contact
- `login.html` - Connexion utilisateur
- `register.html` - Inscription utilisateur
- `product.html` - Page produit avec démo
- `chart.html` - Tableau de bord analytics
- `crud-users.html` - Administration des utilisateurs

## 🎨 Charte Graphique

### Couleurs Principales
- **Teal** (#2D5A5A) - Couleur principale, navigation, headers
- **Gold** (#D4AF37) - Logo, boutons principaux, accents
- **Emerald** (#00C896) - Succès, actions positives
- **Light Blue** (#4A90E2) - Informations, boutons tertiaires
- **Coral** (#FF6B6B) - Erreurs, actions négatives
- **Orange** (#FF8C42) - Avertissements

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Poids** : 300, 400, 500, 600, 700, 800

## 🖼️ Logo
Le logo Vachellia doit être placé dans le dossier `images/` avec le nom `Vachellia.png`.

### Spécifications du Logo
- **Format** : PNG avec transparence
- **Taille recommandée** : 200x200px minimum
- **Couleurs** : Gold sur fond transparent
- **Style** : Arbre stylisé avec texte "Vachellia"

## 🚀 Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/HrodMarRik/vachellia-platform.git
cd vachellia-platform
```

2. **Ajouter le logo**
```bash
# Placer le fichier Vachellia.png dans le dossier images/
mkdir -p images
# Copier votre logo vers images/Vachellia.png
```

3. **Ouvrir dans un navigateur**
```bash
# Ouvrir index.html dans votre navigateur
open index.html
```

## 📱 Responsive Design
- **Mobile** : < 576px
- **Tablet** : 576px - 768px
- **Desktop** : > 768px

## 🌙 Mode Sombre
Le mode sombre est automatiquement activé/désactivé via le toggle en haut à droite. Le choix de l'utilisateur est sauvegardé dans le localStorage.

## 🔧 Personnalisation

### Modifier les Couleurs
Éditez le fichier `vachellia-custom.css` et modifiez les variables CSS dans `:root` et `[data-theme="dark"]`.

### Ajouter des Pages
1. Créez votre fichier HTML
2. Copiez la structure de navigation depuis `index.html`
3. Ajoutez le lien dans la navigation de toutes les pages

### Modifier le Logo
Remplacez `images/Vachellia.png` par votre nouveau logo en conservant le même nom de fichier.

## 📄 Licence
© 2024 Vachellia. Tous droits réservés.

## 🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support
Pour toute question ou support, contactez-nous via la page Contact du site.
