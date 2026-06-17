# Taiwan Q-Fin Hub

Official website for **Taiwan Q-Fin Hub** — a research community connecting Taiwan's quantum finance and quantitative AI work with opportunities in the United States.

Live site: [taiwan-q-fin-hub.github.io](https://taiwan-q-fin-hub.github.io)

---

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Main landing page — About, Program, Schedule, Partners |
| `people.html` | `/people.html` | Members, Advisors, Alumni |
| `showcase.html` | `/showcase.html` | Research papers and project outputs |

## Project Structure

```
taiwan-q-fin-hub.github.io/
├── index.html        # Main landing page
├── people.html       # People directory
├── showcase.html     # Research showcase
├── styles.css        # Shared stylesheet
├── img/              # Advisor & member photos
└── Taiwan QFin SM.png  # Logo
```

## Features

- **English-only interface** — no language selector or bilingual display
- **Static site** — no build step, no framework; deploys directly via GitHub Pages
- **Responsive** — mobile-friendly grid layouts throughout

## Development

Open any `.html` file directly in a browser, or serve locally:

```bash
npx serve .
# or
python -m http.server 8080
```

## Content Updates

- **Add a member photo**: drop a `.jpg` into `img/` and update the `<img src="img/...">` in `people.html`
- **Add a member or advisor**: copy an existing card block in `people.html` and fill in the details
- **Add a showcase entry**: copy a `.showcase-card` block in `showcase.html`

## Deploy

Push to `main` — GitHub Pages publishes automatically.

---

Supported by Taiwan Ministry of Education Youth Development Agency.
