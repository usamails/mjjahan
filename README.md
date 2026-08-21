# Jahan Ali — Official Portfolio Website & Personal Brand

> **Live Website:** [https://mjjahan.com](https://mjjahan.com)  
> **Positioning:** Digital Entrepreneur • Digital Marketer • Freelancer • Agency Owner • Travel & Visa Consultant

---

## 🌐 Custom Domain Setup (`mjjahan.com`)

This repository is configured with GitHub Pages & custom domain routing via the `CNAME` record (`mjjahan.com`).

### DNS Records to add in your domain registrar (Namecheap, Cloudflare, GoDaddy, etc.):

1. **Apex Domain (`@` / `mjjahan.com`):**
   Add **4 `A` Records** pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. **Subdomain (`www.mjjahan.com`):**
   Add **1 `CNAME` Record**:
   - Host / Name: `www`
   - Target / Value: `usamails.github.io`

3. In GitHub Repository:
   - Go to **Settings** > **Pages**
   - Source: **GitHub Actions** (or Deploy from branch `gh-pages` / `main`)
   - Custom domain: `mjjahan.com`
   - Enable **Enforce HTTPS**

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (`motion/react`)
- **Icons:** Lucide React (`lucide-react`)

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/usamails/mjjahan.git

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

---

## 📬 Contact & Ventures

- **Founder:** Jahan Ali
- **Email:** mjjahanali@gmail.com
- **Phone / WhatsApp:** +8801650222581
- **Digital Agency:** [Flowdigita LLC](https://flowdigita.com/)
- **Travel Consultancy:** [Dreams Fly International](https://dreamsfly.net/)
