# Vexorium Studios — Publisher Website

A responsive, static, no-build website for Vexorium Studios. Includes Home, Products, About, Support, and Contact sections. Product imagery is a concept illustration, not an actual screenshot.

## IMPORTANT before publishing

1. Open `config.js` and set `supportEmail` to a real, monitored email address. Do not publish with a missing contact address; Unity may require working contact information.
2. Review all product claims and update availability, compatibility, and documentation as testing progresses. ScenePilot is currently marked **In Development** and **not available for purchase**.
3. Check your publisher profile details and Unity's latest requirements. A website alone does not guarantee publisher approval.
4. Verify that the name Vexorium Studios is available for your use, including potential trademarks.

## Preview

Open `index.html` in a browser. No dependencies or build step.

## Publish for free using GitHub Pages

1. Create a GitHub account (follow the provider's age and eligibility requirements).
2. Create a public repository such as `vexorium-studios`.
3. Upload the **contents** of this folder to the repository root (not the ZIP file).
4. Go to repository Settings → Pages → Build and deployment → Deploy from a branch; choose `main` and `/ (root)` and save.
5. Once published, your URL will generally resemble `https://YOUR-USERNAME.github.io/vexorium-studios/`. Verify the actual URL in GitHub Pages settings.
6. Open the live site on mobile and desktop, confirm the contact email link works, then paste that live URL into your Unity publisher profile.

You can also deploy this folder on other static hosts that support HTML/CSS/JS. Domain and hosting provider terms may change.

## Customization

- Brand name and copy: `index.html`
- Colors and layout: `styles.css` (`:root` variables)
- Contact email: `config.js`
- Icon: `favicon.svg`

## Limitations

This website does not provide a contact form, customer account system, or checkout. Unity Asset Store is intended to handle marketplace purchasing. Contact is by email once configured. The site is not hosted or published by this package.
