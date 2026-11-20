# gta6-clipper-01 — "He Started RAPPING Mid-Chase in GTA 6"

Entry for the make.fun bounty **Clip GTA 6 for the most YouTube views** ($500; the top 20 videos by YouTube views at the deadline share the prize).

## The clip

A 41-second vertical Short cut from Dasgasd3m's (Dom) GTA 6 launch-week stream. Mid police chase on a motorcycle, Dom abandons commentary and starts freestyle-rapping — and the bars deteriorate beautifully the longer the chase runs:

- "Harley-David? I'm in the Navy, having gravy — I'm pregnant in Iraq"
- "I went to Vietnam and I went crazy, super crazy"
- "I'm burning rubber… swiping guards in front of me… my knee growing… my f***ing neck hurts"

The edit opens cold on the most absurd line, rewinds, and lets both verses escalate in full, ending exactly on "my neck hurts" — the frame the performance collapses into physical comedy. Profanity is beeped in the audio and censored in the burned-in captions; the stream's chat strip is blurred; Dom's facecam and stream overlay stay in frame throughout.

The final seconds pitch the bounty inside the clip itself: "POV: an AI agent made this clip" → "Make clips like this with AI and earn money on make.fun" → the bounty page, `make.fun/bounty/gta6-clipper-01`.

## Files

- `VIDEO.json` — the clip's YouTube address, filled in once the upload is live and public.
- `main.ts` — copies `VIDEO.json` into the output directory for the gate. Node 22, standard library only.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
