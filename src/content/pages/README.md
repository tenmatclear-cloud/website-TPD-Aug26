# Editing the website content

**Official language:** English (`en`). The site currently publishes English only.
Chinese (`zh`) keys remain in the files for a future release — do not remove them.

All the text on the site lives in the `.md` files in this folder — **one file per page**.
You can update the site by editing these files only. **No code changes are needed.**

| File | Controls |
|---|---|
| `home.md` | Workshop name, dates, venue, the intro paragraph, the three feature cards ("Three days, one community"), the impact stats, the takeaways ("What you'll take away"), and the day summaries used by the Day 1–3 page headers. Also feeds the header & footer. |
| `day-1.md` | Day 1 goals and the full session-by-session programme. |
| `day-2.md` | Day 2 goals, daily timetable, and the primary-school module list. |
| `day-3.md` | Day 3 goals, daily timetable, and the secondary + TechEd module list. |
| `resources.md` | The Resources page. |
| `logistics.md` | The Logistics page. |
| `media.md` | The Photos and Recordings page. |

## The golden rules

1. Everything between the two `---` lines at the top of each file is the content.
2. Every piece of text has an **English** (`en`) value — this is what the live site shows.
   Each field also has a **Chinese** (`zh`) value kept for a future Chinese release; you may
   leave `zh` as-is until the English copy is finalised.
   ```yaml
   title: { en: "Welcoming Message", zh: "歡迎辭" }
   ```
3. If your text contains a `"` double-quote, write it as `\"` — e.g.
   `en: "The \"AI + Subjects\" modules"`.
4. Keep the indentation (the leading spaces) exactly as it is. Indentation is how the
   file knows what belongs to what. Use spaces, never tabs.
5. Lines starting with `#` are comments / notes for you — they are ignored by the site.

## Enabling the Chinese site later

When the English programme is final and Chinese copy is ready:

1. Update the `zh` values in these `.md` files.
2. In `src/content/programme.ts`, set `ZH_HK_ENABLED = true`.
3. Rebuild — `/zh-hk/` pages and the language switcher will appear automatically.

## Adding or removing items in a list

Items in a list each start with `- `. To add one, copy an existing block (from its `- `
down to the line before the next `- `) and change the text. To remove one, delete its
whole block.

### A normal Day 1 session
```yaml
  - time: "9:15am – 9:25am"
    duration: "10 mins"
    title: { en: "Welcoming Message", zh: "歡迎辭" }
    speakers: { en: "Ir. Daniel LAI", zh: "黎達強工程師" }   # optional
    abstract:                                               # optional
      en: "Longer paragraph in English."
      zh: "較長的中文段落。"
    note: { en: "Conducted in English", zh: "以英語進行" }    # optional
```

### A grey divider band (e.g. "AM Session")
```yaml
  - heading: { en: "AM Session — Building the Foundation", zh: "上午環節 — 建立基礎" }
    note: { en: "Conducted in English", zh: "以英語進行" }    # optional
```

### A split session (two parallel tracks, Primary vs Secondary)
```yaml
  - time: "3:40pm – 4:10pm"
    duration: "30 mins"
    tracks:
      - audience: { en: "Primary Schools", zh: "小學" }
        title: { en: "Math & Science Education × AI", zh: "數學與科學教育 × 人工智能" }
        speakers: { en: "Subject Experts", zh: "學科專家" }
      - audience: { en: "Secondary Schools", zh: "中學" }
        title: { en: "Language Education × AI", zh: "語文教育 × 人工智能" }
        speakers: { en: "Subject Experts", zh: "學科專家" }
```

### A Day 2/3 module
`facilitators` is a plain list of names — names are shown the same in both languages,
so they are not translated.
```yaml
  - title: { en: "TechEd P4", zh: "科技教育 小四" }
    audience: { en: "Primary", zh: "小學" }
    lessons: { en: "Lessons 1–6", zh: "第1至6課" }   # optional
    facilitators:
      - "Dr. Sharifa ALGHOWINEM (MIT RAISE)"
      - "Ms. YIU Po Fun (Ling To Catholic Primary School)"
```

### Home page feature cards, impact stats, and takeaways
`home.md` groups the home-page sections under `features:`, `impact:`, and `takeaways:`.
The `accent` on a feature card is a keyword (`programme` = orange, `teachers` = green,
`schools` = yellow) — pick the meaning, the colour is applied for you.

```yaml
features:
  eyebrow: { en: "What to expect", zh: "活動內容" }
  title: { en: "Three days, one community", zh: "三日，一個社群" }
  items:
    - accent: programme
      meta: { en: "Our Programme", zh: "計劃內容" }
      title: { en: "Three-day guide", zh: "三日導覽" }
      desc:
        en: "Framework, pedagogy, international and local perspectives, and authentic implementation cases."
        zh: "涵蓋框架、教學法、國際及本地觀點，以及真實實踐案例。"

impact:
  eyebrow: { en: "Impact at a glance", zh: "成效概覽" }
  title: { en: "Built for Hong Kong classrooms", zh: "為香港課堂而設" }
  stats:
    - value: "3"
      label: { en: "Workshop days", zh: "工作坊日數" }

takeaways:
  eyebrow: { en: "Learning objectives", zh: "學習目標" }
  title: { en: "What you'll take away", zh: "你的收穫" }
  items:
    - en: "Develop a deeper understanding of JC GoAI AI learning and teaching resources and the design principles behind them."
      zh: "深入了解賽馬會人工智能教育計劃的人工智能學與教資源及其設計原則。"
```

## After editing

Save the file. If you have the site running locally (`npm run dev`) it refreshes
automatically. Otherwise rebuild with `npm run build`. If a build error mentions a file
here, the most common cause is a missing quote or wrong indentation on the line it names.
