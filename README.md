# Gibye - Daily Motivation PWA

**Gibye** is a Progressive Web App (PWA) that delivers daily motivational quotes to inspire your day. With offline support, daily notifications, and a sleek, lightweight design, Gibye is your pocket-sized inspiration companion.

---

## Features

- Display a **new motivational quote** every day.
- **Non-repeating quotes** until the full list is shown.
- **Share quotes** via native share or copy to clipboard.
- **Daily notifications** at 9 AM (optional).
- **Offline support** with caching using Service Worker.
- **Installable** on Android, iOS, and desktops (PWA ready).
- Clean, responsive, and mobile-friendly UI.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FrancisOtieno-Hub/gibye.git
````

2. Open `index.html` in your browser.
3. To install as a PWA:

   * Chrome/Edge: Click "Add to Home Screen" or install prompt.
   * iOS Safari: Tap "Share" → "Add to Home Screen".

---

## Project Structure

```
/gibye/
│
├─ index.html          # Main HTML file
├─ manifest.json       # PWA manifest
├─ service-worker.js   # Service Worker for offline caching
├─ css/
│   └─ style.css       # Stylesheet
├─ js/
│   └─ app.js          # Application logic
└─ icons/
    ├─ icon-48.png
    ├─ icon-72.png
    ├─ icon-96.png
    ├─ icon-192.png
    ├─ icon-512.png
    └─ icon-1024.png
```

---

## How it Works

1. On first load, the app shows a **splash screen** and then the main quote content.
2. Quotes are **shuffled** and stored in `localStorage` to avoid repeats.
3. Clicking "Random Quote" shows the next non-repeating quote.
4. Daily notifications can be enabled to receive a new motivational quote each morning.
5. The app is **offline-ready** thanks to the Service Worker caching essential assets.

---

## Customization

* **Quotes**: Edit the `quotes` array in `js/app.js` to add your own quotes.
* **Notification Time**: Change `notificationTime.setHours(9,0,0,0)` in `app.js` to your preferred hour.
* **Theme**: Modify `css/style.css` for colors, fonts, or layout adjustments.

---

## Technologies Used

* HTML5, CSS3, JavaScript (ES6+)
* Progressive Web App (PWA)
* Service Worker for offline caching
* LocalStorage for quote management

---

## Contribution

Contributions are welcome! Please fork the repo and submit a pull request.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

© 2026 Francis Otieno

```

