// ============================================
// FERTOLIX PRO - JAVASCRIPT FUNCTIONALITY
// ============================================

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // LIVE VISITOR COUNTER
    // ============================================
    const visitorCountElement = document.getElementById('visitorCount');

    // Function to update visitor count with random fluctuation
    function updateVisitorCount() {
        // Random number between 35 and 65
        const count = Math.floor(Math.random() * (65 - 35 + 1)) + 35;
        visitorCountElement.textContent = count;
    }

    // Update visitor count every 8-12 seconds (random interval)
    function scheduleVisitorUpdate() {
        const interval = Math.floor(Math.random() * (12000 - 8000 + 1)) + 8000;
        setTimeout(function () {
            updateVisitorCount();
            scheduleVisitorUpdate(); // Schedule next update
        }, interval);
    }

    // Start visitor counter
    scheduleVisitorUpdate();

    // ============================================
    // ORDER NOTIFICATION POPUP
    // ============================================
    const orderNotification = document.getElementById('orderNotification');
    const notificationName = document.getElementById('notificationName');
    const notificationOrder = document.getElementById('notificationOrder');

    // Array of Nigerian names and cities
    const nigerianNames = [
        { name: 'Chioma', city: 'Lagos' },
        { name: 'Fatima', city: 'Kano' },
        { name: 'Blessing', city: 'Port Harcourt' },
        { name: 'Adewale', city: 'Ibadan' },
        { name: 'Amina', city: 'Abuja' },
        { name: 'Joy', city: 'Enugu' },
        { name: 'Ngozi', city: 'Onitsha' },
        { name: 'Halima', city: 'Kaduna' },
        { name: 'Funke', city: 'Abeokuta' },
        { name: 'Mariam', city: 'Sokoto' },
        { name: 'Ifeoma', city: 'Owerri' },
        { name: 'Zainab', city: 'Maiduguri' },
        { name: 'Bukola', city: 'Osogbo' },
        { name: 'Aminat', city: 'Ilorin' },
        { name: 'Chiamaka', city: 'Awka' },
        { name: 'Hauwa', city: 'Jos' },
        { name: 'Nneka', city: 'Calabar' },
        { name: 'Aisha', city: 'Bauchi' },
        { name: 'Temitope', city: 'Akure' },
        { name: 'Rashidat', city: 'Benin City' },
        { name: 'Efe', city: 'Warri' },
        { name: 'Khadija', city: 'Gombe' },
        { name: 'Oluchi', city: 'Umuahia' },
        { name: 'Safiya', city: 'Katsina' }
    ];

    // Array of package options
    const packages = [
        '2 Bottles',
        '3 Bottles',
        '4 Bottles'
    ];

    // Function to show notification
    function showNotification() {
        // Get random name, city, and package
        const randomPerson = nigerianNames[Math.floor(Math.random() * nigerianNames.length)];
        const randomPackage = packages[Math.floor(Math.random() * packages.length)];

        // Update notification content
        notificationName.textContent = `${randomPerson.name} from ${randomPerson.city}`;
        notificationOrder.textContent = `just ordered ${randomPackage}`;

        // Show notification with slide-in animation
        orderNotification.classList.add('show');

        // Hide notification after 5 seconds
        setTimeout(function () {
            orderNotification.classList.remove('show');
        }, 5000);
    }

    // Show first notification after 15 seconds
    setTimeout(showNotification, 15000);

    // Then show notification every 20 seconds
    setInterval(showNotification, 20000);

    // ============================================
    // STOCK SCARCITY COUNTER
    // ============================================
    const stockCountElements = [
        document.getElementById('stockCount'),
        document.getElementById('stockCountForm'),
        document.getElementById('stockCountFinal')
    ];

    let stockCount = 12; // Starting stock count

    // Function to update all stock count displays
    function updateStockCount() {
        stockCountElements.forEach(element => {
            if (element) {
                element.textContent = stockCount;
            }
        });

        // Decrease stock count
        stockCount--;

        // Don't go below 5
        if (stockCount < 5) {
            stockCount = 5;
        }
    }

    // Update stock count every 45-90 seconds (random)
    function scheduleStockUpdate() {
        const interval = Math.floor(Math.random() * (90000 - 45000 + 1)) + 45000;
        setTimeout(function () {
            updateStockCount();
            scheduleStockUpdate(); // Schedule next update
        }, interval);
    }

    // Start stock counter
    scheduleStockUpdate();

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
            if (href === '#' || href === '') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });

    // ============================================


    // ============================================
    // SCROLL ANIMATIONS (Fade In On Scroll)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.testimonial-card, .benefit-card, .problem-item, .pricing-card, .faq-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ============================================
    // PREVENT FORM RESUBMISSION ON PAGE REFRESH
    // ============================================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ============================================
    // CONSOLE MESSAGE (Optional - for developers)
    // ============================================
    console.log('%c🌿 Fertolix Pro - Landing Page Loaded Successfully! 🌿', 'color: #2D8B8B; font-size: 16px; font-weight: bold;');
    console.log('%cAll interactive features are now active.', 'color: #5A6C7D; font-size: 12px;');

}); // End of DOMContentLoaded

