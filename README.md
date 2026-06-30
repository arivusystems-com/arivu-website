# Arivu Website

Marketing website and blog for Arivu Systems, built with [Next.js](https://nextjs.org), [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), and [Sanity](https://www.sanity.io).

## Getting Started

Install dependencies:

```bash
npm install
```

Create `.env.local` with the Sanity project settings:

```bash
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"

# Optional: enables draft previews and live content revalidation
SANITY_API_READ_TOKEN="your-viewer-token"

# Optional: load the Arivu chat widget (omit until the instance is enabled)
# NEXT_PUBLIC_ARIVU_CHAT_INSTANCE_KEY="inst_chat_..."
# NEXT_PUBLIC_ARIVU_CHAT_API_ORIGIN="https://api.arivusystems.com"
```

### Sanity CORS (required for live content)

The `<SanityLive />` component subscribes to Sanity from the browser. Add your dev and production origins in [Sanity Manage](https://www.sanity.io/manage) under **API → CORS origins**, with **Allow credentials** enabled:

- `http://localhost:3000`
- Your production site URL (e.g. `https://arivusystems.com`)

Or after `npx sanity login`:

```bash
npx sanity cors add http://localhost:3000 --credentials
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content

Blog content is managed through the embedded Sanity Studio:

[http://localhost:3000/studio](http://localhost:3000/studio)

If the Sanity schema changes, regenerate types with:

```bash
npm run typegen
```

## Scripts

- `npm run dev` - start the local Next.js development server
- `npm run build` - build the production site
- `npm run start` - run the production build locally
- `npm run lint` - run ESLint
- `npm run typegen` - regenerate Sanity schema types

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
