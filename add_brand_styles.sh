#!/bin/bash

# Script pour ajouter les styles de marque Vachellia à toutes les pages

echo "🎨 Ajout des styles de marque Vachellia..."

# Fonction pour ajouter les styles à une page
add_brand_styles() {
    local file=$1
    
    echo "📝 Ajout des styles à $file..."
    
    # Ajouter le fichier de configuration JavaScript
    if ! grep -q "vachellia-brand-config.js" "$file"; then
        sed -i '/<!-- Custom CSS -->/a\    <!-- Vachellia Brand Config -->\n    <script src="vachellia-brand-config.js"></script>' "$file"
    fi
    
    # Ajouter le fichier CSS des améliorations
    if ! grep -q "vachellia-brand-enhancements.css" "$file"; then
        sed -i '/vachellia-custom.css/a\    <!-- Vachellia Brand Enhancements -->\n    <link rel="stylesheet" href="vachellia-brand-enhancements.css">' "$file"
    fi
}

# Ajouter les styles à toutes les pages HTML
add_brand_styles "about.html"
add_brand_styles "blog.html"
add_brand_styles "chart.html"
add_brand_styles "contact.html"
add_brand_styles "crud-users.html"
add_brand_styles "email-verification.html"
add_brand_styles "index.html"
add_brand_styles "login.html"
add_brand_styles "my-portfolio.html"
add_brand_styles "portfolio-preview.html"
add_brand_styles "portfolio-view.html"
add_brand_styles "portfolio.html"
add_brand_styles "pricing.html"
add_brand_styles "product.html"
add_brand_styles "register.html"
add_brand_styles "reset-password.html"

echo "✅ Styles de marque ajoutés à toutes les pages !"
echo "🎨 Configuration JavaScript intégrée"
echo "💅 CSS d'amélioration appliqué"
echo "🚀 Site uniformisé selon la charte Vachellia"
