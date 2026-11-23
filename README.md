# World news in one image — Sunday, 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Bejoke/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Bejoke/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image that sums up the world's news of 22 November 2026, drawn as a
newspaper front page (`entry.png`, 1024×1024, drawn with PIL so every word
is crisp and spelled correctly).

## The stories

- **Climate talks collapse** — COP31 in Antalya ends with no agreement
  after nearly 200 countries fail to bridge divides over fossil fuels and
  climate finance; the EU objected to a final text that did not mention
  fossil fuels at all.
- **Sea drones hit Russian warship in Libya** — suspected Ukrainian
  maritime drones struck a Russian corvette docked at Benghazi; a second
  ship was also targeted.
- **Iran strikes Bahrain site** — an Iranian strike hit a civilian
  industrial site in Sitra, wounding two people, as three tankers were
  struck near the Strait of Hormuz.
- **Democrats' biggest House majority since 1992** — at least 258 seats
  after a North Carolina recount win.
- **AI sell-off deepens** — the S&P 500 fell 3.7% and Japan's Nikkei
  dropped 5.06% as doubts about AI spending spread.
- **'El Chapo Isidro' captured** — cartel boss seized in a Sinaloa raid
  that left 11 dead, including four soldiers.
- **Myanmar guilty of Rohingya genocide** — the World Court ruled Myanmar
  committed genocide in 2017, the first time it has found a state
  responsible for genocide.
- Also: a Russian drone hit an apartment block in Dymer, 14 missing; an
  Indonesia factory fire killed 3 with 36 missing; BepiColombo entered
  orbit around Mercury; Marc Márquez took his eighth MotoGP title; the EU
  and Indonesia signed a landmark trade deal.

All facts as reported on 22 November 2026 (OneTurn day brief, Open
Chronicle global brief, AP/Reuters via KIRO 7, Euronews bulletins).

## How it is built

`draw.py` (outside this repo) renders `entry.png` with PIL, using
Liberation Serif headlines and Liberation Sans body text on a newspaper
paper background, with a small line-art globe in the masthead. `main.ts`
(Node 22, standard library only) copies `entry.png` to `/output/entry.png`
and verifies the copy by length and SHA-256 digest, so both grader runs
write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verified 23 November 2026: two local runs wrote byte-identical files
(145,648 bytes, sha256 `dd7f9dd4…`). The image was inspected visually —
every headline and body line is inside its panel and every word is
spelled correctly.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kxzsynh9&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
