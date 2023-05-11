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

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed at [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

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

# Notes

## IMPORTANT

- Do not delete the 'uploads' folder, uploaded files are stored in this folder
- uploads folder should contain the following folders: file, profile_picture

## Coding Practices

- all URL routes must point to 'index.js', this ensures that we can always extend the URLs without changing other files.

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
- [CASL](https://casl.js.org/v6/en) - Role Based Access Control
- [Moment.js](https://momentjs.com/) - Time formatting library

## Environment Variables (.env)

- GOOGLE_CLIENT_ID - client id from google console
- GOOGLE_CLIENT_SECRET - client secret from google console
- DATABASE_URL - database URL for a database supported by Prisma, we recommend postgres
- NEXTAUTH_SECRET - NextAuth config
- NEXTAUTH_URL - NextAuth config
- NEXT_PUBLIC_HOST_URL - NextAuth config
- FIREBASE_API_KEY - Firebase config
- FIREBASE_AUTH_DOMAIN - Firebase config
- FIREBASE_PROJECT_ID - Firebase config
- FIREBASE_STORAGE_BUCKET - Firebase config
- FIREBASE_MESSAGING_SENDER_ID - Firebase config
- FIREBASE_APP_ID - Firebase config
- FIREBASE_MEASUREMENT_ID - Firebase config
- STORAGE - storage method for files "cloud" uses firebase while "local" uses host server storage
- DATABASE_URL - The database mysql database url
- ADMINS - comma separated values of admin emails (Note: admin must be an existing user, meaning it has previously logged in as faculty).
- UUID - a unique identifier that controls the uniqueness of some unique entities imd coordinator and citl director for instance that cannot be tied to other entities for uniqueness
- DEFAULT_VPAA - the default vpaa of admin settings

## Entity Relationship Diagram (ERD)

[Vuerd](https://vuerd.github.io/) was used to create the ERD diagram (/erd.vuerd.json).

The following can be used to view ERD inside Visual Studio Code:<br/>
Name: ERD Editor <br />
Id: dineug.vuerd-vscode <br />
Description: ERD Editor vscode extension <br />
Version: 0.9.15 <br />
Publisher: dineug <br />
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode <br />

## Expected Errors

Error:

```
The webpage at http://localhost:3000/api/auth/callback/google?state=tRFmuGHnRqALhCr7agkw16BQED6gfczcYmHY24N7Qxw&code=4%2F0AbUR2VNMbzRutZmydH1TdMjJL9tlN2rVkISTqwwKSnYrhTUGgkITqZq8maZxuGXPjqLRrg&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=consent might be temporarily down or it may have moved permanently to a new web address.
```

Cause:
This happens when logging in on local. Logging in passes through google which then redirects to this a localhost url (in their server) which does not exist. This should not occur in production unless there is a cors error, which can then be fixed by allowing that origin.
