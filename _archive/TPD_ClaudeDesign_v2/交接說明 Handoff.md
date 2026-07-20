# TPD 網站 — Claude Code 交接說明

> 設計已拍板（B 方向，出街版）。這份文件 = 視覺規格 + 要改的 Astro 檔案清單 + 轉去 Claude Code 的步驟。
> 視覺規格的「活樣板」就是本專案的 `TPD 首頁定稿.dc.html`（首頁 + Day 1，雙語、含 Media）。

---

## A. 已拍板的設計決定

| 區塊 | 決定（= B / Claude UI kit 版） |
|---|---|
| Header／導覽列 | B 版排版，但**保留 Media（相片及錄影）**一項；語言切換 EN／繁 |
| 首頁特色卡 | 「Three days, one community」三張主題特色卡（orange/green/yellow 左色條） |
| 數據／Impact | 黃／藍 50:50 split 區塊 ＋ 4 個 StatBlock（3 / 20+ / P4–S3 / EN·繁） |
| 收穫 | 「What you'll take away」三條 InfoPanel（綠色左邊框） |
| Footer | 完整 GOAI Logo lockup 圖 ＋ 標題·日期·地點 ＋ 16px 漸層條 |
| 全站 | **移除所有 Draft／草擬字眼**（出街版） |
| Day 1 | 內容以 `src/content/pages/day-1.md` 為準：登記、AM／PM 分段標題、各環節講者＋簡介、三組「小學／中學」平行分組 |

設計語彙仍沿用 JC GoAI 設計系統：navy `#022169`、gold `#FAD000`、accent orange/green/yellow、Montserrat（標題）/ Manrope（內文）、pill 按鈕、卡片 28px 圓角、section panel 32px、hero 底部 40px、soft shadow `0 20px 60px rgb(2 33 105 / .08)`。tokens 已在 `src/styles/global.css`。

---

## B. 要在 Astro 改的檔案（最小改動清單）

> 現有 Astro 首頁是 A 版（Objectives → Schedule cards → Who should attend）。要換成 B 版首頁。

1. **`src/components/Header.astro`** — 已含 Media（`navItems` 第 7 項）。確認語言切換樣式符合設計即可，基本不用改。
2. **`src/components/Hero.astro`** — 已相符（eyebrow / h1 / 兩個按鈕 / 右側 summary panel）。**移除 hero panel 的「Draft」一欄**（只留 Date、Venue）。
3. **`src/pages/[lang]/index.astro`（首頁）** — 改成 B 版三段：
   - **Feature cards**：三張卡（Our Programme / Teacher Co-creation / Our Schools），用 `.card` + 7px 左色條（orange/green/yellow）。內容可放 `src/content/pages/home.md`（新增 features 欄）。
   - **Split impact stats**：用 `.split-section`（global.css 已有）+ 4 個數據（3 / 20+ / P4–S3 / EN·繁）。
   - **Takeaways**：沿用 `objectives`（home.md 已有），用綠色左邊框 InfoPanel 樣式（`.objectives li`）。
   - 移除原本的 Schedule cards / Who-should-attend（或保留為次要段落，按需要）。
4. **`src/components/Footer.astro`** — 把純文字 `<h2>` 品牌名換成 **GOAI logo 圖**：`<img src="/brand/goai-logo.png" height="66">`；**刪掉 statusNote（draft）那行**，只留標題·日期·地點 ＋ 漸層條。
5. **`src/content/pages/home.md`** — 刪掉 / 不再輸出 `statusNote`（draft 字眼）。如要 features 卡內容，在此新增 `features:` 欄（三項，每項 meta/title/desc，雙語）。
6. **`src/components/DayAgenda.astro`** — Day 1–3 的時間表元件。確認支援三種列：一般環節（time/duration/title/speakers/abstract/note）、分段標題（heading + note）、平行分組（time/duration/tracks[]）。`day-1.md` 已用齊這三種，元件需照樣渲染（band 用 `.timeline-band`，分組用 `.track-grid`/`.track`）。
7. 全站搜尋並移除：`draft`、`草擬`、`will be updated`、`持續更新` 等字眼。

> Day 2／Day 3／Resources／Logistics／Media 的內容已存在於 `src/content/pages/day-2.md`、`day-3.md`、`resources.md`、`logistics.md`、`media.md` 與 `i18n.ts`——套用同一版式後會自動帶出，不需手抄。

---

## C. 轉去 Claude Code 的步驟

### 1. 先把這個專案的檔案拿到本機
你需要的是 **Astro 原始碼**（`website-TPD-Aug26/`），它就在本專案的 `uploads/website-TPD-Aug26/` 內。兩個方法擇一：
- 在本介面用「下載」把整個 `uploads/website-TPD-Aug26` 資料夾拿走；或
- 如果你本機已有這份 repo，直接用本機那份。

> 另外把 `交接說明 Handoff.md`（本檔）、`TPD 首頁定稿.dc.html`、`設計選擇題對照.dc.html` 也一併下載，當作設計參考。

### 2. 安裝 Claude Code（一次性）
需要先有 Node.js 18+。在終端機執行：
```
npm install -g @anthropic-ai/claude-code
```
然後用你的 Anthropic 帳戶登入（第一次執行 `claude` 會引導你登入）。

### 3. 開專案
```
cd 路徑/website-TPD-Aug26
claude
```
（`claude` 會在「目前資料夾」開工，所以一定要先 `cd` 進 Astro 專案根目錄——就是有 `package.json`、`astro.config.mjs` 的那層。）

### 4. 先讓網站跑起來，確認基準
在 Claude Code 內或另開終端機：
```
npm install
npm run dev
```
瀏覽器開 `http://localhost:4321`（Astro 預設）看現狀。

### 5. 把這份交接交給 Claude Code
在 Claude Code 對話框貼上類似指令（把 Handoff 檔放進專案根目錄，它就能讀）：
> 「請讀 `交接說明 Handoff.md`。依 B 方向把首頁、Footer、Hero 改成出街版（移除所有 draft 字眼），並確認 Day 1–3 時間表元件支援分段標題與平行分組。內容一律從 `src/content/` 與 `i18n.ts` 讀取，保持雙語。」

它會直接改 `.astro`／`.md` 檔。你逐步 review、它幫你跑 `npm run build` 驗證。

### 6. 出街（部署）
`npm run build` 產生 `dist/`。靜態網站可放到 Cloudflare Pages／Netlify／Vercel／GitHub Pages 任一；接上你網域即可。Claude Code 也能幫你設定部署。

---

## D. 給 Claude Code 的開場 prompt（可直接複製）

```
這是 JC GoAI TPD Workshop 的 Astro 網站。設計已拍板，規格見 交接說明 Handoff.md（請先讀）。
目標：把網站改成「出街版」B 設計方向。
1. 首頁(src/pages/[lang]/index.astro)改為：Hero → 三張特色卡 → 黃/藍 split 數據區 → 收穫 InfoPanel。
2. Footer 改用 GOAI logo 圖，刪除 draft 狀態行。
3. Hero panel 移除 Draft 欄。
4. 全站移除 draft／草擬／will be updated／持續更新 等字眼。
5. Day 1–3 時間表需支援：一般環節、分段標題(AM/PM)、平行分組(小學/中學)，內容讀 src/content/pages/*.md。
6. 全程保持 EN/繁 雙語，內容只從 src/content 與 i18n.ts 讀取，不要硬編。
請逐檔提出修改並用 npm run build 驗證。
```
