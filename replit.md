# SPARK by WECE

## Overview
A static HTML/CSS/JS website for "SPARK by WECE". It includes pages for About Us, Lessons, a Store (shop), Login/Signup, and a Character page.

## Project Architecture
- **Type**: Static website (HTML, CSS, JavaScript)
- **No build system or package manager** — plain files served directly
- **Server**: Python's built-in HTTP server (`python -m http.server`) on port 5000

## Key Files
- `index.html` — Landing page
- `home.html` — Main home page
- `aboutus.html` — About Us page
- `lessons.html` — Lessons page
- `ShopPage.html` — Store/shop page
- `login.html` / `signup.html` / `signup_login.html` — Auth pages
- `CharacterPage.html` — Character page
- `style.css` / `shopStyle.css` / `characterPageStyle.css` — Stylesheets
- `script.js` — Main JavaScript

## Running
The site is served via `python -m http.server 5000 --bind 0.0.0.0`.

## Deployment
Configured as a static site deployment serving from the root directory.
