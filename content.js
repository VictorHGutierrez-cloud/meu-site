// 📝 CONTENT FILE - EASY TO EDIT TEXT CONTENT
// This file contains all the text that can be easily changed without touching HTML

const SITE_CONTENT = {
    // 🏠 PAGE TITLE & META
    pageTitle: "Payoneer & LexBridge: The Ultimate Brazilian Expansion Solution",
    pageDescription: "Providing U.S. companies with an end-to-end legal & financial framework for seamless expansion into Brazil.",
    pageKeywords: "Brazil expansion, legal framework, financial services, Payoneer, LexBridge, Custo Brasil",

    // 🚀 HERO SECTION TEXT
    hero: {
        mainHeading: "Conquer \"Custo Brasil\"",
        subHeading: "With Sigma-Level Partnership",
        description: "Providing U.S. companies with an end-to-end legal & financial framework for seamless expansion into Brazil.",
        primaryButton: "🚀 Discover the Solution",
        secondaryButton: "🤝 Join the Alliance",
        primaryButtonLink: "#solution",
        secondaryButtonLink: "#alliance"
    },

    // 📊 MARKET SECTION TEXT
    market: {
        heading: "Brazilian Market: High Potential, High Complexity",
        description: "Brazil presents massive opportunity, but navigating the \"Custo Brasil\" demands integrated operational infrastructure.",
        stats: [
            {
                label: "% of U.S. Companies",
                description: "without presence in Brazil willing to start operations."
            },
            {
                label: "% of Established U.S. Companies",
                description: "plan to expand existing operations in Brazil."
            },
            {
                label: "Brazilian Companies",
                description: "exported to the U.S., record trade relations."
            }
        ]
    },

    // 💰 FINTECH SECTION TEXT
    fintech: {
        heading: "The Fintech Revolution: Pix Growth",
        description: "Modern, instant payment infrastructure is essential for success in Brazil.",
        chartTitle: "Pix Transactions Growth",
        footnote: "Pix transactions grew 53% in 2024, primary payment rail in Brazil."
    },

    // 🏛️ SOLUTIONS SECTION TEXT
    solutions: {
        heading: "Integrated Solutions for Core Pain Points",
        description: "LexBridge-Payoneer alliance tackles critical U.S. company challenges in Brazil.",
        
        // Compliance & Labor Tab
        compliance: {
            title: "Navigating the Regulatory Labyrinth",
            challenges: [
                {
                    challenge: "Labor Law (CLT) & Misclassification Risk",
                    pain: "Fines, lawsuits, and reputational damage from complex labor laws.",
                    solution: "Payoneer's EOR handles compliant hiring and payroll. LexBridge provides strategic legal counsel."
                },
                {
                    challenge: "Tax & Financial Reporting",
                    pain: "High administrative burden and non-compliance risk in a complex tax system.",
                    solution: "Payoneer's platform automates tax form collection. LexBridge advises on tax optimization."
                }
            ]
        },

        // FX & Payments Tab
        fx: {
            title: "Eliminating FX Costs and Volatility",
            comparisons: [
                {
                    criterion: "Speed",
                    traditional: "Days or weeks",
                    payoneer: "Seconds to minutes"
                },
                {
                    criterion: "Cost",
                    traditional: "High fees & hidden costs",
                    payoneer: "Low, competitive rates"
                },
                {
                    criterion: "Transparency",
                    traditional: "Unpredictable rates, no visibility",
                    payoneer: "Full transparency, no hidden fees"
                },
                {
                    criterion: "Complexity",
                    traditional: "Manual process, multiple banks",
                    payoneer: "Simplified, automated platform"
                }
            ]
        },

        // Onboarding & Scale Tab
        onboarding: {
            title: "Simplifying Onboarding to Scale with Ease",
            comparisons: [
                {
                    action: "Legal Entity Creation",
                    traditional: "Months-long, high-cost process",
                    payoneer: "Not required; Payoneer acts as Employer of Record (EOR)"
                },
                {
                    action: "Employment Contracts",
                    traditional: "Requires local legal counsel, high risk & bureaucracy",
                    payoneer: "Uses localized, compliant contracts via the platform"
                },
                {
                    action: "Payroll & Payments",
                    traditional: "Complex, manual, multi-currency process",
                    payoneer: "Simplified, multi-currency payroll from a single dashboard"
                }
            ]
        }
    },

    // 🤝 ALLIANCE SECTION TEXT
    alliance: {
        heading: "The Partnership Opportunity: A Unified Value Proposition",
        description: "By combining LexBridge's legal authority with Payoneer's financial infrastructure, we create an unmatched \"one-stop-shop\" solution.",
        benefits: [
            {
                icon: "🤝",
                title: "Referral Partnership",
                description: "Strengthen your value proposition by recommending Payoneer as the go-to financial solution."
            },
            {
                icon: "🚀",
                title: "Dedicated Onboarding",
                description: "A dedicated Payoneer team will provide a white-glove onboarding experience for all referred clients."
            },
            {
                icon: "📈",
                title: "Joint Marketing",
                description: "Co-author reports, host webinars, and create case studies to capture new market share."
            }
        ],
        ctaButton: "🚀 Let's Schedule a Follow-Up",
        ctaEmail: "partnerships@payoneer.com",
        ctaSubject: "LexBridge Partnership Inquiry"
    },

    // 📧 CONTACT & FOOTER TEXT
    contact: {
        email: "partnerships@payoneer.com",
        phone: "+1-555-123-4567", // Update with actual phone number
        address: "123 Business Street, New York, NY 10001", // Update with actual address
        businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
    },

    footer: {
        companyName: "Payoneer & LexBridge",
        tagline: "The ultimate strategic alliance for Brazilian market expansion",
        copyright: "© 2025 Payoneer Inc. All rights reserved.",
        disclaimer: "Conceptual strategic partnership proposal with LexBridge Legal.",
        socialLinks: {
            linkedin: "Connect with us on LinkedIn",
            twitter: "Follow us on Twitter",
            facebook: "Like us on Facebook",
            instagram: "Follow us on Instagram"
        }
    },

    // 🔗 NAVIGATION TEXT
    navigation: {
        market: "The Market",
        fintech: "Fintech Revolution",
        solution: "Our Solution",
        alliance: "The Alliance"
    },

    // 📱 MOBILE MENU TEXT
    mobile: {
        menuButton: "Menu",
        closeButton: "Close"
    },

    // 🎯 CALL-TO-ACTION TEXT
    cta: {
        discover: "Discover the Solution",
        learnMore: "Learn More",
        getStarted: "Get Started",
        contactUs: "Contact Us",
        scheduleCall: "Schedule a Call",
        downloadBrochure: "Download Brochure"
    },

    // 📊 CHART LABELS & TOOLTIPS
    charts: {
        pixGrowth: {
            title: "Pix Transactions Growth",
            yAxisLabel: "Transactions (Billions)",
            tooltipLabel: "Pix Transactions: {value} Billion"
        }
    },

    // ♿ ACCESSIBILITY TEXT
    accessibility: {
        skipToContent: "Skip to main content",
        navigationLabel: "Main navigation",
        contentLabel: "Main content",
        footerLabel: "Footer"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONTENT;
}