// ============================================
// ADDITIONAL UTILITY FUNCTIONS
// ============================================

// Function to format Nigerian phone numbers
function formatNigerianPhone(phone) {
    // Remove all spaces and special characters
    let cleaned = phone.replace(/\D/g, '');

    // Handle different formats
    if (cleaned.startsWith('234')) {
        cleaned = '0' + cleaned.substring(3);
    } else if (cleaned.startsWith('+234')) {
        cleaned = '0' + cleaned.substring(4);
    }

    return cleaned;
}

// Function to validate email (if needed in future)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Prevent right-click on images (optional - to protect product images)
// Uncomment if you want to enable this feature
/*
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
*/

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if you add actual product images later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// END OF SCRIPT
// ============================================

document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
    if (
        e.ctrlKey &&
        (e.key === "u" ||
            e.key === "U" ||
            e.key === "c" ||
            e.key === "C" ||
            e.key === "s" ||
            e.key === "S" ||
            e.key === "i" ||
            e.key === "I")
    ) {
        e.preventDefault();
    }
});
// Added JS
// ============================================
// FERTOLIX PRO - ADDITIONAL JAVASCRIPT FOR NEW FEATURES
// Add this to your existing script.js file
// ============================================

// Add this inside your DOMContentLoaded event listener

// ============================================
// SUCCESS COUNTER ANIMATION (10A)
// ============================================
function animateSuccessCounter() {
    const counterElement = document.getElementById('successCounter');
    if (!counterElement) return;

    const targetNumber = 12847;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 16); // 60fps
    let currentNumber = 12000;

    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        counterElement.textContent = Math.floor(currentNumber).toLocaleString();
    }, 16);
}

// Trigger animation when section comes into view
const successCounterSection = document.querySelector('.success-counter-section');
if (successCounterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSuccessCounter();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(successCounterSection);
}

// ============================================
// REGIONAL STOCK COUNTDOWN (3B)
// ============================================
const regionalStockCounts = {
    stockLagos: 12,
    stockAbuja: 8,
    stockPH: 6,
    stockRivers: 7,
    stockEdo: 5,
    stockOyo: 9
};

function updateRegionalStock() {
    Object.keys(regionalStockCounts).forEach(stockId => {
        const element = document.getElementById(stockId);
        if (element && regionalStockCounts[stockId] > 3) {
            regionalStockCounts[stockId]--;
            element.textContent = `${regionalStockCounts[stockId]} bottles`;

            // Change color when stock is low
            if (regionalStockCounts[stockId] <= 5) {
                element.style.color = '#E74C3C';
                element.style.fontWeight = '700';
            }
        }
    });
}

// Update regional stock every 2-3 minutes (random)
function scheduleRegionalStockUpdate() {
    const interval = Math.floor(Math.random() * (180000 - 120000 + 1)) + 120000;
    setTimeout(function () {
        updateRegionalStock();
        scheduleRegionalStockUpdate();
    }, interval);
}

scheduleRegionalStockUpdate();

// ============================================
// ENHANCED FORM VALIDATION WITH PHONE MATCHING
// ============================================
const mainOrderForm = document.getElementById('orderFormElement');
const discountForm = document.getElementById('discountOrderForm');

