This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
mui-nextjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  └─ app
│     ├─ assets
│     │  ├─ data
│     │  │  └─ SidebarData.js
│     │  ├─ fonts
│     │  │  └─ PretendardVariable.woff2
│     │  ├─ icons
│     │  │  ├─ ico_arrow_double_left.svg
│     │  │  ├─ ico_arrow_double_right.svg
│     │  │  ├─ ico_arrow_down.svg
│     │  │  ├─ ico_arrow_down_white.svg
│     │  │  ├─ ico_arrow_gray_double_left.svg
│     │  │  ├─ ico_arrow_gray_double_right.svg
│     │  │  ├─ ico_arrow_gray_left.svg
│     │  │  ├─ ico_arrow_gray_right.svg
│     │  │  ├─ ico_arrow_left.svg
│     │  │  ├─ ico_arrow_right.svg
│     │  │  ├─ ico_arrow_up.svg
│     │  │  ├─ ico_calendar.svg
│     │  │  ├─ ico_checkbox_checked.svg
│     │  │  ├─ ico_clock.svg
│     │  │  ├─ ico_close_black.svg
│     │  │  ├─ ico_close_dan.svg
│     │  │  ├─ ico_close_gray.svg
│     │  │  ├─ ico_close_info.svg
│     │  │  ├─ ico_close_pri.svg
│     │  │  ├─ ico_close_suc.svg
│     │  │  ├─ ico_close_war.svg
│     │  │  ├─ ico_close_white.svg
│     │  │  ├─ ico_hamburger.svg
│     │  │  ├─ ico_logout.svg
│     │  │  ├─ ico_minus.svg
│     │  │  ├─ ico_minus_white.svg
│     │  │  ├─ ico_plus.svg
│     │  │  ├─ ico_plus_white.svg
│     │  │  ├─ ico_setting.svg
│     │  │  └─ index.js
│     │  └─ logo
│     │     ├─ index.js
│     │     └─ logo.svg
│     ├─ components
│     │  ├─ Buttons.js
│     │  └─ Title.js
│     ├─ favicon.ico
│     ├─ global-variables.js
│     ├─ globals.css
│     ├─ layout.js
│     ├─ layouts
│     │  ├─ Breadcrumb.js
│     │  ├─ Footer.js
│     │  ├─ Header.js
│     │  └─ Sidebar
│     │     ├─ Sidebar.js
│     │     ├─ SidebarItem.js
│     │     ├─ SidebarSection.js
│     │     └─ styles.js
│     ├─ page.js
│     ├─ pages
│     │  ├─ content
│     │  │  ├─ page.js
│     │  │  ├─ survey
│     │  │  │  └─ page.js
│     │  │  └─ task
│     │  │     └─ page.js
│     │  ├─ online
│     │  │  ├─ on_manage
│     │  │  │  └─ page.js
│     │  │  ├─ page.js
│     │  │  └─ students
│     │  │     └─ page.js
│     │  └─ trainer
│     │     ├─ page.js
│     │     ├─ pages
│     │     │  └─ page.js
│     │     └─ qna
│     │        └─ page.js
│     ├─ theme.js
│     └─ utils
│        └─ getText.js
└─ svgr.config.js

```