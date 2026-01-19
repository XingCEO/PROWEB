# PROWEB

個人作品集網站，使用 Next.js App Router 建置，主打終端機風格視覺與動態互動，集中展示專案、技能與聯絡方式。

## 特色
- 終端機風格 UI 與分層動態效果（Framer Motion）。
- 首頁服務區塊、精選專案、技術亮點與導覽 CTA。
- 作品集分類與精選標籤，支援專案詳情頁與 modal 檢視路由。
- About / Skills / Projects / Contact 等完整頁面結構。

## 技術棧
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS + PostCSS + Autoprefixer
- Framer Motion 動畫
- Zod 表單驗證

## 專案結構
- `src/app`：路由與頁面（含 modal 路由）
- `src/components`：可重用元件（Navbar、Footer、ProjectDetail）
- `src/data`：專案資料來源
- `src/actions`：伺服器端 actions（聯絡表單）

## 資料夾結構
```
.
├── src
│   ├── app
│   │   ├── @modal
│   │   ├── about
│   │   ├── contact
│   │   ├── projects
│   │   ├── skills
│   │   ├── default.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── actions
│   ├── components
│   ├── data
│   └── lib
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 資料結構
專案資料定義在 `src/lib/types.ts`，主要使用 `Project` 介面：
```ts
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}
```

新增專案時請在 `src/data/projects.ts` 依照以下格式補資料：
```ts
{
  id: 'project-id',
  title: '專案名稱',
  description: '短描述（列表/卡片使用）',
  longDescription: '長描述（詳情頁使用）',
  image: '/projects/project-image.jpg',
  tags: ['Next.js', 'TypeScript'],
  liveUrl: 'https://your-live-site.com',
  githubUrl: 'https://github.com/your-repo',
  featured: false,
}
```

## 開發
```bash
npm install
npm run dev
```

## 建置與部署
```bash
npm run build
npm run start
```

## 備註
若要新增或調整專案內容，可更新 `src/data/projects.ts`。
