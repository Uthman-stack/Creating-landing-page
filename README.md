# 1:1 Coaching Landing Page

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Uthman-stack/Creating-landing-page&project-name=coaching-landing-page&repository-name=coaching-landing-page)

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

## Call booking

The `#booking` section is already wired to a live Calendly inline widget pointing at:

```
https://calendly.com/uthmanayomide43/30min
```

If you ever change your Calendly event link, update the `data-url` on the `.calendly-inline-widget` div in `index.html` (and the fallback `<a>` link right below it in the `<noscript>` block) to match.

## Deploy

### Vercel (recommended)

Click the **Deploy with Vercel** button at the top of this README, or:

1. Go to [vercel.com/new](https://vercel.com/new) and import `Uthman-stack/Creating-landing-page`.
2. Leave all build settings as-is — this is a static site, no framework/build step needed.
3. Click **Deploy**. Vercel gives you a live URL immediately, and redeploys automatically on every push to `main`.

### Other static hosts

- **GitHub Pages**: push this repo, enable Pages on the branch/`main`, root folder.
- **Netlify**: drag-and-drop the folder or connect the repo — no build step needed.
