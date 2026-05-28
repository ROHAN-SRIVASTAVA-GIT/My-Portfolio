# Portfolio Update Prompt — Rohan Srivastava
**Instructions for AI / Developer updating the portfolio codebase**

---

## CRITICAL RULES — READ BEFORE MAKING ANY CHANGE

1. **DO NOT change any colors, theme, design, layout, or visual styling** — every color variable, gradient, animation, and CSS class stays exactly as-is.
2. **DO NOT change any images** — `bgfavi.png`, `GIFabout.gif`, and all other image files remain untouched.
3. **DO NOT change any social links** — GitHub, LinkedIn, LeetCode, HackerRank URLs are already correct.
4. **DO NOT restructure any sections** — all section IDs (`#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`) stay identical.
5. **ONLY update text content, data values, and skill entries** as specified below.
6. Apply every change listed below — do not skip any.

---

## CHANGE 1 — HERO SECTION

**File/Section:** Hero / landing section (the first screen with name and subtitle)

### 1a. Update subtitle/tagline text
**FIND:**
```
Software Engineer, Full-Stack Developer, Backend Developer
```
**REPLACE WITH:**
```
Full Stack Developer | Backend Engineer | Java | React.js | Spring Boot
```

### 1b. Update the short description paragraph under the name
**FIND:**
```
Software Engineer specializing in Full-Stack & Backend Development. Deputed to Deloitte as SDA at
 Centroxy Solutions, delivering enterprise solutions across React.js, Spring Boot, FastAPI, and PostgreSQL.
```
**REPLACE WITH:**
```
Full Stack Developer and Backend Engineer with 2+ years of enterprise experience. Deputed to Deloitte as Software Development Associate at Centroxy Solutions, delivering production-grade applications across Java, Spring Boot, React.js, and PostgreSQL.
```

### 1c. Update the CV Download link
**FIND:**
```
https://drive.google.com/file/d/1J34XAGVi2XxOCY4935ERlfHfBLYWiM61/view
```
**REPLACE WITH:**
```
https://drive.google.com/file/d/1sYEj_-M3yBgdTriHP7iKbQYgqrez-tws/view?usp=drive_link
```

---

## CHANGE 2 — ABOUT SECTION

**File/Section:** About Me section (`#about`)

### 2a. Update the main About description paragraph
**FIND:**
```
Software Engineer at Centroxy Solutions, deputed to Deloitte as SDA, with expertise in Full-Stack & Backend Development.
 Delivered 4+ enterprise full-stack features, cutting feature cycle time by 30% across concurrent project tracks.

Specialized in React.js, Spring Boot, FastAPI, and PostgreSQL. Engineered React.js + Redux UI components,
 boosting page load speed by 25% and cutting re-render cycles by 40%. Slashed PostgreSQL query execution time by 40%.
```
**REPLACE WITH:**
```
Full Stack Developer and Backend Engineer at Centroxy Solutions, deputed to Deloitte as Software Development Associate. Delivered 4 production-grade enterprise applications across telecom, energy, and regulatory domains, driving measurable performance gains of 25–45%.

Specialized in Java, Spring Boot, React.js, Redux, Angular, and PostgreSQL. Engineered REST APIs handling 10,000+ daily transactions, optimized PostgreSQL queries by 40%, and built React.js components improving page load speed by 25%.
```

### 2b. Update the Education card inside About
**FIND:**
```
B.Tech in CSE  
XIM University, Bhubaneswar | 2024
```
**REPLACE WITH:**
```
B.Tech in CSE — CGPA: 8.51 / 10
XIM University, Bhubaneswar | 2020 – 2024
```

### 2c. Update the Current Role card inside About
**FIND:**
```
Software Engineer  
Centroxy Solutions | Deloitte SDA (Jun 2024 - Present)
```
**REPLACE WITH:**
```
Software Engineer
Centroxy Solutions | Client: Deloitte (Jun 2024 – Present)
```

---

## CHANGE 3 — SKILLS SECTION

**File/Section:** Skills section (`#skills`)

### 3a. Update Languages subsection — remove PHP, add TypeScript
**FIND:**
```
Python, C++, PHP 80%
```
**REPLACE WITH:**
```
TypeScript, C++, Python 82%
```

### 3b. Add new skill category — Testing / Tools (add after the existing Backend & APIs category)
**ADD this new skill group in the same format as existing groups:**
```
Testing / Tools
JUnit, Postman, Swagger 88%
Unit Testing, Sentry, Log4J 85%
pgAdmin, IntelliJ IDEA, VS Code 90%
```

### 3c. Update Technologies tag cloud — remove PHP, add TypeScript and Unit Testing
In the floating/scrolling technologies tag section:
- **REMOVE tag:** `PHP` (if present)
- **ADD tags:** `TypeScript`, `Unit Testing`, `Redux`, `Angular` (if not already present)

