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

## Photos

All images live in the `resources/` folder and are referenced with relative
paths (e.g. `resources/biscoff-cake.png`):

| File | Used for |
| --- | --- |
| `logo.jpg` | Favicon, navbar, hero, footer |
| `biscoff-cake.png` | Hero background + gallery + "Holiday" past-work card |
| `lava-cake.jpg` | About section + gallery + "Holiday" past-work card |
| `wedding.jpg` | Gallery + "Wedding" past-work card |
| `gender-reveal.jpg` | Gallery + "Gender Reveal" past-work card |

To add or swap photos, drop the file in `resources/` and update the matching
`src="resources/…"` in `index.html`. **Tip:** `wedding.jpg` and
`gender-reveal.jpg` are low resolution (206×206), so they're used only at
thumbnail size; the lightbox is capped so they never enlarge into a blurry
image. Higher-res replacements (~1000px+) will look even better.

The **Menu** section uses icons (not photos) so the offerings stay clean and
consistent — the only photos on the site are your real ones.

## Customizing

- **Logo / favicon:** replace `resources/logo.jpg`.
- **Colors:** edit the CSS variables under `:root` at the top of the `<style>` block.
- **Content:** prices, menu items, reviews, and past projects are all plain HTML
  near their section comments (`<!-- ============ ... ============ -->`).
- **Contact info:** update the email/social links in the Contact section and footer.
