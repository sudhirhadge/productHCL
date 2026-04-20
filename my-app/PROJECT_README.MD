Credit Card Application MVP – README

mainApproach

We kept things simple and focused on showing the full flow end-to-end.

User can:
 Apply for a credit card
System checks basic rules (age, duplicate application)
User can track status using application ID

    1. Landing page -
         name of the bank with a welcome message and Apply button
    2. Form to be filled by user having inputs:
          -> Full Name, Email, Address
          ->  Mobile - verification with get otp button
          -> Date of birth- inline verification of 18 years when user will select date
          -> pancard
          ->  Profession (drop down)
                     1. Salaried
                             occupation, salary, company name
 
              2. Self occupied
                             company name, net profit
    3. User will be checked if he has applied for in last 6 months
       YES : A screen with a message will show and contact admin
       NO : Thank you Screen with application submitted message with application ID.


Admin can : 
See All credit card applicants
See Credit score is fetched (mock) 
Decision is made (approve/reject)
Credit limit is calculated


We avoided backend and used mock data so we could finish everything in 2–3 hours and still have a working demo.


---------------  Non Functional  ----------------
1. Architecture

We divided the app into small clear parts:

UI (app/) → pages and user interaction
Business logic (lib/) → all rules like age check, limit calculation
Services → mock credit score API
Store → in-memory data (acts like database)

This way:

UI stays clean and consistent
Rules are easy to change
Later we can plug in real backend without changing UI

2. Performance

No extra libraries used
Very small components → fast rendering
No heavy state management
Simple navigation
Since everything is lightweight, the app runs fast and is easy to scale later.
Minify files, enable compression, and use lazy loading for assets.

3. Security

For hackathon:

Basic validation on frontend
Mock JWT stored locally

In real system:

JWT should be in HTTP-only cookies
All validations must be on backend
PAN data should be encrypted
Add rate limiting and logging
Implementation of Content Security Policy (CSP) to prevent XSS attacks

4. Reliability
Graceful handling of API errors (e.g., showing user-friendly messages instead of breaking).
Auto-retry when token expires


5. Maintainability & Scalability
Modular code structure (using components) and consistent coding standards.
Documentation for codebase maintainability.
Code splitting to improve performance as the application grow.

6. Accessibility
Proper semantic HTML, screen reader support, and keyboard navigability.
---

Team Work (3 Members)

Sudhir

Setup project
Routing and navigation
Login /Landing (mock JWT)
Application form
status tracking
Input handling


Parul
User can track status using application ID
Error Handling
Age validation
Passing data to next screen
Failure/Screen 

Rishikesh
Business rules
Credit score mock
Approval logic
Result screen (Admin)

---

Summary

We focused on:

Simple UI
Clear business logic
Working demo

Main goal was to show how the system works, not to overbuild.