---

## CHANGE 4 — EXPERIENCE SECTION

**File/Section:** Experience & Education timeline (`#experience`)

### 4a. Update the work experience role title
**FIND:**
```
Software Engineer | Deloitte SDA
```
**REPLACE WITH:**
```
Software Engineer | Client: Deloitte (Software Development Associate)
```

### 4b. Update the work experience description — replace entire content block
**FIND the entire content block under the Centroxy experience entry** (the block with emoji headings 🚀⚡🎨🔄) **and REPLACE WITH:**

```
🚀 Enterprise Full-Stack Development:
Delivered 4 production-grade enterprise applications across telecom, energy, and regulatory domains, cutting feature cycle time by 30% across concurrent project tracks.

⚡ High-Performance API Design:
Engineered REST APIs handling 10,000+ daily transactions with secure, high-throughput data pipelines and 90%+ backend test coverage across 3 critical service modules.

🎨 Frontend Optimization:
Architected React.js and Redux UI components improving page load speed by 25% and reducing re-render cycles by 40% through targeted performance optimization.

🔄 DevOps & CI/CD Excellence:
Streamlined Jenkins CI/CD pipelines and OpenShift deployments, reducing release cycle time by 20%. Collaborated with Deloitte teams across 3 countries in Agile Scrum sprints.
```

### 4c. Add two new project entries inside the Experience timeline (after the main Centroxy entry, before Education)

**ADD Entry 1:**
```
Timeline label: Jun 2024 – Present
Badge: Frontend
Title: National RCO Portal
Subtitle: Frontend Developer | Client: Deloitte

Content:
🏛️ Regulatory Compliance Platform:
Built scalable React.js and Redux components for a national regulatory compliance and operations management system serving 10,000+ daily active users across 15+ application modules.

⚡ Performance Engineering:
Engineered reusable UI components using React Hooks, reducing feature development time by 30%. Improved page load speed by 25% and reduced re-render cycles by 40%.

🔗 API Integration:
Integrated REST APIs using Redux middleware for asynchronous data flow and centralized state management across 15+ modules.

Metrics: 10,000+ Users  |  15+ Modules  |  30% Faster Dev

Tags: React.js  Redux  JavaScript ES6+  REST API  Bootstrap  Git
```

**ADD Entry 2:**
```
Timeline label: Jun 2024 – Present
Badge: Frontend
Title: MSERC RPO Portal
Subtitle: Frontend Developer | Client: Deloitte

Content:
⚡ Renewable Energy Compliance:
Built real-time compliance dashboards with Recharts for Maharashtra State Electricity Regulatory Commission's Renewable Purchase Obligation portal — monitoring renewable energy compliance for distribution companies.

📊 Data Visualization:
Designed dynamic Recharts dashboards for real-time compliance monitoring, reducing data entry errors by 60% through comprehensive client-side validation.

🚀 Performance Optimization:
Applied code-splitting and lazy loading strategies, cutting initial bundle load time by 35%. Maintained 95%+ code coverage throughout the project.

Metrics: 35% Faster Load  |  60% Fewer Errors  |  95%+ Coverage

Tags: React.js  Redux  Recharts  JavaScript ES6+  REST API  Git
```

### 4d. Update Education CGPA value
**FIND:**
```
CGPA Throughout Academic Journey
```
*(This is likely a counter or stat label with no value showing)*

**REPLACE WITH / UPDATE the CGPA display to show:**
```
8.51 / 10  CGPA
```

---

## CHANGE 5 — PROJECTS SECTION

**File/Section:** Projects section (`#projects`)

### 5a. Add Project 1 — National RCO Portal (add as first project card, before Airtel-Vodafone)

**ADD new project card:**
```
Badge/Category: Frontend

Title: National RCO Portal

Description block 1 — 🏛️ Regulatory Compliance Platform:
Built scalable React.js and Redux components for a national regulatory compliance and operations management system. Served 10,000+ daily active users across 15+ application modules with seamless navigation and real-time data.

Description block 2 — ⚡ React Performance Engineering:
Engineered reusable UI components using React Hooks, reducing feature development time by 30%. Achieved 25% page load improvement and 40% reduction in re-render cycles through targeted React optimization.

Description block 3 — 🔗 REST API Integration:
Integrated REST APIs using Redux middleware for asynchronous data flow and centralized application state management across 15+ modules. Implemented React Router for seamless multi-module navigation.

Stats: 10,000+ Users  |  30% Faster Dev  |  15+ Modules

Tags: React.js  Redux  JavaScript ES6+  REST API  Bootstrap  Git
```

