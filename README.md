# 1:1 Coaching Landing Page

A single-page site for attracting coaching clients: application form → free discovery call booking.

## Files

- `index.html` — page content/structure
- `style.css` — styling (light/dark mode aware)
- `script.js` — form handling + footer year

## Customize before launch

1. **Branding**: replace `YOUR NAME` in the header/footer and the page `<title>`.
2. **Hero copy**: edit the headline, subheading, and eyebrow text in the `.hero` section.
3. **About section**: replace the placeholder bio, and swap `.about-photo` for a real `<img>`.
4. **Testimonials**: replace placeholder quotes and names with real client results (get permission first).
5. **FAQ**: fill in real answers (program length, pricing, refund policy, session format).
6. **Contact email**: update `you@example.com` in the footer.

## Connect the application form

The form in `#apply-form` currently just shows a success message locally — it does **not** send data anywhere yet. Pick one:

- **Formspree / Getform / Basin**: create a form endpoint, set `<form action="https://formspree.io/f/xxxxx" method="POST">`, and remove the `e.preventDefault()` in `script.js` (or handle their JS response for an inline success message).
- **Netlify Forms**: if deploying on Netlify, add `data-netlify="true"` and a hidden `form-name` input to the `<form>` tag — Netlify handles the rest.
- **Your own backend**: `fetch()` the form data to your API in `script.js`.

## Connect real call booking

Replace the placeholder in the `#booking` section with your scheduling tool's embed code, e.g. Calendly:

```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-username/discovery-call" style="min-width:320px;height:700px;"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

Also update the fallback link `https://calendly.com/your-link` to your real booking URL.

## Deploy

Any static host works, e.g.:

- **GitHub Pages**: push this repo, enable Pages on the branch/`main`, root folder.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo — no build step needed.
