# Explore Vidhya website

Educational Webite - PPT and PDF notes, important MCQs and a Telegram doubt group, all free to start. Made for students of Class 8 to 10.

A static, fully responsive course website. No build step and no server needed.

## Files

- `index.html` – page structure
- `style.css` – all styles (colours are CSS variables at the top)
- `script.js` – content and behaviour. **Edit the `CONFIG`, `COURSES`, `VIDEOS`, `REVIEWS` and `FAQ` blocks at the top.**

## What to change first

1. `CONFIG.channelUrl` and `CONFIG.latestUrl` – your YouTube channel and latest live class links.
2. `CONFIG.upiId` and `CONFIG.payee` – your UPI ID and name (the QR code is generated from these).
3. `CONFIG.gatewayLink` – optional Razorpay / Cashfree payment link for the card and net banking tab.
4. `CONFIG.whatsapp` – digits with country code, for example `919876543210`.
5. `CONFIG.bank` – your bank transfer details.
6. `COURSES` – course names, prices and descriptions. A price of `0` makes a free batch. The `classes` list (for example `[8]` or `[8,9,10]`) decides which class filter shows the course.
7. `REVIEWS` – replace the sample reviews with real ones, then set `showSampleTag` to `false`.
8. Replace the EV badge in `index.html` (the `<svg>` in the header and footer) with your logo image.
9. Add your photo to the hero: save a transparent PNG as `teacher.png` next to `index.html`, then set `CONFIG.teacherPhoto: 'teacher.png'` in `script.js`.

## Payments

The page does not process payments itself. Students pay by UPI, your payment link or bank transfer, then send the generated enrollment message with a screenshot on WhatsApp. You verify each payment manually. For automatic confirmation you need a payment gateway with a server.

## Hosting (free)

- **Netlify Drop:** open app.netlify.com/drop and drag this folder in.
- **GitHub Pages:** upload the three files to a repository and enable Pages in Settings.
- **Cloudflare Pages / Vercel:** import the folder as a static site.

## Notes

- Fonts load from Google Fonts and the QR code library from cdnjs, so the page needs an internet connection.
- YouTube videos open on YouTube in a new tab. To play them inside the page, replace a video card with a YouTube embed `<iframe>`.