### 5b. Add Project 2 — MSERC RPO Portal (add as second project card, after National RCO Portal)

**ADD new project card:**
```
Badge/Category: Frontend

Title: MSERC RPO Portal

Description block 1 — ⚡ Renewable Energy Compliance:
Built the Maharashtra State Electricity Regulatory Commission Renewable Purchase Obligation Portal — a regulatory platform for managing renewable energy compliance and reporting for distribution companies across Maharashtra.

Description block 2 — 📊 Real-Time Data Visualization:
Designed and launched real-time compliance dashboards with Recharts for renewable energy monitoring. Built complex form interfaces with client-side validation, reducing data entry errors by 60%.

Description block 3 — 🚀 Frontend Performance:
Applied code-splitting and lazy loading strategies, cutting initial bundle load time by 35%. Maintained 95%+ code coverage through comprehensive unit testing with React Testing Library.

Stats: 35% Faster Load  |  60% Fewer Errors  |  95%+ Coverage

Tags: React.js  Redux  Recharts  JavaScript ES6+  REST API  Git
```

### 5c. No changes needed to existing project cards:
- Airtel-Vodafone UK — keep as-is ✓
- SMRD Tata Power — keep as-is ✓
- Nirapad Udaan — keep as-is ✓
- AI Facial Recommendation Engine — keep as-is ✓

---

## CHANGE 6 — ACHIEVEMENTS / CERTIFICATIONS SECTION

**File/Section:** Achievements / Recognition section (`#achievements` or similar)

### 6a. Fix incorrect certification — Databases & SQL
**FIND:**
```
Databases & SQL for Data Science
Pearson Certified - Databases & SQL for Data Science. Oracle Authorized (ULSA).
Cert ID: 9SB69PLIF0FX
```
**REPLACE WITH:**
```
Databases & SQL for Data Science
IBM — Databases & SQL for Data Science certification.
```
*(Remove the wrong Cert ID — this cert has no public credential ID to display)*

### 6b. Fix Java SE 17 cert — move Cert ID to correct entry
The cert ID `9SB69PLIF0FX` belongs to the Java SE 17 cert. Verify it appears on the Java SE 17 entry:
**Ensure the Java SE 17 Developer entry reads:**
```
Oracle Certified Java SE 17 Developer
Oracle Certified Professional Java SE 17 Developer (1Z0-829). Validates advanced Java programming skills including generics, streams, concurrency, and modern Java features.
Cert ID: 9SB69PLIF0FX  |  Issued: Mar 2026
```

### 6c. Add missing certification — Oracle Java Foundations
**ADD new achievement/cert card:**
```
Title: Oracle Java Foundations
Body: Oracle Java Foundations certification — Oracle Authorized (ULSA). Validates core Java programming fundamentals and object-oriented concepts.
Cert ID: OGDV48H4DJFT  |  Issued: Mar 2026
```

### 6d. Fix AWS certification — remove incorrect "IBM" label
**FIND:**
```
AWS Cloud Practitioner Essentials
IBM Amazon Web Services AWS Cloud Practitioner Essentials certification. Self-taught Spring Boot, AWS & Angular within 6 months on the job.
```
**REPLACE WITH:**
```
AWS Cloud Practitioner Essentials
Amazon Web Services — AWS Cloud Practitioner Essentials certification. Covers core AWS services, cloud concepts, security, and pricing fundamentals.
```

### 6e. Add missing certifications (add as additional cards in the same style):

**ADD card:**
```
Title: Object-Oriented Programming in Java
Body: Coursera — Object-Oriented Programming in Java. Covers OOP principles, inheritance, polymorphism, and design patterns in Java.
```

**ADD card:**
```
Title: Responsive Web Design
Body: freeCodeCamp — Responsive Web Design certification. Covers HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.
```

---

## CHANGE 7 — FOOTER

**File/Section:** Footer section

### 7a. Verify footer subtitle is updated
**FIND:**
```
Software Engineer | Full-Stack & Backend Development
```
**REPLACE WITH (if not already matching):**
```
Full Stack Developer | Backend Engineer | Java | React.js | Spring Boot
```

---

## SUMMARY OF ALL CHANGES

