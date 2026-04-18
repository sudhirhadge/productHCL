Credit Card Application MVP – README

mainApproach

We kept things simple and focused on showing the full flow end-to-end.

User can:
Apply for a credit card
System checks basic rules (age, duplicate application)
User can track status using application ID

Admin can : 
See All credit card applicants
See Credit score is fetched (mock) 
Decision is made (approve/reject)
Credit limit is calculated


We avoided backend and used mock data so we could finish everything in 2–3 hours and still have a working demo.

---

Architecture

We divided the app into small clear parts:

UI (app/) → pages and user interaction
Business logic (lib/) → all rules like age check, limit calculation
Services → mock credit score API
Store → in-memory data (acts like database)

This way:

UI stays clean and consistent
Rules are easy to change
Later we can plug in real backend without changing UI

---

Performance

No extra libraries used
Very small components → fast rendering
No heavy state management
Simple navigation
Since everything is lightweight, the app runs fast and is easy to scale later.

---

Security

For hackathon:

Basic validation on frontend
Mock JWT stored locally

In real system:

JWT should be in HTTP-only cookies
All validations must be on backend
PAN data should be encrypted
Add rate limiting and logging

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
