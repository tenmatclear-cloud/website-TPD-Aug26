# Editing the website content

**Who this is for:** anyone updating workshop copy, times, sessions, modules, or info pages.  
**You do not need Cursor or coding skills.** Edit the `.md` files in this folder only.

**Official language on the live site:** English (`en`).  
Chinese (`zh`) values are kept for a future release — **do not delete them**. You may leave `zh` unchanged while English is being finalised.

---

## Quick start (GitHub, no local setup)

1. Open this folder on GitHub: `src/content/pages/`
2. Click the file you need (see [Which file to edit](#which-file-to-edit)).
3. Click the pencil icon (**Edit**).
4. Change only the text inside quotes. Keep structure, keys, and indentation.
5. Scroll down → choose **Create a new branch and start a pull request** (preferred) → Propose changes.
6. Someone reviews the PR and merges it into `main`. After deploy, the live site updates.

Avoid **Commit directly to the `main` branch** unless you are sure the change is tiny and correct. A pull request lets another person catch broken quotes or indentation before the site breaks.

---

## Which file to edit

| File | What it controls |
|---|---|
| `home.md` | Workshop name, dates, venue, audience line, hero intro, feature cards, impact stats, takeaways, Day 1–3 summary cards (date / time / audience / venue / focus), footer EDB logo toggle |
| `day-1.md` | Day 1 intro, goals, and the full session-by-session agenda |
| `day-2.md` | Day 2 intro, goals, daily timetable (`schedule`), primary-school module list |
| `day-3.md` | Day 3 intro, goals, daily timetable (`schedule`), secondary + TechEd module list |
| `resources.md` | Resources page cards, links, notes, warnings |
| `logistics.md` | Logistics / 活動須知 items, bullet points, enquiry contacts |
| `media.md` | Photos and Recordings page |

---

## Golden rules

1. **Content lives between the two `---` lines** at the top and bottom of each file.
2. **Most text is bilingual.** The live site currently shows `en` only:
   ```yaml
   title: { en: "Welcoming Message", zh: "歡迎辭" }
   ```
   Longer paragraphs often use this form instead:
   ```yaml
   abstract:
     en: "Longer paragraph in English."
     zh: "較長的中文段落。"
   ```
3. **If your English text contains a double quote `"`, escape it as `\"`:**
   ```yaml
   en: "The \"AI + Subjects\" modules"
   ```
4. **Keep indentation exactly as it is.** Use spaces, never tabs. Indentation defines which lines belong together.
5. **Lines starting with `#` are comments** for editors. The site ignores them.
6. **To add a list item:** copy a whole existing `- ` block (from its `- ` down to the blank line before the next `- `), paste it where you want it, then change the text.
7. **To remove a list item:** delete that whole `- ` block.
8. **Do not rename keys** (`time:`, `title:`, `sessions:`, etc.) and do not remove the `en` / `zh` structure.

---

## Day 1 — change a time, edit a session, or add a session

File: `day-1.md`

### Structure of the file

- `intro:` — short paragraph at the top of the Day 1 page  
- `goals:` — list of learning goals (`- en:` / `zh:`)  
- `sessions:` — the agenda, **top to bottom = order on the page**

### Three kinds of rows under `sessions:`

#### 1) Normal session (one title for everyone)

```yaml
  - time: "9:15am – 9:25am"
    duration: "10 mins"
    title: { en: "Welcoming Message", zh: "歡迎辭" }
    speakers: { en: "Ir. Daniel LAI", zh: "黎達強工程師" }   # optional
    abstract:                                               # optional
      en: "Longer paragraph in English."
      zh: "較長的中文段落。"
    note: { en: "Conducted in English", zh: "以英語進行" }    # optional
    room: "LT1"                                             # optional
```

**Change only the time:** edit `time` and, if needed, `duration`. Leave the rest.

#### 2) Grey divider band (e.g. “AM Session”)

```yaml
  - heading: { en: "AM Session — Building the Foundation", zh: "上午環節 — 建立基礎" }
    note: { en: "Conducted in English", zh: "以英語進行" }   # optional
    room: "LT1"                                            # optional
```

A divider has **no** `time` / `duration` / `title`. It only has `heading` (plus optional `note` / `room`).

#### 3) Split session (Primary and Secondary in parallel)

```yaml
  - time: "2:00pm – 2:45pm"
    duration: "45 mins"
    tracks:
      - audience: { en: "Primary Schools", zh: "小學" }
        room: "LT1"
        title: { en: "Session title", zh: "環節題目" }
        speakers: { en: "Speaker names", zh: "講者姓名" }
        abstract:                                          # optional
          en: "English abstract."
          zh: "中文摘要。"
      - audience: { en: "Secondary Schools", zh: "中學" }
        room: "LT2"
        title: { en: "Session title", zh: "環節題目" }
        speakers: { en: "Speaker names", zh: "講者姓名" }
```

### Add a new Day 1 session

1. Find the place in `sessions:` where it should appear (order = display order).
2. Copy a similar existing block (normal **or** split — match the type you need).
3. Paste it, then update `time`, `duration`, `title`, and any optional fields.
4. Keep a blank line between blocks if neighbouring blocks already have one.

Minimal new normal session:

```yaml
  - time: "3:00pm – 3:30pm"
    duration: "30 mins"
    title: { en: "New Session Title", zh: "新環節題目" }
    speakers: { en: "Speaker Name", zh: "講者姓名" }
```

### Field cheat sheet (Day 1)

| Field | Required? | Notes |
|---|---|---|
| `time` | For timed rows | e.g. `"9:15am – 9:25am"` |
| `duration` | Recommended for timed rows | e.g. `"10 mins"` |
| `title` | Normal session | Bilingual `{ en, zh }` |
| `heading` | Divider only | Use instead of `title` |
| `speakers` | Optional | Bilingual |
| `abstract` | Optional | Multi-line `en` / `zh` |
| `note` | Optional | Small note under the row |
| `room` | Optional | Plain string, same in both languages, e.g. `"LT1"` |
| `tracks` | Split sessions | Each track can have `audience`, `title`, `speakers`, `abstract`, `room` |

---

## Day 2 & Day 3 — timetable and modules

Files: `day-2.md`, `day-3.md`

### Shared structure

- `intro:` — page intro  
- `goals:` — goal list  
- `schedule:` — high-level daily timetable (AM / lunch / PM)  
- `modules:` — subject module cards

### Daily timetable (`schedule`)

```yaml
schedule:
  - time: "9:30am – 12:30pm"
    label: { en: "AM session", zh: "上午環節" }
  - time: "12:30pm – 1:45pm"
    label: { en: "Lunch break", zh: "午膳時間" }
  - time: "1:45pm – 4:45pm"
    label: { en: "PM session", zh: "下午環節" }
```

Edit `time` and/or `label` text. To add a row, copy a `- ` block.

### Module card (`modules`)

```yaml
  - title: { en: "TechEd P4", zh: "科技教育 小四" }
    audience: { en: "Primary", zh: "小學" }
    lessons: { en: "Lessons 1–6", zh: "第1至6課" }   # optional
    room: "WMY 407"                                 # optional; plain string
    facilitators:
      - "Dr. Sharifa ALGHOWINEM (MIT RAISE)"
      - "Ms. YIU Po Fun (Ling To Catholic Primary School)"
```

- `facilitators` is a **plain list of name strings** (not `{ en, zh }`) — names display the same in both languages.
- To add a facilitator: add another `- "Name (School)"` line under `facilitators:`.
- To add a module: copy a whole module block and edit it.
- Day 2 = primary modules; Day 3 = secondary + TechEd (edit the correct file).

---

## Home page (`home.md`)

### Workshop identity (header, hero, footer)

```yaml
projectName: { en: "JC GoAI", zh: "JC GoAI" }
title: { en: "Teacher Professional Development Workshop 2026", zh: "教師專業發展工作坊 2026" }
dateRange: { en: "26–28 August 2026", zh: "2026年8月26日至28日" }
venue: { en: "The Chinese University of Hong Kong", zh: "香港中文大學" }
audience: { en: "...", zh: "..." }
showEdbLogo: true          # set false to hide the Education Bureau logo in the footer
heroIntro:
  en: "..."
  zh: "..."
```

### Feature cards, impact stats, takeaways

`accent` on a feature card must be one of: `programme` (orange), `teachers` (green), `schools` (yellow).

```yaml
features:
  eyebrow: { en: "What to expect", zh: "活動內容" }
  title: { en: "Building our AI-ready community", zh: "三日，一個社群" }
  items:
    - accent: programme
      meta: { en: "Our Programme", zh: "計劃內容" }
      title: { en: "Three-day guide", zh: "三日導覽" }
      desc:
        en: "..."
        zh: "..."

impact:
  stats:
    - value: "3"
      label: { en: "Workshop days", zh: "工作坊日數" }

takeaways:
  items:
    - en: "..."
      zh: "..."
```

### Day 1–3 summary cards (`days:`)

These appear on the Day pages as the “schedule at a glance” header (date, time, audience, venue, focus).  
Venue can mix plain text and map links:

```yaml
days:
  - day: 1
    date: { en: "26 August 2026 (Wednesday)", zh: "2026年8月26日（星期三）" }
    time: { en: "Full day", zh: "全日" }
    audience: { en: "...", zh: "..." }
    venue:
      - kind: link
        text: { en: "Yasumoto International Academic Park (YIA)", zh: "宇森國際學術園（YIA）" }
        url: "https://www.google.com/maps/search/?api=1&query=..."
      - kind: text
        text: { en: " Lecture Theatres 1 & 2", zh: " 第1及2演講廳" }
    focus:
      en: "..."
      zh: "..."
```

- `kind: link` needs both `text` and `url`.
- `kind: text` needs only `text` (often starts with a leading space so it reads smoothly after a link).

If you change the workshop date or venue overview, update **both** `home.md` (`dateRange` / `days`) **and** the relevant `day-*.md` agenda.

---

## Resources (`resources.md`)

Each card is one `- ` item under `items:`.

**Simple card with one link:**

```yaml
  - title: { en: "GoAI Platform", zh: "GoAI 平台" }
    body:
      en: "..."
      zh: "..."
    note:                                                    # optional
      en: "..."
      zh: "..."
    href: "https://example.com/"
    linkLabel: { en: "Open link", zh: "開啟連結" }
```

**Card with several links** (use `links:` instead of a single `href`):

```yaml
  - title: { en: "Learning and Teaching Resources", zh: "學與教資源" }
    body:
      en: "..."
      zh: "..."
    links:
      - href: "https://..."
        linkLabel: { en: "Full suite of AI resources", zh: "全套人工智能資源" }
      - href: "https://..."
        linkLabel: { en: "Link to Google Form", zh: "Google 表格連結" }
        note:                                              # optional, under that link
          en: "..."
          zh: "..."
    warning:                                               # optional callout box
      title: { en: "Important Resource Note", zh: "資源使用重要提示" }
      body:
        en: "..."
        zh: "..."
```

---

## Logistics (`logistics.md`)

**Normal item:**

```yaml
  - title: { en: "Transport", zh: "交通" }
    body:
      en: "..."
      zh: "..."
```

**Item with bullet points:**

```yaml
  - title: { en: "Campus Entry", zh: "校園進入" }
    body:
      en: "..."
      zh: "..."
    points:
      - en: "Your HKID card"
        zh: "你的香港身份證"
      - en: "A visitor QR code..."
        zh: "訪客二維碼..."
```

**Highlighted enquiry block with contacts:**

```yaml
  - title: { en: "Enquiry", zh: "查詢" }
    variant: highlight
    columns:
      - label: { en: "Primary Schools", zh: "小學" }
        name: "Ms. Vanessa Kiu"
        phone: "+852 9032 0794"
      - label: { en: "Secondary Schools", zh: "中學" }
        name: "Ms. Didy Wan"
        phone: "+852 6324 8054"
```

`columns` may also use `email:` instead of (or as well as) `phone:`.  
`variant` can be `highlight` or `warning`.

---

## Media (`media.md`)

Same shape as a simple info page: `title`, `intro`, and `items` with `title` / `body`. Update the placeholder text when photos or recordings are ready. You can add `href` + `linkLabel` later if you want outbound links (same pattern as Resources).

---

## Common mistakes (and how to fix them)

| Mistake | What happens | Fix |
|---|---|---|
| Missing closing `"` | Build / preview may fail | Every opening `"` needs a matching `"` |
| Unescaped `"` inside text | Parse error | Write `\"` |
| Tab characters for indent | Structure breaks | Use spaces only; match neighbours |
| Deleted a `zh:` line | Future Chinese release incomplete | Keep `zh` even if you only change `en` |
| Changed `accent` to a new word | Colour may not apply | Only `programme`, `teachers`, or `schools` |
| Edited Day 1 time in `home.md` only | Agenda and header disagree | Update `day-1.md` sessions **and** `home.md` `days` if the summary should change |
| Pasted Word/Google Docs curly quotes `“ ”` | Can confuse parsers | Prefer straight quotes `"` |

If something looks wrong after merge, the error message usually names the file and line — check that line for quotes and indentation first.

---

## After editing

- **On GitHub:** open a pull request → ask a teammate to review → merge.  
- **Locally (optional):** `npm run dev` for live preview, or `npm run build` to verify the site builds.

---

## Enabling the Chinese site later (developers)

When English is final and Chinese copy is ready:

1. Update all `zh` values in these `.md` files.  
2. In `src/content/programme.ts`, set `ZH_HK_ENABLED = true`.  
3. Rebuild — `/zh-hk/` pages and the language switcher appear automatically.

Content editors normally only do step 1; steps 2–3 are a code change.
