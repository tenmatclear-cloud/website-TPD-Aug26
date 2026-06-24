The GOAI wordmark — the brand's navy + gold geometric lockup (G, gold O, navy triangle-A, gold I).

```jsx
<Logo variant="mark" height={34} src="assets/goai-mark.png" />
<Logo variant="full" height={64} src="assets/goai-logo.png" />
```

`variant="mark"` is the symbol only — use in compact site headers. `variant="full"` adds the bilingual "JC GoAI · 賽馬會人工智能教育" lockup — use in footers, hero panels, login. Set `reversed` for the white-on-navy variant (navy parts become white, gold kept) when placing on dark surfaces. The image `src` resolves relative to the host HTML page, so pass the correct relative path. Place the logo on white or navy (never on a busy photo without a plate). Assets: `assets/goai-logo.png`, `assets/goai-mark.png`, and the reversed `assets/goai-logo-white.png`, `assets/goai-mark-white.png`.
