#!/bin/bash

# Script pour mettre à jour toutes les pages avec le logo et les bonnes redirections

# Fonction pour mettre à jour une page
update_page() {
    local file=$1
    local active_page=$2
    
    echo "Mise à jour de $file..."
    
    # Créer le contenu de navigation
    cat > temp_nav.html << 'NAVEOF'
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">À propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pricing.html">Tarifs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
NAVEOF
    
    # Mettre à jour le fichier
    sed -i 's|<a class="navbar-brand vachellia-logo" href="index.html">|<a class="navbar-brand vachellia-logo" href="index.html">|g' "$file"
    sed -i 's|<i class="fas fa-handshake me-2"></i>Vachellia|<img src="images/Vachellia.png" alt="Vachellia Logo">\n                Vachellia|g' "$file"
    
    # Ajouter Google Fonts si pas présent
    if ! grep -q "Google Fonts" "$file"; then
        sed -i '/Font Awesome/a\    <!-- Google Fonts -->\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">' "$file"
    fi
    
    # Mettre à jour le footer avec le logo
    sed -i 's|<i class="fas fa-handshake me-2"></i>Vachellia|<img src="images/Vachellia.png" alt="Vachellia Logo" style="height: 30px; margin-right: 10px;">\n                        Vachellia|g' "$file"
    
    # Mettre à jour les liens du footer
    sed -i 's|<li><a href="about.html" class="text-light-50">À propos</a></li>|<li><a href="about.html" class="text-light-50">À propos</a></li>\n                        <li><a href="portfolio.html" class="text-light-50">Portfolio</a></li>\n                        <li><a href="blog.html" class="text-light-50">Blog</a></li>|g' "$file"
}

# Mettre à jour toutes les pages
update_page "about.html" "about"
update_page "pricing.html" "pricing"
update_page "blog.html" "blog"
update_page "contact.html" "contact"
update_page "login.html" "login"
update_page "register.html" "register"
update_page "product.html" "product"
update_page "chart.html" "chart"
update_page "crud-users.html" "crud-users"
update_page "email-verification.html" "email-verification"
update_page "reset-password.html" "reset-password"

echo "Toutes les pages ont été mises à jour !"

# Nettoyer les fichiers temporaires
rm -f temp_nav.html
