# Hadera Kit Archive

A personal digital museum for Hapoel Hadera football shirts. The site is a
Hebrew, RTL-first Next.js app with a public collection gallery, shirt detail
pages, a wanted-shirts page, and contact actions for WhatsApp and email.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- ESLint 9 with `eslint-config-next`
- Local static assets in `public/`

## Project Structure

```txt
app/                    Next.js routes and global CSS
src/components/         Shared UI components
src/data/               Editable site content and collection data
src/lib/                Small helpers
public/reference/       Logo and hero/reference images
public/shirts/          Shirt photos
public/fonts/           Local Hebrew fonts
```

Important content files:

- `src/data/settings.ts` - homepage text, contact email, WhatsApp number, and social links.
- `src/data/shirts.ts` - shirt records, wanted-shirt records, labels, and image references.
- `src/data/collections.ts` - collection definitions and collection slugs.
- `src/data/ADDING_SHIRTS.md` - notes for adding new shirts.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

On Windows PowerShell, if `npm` is blocked by the execution policy, use:

```bash
npm.cmd run dev
```

## Quality Checks

Run TypeScript:

```bash
npx tsc --noEmit
```

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

Windows equivalents:

```bash
npx.cmd tsc --noEmit
npm.cmd run lint
npm.cmd run build
```

## Editing Site Content

Most site updates do not require changing components.

To change contact details or homepage copy, edit:

```txt
src/data/settings.ts
```

To add or edit shirts, edit:

```txt
src/data/shirts.ts
```

Each shirt needs:

- A unique lowercase `id` with hyphens.
- `collection: "hapoel-hadera"` unless a new collection is added.
- At least one image in `images`.
- Image paths that point to files under `public/`, written as web paths such as `/shirts/example-front.jpeg`.

Recommended image placement:

```txt
public/shirts/
  hadera-2024-25-home-front.jpeg
  hadera-2024-25-home-back.jpeg
```

After adding content, run:

```bash
npm run build
```

This catches missing routes, invalid data shapes, and many deployment issues.

## Deployment

The recommended host is Vercel because this is a Next.js app and Vercel detects
the framework automatically.

1. Push this project to a GitHub repository.
2. Sign in to Vercel with GitHub.
3. Click **Add New Project**.
4. Import the repository.
5. Keep the default Next.js settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave default
6. Deploy.

Vercel will create a production deployment from the production branch, usually
`main`, and preview deployments for other branches or pull requests.

## Custom Domain

After the first deployment:

1. Buy a domain from a registrar such as Cloudflare Registrar, Namecheap,
   GoDaddy, or an Israeli registrar for `.co.il`.
2. In Vercel, open the project and go to **Settings > Domains**.
3. Add the root domain, for example `example.com`.
4. Add the `www` domain, for example `www.example.com`.
5. Copy the DNS records Vercel provides into the registrar DNS settings.

Typical DNS records:

- Apex/root domain (`example.com`): A record.
- Subdomain (`www.example.com`): CNAME record.

Vercel will show the exact required values and will mark the domain as ready
after DNS propagation.

## Notes

- Do not commit `node_modules`, `.next`, `out`, `dist`, `.env*`, or
  `tsconfig.tsbuildinfo`.
- Keep images reasonably compressed before adding them to `public/`.
- The app is RTL-first. Check layout on both desktop and mobile after any
  significant visual change.