function setupFormValidation(form) {
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullNameField = form.querySelector('[name="fullName"]');
        const phoneNumberField = form.querySelector('[name="phoneNumber"]');
        const phoneConfirmField = form.querySelector('[name="phoneNumberConfirm"]');
        const addressField = form.querySelector('[name="deliveryAddress"]');
        const stateField = form.querySelector('[name="state"]');
        const quantityField = form.querySelector('[name="quantity"]');
        const deliveryField = form.querySelector('input[name="delivery"]:checked');

        let errors = [];

        // Validation checks
        if (!fullNameField.value.trim()) errors.push('Please enter your full name');
        if (!phoneNumberField.value.trim()) errors.push('Please enter your phone number');
        if (!phoneConfirmField.value.trim()) errors.push('Please confirm your phone number');
        if (!addressField.value.trim()) errors.push('Please enter your delivery address');
        if (!stateField.value) errors.push('Please select your state');
        if (!quantityField.value) errors.push('Please select a package');

        // Check if phone numbers match
        if (phoneNumberField.value && phoneConfirmField.value &&
            phoneNumberField.value !== phoneConfirmField.value) {
            errors.push('Phone numbers do not match');
        }

        // Validate Nigerian phone number format
        const phoneRegex = /^(\+234|234|0)[789][01]\d{8}$/;
        if (phoneNumberField.value && !phoneRegex.test(phoneNumberField.value.replace(/\s/g, ''))) {
            errors.push('Please enter a valid Nigerian phone number');
        }

        if (errors.length > 0) {
            alert('Please fix the following errors:\n\n' + errors.join('\n'));
            return false;
        }

        // Redirect to thank you page on success
        window.location.href = 'thankf.html';
    });

    // Real-time phone number matching
    const phoneInput = form.querySelector('[name="phoneNumber"]');
    const phoneConfirmInput = form.querySelector('[name="phoneNumberConfirm"]');

    function checkPhoneMatch() {
        if (phoneInput.value && phoneConfirmInput.value) {
            if (phoneInput.value !== phoneConfirmInput.value) {
                phoneConfirmInput.style.borderColor = '#E74C3C';
            } else {
                phoneConfirmInput.style.borderColor = '#27AE60';
            }
        } else {
            phoneConfirmInput.style.borderColor = '';
        }
    }

    if (phoneInput && phoneConfirmInput) {
        phoneInput.addEventListener('input', checkPhoneMatch);
        phoneConfirmInput.addEventListener('input', checkPhoneMatch);
    }
}

// Setup validation for both forms
setupFormValidation(mainOrderForm);
setupFormValidation(discountForm);

// ============================================
// SMOOTH SCROLL WITH OFFSET FOR STICKY ELEMENTS
// ============================================
function smoothScrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const offset = 80; // Account for sticky elements
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Enhanced anchor link handling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollToSection(targetId);

        // Update URL without jumping
        history.pushState(null, null, href);
    });
});

// ============================================
// ENHANCED SCROLL ANIMATIONS
// ============================================
const enhancedObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const enhancedObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            enhancedObserver.unobserve(entry.target);
        }
    });
}, enhancedObserverOptions);

// Observe new sections
const newAnimatedElements = document.querySelectorAll(
    '.founder-content, .tried-item, .tried-different, .truth-stat-box, ' +
    '.clinical-result-box, .doctor-content, .cert-badge, .guarantee-box, ' +
    '.cost-item, .challenge-point, .process-step, .referral-card'
);

newAnimatedElements.forEach(element => {
    enhancedObserver.observe(element);
});

// ============================================
// DYNAMIC STOCK ALERTS
// ============================================
function showStockAlert() {
    const stockAlerts = [
        '⚠️ Stock running low in Lagos!',
        '🔥 Only a few bottles left in Abuja!',
        '⏰ Limited stock alert - Order now!',
        '📉 Stock decreasing fast!'
    ];

    const randomAlert = stockAlerts[Math.floor(Math.random() * stockAlerts.length)];

    // You can display this in a toast notification if you add one
    console.log(randomAlert);
}

// Show stock alert every 5 minutes
setInterval(showStockAlert, 300000);

// ============================================
// COMPARISON TABLE HIGHLIGHT ON HOVER
// ============================================
const comparisonTable = document.querySelector('.comparison-table');
if (comparisonTable) {
    const rows = comparisonTable.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#E8F5F5';
            this.style.transition = 'background-color 0.2s ease';
        });

        row.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '';
        });
    });
}

// ============================================
// COST COMPARISON ANIMATION
// ============================================
function animateCostComparison() {
    const costItems = document.querySelectorAll('.cost-item');

    costItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';

            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Trigger animation when comparison section comes into view
const comparisonSection = document.querySelector('.comparison-section');
if (comparisonSection) {
    const comparisonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCostComparison();
                comparisonObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    comparisonObserver.observe(comparisonSection);
}

// ============================================
// GUARANTEE CARDS INTERACTION
// ============================================
const guaranteeBoxes = document.querySelectorAll('.guarantee-box');

guaranteeBoxes.forEach(box => {
    box.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.guarantee-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    box.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.guarantee-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ============================================
// PROCESS TIMELINE PROGRESSIVE REVEAL
// ============================================
function revealProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateX(-50px)';
            step.style.transition = 'all 0.6s ease';

            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }, 100);
        }, index * 300);
    });
}

// Trigger when order process section comes into view
const processSection = document.querySelector('.order-process-section');
if (processSection) {
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealProcessSteps();
                processObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    processObserver.observe(processSection);
}

