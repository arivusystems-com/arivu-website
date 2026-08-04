# Arivu Website

Marketing website for Arivu Systems, built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

Install dependencies:

```bash
npm install
```

Copy `.env.example` to `.env.local` for local secrets and overrides:

```bash
cp .env.example .env.local
```

Set optional values in `.env.local` or in your deploy environment (e.g. Vercel project settings):

- `NEXT_PUBLIC_ARIVU_CHAT_INSTANCE_KEY` / `NEXT_PUBLIC_ARIVU_CHAT_API_ORIGIN` — chat widget
- Arivu help/content sync vars (see `.env.example`)

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` - start the local Next.js development server
- `npm run build` - build the production site
- `npm run start` - run the production build locally
- `npm run lint` - run ESLint

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
