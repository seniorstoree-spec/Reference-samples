# Quality Assurance - Reference Sample Management

A robust, intelligent Single Page Application (SPA) built for Quality Assurance teams to manage retention and reference samples effortlessly. The application runs natively in the browser with Vue 3 and Tailwind CSS.

## 🚀 Features

- **Master Catalog Validation**: Over 500 preloaded verified products directly accessible from `data/masterCatalog.js`.
- **Intelligent Dashboards**: Real-time KPI summaries, active samples tracking, and near-expiry detection.
- **Smart Scheduling**: 5-step dynamic milestone system calculating next inspections based on product shelf life.
- **Localization**: Full RTL Arabic layout and language support, persisting natively across refreshes.
- **Data Portability**: 
  - One-click native `.xlsx` Export for both active samples and master catalog data.
  - Native Excel/CSV Import for batch updating records.
- **Bulk Operations**: Intelligent batch selections and automated cleanup mechanics directly built into the interface.

## 📦 Deployment & Setup

Because this is a standalone SPA relying strictly on CDNs (Vue 3, Tailwind CSS, SheetJS, ChartJS), there is no complex build pipeline required.

### 1. Local Development
To serve the app locally and preview functionality without CORS restrictions on module loading:
```bash
npm install
npm run dev
```
Navigate to \`http://localhost:3000\`.

### 2. Production Build
```bash
npm run build
```
*(Note: As a standalone HTML SPA, this simply verifies the bundle. No assets need to be transpiled).*

### 3. Deploying to GitHub / GitHub Pages
The application structure is already sanitized for instant deployment. 
To push this directory to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit - Quality Samples App v1.1.0"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
To host for free, navigate to your repository's **Settings > Pages** and set the source branch to \`main\`. 

## 🔄 Data Migrations (Seed Sync)
The app is configured with `APP_DATA_VERSION = "1.1.0"`. New devices opening the URL will automatically merge `data/masterCatalog.js` into their persistent local storage without overwriting manually added products. Admins can manually force this merge via the **"استعادة البيانات الافتراضية"** button inside the Master Catalog tab.