| # | Section | Change Type | Priority |
|---|---------|-------------|----------|
| 1a | Hero | Update subtitle/tagline | High |
| 1b | Hero | Update description paragraph | High |
| 1c | Hero | Update CV download link | High |
| 2a | About | Update main description paragraph | High |
| 2b | About | Add CGPA 8.51 / 10 to education card | High |
| 2c | About | Update role title in current role card | Medium |
| 3a | Skills | Remove PHP, add TypeScript | High |
| 3b | Skills | Add Testing / Tools skill category | Medium |
| 3c | Skills | Update tech tag cloud | Low |
| 4a | Experience | Update role title | High |
| 4b | Experience | Update experience description | High |
| 4c | Experience | Add 2 new project timeline entries | High |
| 4d | Experience | Show CGPA 8.51 / 10 value | High |
| 5a | Projects | Add National RCO Portal card | High |
| 5b | Projects | Add MSERC RPO Portal card | High |
| 6a | Achievements | Fix wrong Databases & SQL cert issuer (IBM not Pearson) | High |
| 6b | Achievements | Verify Java cert ID on correct entry | High |
| 6c | Achievements | Add Oracle Java Foundations cert | Medium |
| 6d | Achievements | Fix AWS cert — remove IBM label | High |
| 6e | Achievements | Add OOP in Java (Coursera) and Responsive Web Design (freeCodeCamp) | Medium |
| 7a | Footer | Update subtitle | Low |

**Total: 21 changes across 6 sections.**

---

## DATA REFERENCE — Source of Truth

All data below is verified from the final resume (v4). Use this as the single source of truth.

### Personal
- Name: Rohan Srivastava
- Title: Full Stack Developer | Backend Engineer
- Email: srivastavarohan3125@gmail.com
- Phone: +91-7903994736
- Location: Bhubaneswar, India | Open to Relocation
- LinkedIn: https://www.linkedin.com/in/rohan3125/
- GitHub: https://github.com/ROHAN-SRIVASTAVA-GIT
- LeetCode: https://leetcode.com/codethecoding25/
- Resume: https://drive.google.com/file/d/1sYEj_-M3yBgdTriHP7iKbQYgqrez-tws/view?usp=drive_link

### Education
- Degree: Bachelor of Technology — Computer Science and Engineering
- University: XIM University, Bhubaneswar, India
- Year: 2020 – 2024
- CGPA: 8.51 / 10

### Experience
- Employer: Centroxy Solutions Pvt Ltd
- Location: Bhubaneswar, India
- Duration: Jun 2024 – Present
- Title: Software Engineer | Client: Deloitte (Software Development Associate)
- Projects: 4 enterprise projects

### Projects (Enterprise)
1. National RCO Portal — Frontend Developer | Client: Deloitte | React.js, Redux, JS ES6+, REST API, Bootstrap, Git
2. MSERC RPO Portal — Frontend Developer | Client: Deloitte | React.js, Redux, Recharts, JS ES6+, REST API, Git
3. SMRD Tata Power Billing System — Full Stack Developer | Java, Spring Boot, Angular, PostgreSQL, AWS, Sentry, CI/CD
4. Airtel-Vodafone UK Telecom Portal — Backend Developer | Java 11, Spring Boot, Microservices, Oracle, Aerospike, OpenShift, Jenkins

### Projects (Academic)
5. Nirapad Udaan — IoT, GIS, Embedded Systems
6. AI Facial Recommendation Engine — Python, ML, Computer Vision, Flask | 3rd Place GEEK-O-THON 2023

### Skills (Updated — No PHP)
- Languages: Java (SE 17), JavaScript (ES6+), TypeScript, C++, Python
- Frontend: React.js (Redux, Hooks, Router), Angular, HTML5, CSS3, Bootstrap, Recharts
- Backend / APIs: Spring Boot, Node.js, Express.js, FastAPI, REST API, Microservices
- Databases: PostgreSQL, MySQL, Oracle, MongoDB, Aerospike
- Cloud / DevOps: AWS (EC2, S3), OpenShift, Docker, Jenkins, CI/CD, Maven, GitHub Actions
- Testing / Tools: JUnit, Postman, Swagger, Unit Testing, Sentry, Log4J, Prometheus, pgAdmin

### Certifications (Complete & Correct)
1. Java SE 17 Developer (1Z0-829) — Oracle / Pearson VUE — Mar 2026 — ID: 9SB69PLIF0FX
2. Oracle Java Foundations — Oracle Authorized (ULSA) — Mar 2026 — ID: OGDV48H4DJFT
3. Object-Oriented Programming in Java — Coursera
4. Databases and SQL for Data Science — IBM
5. AWS Cloud Practitioner Essentials — Amazon Web Services
6. Responsive Web Design — freeCodeCamp

### Key Metrics (for counters / stats)
- Enterprise projects: 4
- Performance gains: 25–45%
- Daily transactions (API): 10,000+
- Active sessions (telecom): 500,000+
- Page load improvement: 25%
- Re-render reduction: 40%
- Query optimization: 40%
- API latency reduction: 35%
- DB read offload: 60%
- Report generation improvement: 45%
- Data entry error reduction: 60–70%
- Code coverage: 90%+
- Bundle load reduction: 35%
- Release cycle reduction: 20%
- MTTR improvement: 4 hrs → 45 min
