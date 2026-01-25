// Custom content override script for Bhumit Nasit
(function () {
    'use strict';

    function replaceContent() {
        // Replace all text content
        const replacements = {
            'Muhammad Aamir': 'BHUMIT NASIT',
            'Muhammad Aamir Malik': 'BHUMIT NASIT',
            'muhammadaamirmalik': 'BHUMIT NASIT',
            'Full Stack Hyda': 'Full Stack Website Builder',
            'A Mobile App Developer': 'A Full Stack Website Builder',
            'A Full Stack Hybrid App Developer': 'Student at GEC Rajkot',
            'I build things for the App': 'I build fullstack websites',
            'skilled mobile app developer with over 4 years': 'student at GEC Rajkot with skills in C, HTML, CSS, JS, DBMS',
            'React Native': 'Web Development',
            'mobile apps': 'websites',
            'mobile app': 'website',
            'bhumitnasit@example.com': 'bhumitnasit1@gmail.com',
            'Islam': 'Hinduism',
            'Muslim': 'Hindu',
            'Pakistan': 'India',
            'Lahore': 'Rajkot',
            'Allah': 'God',
            'Islamic': 'Hindu'
        };

        // Function to replace text in all text nodes
        function replaceInTextNodes(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let text = node.textContent;
                for (let [oldText, newText] of Object.entries(replacements)) {
                    text = text.replace(new RegExp(oldText, 'gi'), newText);
                }
                if (text !== node.textContent) {
                    node.textContent = text;
                }
            } else {
                for (let child of node.childNodes) {
                    replaceInTextNodes(child);
                }
            }
        }

        // Replace in body
        replaceInTextNodes(document.body);

        // Update specific elements by class/id
        const headings = document.querySelectorAll('.mk-outer-heading, .mk-outer-heading2');
        headings.forEach(el => {
            if (el.textContent.includes('Muhammad')) {
                el.textContent = el.textContent.replace(/Muhammad Aamir.*?,/gi, 'BHUMIT NASIT,');
            }
            if (el.textContent.includes('Hyda')) {
                el.textContent = 'A Full Stack Website Builder';
            }
        });

        // Fix logo image - keep only the header logo with proper sizing
        const logoImages = document.querySelectorAll('.mk-logo-bg img');
        logoImages.forEach(img => {
            img.src = 'assets/bhumit.jpg';
            img.alt = 'BHUMIT NASIT';
            // Maintain original size constraints
            img.style.maxWidth = '60px';
            img.style.maxHeight = '60px';
            img.style.width = '60px';
            img.style.height = '60px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%'; // Make it circular like a profile pic
        });

        // Also ensure the logo container maintains size
        const logoContainers = document.querySelectorAll('.mk-logo-bg');
        logoContainers.forEach(container => {
            container.style.width = '60px';
            container.style.height = '60px';
            container.style.overflow = 'hidden';
            container.style.borderRadius = '50%';
        });

        // Hide all profile/portfolio images except logo
        const profileImages = document.querySelectorAll('.mk-myself-profile, .mk-hover-profile');
        profileImages.forEach(img => {
            if (!img.closest('.mk-logo-bg')) {
                img.style.display = 'none';
            }
        });

        // Hide the entire profile image section
        const profileSections = document.querySelectorAll('.mk-myself-profile-wrapper, .mk-myself-profile-parent');
        profileSections.forEach(section => {
            section.style.display = 'none';
        });

        // Hide all project images
        const projectImages = document.querySelectorAll('.mk-projects-image-container, .mk-text-image-container');
        projectImages.forEach(container => {
            container.style.display = 'none';
        });

        // Hide social media icons
        const socialIcons = document.querySelectorAll('.mk-side-elements, .mk-side-elements-mobile');
        socialIcons.forEach(element => {
            element.style.display = 'none';
        });

        // Update email in all places
        const emailElements = document.querySelectorAll('.mk-side-elements-text, .mk-side-elements-mobile-text');
        emailElements.forEach(el => {
            el.textContent = 'bhumitnasit1@gmail.com';
        });
        // Remove sections by ID if they exist (for robust hiding)
        const certSection = document.getElementById('certifications');
        if (certSection) certSection.style.display = 'none';

        const contribSection = document.getElementById('contributions');
        if (contribSection) contribSection.style.display = 'none';

        // Remove YouTube icons from sidebar and mobile menu
        const youtubeIcons = document.querySelectorAll('svg.feather-youtube');
        youtubeIcons.forEach(icon => {
            const container = icon.closest('.mk-side-elements-item, .mk-side-elements-mobile-social');
            if (container) {
                // If it's a direct item container
                if (container.classList.contains('mk-side-elements-item')) {
                    container.style.display = 'none';
                }
                // If it's inside the social container but we want to remove just the icon or its wrapper if specific
                else {
                    icon.style.display = 'none';
                }
            } else {
                icon.style.display = 'none';
            }
        });

        // Remove specific hamburger menu items by text
        const hamburgerItems = document.querySelectorAll('.mk-hamburger-item');
        hamburgerItems.forEach(item => {
            const textContent = item.innerText || item.textContent;
            // Clean up whitespace to match easier
            const cleanText = textContent.replace(/\s/g, '').toLowerCase();

            // 1. Resize target items first
            if (cleanText.includes('reviews')) {
                item.style.width = '460px';
                item.style.height = '460px';
                item.style.zIndex = '5';
                const children = item.children;
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (!child.classList.contains('mk-hamburger-item-bg')) {
                        child.style.height = '230px';
                    }
                }
            }

            if (cleanText.includes('contact')) {
                item.style.width = '540px';
                item.style.height = '540px';
                item.style.zIndex = '4';
                const children = item.children;
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (!child.classList.contains('mk-hamburger-item-bg')) {
                        child.style.height = '270px';
                    }
                }
            }

            // 2. Hide unwanted items (including anything that remains > 540px)
            // We check style.width. If it was resized above, it will be 460 or 540.
            // If it wasn't resized, it might be the original 780px or hidden items.
            const currentWidthStr = item.style.width || getComputedStyle(item).width || '0';
            const currentWidth = parseInt(currentWidthStr);

            if (cleanText.includes('certifications') ||
                cleanText.includes('myyoutube') ||
                cleanText.includes('youtube') ||
                cleanText.includes('allprojects') ||
                cleanText === '' ||
                (currentWidth > 540 && !cleanText.includes('contact'))) { // Double check to not hide Contact if logic fails

                // Hide the parent flex-center wrapper to remove spacing
                const parent = item.closest('.flex-center');
                if (parent) parent.style.display = 'none';
                else item.style.display = 'none';
            }
        });
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceContent);
    } else {
        replaceContent();
    }

    // Also run after delays to catch dynamically loaded content
    setTimeout(replaceContent, 100);
    setTimeout(replaceContent, 500);
    setTimeout(replaceContent, 1000);
    setTimeout(replaceContent, 2000);
    // Continuous check for a few seconds as hydration might happen late
    const interval = setInterval(replaceContent, 2000);
    setTimeout(() => clearInterval(interval), 20000);

})();
