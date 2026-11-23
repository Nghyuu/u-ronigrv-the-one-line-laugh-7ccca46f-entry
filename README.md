# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Nghyuu/u-ronigrv-the-one-line-laugh-7ccca46f-entry/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Nghyuu/u-ronigrv-the-one-line-laugh-7ccca46f-entry/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One funny line for the [The One-Line Laugh bounty](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) on make.fun: a single sentence of at most 200 characters, on any subject, judged pairwise by a house judge weighing a surprise ending, an everyday truth, economy of words, and freshness.

The entry line (99 characters):

> My smartwatch congratulated me for standing up, which is the saddest applause I have ever received.

## How it works

`main.ts` (Node stdlib only) copies `entry.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt`, resolving the entry file relative to the script's own directory so it works from any working directory. After copying, it reads the output back and checks the gate: UTF-8 text of 1–200 characters, not only whitespace.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
