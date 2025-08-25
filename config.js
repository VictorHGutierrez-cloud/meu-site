// 🎯 CONFIGURATION FILE - EASY TO EDIT BUSINESS INFORMATION
// This file contains all the business data that can be easily changed

const SITE_CONFIG = {
    // 🏢 COMPANY INFORMATION
    company: {
        name: "Payoneer",
        partner: "LexBridge",
        fullName: "Payoneer & LexBridge",
        tagline: "The Ultimate Brazilian Expansion Solution"
    },

    // 📧 CONTACT INFORMATION
    contact: {
        email: "partnerships@payoneer.com",
        subject: "LexBridge Partnership Inquiry",
        phone: "+1-555-123-4567", // Add your actual phone number
        address: "123 Business Street, New York, NY 10001" // Add your actual address
    },

    // 📊 MARKET STATISTICS - EASY TO UPDATE NUMBERS
    statistics: {
        usCompaniesInterested: 65, // Percentage of U.S. companies interested in Brazil
        establishedCompaniesExpanding: 89, // Percentage of established companies expanding
        brazilianCompaniesExporting: 9553, // Number of Brazilian companies exporting to U.S.
        pixGrowthPercentage: 53, // Pix growth percentage in 2024
        pixTransactions2023: 41.8, // Pix transactions in 2023 (billions)
        pixTransactions2024: 64 // Pix transactions in 2024 (billions)
    },

    // 🎨 BRAND COLORS - EASY TO CHANGE COMPANY COLORS
    colors: {
        primary: "#1e3a8a", // Deep Blue - Trust, professionalism
        secondary: "#f59e0b", // Gold - Success, premium quality
        accent: "#10b981", // Green - Growth, positive outcomes
        dark: "#0f172a", // Dark text
        light: "#f8fafc" // Light background
    },

    // 🚀 HERO SECTION - MAIN MESSAGE
    hero: {
        mainTitle: "Conquer \"Custo Brasil\"",
        subtitle: "With Sigma-Level Partnership",
        description: "Providing U.S. companies with an end-to-end legal & financial framework for seamless expansion into Brazil.",
        primaryButton: "🚀 Discover the Solution",
        secondaryButton: "🤝 Join the Alliance"
    },

    // 📈 MARKET SECTION - BRAZILIAN MARKET INFORMATION
    market: {
        title: "Brazilian Market: High Potential, High Complexity",
        description: "Brazil presents massive opportunity, but navigating the \"Custo Brasil\" demands integrated operational infrastructure.",
        stats: [
            {
                number: "usCompaniesInterested", // References the statistics above
                label: "% of U.S. Companies",
                description: "without presence in Brazil willing to start operations."
            },
            {
                number: "establishedCompaniesExpanding",
                label: "% of Established U.S. Companies", 
                description: "plan to expand existing operations in Brazil."
            },
            {
                number: "brazilianCompaniesExporting",
                label: "Brazilian Companies",
                description: "exported to the U.S., record trade relations."
            }
        ]
    },

    // 💰 FINTECH SECTION - PIX GROWTH INFORMATION
    fintech: {
        title: "The Fintech Revolution: Pix Growth",
        description: "Modern, instant payment infrastructure is essential for success in Brazil.",
        chartData: {
            labels: ["2023 Transactions", "2024 Transactions (Est.)"],
            data: ["pixTransactions2023", "pixTransactions2024"] // References statistics above
        },
        footnote: "Pix transactions grew 53% in 2024, primary payment rail in Brazil."
    },

    // 🏛️ SOLUTIONS SECTION - SERVICE OFFERINGS
    solutions: {
        title: "Integrated Solutions for Core Pain Points",
        description: "LexBridge-Payoneer alliance tackles critical U.S. company challenges in Brazil.",
        tabs: [
            {
                id: "compliance",
                label: "🏛️ Compliance & Labor",
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
            {
                id: "fx",
                label: "💰 FX & Payments",
                title: "Eliminating FX Costs and Volatility",
                comparisons: [
                    { criterion: "Speed", traditional: "Days or weeks", payoneer: "Seconds to minutes" },
                    { criterion: "Cost", traditional: "High fees & hidden costs", payoneer: "Low, competitive rates" },
                    { criterion: "Transparency", traditional: "Unpredictable rates, no visibility", payoneer: "Full transparency, no hidden fees" },
                    { criterion: "Complexity", traditional: "Manual process, multiple banks", payoneer: "Simplified, automated platform" }
                ]
            },
            {
                id: "onboarding",
                label: "🚀 Onboarding & Scale",
                title: "Simplifying Onboarding to Scale with Ease",
                comparisons: [
                    { action: "Legal Entity Creation", traditional: "Months-long, high-cost process", payoneer: "Not required; Payoneer acts as Employer of Record (EOR)" },
                    { action: "Employment Contracts", traditional: "Requires local legal counsel, high risk & bureaucracy", payoneer: "Uses localized, compliant contracts via the platform" },
                    { action: "Payroll & Payments", traditional: "Complex, manual, multi-currency process", payoneer: "Simplified, multi-currency payroll from a single dashboard" }
                ]
            }
        ]
    },

    // 🤝 ALLIANCE SECTION - PARTNERSHIP BENEFITS
    alliance: {
        title: "The Partnership Opportunity: A Unified Value Proposition",
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
        ctaButton: "🚀 Let's Schedule a Follow-Up"
    },

    // 📱 SOCIAL MEDIA & EXTERNAL LINKS
    social: {
        linkedin: "https://linkedin.com/company/payoneer",
        twitter: "https://twitter.com/payoneer",
        facebook: "https://facebook.com/payoneer",
        instagram: "https://instagram.com/payoneer"
    },

    // 🔧 TECHNICAL SETTINGS
    technical: {
        enableAnimations: true,
        enableParticles: true,
        enableCharts: true,
        mobileOptimized: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
