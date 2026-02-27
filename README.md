# Group Project: Lwsc.github.io

Left Wing Students for Change

Welcome to our project repository! This document will help you get your local environment set up so we can all code consistently and avoid "it works on my machine" errors.

---

## Getting Started

### 1. Prerequisites

Before you start, make sure you have **Git** installed on your system.

- [Download Git here](https://git-scm.com/downloads)

### 2. Setup Instructions

1. **Clone the Repo:** Open VS Code, press `Ctrl+Shift+P`, type `Git: Clone`, and paste our repo URL.
2. **Install Extensions:** Go to the Extensions tab (`Ctrl+Shift+X`) and install:
   - **Live Server** (Real-time browser previews)
   - **Prettier** (Automatic code formatting)
   - **GitLens** (Visualizes Git history and changes)

---

## 📋 Project Structure

Please keep our files organized using this structure:

```text
yourorg.github.io/
├── index.html       # Main homepage
├── style.css        # Global styles
├── script.js        # Interactivity/Logic
├── .prettierrc      # Prettier configuration (don't delete!)
└── images/          # Store all assets/photos here
```

---

## Daily Git Workflow

Follow these steps **every time** you sit down to work on the project:

```bash
# 1. Always pull before you start to get the latest changes
git pull

# 2. Make your edits in VS Code, then stage your files
git add .

# 3. Write a short message describing what you changed
git commit -m "describe what you did here"

# 4. Push your changes up to GitHub
git push
```

> **Always `git pull` first.** Skipping this is the #1 cause of merge conflicts.

---

## Branch Rules

To avoid overwriting each other's work, we use branches for new features or changes.

```bash
# Create and switch to a new branch
git checkout -b your-name/feature-name

# Example
git checkout -b marcus/navbar
```

Once your feature is done, open a **Pull Request** on GitHub so someone else can review it before it gets merged into `main`.

**Never push directly to `main`** unless it's a tiny fix.

---

## Launching a Live Preview

1. Open the project folder in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**

Our site will open in the browser and auto-refresh every time you save a file.

---

## Deploying to GitHub Pages

Our site is automatically deployed from the `main` branch via **GitHub Pages**.

To check or change the settings:

1. Go to the repo on GitHub
2. Click **Settings → Pages**
3. Make sure the source is set to `main` branch / `/ (root)`

Our live site is at: **https://lwsc.github.io**

---

## Contribution Guide and general advice

- **Divide pages** — each person owns specific files to reduce conflicts
- **Commit often** — small, frequent commits are better than one giant one
- **Write clear commit messages** — "fixed header" is better than "changes"
- **Ask before refactoring** shared files like `style.css` or `index.html`
- **Don't delete or rename files** without telling the group first

---

## 📬 Questions?

Reach out in our group chat or open a GitHub **Issue** in this repo.
