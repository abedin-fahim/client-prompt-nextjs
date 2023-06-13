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

By default any component in the app folder directory is rendered in server side. If we want to turn that into a client side component we simply just write `` 'use client' `` directive on top of that component.
It is important to declare any component to be rendered in the client side for using react functionalities such as `` useState ``, `` useEffect ``, or `` useContext ``

When to use `` 'use client' `` and when not to use `` 'use client' `` can be found in the docs here: [the use client directive](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) 

or as they put it:
*To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app directory) until you have a use case for a Client Component.*