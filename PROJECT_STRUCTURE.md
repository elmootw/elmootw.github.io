# 專案結構文檔

## 項目概述
這是一個個人投資組合網站，展示資安顧問與攝影師的專業背景、經驗和作品。網站採用 React + Tailwind CSS 開發，具有響應式設計。

## 完整目錄結構
```
.
├── public/                  # 靜態文件夾
│   ├── assets/              # 存放圖片、字型等資源
│   ├── favicon.ico          # 網頁標誌
│   └── index.html           # 單頁應用的 HTML 模板
├── src/                     # 源代碼文件夾
│   ├── components/          # 可重用的 React 元件
│   ├── pages/               # 網站的各個頁面
│   ├── App.js               # 應用的根元件
│   ├── index.js             # 進入點文件
│   └── styles/              # 全局樣式文件
│       └── tailwind.css      # Tailwind CSS 配置文件
├── package.json             # 項目依賴配置
├── tailwind.config.js       # Tailwind CSS 配置
├── .gitignore               # Git 忽略文件
└── README.md                # 項目說明文檔
```

## 技術棧
- **前端**: React, Tailwind CSS
- **後端**: 無（純前端應用）
- **部署**: GitHub Pages
- **構建工具**: Create React App 或 Vite

## 組件結構 (src/components/)
- Header - 頁頭導航
- Footer - 頁腳
- Navigation - 導航菜單
- ProjectCard - 項目卡片組件
- SkillBadge - 技能標籤
- ContactForm - 聯絡表單

## 頁面結構 (src/pages/)
- Home - 首頁
- About - 關於我
- Portfolio - 作品集
- Blog - 部落格
- Contact - 聯繫方式

## 開發與部署
1. 克隆此倉庫到本地
2. 安裝依賴: `npm install`
3. 啟動開發伺服器: `npm start`
4. 打包部署: `npm run deploy`

## 命名規範
- 組件文件: PascalCase (如 `Header.js`)
- 工具函數: camelCase (如 `formatDate.js`)
- CSS 類名: kebab-case (如 `header-container`)

## 版權聲明
本專案的程式碼及內容皆屬於個人所有，未經允許不得轉載。

