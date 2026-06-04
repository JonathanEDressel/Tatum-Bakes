# TatumBakes 🧁

A single-page website for **TatumBakes** — a homemade holiday bakeshop
([tatumbakes.com](https://tatumbakes.com)).

Built as one self-contained `index.html` for simple Netlify hosting:

- **Bootstrap 5** (via CDN) + custom CSS — a friendly sage/forest-green theme
  built to complement the cream + line-art logo (no default Bootstrap colors).
- **Vanilla JavaScript** for interactions: scroll-reveal animations, animated
  stat counters, gallery filtering + lightbox, sticky/animated navbar,
  back-to-top, and an AJAX inquiry form.
- **Netlify Forms** for inquiry submissions — no backend required.

## Sections

Home (intro) · About · Menu · Gallery · **Past Work / Events** · Reviews · Contact (inquiry form) · Footer

## Deploy to Netlify

### Option A — drag & drop
1. Go to <https://app.netlify.com/drop>.
2. Drag this folder (containing `index.html`, `logo.jpg`, `netlify.toml`) onto the page.
3. Done — your site is live. Add your custom domain (`tatumbakes.com`) under
   **Site settings → Domain management**.

### Option B — connect the Git repo
1. Push this repository to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: *(leave blank)* · Publish directory: `.`
4. Deploy.

## Inquiry form (Netlify Forms)

The contact form uses Netlify Forms (form name: **`inquiry`**). Netlify detects
the form automatically from the HTML at deploy time — no extra config needed.

- Submissions appear under **Site → Forms → inquiry** in the Netlify dashboard.
- To get email alerts: **Forms → Settings & notifications → Add notification →
  Email notification** and enter your address.
- A hidden honeypot field (`bot-field`) provides basic spam protection.

> **Local preview:** opening `index.html` directly (or via `localhost`) shows the
> form's success animation in "demo mode" without sending — actual delivery only
> happens on the deployed Netlify site.

## Customizing

- **Logo / favicon:** replace `logo.jpg`.
- **Photos:** the gallery, menu, and past-work images use Unsplash placeholders.
  Swap the `src` URLs in `index.html` for your own photos (drop them in an
  `images/` folder and reference e.g. `images/my-cake.jpg`).
- **Colors:** edit the CSS variables under `:root` at the top of the `<style>` block.
- **Content:** prices, menu items, reviews, and past projects are all plain HTML
  near their section comments (`<!-- ============ ... ============ -->`).
- **Contact info:** update the email/social links in the Contact section and footer.