// ============================================
// REFERRAL CARDS PULSE ANIMATION
// ============================================
const referralCards = document.querySelectorAll('.referral-card');

referralCards.forEach(card => {
    setInterval(() => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    }, 5000);
});

// ============================================
// CLINICAL RESULTS COUNTER ANIMATION
// ============================================
function animateClinicalResults() {
    const resultBoxes = document.querySelectorAll('.clinical-result-box');

    resultBoxes.forEach((box, index) => {
        const percentage = box.querySelector('.result-percentage');
        if (!percentage) return;

        const text = percentage.textContent.trim();

        // Only animate numbers, not text like "10 Days"
        if (!isNaN(parseInt(text))) {
            setTimeout(() => {
                const target = parseInt(text);
                let current = 0;
                const increment = target / 50;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    percentage.textContent = Math.floor(current) + '%';
                }, 30);
            }, index * 200);
        }
    });
}

// Trigger clinical results animation
const clinicalSection = document.querySelector('.clinical-study-section');
if (clinicalSection) {
    const clinicalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateClinicalResults();
                clinicalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    clinicalObserver.observe(clinicalSection);
}

// ============================================
// TRUTH STATS ANIMATION
// ============================================
function animateTruthStats() {
    const statBoxes = document.querySelectorAll('.truth-stat-box');

    statBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '0';
            box.style.transform = 'rotateY(90deg)';
            box.style.transition = 'all 0.6s ease';

            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'rotateY(0deg)';
            }, 100);
        }, index * 300);
    });
}

// Trigger stats animation
const truthSection = document.querySelector('.industry-truth-section');
if (truthSection) {
    const truthObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTruthStats();
                truthObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    truthObserver.observe(truthSection);
}

// ============================================
// COPY PROTECTION (Optional)
// ============================================
// Prevent right-click on specific sections
const protectedSections = document.querySelectorAll(
    '.founder-story-section, .clinical-study-section, .doctor-endorsement-section'
);

protectedSections.forEach(section => {
    section.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });
});

// ============================================
// PERFORMANCE: LAZY LOAD IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE LOG FOR ENHANCED VERSION
// ============================================
console.log('%c🌟 Fertolix Pro Enhanced - All Advanced Features Loaded! 🌟',
    'color: #2D8B8B; font-size: 16px; font-weight: bold;');
console.log('%cNew features: Success Counter, Regional Stock, Clinical Studies, Doctor Endorsement, Cost Comparison, Guarantees, Order Timeline, Referral Program',
    'color: #5A6C7D; font-size: 12px;');
