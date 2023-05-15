# Notes

## IMPORTANT

- <span style="color:red">Do not delete the `uploads` folder, uploaded files are stored in this folder</span>
- <span style="color:red">`uploads` folder should contain the following folders: `file`, `profile_picture`</span>
- <span style="color:red">Always `seed` upon setting up a fresh development environment</span>

```
npx prisma db seed
```

- It is suggested use VSCode on development and install suggested extensions

## Coding Practices

- All URL routes must point to `index.js`, this ensures that we can always extend the URLs without changing other files.
- It is suggested to follow similar coding patterns as much as possible and follow coding conventions.

## Color Palette:

![#152033](https://placehold.co/15x15/152033/152033.png) `#152033 (Dark Blue)`<br/>
![#F2C050](https://placehold.co/15x15/F2C050/F2C050.png) `#F2C050 (Orange)`<br/>
![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF (White)`<br/>
![#717883](https://placehold.co/15x15/717883/717883.png) `#717883 (Gray)`<br/>

## Dependencies

- [NextJS](https://nextjs.org) - Javascript Framework
- [Tailwind](https://tailwindcss.com) - Frontend design
- [Flowbite](https://flowbite.com/) - Tailwind library
- [MUI](https://mui.com/) - Amin panel used this component library
- [Prisma](https://www.prisma.io) - Database ORM
- [Postgres](https://www.postgresql.org/) - Database
- [NextAuth](https://next-auth.js.org/) - Authentication
- [CASL](https://casl.js.org/v6/en) - Role Based Access Control
- [Moment.js](https://momentjs.com/) - Time formatting library
- [Chart.js](https://www.chartjs.org/docs/latest/) - Dashboard components library
- [pino](https://getpino.io/#/) - logger for api requests
- See [package.json](package.json) for more

## Environment Variables (.env)

A sample will be shared on trello.

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

## Suggested VSCode extensions

### Entity Relationship Diagram (ERD)

[Vuerd](https://vuerd.github.io/) was used to create the ERD diagram (/erd.vuerd.json).

The following can be used to view ERD inside Visual Studio Code:<br/>
Name: ERD Editor <br />
Id: dineug.vuerd-vscode <br />
Description: ERD Editor vscode extension <br />
Version: 0.9.15 <br />
Publisher: dineug <br />
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode <br />

### API documentation

Name: Thunder Client
Id: rangav.vscode-thunder-client
Description: Lightweight Rest API Client for VS Code
Version: 2.6.2
Publisher: Ranga Vadhineni
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

### Spelling Checker

Name: Code Spell Checker
Id: streetsidesoftware.code-spell-checker
Description: Spelling checker for source code
Version: 2.20.4
Publisher: Street Side Software
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

## Expected Errors

Error:

```
The webpage at http://localhost:3000/api/auth/callback/google?state=tRFmuGHnRqALhCr7agkw16BQED6gfczcYmHY24N7Qxw&code=4%2F0AbUR2VNMbzRutZmydH1TdMjJL9tlN2rVkISTqwwKSnYrhTUGgkITqZq8maZxuGXPjqLRrg&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=consent might be temporarily down or it may have moved permanently to a new web address.
```

Cause:
This happens when logging in on local. Logging in passes through google which then redirects to this localhost url (in their server) which does not exist. This should not occur in production unless there is a cors error, which can then be fixed by allowing that origin (see [/vercel.json](/vercel.json) which applies cors policy on vercel hosting). You can get out from this error by hard reloading (`Ctrl + f5` or `Ctrl + click the reload button`).

# How to run on local

This web app was developed using to machines (Windows 11 and Ubuntu) to ensure that the system is independent on the server's OS.

## Prerequisites

- `mysql` already setup (xampp can be used on windows && regular cli mysql on ubuntu)
- `nodejs` installed (`v18.14.2` was used on ubuntu && `v16.15.1` was used on windows), if you are using a specific version of nodejs for another project uninstall the currently installed version and use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) for node version management this will allow you to switch between nodejs versions quickly.

## Steps

1. Open VSCode, make sure that you have logged in your github account to hav an easier cloning process
2. Open an empty folder named `buksu_imd_dms` or anything you like
3. run the following command (https was the github cloning https taken from repository see [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) for github cloning guide) <span style="color:red">note: the '`.`' was important</span>:

```
git clone {https} .
```

4. create `.env` file, this should be available on trello
5. after cloning run the following commands:

```
# Install project dependencies
npm install
# Prerequisite: Make sure you are in the root directory of your project and have a valid package.json file.

# Apply database migrations
npx prisma migrate dev
# Prerequisite: Ensure that Prisma is installed globally by running `npm install -g prisma`.
# Prerequisite: Make sure that the database connection details are correctly configured.

# Generate the Prisma client
npx prisma generate

# Seed the database with initial data
npx prisma db seed

# Start the development server
npm run dev

```

6. running the web app next time should only be done by running:

```
npm run dev
```

# How to reset

Note that this will make you re-login all your accounts and add then again to each role

1. run the following command

```
npx prisma migrate reset
```

2. delete files inside `upload` folders, note: <span style="color:red">files only</span> do not delete the folders

# How to change admin accounts

open your .env file and change ADMINS property, a sample value would be (it should be an existing user meaning the account was already logged in through the faculty login):

```
ADMINS = 'sample@gmail.com, example@gmail.com'
or
ADMINS = 'sample@gmail.com'
```

# How to change security

The security was handled by [CASL](https://casl.js.org/v6/en), security was then defined within [services/abilities/defineAbility.js](services/abilities/defineAbility.js) file security was then divided by modules for each resource. Check [CASL](https://casl.js.org/v6/en) documentation for more information on the role based access control configuration.

# Changing the questions

Check the [constants/questions.js](constants/questions.js) file and note the comments as they are important be strictly followed. <br/>

## Rules include:

- Section titles must be unique.
- Question labels must be unique.
- Question ids must be unique.
- run `npm run validate` each time this file was updated to validate for unique values such as titles, labels, and ids.

The questions were statically added within the website to ensure fast development, although future updates should add an api and admin panel for a google form like implementation of the review questions including features like sorting updating deactivation adding, deleting was questionable since old responses should still be able to reference deactivated questions.

# MUI Style issues:

MUI component styles tend to be overridden by tailwind as a fix we have set `!important` styles on [styles/globals.css](styles/globals.css) file.
A more permanent fix would be to `prefix` the tailwind classes but this will make us need to change the existing code of all existing tailwind classes that was likely to lead to errors and consume a lot of time as such we are not able to implement this fix during our internship.
