// -------------- Change Language
function changeLanguage(lang) {
    // Validate language to prevent errors
    if (!["en", "fr", "ar"].includes(lang)) lang = "en";
    document.documentElement.setAttribute("lang", lang);
    document.querySelector(".main h2").innerHTML = translations[lang].main_title;
    document.querySelector(".main h3").textContent = translations[lang].main_subtitle;
    document.querySelector(".main-btn").textContent = translations[lang].main_btn;
    document.querySelector(".secondary-btn").textContent = translations[lang].secondary_btn;
    document.querySelector("#services .title").textContent = translations[lang].services_title;
    document.querySelector(".service-title-1").textContent = translations[lang].service_title_1;
    document.querySelector(".service-desc-1").textContent = translations[lang].service_desc_1;
    document.querySelector(".service-title-2").textContent = translations[lang].service_title_2;
    document.querySelector(".service-desc-2").textContent = translations[lang].service_desc_2;
    document.querySelector(".service-title-3").textContent = translations[lang].service_title_3;
    document.querySelector(".service-desc-3").textContent = translations[lang].service_desc_3;
    document.querySelector("#projects .title").textContent = translations[lang].projects_title;
    document.querySelector(".filter-label-all").textContent = translations[lang].filter_label_all;
    document.querySelector(".filter-label-web").textContent = translations[lang].filter_label_web;
    document.querySelector(".filter-label-social").textContent = translations[lang].filter_label_social;
    document.querySelector(".filter-label-content").textContent = translations[lang].filter_label_content;
    document.querySelector(".filter-label-strategy").textContent = translations[lang].filter_label_strategy;
    document.querySelector(".packages-title").textContent = translations[lang].packages_title;
    document.querySelector(".packages-subtitle").textContent = translations[lang].packages_subtitle;
    document.querySelectorAll(".package-category-title")[0].innerHTML = `<i class="fas fa-camera"></i> ${translations[lang].package_category_title1}`;
    document.querySelectorAll(".package-category-title")[1].innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].package_category_title2}`;
    document.querySelectorAll(".package-delivery").forEach((el, index) => {
        el.textContent = translations[lang].package_delivery + (index === 0 ? ": Weekly post scheduling" : index === 1 ? ": Weekly content batches" : index === 2 ? ": Full monthly content calendar" : index === 3 ? ": 3–5 working days" : index === 4 ? ": 7–10 working days" : ": 14–20 working days");
    });
    document.querySelectorAll(".package-btn").forEach(el => {
        el.textContent = translations[lang].package_btn;
    });
    document.querySelectorAll(".popular-badge").forEach(el => {
        el.textContent = translations[lang].popular_badge;
    });
    document.querySelector("#ourTeam .title").textContent = translations[lang].team_title;
    document.querySelectorAll("#ourTeam .content .profile .profile__wrapper .profile__content .description").forEach((p, index) => {
        if (index === 0) {
            p.textContent = translations[lang].team_founder; // Founder & Creative Director
        } else if (index === 1) {
            p.textContent = translations[lang].team_web_expert; // Web Solutions Expert
        } else if (index === 2) {
            p.textContent = translations[lang].team_member3; // Jawher
        } else if (index === 3) {
            p.textContent = translations[lang].team_member4; // Sahar
        }
    });
    document.querySelectorAll("#ourTeam .content .profile .profile__wrapper .profile__content .button-actions .primary").forEach(button => {
        // Get the existing SVG element
        const svg = button.querySelector('svg');
        // Update only the text content, preserving the SVG
        button.innerHTML = '';
        button.appendChild(svg); // Re-append the SVG
        button.insertAdjacentText('beforeend', translations[lang].team_btn);
    });
    document.querySelector(".contact-title").textContent = translations[lang].contact_title;
    document.querySelector(".contact-team-title").textContent = translations[lang].contact_team_title;
    document.querySelector(".contact-name").setAttribute("placeholder", translations[lang].contact_name);
    document.querySelector(".contact-email").setAttribute("placeholder", translations[lang].contact_email);
    document.querySelector(".contact-service-default").textContent = translations[lang].contact_service_default;
    document.querySelector(".contact-service-1").textContent = translations[lang].contact_service_1;
    document.querySelector(".contact-service-2").textContent = translations[lang].contact_service_2;
    document.querySelector(".contact-service-3").textContent = translations[lang].contact_service_3;
    document.querySelector(".contact-service-4").textContent = translations[lang].contact_service_4;
    document.querySelector(".contact-service-5").textContent = translations[lang].contact_service_5;
    document.querySelector(".contact-package-default").textContent = translations[lang].contact_package_default;
    document.querySelector(".contact-package-label1").setAttribute('label', translations[lang].contact_package_label1);
    document.querySelector(".contact-package-label2").setAttribute('label', translations[lang].contact_package_label2);
    document.querySelector(".contact-message").setAttribute("placeholder", translations[lang].contact_message);
    document.querySelector(".contact-submit").textContent = translations[lang].contact_submit;
    document.querySelector(".contact-call-title").textContent = translations[lang].contact_call_title;
    document.querySelector(".contact-phone").innerHTML = `<i class="fa-solid fa-phone"></i>${translations[lang].contact_phone}`;
    document.querySelector(".contact-location-title").textContent = translations[lang].contact_location_title;
    document.querySelector(".contact-location").innerHTML = `<i class="fa-solid fa-map-location-dot"></i>${translations[lang].contact_location}`;
    document.querySelector(".contact-email-title").textContent = translations[lang].contact_email_title;
    document.querySelector(".contact-email-text").innerHTML = `<i class="fa-solid fa-envelope"></i>${translations[lang].contact_email_text}`;
    document.querySelector(".newsletter-title").textContent = translations[lang].newsletter_title;
    document.querySelector(".newsletter-email").setAttribute("placeholder", translations[lang].newsletter_email);
    document.querySelector(".newsletter-submit").textContent = translations[lang].newsletter_submit;
    // document.querySelector(".copyright-text").textContent = translations[lang].copyright_text;

    // Footer translations
    document.querySelector(".footer-column:nth-child(1) h3").textContent = translations[lang].footer_about_title;
    document.querySelector(".footer-column:nth-child(1) p").textContent = translations[lang].footer_about_desc;
    document.querySelector(".footer-column:nth-child(2) h3").textContent = translations[lang].footer_quick_links;
    document.querySelector(".footer-column:nth-child(3) h3").textContent = translations[lang].footer_follow_us;

    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", lang);

    // Update active button
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        }
    });
}

//------------------------ Loader
// Hide loader when page is fully loaded
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    setTimeout(() => {
        loader.style.display = "none";
    }, 500); // Match CSS transition duration
});

// Set language on page load
document.addEventListener("DOMContentLoaded", () => {
    // Load saved language, or detect browser language, or default to English
    let lang = localStorage.getItem("preferredLanguage");
    if (!lang) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith("fr")) lang = "fr";
        else if (browserLang.startsWith("ar")) lang = "ar";
        else lang = "en";
    }
    changeLanguage(lang);
});

//-------------------------Loader(Project Filter)
// Filter logic with spinner
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".Project-card");
const loader = document.getElementById("loader");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Show loader
        loader.style.display = "flex";
        loader.classList.add("active");
        loader.classList.remove("hidden");

        // Get filter value
        const filter = button.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Hide loader after 0.8s
        setTimeout(() => {
            loader.classList.add("hidden");
            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove("active");
            }, 500); // Match CSS transition duration
        }, 800); // Brief delay for spinner
    });
});

//---------------------End Filter Loader

// Event listeners for language buttons
document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
    });
});