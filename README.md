This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## IMPORTANT

- Do not delete 'uploads' folder, uploaded ims are redirected to this folder

## Coding Practices

- all url routes must point to 'index.js', this ensures that we can always extend the urls without changing other files.

## Color Palette:

![#152033](https://placehold.co/15x15/152033/152033.png) `#152033 (Dark Blue)`<br/>
![#F2C050](https://placehold.co/15x15/F2C050/F2C050.png) `#F2C050 (Orange)`<br/>
![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF (White)`<br/>
![#717883](https://placehold.co/15x15/717883/717883.png) `#717883 (Gray)`<br/>

## Dependencies

- [NextJS](https://nextjs.org) - Javascript Framework
- [Tailwind](https://tailwindcss.com) - Frontend design
- [Prisma](https://www.prisma.io) - Database ORM
- [Postgres](https://www.postgresql.org/) - Database
- [NextAuth](https://next-auth.js.org/) - Authentication
