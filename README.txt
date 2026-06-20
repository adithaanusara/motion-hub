VELOCITY MOTORS — CAR SALES WEBSITE
====================================

HOW TO RUN
1. Open the folder.
2. Double-click index.html.
3. For best results, open with VS Code Live Server.

HOW TO ADD YOUR OWN CAR IMAGES
1. Put your PNG/JPG/WebP files inside: assets/cars/
2. Open script.js.
3. Find the "cars" array at the top.
4. Change each image path, example:
   image: "assets/cars/toyota-chr.png"
5. Recommended: transparent-background PNG, around 1600×900 px.

HOW TO CHANGE DETAILS
Edit brand, model, price, year, mileage, fuel, tagline, and category in script.js.

HERO AUTO SLIDER
- Automatically changes every 5.2 seconds.
- Left/right arrow controls included.
- Thumbnail selectors included.
- To change timing, edit: const autoDelay = 5200;

CONTACT FORM
The included form is a front-end demo. Connect it to EmailJS, Formspree,
WhatsApp, Supabase, Firebase, or your own backend to receive real submissions.

FILES
index.html   — website structure
styles.css   — full responsive styling and animations
script.js    — car data, hero slider, filters, finance calculator, interactions
assets/cars  — replaceable sample car images
reference-design.png — the image you uploaded, kept only as a design reference
