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

## Routing and Nested Routing
Instead of creating routes for every single page, nextjs creates routes for us when we create a new directory and nested directory. 

`` app/page.js `` is the homepage of the website. *example url: localhost:3000* 
`` app/posts/page.js `` is the route /posts created by next.js automatically.

**We can create dynamic pages using the []. This can be folder or file and inside the [] we have the id. For example:  posts/[postId]** 

## layout.js
A layout.js file is a UI file that is shared between routes. A root layout is the top-most layout in the root app directory. It is used to define the <html> and <body> tags and other globally shared UI.

We can create layout.js file inside subdirectories giving them their of shared UI within their own subdirectory.

## loading.js 
A loading file can create instant loading states
``export default function Loading() {``
  ``// Or a custom loading skeleton component``
  ``return <p>'Loading...'</p>``
``}``

## error.js
An error file defines an error UI boundary for a route segment.
``'use client'`` // Error components must be Client Components