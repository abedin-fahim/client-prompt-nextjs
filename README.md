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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## "use client"
By default any component in the app folder directory is rendered in server side. If we want to turn that into a client side component we simply just write `` use client `` directive on top of that component  
It is important to declare any component to be rendered in the client side for using react functionalities such as 