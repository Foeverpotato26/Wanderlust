# 🌍 Wanderlust

**Wanderlust** is a responsive travel website with a destination gallery and a flight booking form, built with plain HTML, CSS and JavaScript.

> ⚠️ **Demonstration project.** No real flight is booked and no payment is taken. The form validates your input and shows a summary only. A real booking system would need an airline API and a payment service.

🔗 **Live demo:** `https://foeverpotato26.github.io/Wanderlust/` 

## Features

- **Home page:** hero section, destination search, popular destinations, special offers, "Why Wanderlust", testimonials and FAQ.
- **Destinations page:** photo cards with country, estimated price and best time to visit; category filters (cities, beaches, mountains, luxury); keyword search; details window with a link to book.
- **Flight booking form:**
  - personal details, departure and arrival cities (with country), airline, one-way or round-trip, class, passengers, baggage and special requests;
  - live validation: different cities, return date after departure, valid phone number, no past dates;
  - confirmation message that clearly states it is a demo.
- **Responsive design:** works on desktop, tablet and mobile, with a hamburger menu.
- **Accessibility:** labelled form fields, visible keyboard focus, reduced-motion support.

## Project structure

```
wanderlust/
├── index.html        Home page
├── categories.html   Destinations gallery
├── booking.html      Flight booking form
├── styles.css        All styles
├── script.js         Menu, destinations, search, dialog and form logic
└── README.md
```

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a browser, **or** use the *Live Server* extension in VS Code.

No installation or build step is needed.

## Deploy with GitHub Pages

1. Go to **Settings → Pages**.
2. Choose **Deploy from a branch**, then `main` and `/ (root)`, and click **Save**.
3. Your site appears after a minute or two.

## Customize

- **Add or edit destinations:** change the `DEST` list at the top of `script.js` (name, country, category, image, price, best period, description).
- **Add a city to the booking form:** add it to the `PAYS` list in `script.js` and to both city menus in `booking.html`.
- **Change the colors:** edit the variables at the top of `styles.css` (`--ink`, `--sea`, `--sun`, `--mist`).
- **Footer contact details:** edit the footer text in `script.js` (email, phone and social links are placeholders).

## Known limitations

- Prices, offers and testimonials are fictional examples.
- Form data is not saved or sent anywhere.
- The header and footer are inserted by JavaScript, so they do not appear if JavaScript is disabled.
- Images are loaded from Unsplash and need an internet connection. If one fails, a gradient is shown instead.

## Ideas for the future

- Hotels and travel packages pages
- A dedicated About and Contact page
- A real flight search through an airline or flight-data API
- English and French language switch

## Credits

- Photos: [Unsplash](https://unsplash.com)
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts

## Author

Created by GHARRAD Khalil as a web development project.