// ============================================
// STICKY CTA BUTTON - SCROLL TO FORM
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.getElementById('ctaButton');

    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Find the order form
            const orderForm = document.getElementById('order-form');

            if (orderForm) {
                // Smooth scroll to form with offset
                const offset = 80; // Account for sticky elements
                const targetPosition = orderForm.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});
  /* ---- QUIZ LOGIC ---- */
  const quizAnswers = { q1: null, q2: null };

  function selectOption(el, step) {
    const group = el.closest('.quiz-options');
    group.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    quizAnswers['q' + step] = el.dataset.value;
    document.getElementById('nextBtn' + step).disabled = false;
  }

  function toggleMulti(el) {
    el.classList.toggle('selected');
    const anySelected = el.closest('.quiz-options').querySelectorAll('.selected').length > 0;
    document.getElementById('nextBtn3').disabled = !anySelected;
  }

  function nextStep(current) {
    document.querySelector('[data-step="' + current + '"]').classList.remove('active');
    document.querySelector('[data-step="' + (current + 1) + '"]').classList.add('active');
    updateProgress(current + 1);
  }

  function prevStep(current) {
    document.querySelector('[data-step="' + current + '"]').classList.remove('active');
    document.querySelector('[data-step="' + (current - 1) + '"]').classList.add('active');
    updateProgress(current - 1);
  }

  function updateProgress(step) {
    const pct = ((step - 1) / 3) * 100;
    document.getElementById('quizProgress').style.width = pct + '%';
  }

  function showResult() {
    // Determine stage
    let score = 0;
    if (quizAnswers.q1 === 'active')    score += 1;
    if (quizAnswers.q1 === 'advanced')  score += 2;
    if (quizAnswers.q2 === 'active')    score += 1;
    if (quizAnswers.q2 === 'advanced')  score += 2;

    const q3All = document.getElementById('opts-3').querySelectorAll('.selected');
    if (q3All.length >= 3) score += 1;

    let stage, badgeClass, title, desc, pkgName, pkgBottles, pkgPrice, oldPrice, pkgWhy;

    if (score <= 1) {
      stage = 'Early Stage';
      badgeClass = 'early';
      title = 'Good News — Early Detection Means Faster Results';
      desc = 'Your fibroid is at an early stage. With prompt treatment you can dissolve it completely and prevent it from growing larger. The Value Pack is sufficient for your condition.';
      pkgName = 'Value Package — 2 Bottle';
      pkgBottles = '2 Bottle (30-day supply)';
      pkgPrice = '₦40,000';
      oldPrice = '₦70,000';
      pkgWhy = 'Ideal for early-stage fibroids. Begin treatment now and stop the fibroid before it grows.';
    } else if (score <= 3) {
      stage = 'Active Stage';
      badgeClass = 'active';
      title = 'Your Fibroid Is Actively Growing — Act Now';
      desc = 'Your symptoms and duration suggest the fibroid has had time to establish itself. A full complete treatment is needed to shrink it properly and restore hormonal balance.';
      pkgName = 'Complete Package — 3 Bottles';
      pkgBottles = '3 Bottles (45-days supply)';
      pkgPrice = '₦50,000';
      oldPrice = '₦90,000';
      pkgWhy = 'Recommended for moderate fibroids. Gives your body enough time to dissolve the fibroid and stabilise your cycle.';
    } else {
      stage = 'Advanced Stage';
      badgeClass = 'advanced';
      title = 'Your Condition Needs a Full Womb Correction Cycle';
      desc = 'Based on your answers, your fibroid has been growing for a significant time with severe symptoms. A complete 45-day treatment is strongly recommended to fully correct your womb environment and prevent recurrence.';
      pkgName = 'Complete Package — 3 Bottles';
      pkgBottles = '3-4 Bottles (2-Months supply) — Most Recommended';
      pkgPrice = '₦65,000';
      oldPrice = '₦110,000';
      pkgWhy = 'Designed for advanced or long-standing fibroids. Full cycle corrects the root cause and ensures the fibroid does not return.';
    }

    document.getElementById('quizProgress').style.width = '100%';

    const resultHTML = `
      <div class="result-badge ${badgeClass}">● ${stage}</div>
      <h3>${title}</h3>
      <p class="result-desc">${desc}</p>
      <div class="result-package-card">
        <div class="pkg-label">Your Recommended Package</div>
        <div class="pkg-name">${pkgName}</div>
        <div class="pkg-price">${pkgPrice} <span>${oldPrice}</span></div>
        <p class="pkg-why">${pkgWhy}</p>
      </div>
      <a href="#order-form" class="quiz-cta-btn">✅ Order My Recommended Package Now</a>
      <br>
      <button class="quiz-retake" onclick="retakeQuiz()">Retake Assessment</button>
    `;

    const quizBodyEl = document.querySelector('.quiz-body');
    quizBodyEl.style.display = 'none';

    const resultEl = document.getElementById('quizResult');
    resultEl.innerHTML = resultHTML;
    resultEl.classList.add('show');
  }

  function retakeQuiz() {
    quizAnswers.q1 = null; quizAnswers.q2 = null;
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('nextBtn1').disabled = true;
    document.getElementById('nextBtn2').disabled = true;
    document.getElementById('nextBtn3').disabled = true;
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.querySelector('[data-step="1"]').classList.add('active');
    document.getElementById('quizResult').classList.remove('show');
    document.getElementById('quizResult').innerHTML = '';
    document.querySelector('.quiz-body').style.display = 'block';
    document.getElementById('quizProgress').style.width = '0%';
  }

  /* ---- COMMENTS LIKE TOGGLE ---- */
  function toggleLike(btn) {
    const countEl = btn.querySelector('.like-count');
    let count = parseInt(countEl.textContent);
    if (btn.classList.contains('liked')) {
      btn.classList.remove('liked');
      countEl.textContent = count - 1;
    } else {
      btn.classList.add('liked');
      countEl.textContent = count + 1;
    }
  }

  /* ---- COMPOSE COMMENT ---- */
  function submitComment() {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (!text) return;
    const list = document.querySelector('.comments-inner');
    const compose = document.querySelector('.comments-compose');
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `
      <div class="comment-avatar">👤</div>
      <div class="comment-content">
        <div class="comment-name">You</div>
        <p class="comment-text">${text.replace(/</g,'&lt;')}</p>
        <div class="comment-meta">
          <button class="like-btn" onclick="toggleLike(this)">👍 Like <span class="like-count">0</span></button>
          <button class="reply-btn">Reply</button>
          <span>Just now</span>
        </div>
      </div>`;
    list.insertBefore(newComment, compose);
    input.value = '';
  }