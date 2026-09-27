# Yousef Maher — Portfolio (English)

## Structure (flat, to avoid folder-upload issues on GitHub)
```
portfolio-en/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── profile.png        ← your photo (already included)
    ├── todo.svg            ← illustration for the To-Do project
    ├── news.svg            ← illustration for the News project
    ├── weather.svg         ← illustration for the Weather project
    └── cv/
        └── Yousef-Maher-CV.pdf   ← add this later when ready
```

## How to upload to GitHub (step by step)
1. Unzip this package on your computer.
2. Create a new repository on GitHub (e.g. `yousef-portfolio`), set to **Public**.
3. Open the repo → **Add file → Upload files**.
4. Drag these 3 files together into the upload box: `index.html`, `styles.css`, `script.js`.
5. In a **separate** upload (this matters — do it as its own step), drag the whole `assets` folder in one go. Since it's now flat (no folders inside folders), this should upload cleanly.
6. Click **Commit changes**.
7. Go to **Settings → Pages**, set Source to `Deploy from a branch`, Branch: `main`, folder: `/ (root)`, then **Save**.
8. Wait ~1 minute, then open `https://<your-username>.github.io/yousef-portfolio/`.

## Still missing
- **CV file**: the "Download CV" button points to `assets/cv/Yousef-Maher-CV.pdf`. Add that file inside an `assets/cv/` folder whenever your CV is ready — until then the button will 404.
- **WhatsApp number**: the button currently points to a placeholder (`wa.me/20XXXXXXXXXX`). Send me your number in international format (e.g. `201234567890`, no `+` or spaces) and I'll update it.

## Run locally (optional, before uploading)
Just open `index.html` directly in your browser — no installation needed.
