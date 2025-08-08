// Translation system
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About", 
            services: "Services",
            blog: "Blog",
            contact: "Contact"
        },
        hero: {
            title: {
                part1: "The intelligence that connects you to",
                accent: "tomorrow"
            },
            subtitle: "Intelligent Automation & AI: Bridging Strategy and Technology. Performance is born from connection. At Synaptiq, we are the architects of these connections, closing the critical gap between brilliant ideas and tangible success.",
            cta: {
                primary: "Get Started",
                secondary: "Our Services"
            }
        },
        about: {
            title: "About Synaptiq",
            subtitle: "Performance is born from connection",
            heading: "Bridging Strategy and Technology",
            paragraph1: "Performance is born from connection. At Synaptiq, we are the architects of these connections. Inspired by the synapse—the vital bridge that transmits information in the brain—we close the critical gap between a brilliant idea and its tangible success.",
            paragraph2: "Our integrated approach is designed to forge the links that drive your performance. We don't start with technology; we start with you. We begin with a deep, collaborative analysis to co-design a bespoke AI and automation roadmap that ensures every action is precisely aligned with your goals.",
            paragraph3: "Whether you're an enterprise ready to redefine your industry or an individual aiming to optimize your world, we are here to weave the network for your success."
        },
        stats: {
            projects: "Projects Completed",
            satisfaction: "Client Satisfaction", 
            support: "Support Available"
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive AI solutions for modern businesses",
            strategy: {
                title: "Connect to Strategy",
                description: "We don't start with technology; we start with you. We begin with a deep, collaborative analysis to co-design a bespoke AI and automation roadmap that ensures every action is precisely aligned with your goals."
            },
            technology: {
                title: "Connect to Technology",
                description: "We bring your strategy to life. We deploy and integrate a powerful suite of curated AI systems, software solutions, and high-performance hardware, all engineered for seamless integration, maximum efficiency, and immediate impact."
            },
            ml: {
                title: "Machine Learning Solutions",
                description: "Custom ML models and algorithms tailored to solve your specific business challenges."
            },
            analytics: {
                title: "Data Analytics",
                description: "Transform raw data into actionable insights with advanced analytics and visualization tools."
            },
            implementation: {
                title: "AI Implementation",
                description: "End-to-end implementation of AI solutions with ongoing support and optimization."
            },
            training: {
                title: "Training & Support",
                description: "Comprehensive training programs and ongoing support to maximize your AI investment."
            }
        },
        blog: {
            title: "Insights & Thought Leadership",
            subtitle: "Stay updated with the latest trends in AI automation and digital transformation",
            heading: "AI Automation <span class=\"accent-text\">Insights</span>",
            description: "Discover cutting-edge perspectives on artificial intelligence, automation strategies, and the future of business transformation. Our team shares practical insights, case studies, and expert analysis to help you navigate the evolving AI landscape.",
            topics: {
                ml: "Machine Learning",
                automation: "Process Automation",
                strategy: "AI Strategy",
                transformation: "Digital Transformation",
                future: "Future of Work"
            },
            medium: {
                title: "Read Our Latest Articles",
                description: "Follow our Medium publication for in-depth articles on AI automation, industry trends, and practical implementation guides.",
                cta: "Visit Our Medium"
            },
            features: {
                insights: "Weekly AI insights",
                cases: "Practical case studies",
                trends: "Industry trends"
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Ready to transform your business with AI? Let's discuss your needs.",
            heading: "Connect to Tomorrow",
            description: "Synaptiq is more than a consulting firm or a tech vendor; we are your dedicated partner in innovation. We believe in creating systems that amplify human potential through intelligent technology, unlocking new levels of creativity and market leadership.",
            openForm: "Open contact form",
            email: {
                label: "Email:"
            },
            phone: {
                label: "Phone:"
            },
            response: {
                label: "Response Time:",
                value: "Within 24 hours"
            },
            form: {
                name: "Your Name",
                email: "Your Email",
                company: "Company (Optional)",
                message: "Tell us about your project...",
                submit: "Send Message"
            }
        },
        footer: {
            copyright: "© {year} Synaptiq. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            cookies: "Cookie Policy"
        },
        cookie: {
            banner: {
                title: "We use cookies",
                description: "We use cookies to enhance your experience, analyze traffic, and improve our services. You can accept all, reject all non-essential, or manage your preferences.",
                acceptAll: "Accept all",
                rejectAll: "Reject non‑essential",
                customize: "Customize"
            },
            modal: {
                title: "Cookie preferences",
                description: "Select which categories of cookies you consent to. You can change your choices at any time.",
                save: "Save preferences",
                exportLog: "Export consent log",
                withdraw: "Withdraw consent",
                categories: {
                    necessary: {
                        name: "Strictly necessary",
                        description: "Required for basic site functionality and cannot be switched off."
                    },
                    functional: {
                        name: "Functional",
                        description: "Enhance functionality and personalization."
                    },
                    analytics: {
                        name: "Analytics",
                        description: "Help us understand how our site is used to improve it."
                    },
                    marketing: {
                        name: "Marketing",
                        description: "Used to deliver relevant ads and measure their performance."
                    }
                }
            },
            settingsLink: "Cookie Settings"
        },
        legal: {
            privacy: {
                title: "Privacy Policy",
                updated: "Last updated: 2025-08-07",
                intro: "We are committed to protecting your personal data and privacy. This policy explains what data we collect, how we use it, and your rights under the GDPR.",
                controllerTitle: "Data controller",
                controllerBody: "Synaptiq Systems (\"Synaptiq\"). Contact: <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>",
                whatTitle: "What data we collect",
                whatList: "<ul><li>Contact data you submit via forms (name, email, company, message)</li><li>Service usage data (only if you consent to analytics cookies)</li></ul>",
                whyTitle: "Why we collect it (legal bases)",
                whyList: "<ul><li>To respond to your inquiries and provide services (contractual necessity)</li><li>To improve our website and services (consent for analytics)</li><li>To comply with legal obligations</li></ul>",
                retentionTitle: "Data retention",
                retentionBody: "We retain personal data only as long as necessary for the purposes described or as required by law.",
                sharingTitle: "Sharing",
                sharingBody: "We do not sell personal data. We may use processors (e.g., hosting providers) under GDPR-compliant DPAs.",
                transfersTitle: "International transfers",
                transfersBody: "If data is transferred outside the EU/EEA, we use appropriate safeguards (e.g., SCCs).",
                rightsTitle: "Your rights",
                rightsList: "<ul><li>Access, rectification, erasure, restriction, portability, objection</li><li>Withdraw consent at any time (see Cookie Settings in footer)</li><li>Lodge a complaint with your supervisory authority</li></ul>",
                contactTitle: "Contact",
                contactBody: "To exercise your rights, email <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            },
            cookies: {
                title: "Cookie Policy",
                updated: "Last updated: 2025-08-07",
                whatTitle: "What are cookies?",
                whatBody: "Cookies are small text files placed on your device to store data. They can be set by the website you visit (first-party) or by third parties.",
                howTitle: "How we use cookies",
                howList: "<ul><li>Strictly necessary: basic site functionality (always active)</li><li>Functional: enhanced features and personalization</li><li>Analytics: usage metrics to improve our site</li><li>Marketing: personalized advertising</li></ul>",
                manageButtons: { manage: "Manage preferences", export: "Export consent log" },
                tableTitle: "Cookies in use",
                contactTitle: "Contact",
                contactBody: "Questions? Email <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            },
            terms: {
                title: "Terms of Service",
                updated: "Last updated: 2025-08-07",
                intro: "These Terms govern your use of the Synaptiq website and services.",
                useTitle: "Use of the site",
                useBody: "You agree to use the site lawfully and not to disrupt or attempt to gain unauthorized access.",
                ipTitle: "Intellectual property",
                ipBody: "All content is owned by Synaptiq unless otherwise stated. You may not reproduce without permission.",
                disclaimerTitle: "Disclaimer",
                disclaimerBody: "The site is provided \"as is\" without warranties. We are not liable for indirect or consequential damages.",
                changesTitle: "Changes",
                changesBody: "We may update these Terms. Continued use constitutes acceptance.",
                contactTitle: "Contact",
                contactBody: "For questions, contact <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            }
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services", 
            blog: "Blog",
            contact: "Contact"
        },
        hero: {
            title: {
                part1: "L'intelligence qui vous connecte à",
                accent: "demain"
            },
            subtitle: "Automatisation Intelligente & IA : Connecter Stratégie et Technologie. La performance naît de la connexion. Chez Synaptiq, nous sommes les architectes de ces connexions, comblant l'écart critique entre une idée brillante et son succès tangible.",
            cta: {
                primary: "Commencer",
                secondary: "Nos Services"
            }
        },
        about: {
            title: "À propos de Synaptiq",
            subtitle: "La performance naît de la connexion",
            heading: "Connecter Stratégie et Technologie",
            paragraph1: "La performance naît de la connexion. Chez Synaptiq, nous sommes les architectes de ces connexions. Inspirés par la synapse—le pont vital qui transmet l'information dans le cerveau—nous comblons l'écart critique entre une idée brillante et son succès tangible.",
            paragraph2: "Notre approche intégrée est conçue pour forger les liens qui stimulent votre performance. Nous ne commençons pas par la technologie ; nous commençons par vous. Nous débutons par une analyse collaborative approfondie pour co-concevoir une feuille de route IA et automatisation sur mesure qui garantit que chaque action est précisément alignée avec vos objectifs.",
            paragraph3: "Que vous soyez une entreprise prête à redéfinir votre industrie ou un individu visant à optimiser votre monde, nous sommes là pour tisser le réseau de votre succès."
        },
        stats: {
            projects: "Projets Terminés",
            satisfaction: "Satisfaction Client",
            support: "Support Disponible"
        },
        services: {
            title: "Nos Services",
            subtitle: "Solutions IA complètes pour les entreprises modernes",
            strategy: {
                title: "Connecter à la Stratégie",
                description: "Nous ne commençons pas par la technologie ; nous commençons par vous. Nous débutons par une analyse collaborative approfondie pour co-concevoir une feuille de route IA et automatisation sur mesure qui garantit que chaque action est précisément alignée avec vos objectifs."
            },
            technology: {
                title: "Connecter à la Technologie",
                description: "Nous donnons vie à votre stratégie. Nous déployons et intégrons une suite puissante de systèmes IA sélectionnés, de solutions logicielles et de matériel haute performance, le tout conçu pour une intégration transparente, une efficacité maximale et un impact immédiat."
            },
            ml: {
                title: "Solutions d'Apprentissage Automatique",
                description: "Modèles ML personnalisés et algorithmes adaptés pour résoudre vos défis commerciaux spécifiques."
            },
            analytics: {
                title: "Analyse de Données",
                description: "Transformez les données brutes en insights exploitables avec des outils d'analyse et de visualisation avancés."
            },
            implementation: {
                title: "Implémentation IA",
                description: "Implémentation complète de solutions IA avec support continu et optimisation."
            },
            training: {
                title: "Formation & Support",
                description: "Programmes de formation complets et support continu pour maximiser votre investissement IA."
            }
        },
        blog: {
            title: "Insights & Leadership Intellectuel",
            subtitle: "Restez informé des dernières tendances en automatisation IA et transformation digitale",
            heading: "Insights <span class=\"accent-text\">Automatisation IA</span>",
            description: "Découvrez des perspectives avant-gardistes sur l'intelligence artificielle, les stratégies d'automatisation et l'avenir de la transformation commerciale. Notre équipe partage des insights pratiques, des études de cas et des analyses d'experts pour vous aider à naviguer dans le paysage IA en évolution.",
            topics: {
                ml: "Apprentissage Automatique",
                automation: "Automatisation des Processus",
                strategy: "Stratégie IA",
                transformation: "Transformation Digitale",
                future: "Futur du Travail"
            },
            medium: {
                title: "Lisez Nos Derniers Articles",
                description: "Suivez notre publication Medium pour des articles approfondis sur l'automatisation IA, les tendances de l'industrie et les guides d'implémentation pratiques.",
                cta: "Visitez Notre Medium"
            },
            features: {
                insights: "Insights IA hebdomadaires",
                cases: "Études de cas pratiques",
                trends: "Tendances de l'industrie"
            }
        },
        contact: {
            title: "Prenez Contact",
            subtitle: "Prêt à transformer votre entreprise avec l'IA ? Discutons de vos besoins.",
            heading: "Connecter à Demain",
            description: "Synaptiq est plus qu'une firme de conseil ou un fournisseur tech ; nous sommes votre partenaire dédié en innovation. Nous croyons en la création de systèmes qui amplifient le potentiel humain grâce à la technologie intelligente, débloquant de nouveaux niveaux de créativité et de leadership de marché.",
            openForm: "Ouvrir le formulaire de contact",
            email: {
                label: "Email :"
            },
            phone: {
                label: "Téléphone :"
            },
            response: {
                label: "Temps de Réponse :",
                value: "Sous 24 heures"
            },
            form: {
                name: "Votre Nom",
                email: "Votre Email",
                company: "Entreprise (Optionnel)",
                message: "Parlez-nous de votre projet...",
                submit: "Envoyer le Message"
            }
        },
        footer: {
            copyright: "© {year} Synaptiq. Tous droits réservés.",
            privacy: "Politique de Confidentialité",
            terms: "Conditions d'Utilisation",
            cookies: "Politique des cookies"
        },
        cookie: {
            banner: {
                title: "Nous utilisons des cookies",
                description: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et optimiser nos services. Vous pouvez tout accepter, tout refuser (hors essentiels) ou gérer vos préférences.",
                acceptAll: "Tout accepter",
                rejectAll: "Refuser les non essentiels",
                customize: "Personnaliser"
            },
            modal: {
                title: "Préférences de cookies",
                description: "Sélectionnez les catégories de cookies auxquelles vous consentez. Vous pouvez modifier vos choix à tout moment.",
                save: "Enregistrer les préférences",
                exportLog: "Exporter le journal de consentement",
                withdraw: "Retirer le consentement",
                categories: {
                    necessary: {
                        name: "Strictement nécessaires",
                        description: "Requis pour le fonctionnement de base du site et ne peuvent pas être désactivés."
                    },
                    functional: {
                        name: "Fonctionnels",
                        description: "Améliorent les fonctionnalités et la personnalisation."
                    },
                    analytics: {
                        name: "Analytiques",
                        description: "Nous aident à comprendre l'utilisation du site pour l'améliorer."
                    },
                    marketing: {
                        name: "Marketing",
                        description: "Utilisés pour fournir des publicités pertinentes et mesurer leur performance."
                    }
                }
            },
            settingsLink: "Paramètres des cookies"
        },
        legal: {
            privacy: {
                title: "Politique de Confidentialité",
                updated: "Dernière mise à jour : 2025-08-07",
                intro: "Nous nous engageons à protéger vos données personnelles. Cette politique explique quelles données nous collectons, comment nous les utilisons et vos droits au titre du RGPD.",
                controllerTitle: "Responsable du traitement",
                controllerBody: "Synaptiq Systems (\"Synaptiq\"). Contact : <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>",
                whatTitle: "Données que nous collectons",
                whatList: "<ul><li>Données de contact que vous soumettez via les formulaires (nom, email, entreprise, message)</li><li>Données d'utilisation du service (uniquement si vous consentez aux cookies analytiques)</li></ul>",
                whyTitle: "Pourquoi nous les collectons (bases légales)",
                whyList: "<ul><li>Répondre à vos demandes et fournir nos services (nécessité contractuelle)</li><li>Améliorer notre site et nos services (consentement pour l'analyse)</li><li>Respecter nos obligations légales</li></ul>",
                retentionTitle: "Conservation des données",
                retentionBody: "Nous conservons les données personnelles uniquement pendant la durée nécessaire aux finalités décrites ou requises par la loi.",
                sharingTitle: "Partage",
                sharingBody: "Nous ne vendons pas de données personnelles. Nous pouvons utiliser des sous-traitants (hébergeurs, etc.) sous des accords conformes au RGPD.",
                transfersTitle: "Transferts internationaux",
                transfersBody: "Si des données sont transférées hors UE/EEE, nous utilisons des garanties appropriées (p. ex. CCT).",
                rightsTitle: "Vos droits",
                rightsList: "<ul><li>Accès, rectification, effacement, limitation, portabilité, opposition</li><li>Retirer votre consentement à tout moment (voir Paramètres des cookies en pied de page)</li><li>Déposer une plainte auprès de votre autorité de contrôle</li></ul>",
                contactTitle: "Contact",
                contactBody: "Pour exercer vos droits, écrivez à <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            },
            cookies: {
                title: "Politique des cookies",
                updated: "Dernière mise à jour : 2025-08-07",
                whatTitle: "Qu'est-ce qu'un cookie ?",
                whatBody: "Un cookie est un petit fichier texte placé sur votre appareil pour stocker des informations. Ils peuvent être déposés par le site que vous visitez (première partie) ou par des tiers.",
                howTitle: "Comment nous utilisons les cookies",
                howList: "<ul><li>Strictement nécessaires : fonctionnalité de base du site (toujours actifs)</li><li>Fonctionnels : fonctionnalités avancées et personnalisation</li><li>Analytiques : mesures d'usage pour améliorer notre site</li><li>Marketing : publicité personnalisée</li></ul>",
                manageButtons: { manage: "Gérer les préférences", export: "Exporter le journal de consentement" },
                tableTitle: "Cookies utilisés",
                contactTitle: "Contact",
                contactBody: "Des questions ? Écrivez à <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            },
            terms: {
                title: "Conditions d'Utilisation",
                updated: "Dernière mise à jour : 2025-08-07",
                intro: "Ces conditions régissent votre utilisation du site et des services Synaptiq.",
                useTitle: "Utilisation du site",
                useBody: "Vous vous engagez à utiliser le site de manière licite et à ne pas tenter d'y accéder de manière non autorisée.",
                ipTitle: "Propriété intellectuelle",
                ipBody: "Tous les contenus appartiennent à Synaptiq sauf mention contraire. Toute reproduction est interdite sans autorisation.",
                disclaimerTitle: "Avertissement",
                disclaimerBody: "Le site est fourni \"en l'état\" sans garantie. Nous ne sommes pas responsables des dommages indirects ou consécutifs.",
                changesTitle: "Modifications",
                changesBody: "Nous pouvons mettre à jour ces conditions. La poursuite de l'utilisation vaut acceptation.",
                contactTitle: "Contact",
                contactBody: "Pour toute question, contactez <a href=\"mailto:contact@synaptiq.systems\">contact@synaptiq.systems</a>."
            }
        }
    }
};

let currentLanguage = 'en';

// Language management functions
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('synaptiq-language', lang);
    updatePageLanguage();
    updateLanguageButton();
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedValue(translations[currentLanguage], key);
        if (translation) {
            // Replace {year} placeholder with the current year if present
            const currentYear = new Date().getFullYear();
            element.innerHTML = translation.replace('{year}', currentYear);
        }
    });

    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedValue(translations[currentLanguage], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

function getNestedValue(obj, key) {
    return key.split('.').reduce((o, i) => o?.[i], obj);
}

function updateLanguageButton() {
    const currentLangSpan = document.querySelector('.current-lang');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage.toUpperCase();
    }
    
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        }
    });
}

