# GetFitWithUthman — Coaching Landing Page

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Uthman-stack/Creating-landing-page&project-name=coaching-landing-page&repository-name=coaching-landing-page)

A single-page site for GetFitWithUthman, 1:1 online coaching for skinny guys who want to build muscle: application form → free discovery call booking.

## Files

- `index.html` — page content/structure
- `style.css` — styling (light/dark mode aware)
- `script.js` — form handling + footer year

## Customize before launch

1. **About section**: replace the placeholder bio paragraph with your real training background, experience, and any certifications or results.
2. **Testimonials**: replace placeholder quotes and names with real client results (get permission first).
3. **FAQ**: fill in real answers (program length, pricing, refund/guarantee policy, gym/equipment requirements, check-in format).
4. **Contact email**: update `hello@getfitwithuthman.com` in the footer to your real inbox.
5. **Photo**: swap `.about-photo` (currently a gradient placeholder) for a real `<img>` of you.

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
