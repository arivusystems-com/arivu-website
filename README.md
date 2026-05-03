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