function initializeLanguage() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const savedLanguage = localStorage.getItem('synaptiq-language');
    const browserLanguage = navigator.language.slice(0, 2);
    
    if (urlLang && translations[urlLang]) {
        currentLanguage = urlLang;
        localStorage.setItem('synaptiq-language', urlLang);
    } else if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else if (translations[browserLanguage]) {
        currentLanguage = browserLanguage;
    }
    
    updatePageLanguage();
    updateLanguageButton();
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize language system
    initializeLanguage();
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Language switcher functionality
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('active');
        });

        // Language option click handlers
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.dataset.lang;
                setLanguage(selectedLang);
                languageDropdown.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateOnScroll = document.querySelectorAll('.service-card, .stat, .about-text, .blog-intro, .medium-card');
    animateOnScroll.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            const errorMsg = currentLanguage === 'fr' 
                ? 'Veuillez remplir tous les champs obligatoires.' 
                : 'Please fill in all required fields.';
            showNotification(errorMsg, 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            const errorMsg = currentLanguage === 'fr' 
                ? 'Veuillez entrer une adresse email valide.' 
                : 'Please enter a valid email address.';
            showNotification(errorMsg, 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        const sendingText = currentLanguage === 'fr' ? 'Envoi...' : 'Sending...';
        submitButton.textContent = sendingText;
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            const successMsg = currentLanguage === 'fr' 
                ? 'Merci pour votre message ! Nous vous répondrons sous 24 heures.' 
                : 'Thank you for your message! We\'ll get back to you within 24 hours.';
            showNotification(successMsg, 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            ${type === 'success' ? 'background-color: #10b981;' : 'background-color: #ef4444;'}
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        const autoRemove = setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            removeNotification(notification);
        });
    }
    
    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }
    
    // Stats counter animation
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
    
    // Initialize counter animation when stats come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h4');
                const targetNumber = parseInt(statNumber.textContent);
                if (!isNaN(targetNumber)) {
                    statNumber.textContent = '0';
                    animateCounter(statNumber, targetNumber);
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Neural network enhanced animation
    function enhanceNeuralNetwork() {
        const nodes = document.querySelectorAll('.node');
        const connections = document.querySelectorAll('.connection');
        
        // Add random pulse delays
        nodes.forEach((node, index) => {
            node.style.animationDelay = `${Math.random() * 2}s`;
        });
        
        connections.forEach((connection, index) => {
            connection.style.animationDelay = `${Math.random() * 3}s`;
        });
    }
    
    // Initialize neural network animation
    enhanceNeuralNetwork();
    
    // Add hover effects to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });

    // Add interactive effects to topic tags
    document.querySelectorAll('.topic-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const neuralNetwork = document.querySelector('.neural-network');
        
        if (hero && neuralNetwork) {
            const rate = scrolled * -0.5;
            neuralNetwork.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Cookie consent (RGPD)
    initializeCookieConsent();

    // Mobile-specific layout adjustments (iPhone friendly)
    function applyMobileOptimizations() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const contactIframe = document.querySelector('.contact .n8n-form-embed');
        const contactCta = document.querySelector('.mobile-contact-cta');
        if (isMobile) {
            if (contactIframe) contactIframe.style.display = 'none';
            if (contactCta) contactCta.style.display = 'inline-block';
        } else {
            if (contactCta) contactCta.style.display = 'none';
            if (contactIframe) contactIframe.style.display = 'block';
        }
    }
    applyMobileOptimizations();
    window.addEventListener('resize', applyMobileOptimizations);
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #035096;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style); 

// Cookie consent implementation
const COOKIE_STORAGE_KEY = 'synaptiq-cookie-consent';

function getSavedCookieConsent() {
    try {
        const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function saveCookieConsent(consent) {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(consent));
    appendConsentLog(consent);
}

function defaultCookieConsent() {
    return {
        consentGiven: false,
        categories: {
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
        },
        timestamp: Date.now(),
        version: '1.0'
    };
}

function initializeCookieConsent() {
    const saved = getSavedCookieConsent();
    if (!saved || !saved.consentGiven) {
        renderCookieBanner();
    } else {
        applyCookiePreferences(saved.categories);
        addFooterCookieSettingsLink();
    }
}

function renderCookieBanner() {
    // Remove existing if any
    const existing = document.querySelector('.cookie-banner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-banner-content">
            <div class="cookie-text">
                <h4 data-translate="cookie.banner.title">We use cookies</h4>
                <p data-translate="cookie.banner.description">We use cookies to enhance your experience...</p>
            </div>
            <div class="cookie-actions">
                <button class="btn btn-secondary cookie-reject" data-translate="cookie.banner.rejectAll">Reject non‑essential</button>
                <button class="btn btn-secondary cookie-customize" data-translate="cookie.banner.customize">Customize</button>
                <button class="btn btn-primary cookie-accept" data-translate="cookie.banner.acceptAll">Accept all</button>
            </div>
        </div>
    `;
    document.body.appendChild(banner);
    updatePageLanguage();

    banner.querySelector('.cookie-accept').addEventListener('click', () => {
        const consent = defaultCookieConsent();
        consent.categories.functional = true;
        consent.categories.analytics = true;
        consent.categories.marketing = true;
        consent.consentGiven = true;
        consent.timestamp = Date.now();
        saveCookieConsent(consent);
        applyCookiePreferences(consent.categories);
        banner.remove();
        addFooterCookieSettingsLink();
    });

    banner.querySelector('.cookie-reject').addEventListener('click', () => {
        const consent = defaultCookieConsent();
        consent.consentGiven = true;
        consent.timestamp = Date.now();
        saveCookieConsent(consent);
        applyCookiePreferences(consent.categories);
        banner.remove();
        addFooterCookieSettingsLink();
    });

    banner.querySelector('.cookie-customize').addEventListener('click', () => {
        renderCookieModal();
    });
}

function renderCookieModal() {
    const existing = document.querySelector('.cookie-modal-overlay');
    if (existing) existing.remove();

    const saved = getSavedCookieConsent() || defaultCookieConsent();
    const overlay = document.createElement('div');
    overlay.className = 'cookie-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'cookie-modal';
    modal.innerHTML = `
        <div class="cookie-modal-header">
            <h3 data-translate="cookie.modal.title">Cookie preferences</h3>
            <button class="cookie-modal-close" aria-label="Close">×</button>
        </div>
        <p class="cookie-modal-desc" data-translate="cookie.modal.description">Select which categories...</p>
        <div class="cookie-category">
            <div class="cookie-category-head">
                <span class="cookie-category-name" data-translate="cookie.modal.categories.necessary.name">Strictly necessary</span>
                <label class="switch">
                    <input type="checkbox" checked disabled>
                    <span class="slider"></span>
                </label>
            </div>
            <p class="cookie-category-desc" data-translate="cookie.modal.categories.necessary.description">Required...</p>
        </div>
        <div class="cookie-category">
            <div class="cookie-category-head">
                <span class="cookie-category-name" data-translate="cookie.modal.categories.functional.name">Functional</span>
                <label class="switch">
                    <input id="cookie-functional" type="checkbox" ${saved.categories.functional ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <p class="cookie-category-desc" data-translate="cookie.modal.categories.functional.description">Enhance functionality...</p>
        </div>
        <div class="cookie-category">
            <div class="cookie-category-head">
                <span class="cookie-category-name" data-translate="cookie.modal.categories.analytics.name">Analytics</span>
                <label class="switch">
                    <input id="cookie-analytics" type="checkbox" ${saved.categories.analytics ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <p class="cookie-category-desc" data-translate="cookie.modal.categories.analytics.description">Help us understand...</p>
        </div>
        <div class="cookie-category">
            <div class="cookie-category-head">
                <span class="cookie-category-name" data-translate="cookie.modal.categories.marketing.name">Marketing</span>
                <label class="switch">
                    <input id="cookie-marketing" type="checkbox" ${saved.categories.marketing ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <p class="cookie-category-desc" data-translate="cookie.modal.categories.marketing.description">Used to deliver ads...</p>
        </div>
        <div class="cookie-modal-actions" style="gap: 0.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary cookie-export" data-translate="cookie.modal.exportLog">Export consent log</button>
                <button class="btn btn-secondary cookie-withdraw" data-translate="cookie.modal.withdraw">Withdraw consent</button>
            </div>
            <button class="btn btn-primary cookie-save" data-translate="cookie.modal.save">Save preferences</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    updatePageLanguage();

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    modal.querySelector('.cookie-modal-close').addEventListener('click', () => overlay.remove());
    modal.querySelector('.cookie-save').addEventListener('click', () => {
        const consent = defaultCookieConsent();
        consent.categories.functional = !!document.getElementById('cookie-functional')?.checked;
        consent.categories.analytics = !!document.getElementById('cookie-analytics')?.checked;
        consent.categories.marketing = !!document.getElementById('cookie-marketing')?.checked;
        consent.consentGiven = true;
        consent.timestamp = Date.now();
        saveCookieConsent(consent);
        applyCookiePreferences(consent.categories);
        overlay.remove();
        const banner = document.querySelector('.cookie-banner');
        if (banner) banner.remove();
        addFooterCookieSettingsLink();
    });

    // Export log button
    modal.querySelector('.cookie-export').addEventListener('click', exportConsentLog);
    // Withdraw button
    modal.querySelector('.cookie-withdraw').addEventListener('click', () => {
        const consent = defaultCookieConsent();
        consent.consentGiven = false;
        saveCookieConsent(consent);
        applyCookiePreferences(consent.categories);
        overlay.remove();
        renderCookieBanner();
    });
}

function addFooterCookieSettingsLink() {
    const footerLinks = document.querySelector('.footer-links');
    if (!footerLinks) return;
    if (!footerLinks.querySelector('.cookie-settings-link')) {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'cookie-settings-link';
        link.setAttribute('data-translate', 'cookie.settingsLink');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            renderCookieModal();
        });
        footerLinks.appendChild(link);
        updatePageLanguage();
    }
}

function applyCookiePreferences(categories) {
    // Execute deferred scripts for allowed categories
    const deferredScripts = document.querySelectorAll('script[type="text/plain"][data-cookie-category]');
    deferredScripts.forEach((script) => {
        const category = script.getAttribute('data-cookie-category');
        if (category && categories[category]) {
            const newScript = document.createElement('script');
            // Copy attributes except type
            [...script.attributes].forEach(attr => {
                if (attr.name !== 'type') newScript.setAttribute(attr.name, attr.value);
            });
            newScript.text = script.textContent || '';
            script.parentNode?.insertBefore(newScript, script);
            script.remove();
        }
    });
}

// Consent logging utilities
const CONSENT_LOG_KEY = 'synaptiq-cookie-consent-log';

function appendConsentLog(entry) {
    try {
        const log = JSON.parse(localStorage.getItem(CONSENT_LOG_KEY) || '[]');
        const record = {
            timestamp: new Date().toISOString(),
            language: currentLanguage,
            categories: entry.categories,
            consentGiven: entry.consentGiven,
            version: entry.version || '1.0'
        };
        log.push(record);
        localStorage.setItem(CONSENT_LOG_KEY, JSON.stringify(log));
    } catch (e) {
        // ignore
    }
}

function exportConsentLog() {
    try {
        const log = localStorage.getItem(CONSENT_LOG_KEY) || '[]';
        const blob = new Blob([log], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'consent-log.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    } catch (e) {
        // ignore
    }
}