# Fado168 Website

A Next.js 13 and App Router-ready headless storefront template for Fado168, featuring:

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- [React Server Components (RSCs)](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) and [Suspense](https://react.dev/blog/2022/03/29/react-v18#suspense-in-data-frameworks)
- Route handlers for mutations
- Edge runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Automatic light/dark mode based on system settings

## Develop locally

You can clone the template repo manually and supply the environment variables [defined in .env.example](.env.example).

> Note: Do not commit your `.env` file. It exposes secrets that allow others to control your Fado168 store.

1. Make .env file:

```bash
cp .env.example .env
```

2. Install the app's default dependencies:

```bash
pnpm install
```

3. start the development server:

```bash
pnpm dev
```

The app runs on [localhost:3000](http://localhost:3000/).

## Get to know the Fado168 GraphQL Storefront API

In addition to being compatible with Fado168's multi-storefront features, Next.js + Fado168 uses the [GraphQL Storefront API](http://192.168.3.240/graphql). This API makes it possible for control the representation of products and categories, carts, orders, customer segmentation, and more. To get a sense of what is possible to do directly on the storefront, check out the [GraphQL Playground](http://192.168.3.240/graphql-playground).

When you access the Playground through the store control panel, Fado168 provides a valid GraphQL Storefront authentication token without any additional API calls on your part."# fado168" 
#   f r o n t e n d  
 