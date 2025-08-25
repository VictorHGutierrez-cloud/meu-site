# 🚀 **WEBSITE EDITING GUIDE FOR NON-TECHNICAL USERS**

## 📋 **Table of Contents**
1. [Quick Start Guide](#quick-start-guide)
2. [File Structure Explained](#file-structure-explained)
3. [How to Edit Text Content](#how-to-edit-text-content)
4. [How to Change Business Data](#how-to-change-business-data)
5. [How to Modify Colors & Styling](#how-to-modify-colors--styling)
6. [How to Add/Remove Sections](#how-to-addremove-sections)
7. [Common Editing Tasks](#common-editing-tasks)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 **Quick Start Guide**

### **What You Need to Know:**
- **NO coding knowledge required!** 🎉
- **Simple text editing** - like using Microsoft Word
- **Clear file names** that tell you exactly what they control
- **Safe editing** - you can't break the website structure

### **Your Main Files to Edit:**
1. **`content.js`** - All the text content (titles, descriptions, buttons)
2. **`config.js`** - Business data (numbers, contact info, company details)
3. **`enhanced-styles.css`** - Colors and visual appearance

---

## 📁 **File Structure Explained**

```
meu-site/
├── 📄 index.html              # Main website file (DON'T EDIT THIS)
├── 📄 content.js              # ✅ EDIT THIS: All text content
├── 📄 config.js               # ✅ EDIT THIS: Business data & settings
├── 📄 enhanced-styles.css     # ✅ EDIT THIS: Colors & styling
├── 📄 advanced-features.js    # Advanced features (don't edit unless needed)
├── 📁 sections/               # Website sections (edit individual files)
│   ├── 📄 hero-section.html      # Hero section content
│   ├── 📄 market-section.html    # Market statistics
│   ├── 📄 fintech-section.html   # Fintech chart section
│   ├── 📄 solutions-section.html # Solutions tabs
│   ├── 📄 alliance-section.html  # Partnership section
│   ├── 📄 footer-section.html    # Footer & contact info
│   └── 📄 navigation-section.html # Header navigation
└── 📄 README.md               # Technical documentation
```

---

## ✏️ **How to Edit Text Content**

### **File: `content.js`**

This file contains ALL the text on your website. Here's how to edit it:

#### **Example 1: Change the Main Title**
```javascript
// Find this line in content.js:
hero: {
    mainHeading: "Conquer \"Custo Brasil\"",  // ← Change this text
    
// Change it to:
hero: {
    mainHeading: "Your New Title Here",       // ← Your new title
```

#### **Example 2: Change Button Text**
```javascript
// Find this line:
primaryButton: "🚀 Discover the Solution",   // ← Change this text

// Change it to:
primaryButton: "🚀 Get Started Now",         // ← Your new button text
```

#### **Example 3: Change Company Description**
```javascript
// Find this line:
description: "Providing U.S. companies with an end-to-end legal & financial framework for seamless expansion into Brazil.",

// Change it to:
description: "Your new company description here.",
```

---

## 📊 **How to Change Business Data**

### **File: `config.js`**

This file contains all your business information and statistics.

#### **Example 1: Update Contact Information**
```javascript
// Find this section:
contact: {
    email: "partnerships@payoneer.com",      // ← Change this email
    phone: "+1-555-123-4567",               // ← Change this phone
    address: "123 Business Street, New York, NY 10001", // ← Change this address
},

// Update with your real information:
contact: {
    email: "your-email@company.com",         // ← Your real email
    phone: "+1-555-999-8888",               // ← Your real phone
    address: "Your Real Address Here",       // ← Your real address
},
```

#### **Example 2: Update Market Statistics**
```javascript
// Find this section:
statistics: {
    usCompaniesInterested: 65,               // ← Change this number
    establishedCompaniesExpanding: 89,       // ← Change this number
    brazilianCompaniesExporting: 9553,      // ← Change this number
},

// Update with new numbers:
statistics: {
    usCompaniesInterested: 75,               // ← New percentage
    establishedCompaniesExpanding: 92,       // ← New percentage
    brazilianCompaniesExporting: 10000,     // ← New number
},
```

#### **Example 3: Update Company Information**
```javascript
// Find this section:
company: {
    name: "Payoneer",                        // ← Change company name
    partner: "LexBridge",                    // ← Change partner name
    fullName: "Payoneer & LexBridge",        // ← Change full name
    tagline: "The Ultimate Brazilian Expansion Solution", // ← Change tagline
},

// Update with your company info:
company: {
    name: "Your Company",                    // ← Your company name
    partner: "Your Partner",                 // ← Your partner name
    fullName: "Your Company & Your Partner", // ← Your full company name
    tagline: "Your new tagline here",        // ← Your new tagline
},
```

---

## 🎨 **How to Modify Colors & Styling**

### **File: `enhanced-styles.css`**

This file controls all the colors and visual effects.

#### **Example 1: Change Brand Colors**
```css
/* Find this section: */
:root {
    --primary-gradient: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
    --secondary-gradient: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%);
    --accent-gradient: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
}

/* Change the colors to your brand colors: */
:root {
    --primary-gradient: linear-gradient(135deg, #FF0000 0%, #FF6666 50%, #FF9999 100%);    /* Red theme */
    --secondary-gradient: linear-gradient(135deg, #00FF00 0%, #66FF66 50%, #99FF99 100%);  /* Green theme */
    --accent-gradient: linear-gradient(135deg, #0000FF 0%, #6666FF 50%, #9999FF 100%);    /* Blue theme */
}
```

#### **Example 2: Change Background Colors**
```css
/* Find this line: */
.hero-gradient {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
}

/* Change it to your preferred colors: */
.hero-gradient {
    background: linear-gradient(135deg, #FF0000 0%, #FF6600 50%, #FFCC00 100%);  /* Red to Orange to Yellow */
}
```

---

## ➕ **How to Add/Remove Sections**

### **Adding a New Section:**

1. **Create a new file** in the `sections/` folder (e.g., `sections/new-section.html`)
2. **Add your content** using the same format as other sections
3. **Update `index.html`** to include your new section

#### **Example: Adding a Testimonials Section**
```html
<!-- Create: sections/testimonials-section.html -->
<section id="testimonials" class="py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <!-- Add your testimonials content here -->
    </div>
</section>
```

### **Removing a Section:**

1. **Delete the section file** from the `sections/` folder
2. **Remove the reference** from the sections array in `index.html`

---

## 🔧 **Common Editing Tasks**

### **Task 1: Change All Company Names**
1. Open `content.js`
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for "Payoneer" or "LexBridge"
4. Replace with your company names
5. Save the file

### **Task 2: Update Contact Information**
1. Open `config.js`
2. Find the `contact` section
3. Update email, phone, and address
4. Save the file

### **Task 3: Change Website Colors**
1. Open `enhanced-styles.css`
2. Find the `:root` section
3. Change the color codes (e.g., `#1e3a8a` to `#FF0000`)
4. Save the file

### **Task 4: Update Statistics**
1. Open `config.js`
2. Find the `statistics` section
3. Change the numbers to your new data
4. Save the file

---

## 🚨 **Troubleshooting**

### **Problem: Website looks broken after editing**
**Solution:** 
- Check that you saved the file with `.js` or `.css` extension
- Make sure you didn't delete any quotes `"` or commas `,`
- Refresh your browser page

### **Problem: Changes don't appear on the website**
**Solution:**
- Make sure you saved the file
- Refresh your browser (press `F5`)
- Clear browser cache (press `Ctrl+Shift+R`)

### **Problem: Can't find the text you want to change**
**Solution:**
- Use `Ctrl+F` to search in the file
- Look for similar words or phrases
- Check both `content.js` and `config.js`

### **Problem: Website won't load**
**Solution:**
- Check that all files are in the same folder
- Make sure file names match exactly (case-sensitive)
- Verify that `index.html` is the main file

---

## 💡 **Pro Tips for Non-Technical Users**

1. **Always make a backup** before making major changes
2. **Test small changes first** before making many changes at once
3. **Use the search function** (`Ctrl+F`) to find text quickly
4. **Save files frequently** while editing
5. **Refresh your browser** after each change to see results
6. **Don't delete quotes or commas** - they're important for the code to work

---

## 🆘 **Need Help?**

If you get stuck:
1. **Check this guide first** - most answers are here
2. **Look at the example files** - they show the correct format
3. **Make small changes** - easier to fix if something goes wrong
4. **Ask for help** - technical support can assist with complex changes

---

## 🎯 **Quick Reference: What Each File Controls**

| File | What It Controls | Safe to Edit? |
|------|------------------|----------------|
| `index.html` | Main structure | ❌ **NO** - Don't touch this |
| `content.js` | All text content | ✅ **YES** - Edit this for text changes |
| `config.js` | Business data & settings | ✅ **YES** - Edit this for data changes |
| `enhanced-styles.css` | Colors & visual effects | ✅ **YES** - Edit this for appearance |
| `sections/*.html` | Individual sections | ✅ **YES** - Edit these for section content |
| `advanced-features.js` | Interactive features | ❌ **NO** - Don't touch unless you know JavaScript |

---

**🚀 You're all set! Your website is now completely modular and easy to manage. Happy editing!**
