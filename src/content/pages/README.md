# Editing the website content

All the text on the site lives in the `.md` files in this folder — **one file per page**.
You can update the site by editing these files only. **No code changes are needed.**

| File | Controls |
|---|---|
| `home.md` | Workshop name, dates, venue, the intro paragraph, learning objectives, the three "schedule at a glance" day cards, and "who should attend". Also feeds the header & footer. |
| `day-1.md` | Day 1 goals and the full session-by-session programme. |
| `day-2.md` | Day 2 goals, daily timetable, and the primary-school module list. |
| `day-3.md` | Day 3 goals, daily timetable, and the secondary + TechEd module list. |
| `resources.md` | The Resources page. |
| `logistics.md` | The Logistics (活動須知) page. |
| `media.md` | The Photos and Recordings page. |

## The golden rules

1. Everything between the two `---` lines at the top of each file is the content.
2. Every piece of text comes in **two languages**: `en` (English) and `zh` (繁體中文).
   Edit the words inside the `"quotes"`. Keep both languages in sync.
   ```yaml
   title: { en: "Welcoming Message", zh: "歡迎辭" }
   ```
3. If your text contains a `"` double-quote, write it as `\"` — e.g.
   `en: "The \"AI + Subjects\" modules"`.
4. Keep the indentation (the leading spaces) exactly as it is. Indentation is how the
   file knows what belongs to what. Use spaces, never tabs.
5. Lines starting with `#` are comments / notes for you — they are ignored by the site.

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

## After editing

Save the file. If you have the site running locally (`npm run dev`) it refreshes
automatically. Otherwise rebuild with `npm run build`. If a build error mentions a file
here, the most common cause is a missing quote or wrong indentation on the line it names.
