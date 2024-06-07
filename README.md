This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## In a word

### Stacks

- nextjs

- shadcn

- prisma - sqlite

### Features

- prisma - sqlite

- i18n (coming soon)

- trpc: 让前后端的交流不再是 any 而是自动识别好的 type (coming soon)

### Set up Prisma

- ### 新建数据库 (sqlite)

1. 设置 model 

通常手动更改 `src/db/prisma/schema.prisma`

2. migration 创建数据库表格

`npx prisma migrate dev --name MIGRATEION_NAME`

它做了： 

(1) 创建了一个新的 SQL 迁移文件 `prisma/migrations/*` 

(2) 执行了新建的针对数据库的 SQL 迁移文件

(3) 运行 `prisma generate`

- ### 连接现有数据库

1. 设置数据库 `datasource`

2. Introspection 反省/审视

通过命令更新我们的model，来自数据库已经有的模型

`npx prisma db pull`

检查命名是否符合 prisma 的哲学

3. 创建 baseline 文件

- 创建一个 migrations sql文件

`mkdir -p prisma/migrations/0_init`

- 用 prisma migrate diff 生成迁移文件到这个文件

`npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql`

- 检查弄下来的文件，标记为应用

`npx prisma migrate resolve --applied 0_init`

4. 生成数据库！

`npx prisma generate`

- ### 云端数据库

上传到空的数据库，当设置好 `schema.prisma` 后：`npx prisma db push`

在本地使用：`npx prisma generate`


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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
