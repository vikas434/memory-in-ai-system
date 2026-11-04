# Memory in AI Systems

A growing explainer on how memory works in AI systems, built from handwritten lecture notes.

**Read it:** open [`index.html`](index.html), or the GitHub Pages site once Pages is enabled for this repo.

## Layout

| Path | What it holds |
|---|---|
| `index.html` | The explainer page. One section per concept; it grows as notes are added. |
| `raw/YYYY-MM-DD/` | Raw notes by the date they were pushed: the original handwritten PDF and a typed `notes.md`. |
| `assets/gifs/` | Hand-drawn notebook-style animations used in the page. |
| `scenes/` | Source for each animation, rendered in the explain-by-hand style (built on [khan-explainer](https://github.com/haiderfarooq3/khan-explainer), MIT). |

## Chapters so far

1. The stateless problem
2. The illusion of memory
3. Replay doesn't scale (cost and the context window)
4. "Just make the context window bigger"
5. Memory outside the model

## Adding notes

1. Put the day's notes in `raw/<date>/` (PDF plus typed `notes.md`).
2. Extend `index.html`: new or updated chapter, and a new entry in the notes log.
3. Add an animation in `scenes/` + `assets/gifs/` where a picture helps.
4. Before pushing: scan for personal data, keys and secrets.
