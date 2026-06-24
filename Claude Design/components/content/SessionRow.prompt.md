Programme timeline entry — a time/duration column beside the session title, speakers, abstract and an optional note pill.

```jsx
<SessionRow
  time="10:05am-10:50am"
  duration="45 mins"
  title="Latest Trends in Educational AI Applications"
  speakers="Prof. Cynthia Breazeal"
  abstract="AI literacy and fluency, and how AI can transform learning and teaching."
  note="AM session conducted in English."
/>
```

Stack rows in a grid with a small gap to build a day agenda. Only `time` and `title` are required — registration / break / lunch rows often have just those. The `note` pill is for language or logistics callouts.
