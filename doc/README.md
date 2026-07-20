# Programme reference documents

These Word files are **editorial reference only** — the live site reads from
`src/content/pages/*.md`, not from this folder.

## Folder layout

| Folder | Purpose |
|---|---|
| `en/` | English programme drafts (official source of truth for the website) |
| `zh/` | Chinese programme drafts (add here when English is finalised) |

Superseded drafts live in `_archive/doc/`.

## Workflow

1. Edit the latest draft in `en/`.
2. Transcribe changes into the `en:` values in `src/content/pages/*.md`.
3. When English is final, create or update Chinese drafts in `zh/`, then update the `zh:` values in the `.md` files.
4. Enable the Chinese site by setting `ZH_HK_ENABLED = true` in `src/content/programme.ts`.
