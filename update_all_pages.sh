#!/bin/bash

# Script pour uniformiser toutes les pages Vachellia avec le logo et la navigation

echo "🔄 Mise à jour de toutes les pages Vachellia..."

# Fonction pour mettre à jour une page
update_page() {
    local file=$1
    local active_page=$2
    
    echo "📝 Mise à jour de $file..."
    
    # Backup du fichier original
    cp "$file" "${file}.backup"
    
    # Mettre à jour le logo dans la navigation
    sed -i 's|<i class="fas fa-handshake me-2"></i>Vachellia|<img src="images/Vachellia.png" alt="Vachellia Logo">\n                Vachellia|g' "$file"
    
    # Mettre à jour le logo dans le footer
    sed -i 's|<i class="fas fa-handshake me-2"></i>Vachellia|<img src="images/Vachellia.png" alt="Vachellia Logo" style="height: 30px; margin-right: 10px;">\n                        Vachellia|g' "$file"
    
    # Ajouter Google Fonts si pas présent
    if ! grep -q "Google Fonts" "$file"; then
        sed -i '/Font Awesome/a\    <!-- Google Fonts -->\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">' "$file"
    fi
    
    # Ajouter le theme toggle si pas présent
    if ! grep -q "theme-toggle" "$file"; then
        sed -i '/<body>/a\    <!-- Theme Toggle -->\n    <div class="theme-toggle">\n        <button class="theme-toggle-btn" onclick="toggleTheme()">\n            <i class="fas fa-moon" id="theme-icon"></i>\n        </button>\n    </div>' "$file"
    fi
    
    # Mettre à jour la navigation pour inclure Portfolio et Blog
    if ! grep -q "portfolio.html" "$file"; then
        sed -i '/<a class="nav-link" href="about.html">À propos<\/a>/a\                    <li class="nav-item">\n                        <a class="nav-link" href="portfolio.html">Portfolio</a>\n                    </li>' "$file"
    fi
    
    if ! grep -q "blog.html" "$file"; then
        sed -i '/<a class="nav-link" href="pricing.html">Tarifs<\/a>/a\                    <li class="nav-item">\n                        <a class="nav-link" href="blog.html">Blog</a>\n                    </li>' "$file"
    fi
    
    # Mettre à jour le footer pour inclure Portfolio et Blog
    if ! grep -q "portfolio.html" "$file" | grep -q "footer"; then
        sed -i '/<li><a href="about.html" class="text-light-50">À propos<\/a><\/li>/a\                        <li><a href="portfolio.html" class="text-light-50">Portfolio</a></li>\n                        <li><a href="blog.html" class="text-light-50">Blog</a></li>' "$file"
    fi
    
    # Ajouter le JavaScript pour le theme toggle si pas présent
    if ! grep -q "toggleTheme" "$file"; then
        sed -i '/<\/body>/i\    <!-- Theme Toggle Script -->\n    <script>\n        function toggleTheme() {\n            const body = document.body;\n            const themeIcon = document.getElementById("theme-icon");\n            const currentTheme = body.getAttribute("data-theme");\n            \n            if (currentTheme === "dark") {\n                body.removeAttribute("data-theme");\n                themeIcon.className = "fas fa-moon";\n                localStorage.setItem("theme", "light");\n            } else {\n                body.setAttribute("data-theme", "dark");\n                themeIcon.className = "fas fa-sun";\n                localStorage.setItem("theme", "dark");\n            }\n        }\n\n        // Load saved theme\n        document.addEventListener("DOMContentLoaded", function() {\n            const savedTheme = localStorage.getItem("theme");\n            const themeIcon = document.getElementById("theme-icon");\n            \n            if (savedTheme === "dark") {\n                document.body.setAttribute("data-theme", "dark");\n                themeIcon.className = "fas fa-sun";\n            }\n        });\n    </script>' "$file"
    fi
}

# Mettre à jour toutes les pages HTML
update_page "about.html" "about"
update_page "blog.html" "blog"
update_page "chart.html" "chart"
update_page "contact.html" "contact"
update_page "crud-users.html" "crud-users"
update_page "email-verification.html" "email-verification"
update_page "login.html" "login"
update_page "my-portfolio.html" "my-portfolio"
update_page "portfolio-preview.html" "portfolio-preview"
update_page "portfolio-view.html" "portfolio-view"
update_page "portfolio.html" "portfolio"
update_page "pricing.html" "pricing"
update_page "product.html" "product"
update_page "register.html" "register"
update_page "reset-password.html" "reset-password"

echo "✅ Toutes les pages ont été mises à jour !"
echo "🎨 Logo Vachellia intégré dans toutes les pages"
echo "🌙 Mode sombre ajouté partout"
echo "🧭 Navigation uniformisée avec Portfolio et Blog"
echo "📱 Design responsive maintenu"
