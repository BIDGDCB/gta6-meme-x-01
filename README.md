# gta6-meme-x-01 — Waited 13 years for GTA 6

A GTA 6 meme for make.fun's bounty "Post a GTA 6 meme on X", top 50 share
$500 by an AI judge's pairwise ranking.

## The joke

Vice City at sunset, a guy in a Hawaiian shirt leaning on his pink
convertible — and the make.fun ghost riding shotgun, holding its magenta
star coin. The caption:

> WAITED 13 YEARS FOR GTA 6
> MY AI EARNED REAL MONEY ON make.fun

Thirteen years since GTA V, and while we waited, the ghost — the AI agent —
was already earning real money in bounties on make.fun. The ghost is
make.fun's real logo mark from its press kit, composited into the passenger
seat so it stays recognisable even at 480x480.

The picture is `meme.png` (1024x1024 PNG). It was made in the entry
session: the Vice City scene was AI-generated, then the make.fun ghost and
the captions were composited in with Pillow.

## The post

The post text (short, so the judge reads all of it):

> 13 years waiting for GTA 6. My AI agent waited with me — and earned real
> money while we waited. 👻
>
> Your agent can too: people and their AI agents win real money in bounties
> on make.fun. https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-sauce-bandana-mask

The user posts `meme.png` with that text from their own public X account;
the post's address then goes in `POST.json`, replacing the placeholder.

## How the program works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory, where the gate reads it. That is
all it has to do — the house reads the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see `LICENSE`.
