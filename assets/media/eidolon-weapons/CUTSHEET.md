# Eidolon weapon reels — cut sheet (Oct 6, revised Oct 9)

Every reel = practice-range segment(s) from `raw/2026-10-06 19-11-50.mp4` (R), then a bot-match kill.
Hard cuts, 1920×1080 60 fps, H.264 CRF 22, AAC 192k, 80 ms audio fades at each cut. Sources:

- **R** = `assets/raw/2026-10-06 19-11-50.mp4` (new practice-range recording; the first ~62 s is the 30-kill warm-up and is unused)
- **M** = `assets/raw/2026-09-28 15-13-56.mp4` (bot matches; letterboxed → `crop=1440:810:0:0,scale=1920:1080`)
- **B** = `assets/raw/2026-09-28 15-10-11.mp4` · **E** = `assets/media/eidolon.mp4`

Times are seconds in the source. Kill moments (first frame of the kill-feed line) are noted so you can nudge in/out points.

| Reel | Range segment(s) (R) | What happens | Match segment |
|---|---|---|---|
| 01_the-fool | 64.0–79.0 | melee swings → kill @72.3, then dashes (alt) @74–78 | — (range only) |
| 02_the-chariot | 104.0–111.5 | primary kill @106.8, alt (deposed) @109.8 | M 824–829 (wrested Lucian) · M 443–447.5 (alt, deposed Navirosa) |
| 03_strength | 139.0–147.0 · 148.0–151.8 | orb kills @141.5, @146.0; then the alt: charged jump @148–149.5, airborne to ~151.5 (card hands off to the Fool on launch) | M 883–892 (double + Tower) |
| 04_the-tower | 155.0–165.5 | rockets, kills @160.8, @162.3, then alt swirl | M 116–131 (Tower triple) |
| 05_death | 191.0–199.0 | skull kills @194.0 and @198.0 | M 977–982.5 (befell Syrenthos) |
| 06_wheel-of-fortune | 211.8–216.0 | kill @214.0 (menu fade ends ~211.5) | M 1092–1099 (reconfigured Orkaria) |
| 07_temperance | 300.0–309.0 | beam kills @302.5, @306.0 | E 6–13 (alt-fire double) |
| 08_the-lovers | 226.0–234.3 · 238.0–241.0 | kills @231.0, @233.5; alt (betrayed) @239.5 | M 461–471 (chose / betrayed) |
| 09_the-devil | 247.0–257.5 | flame beam, kills @249.0, @256.0 | M 133–160 (5 Devil kills in a row) |
| 10_the-magician | 283.0–292.0 | kills @286.5, @291.0 (enemies cubed) | M 1213.5–1218.5 (veiled Navirosa) |
| 11_the-moon | 322.0–349.0 | scythe kill @327.5, alt charge (white world) @334–340, moon dimension @341–347, pervaded kill @347.5 | M 606–619.5 (6 Moon kills, cut before the death @620) · M 283.5–289.0 (alt → moon dimension, cut before getting shot @289.5) |
| 12_the-sun | 360.0–371.5 | fireball kill @365.0, then the big detonation @369 (4 kills) | M 497–509 (Sun wipes 7) |
| 13_justice | 269.0–277.8 | lance kill @272.0, then the alt fire-blast ("suppressed") kill @275.5 | B 23–32 (2 kills, BEGIN ANEW) |

Pause-menu frames in R to avoid: 10.0–10.5, 43–43.5, 52–52.5, 132.5–133.5, 138, 147–147.5, 153.5–154.5, 181.5, 187.5, 190, 210.5, 218, 373+.

## Rebuilding after a tweak
Edit `cutlist.tsv` (one reel per line: `name<TAB>SRC:start:end<TAB>…`), then on the machine with the raw files:

    python3 assets/raw/_claude_tmp_frames/build_reels.py 04_the-tower   # or no args for all

(The script was written for the Claude session shell; on Windows change the `RAW`/`OUT`/`SRC` paths at the top to `C:\Users\Gneeqo\Desktop\Portfolio\nicodev\...`.) The script re-cuts each segment, then concatenates. Posters live in `posters/` (`ffmpeg -ss 0.5 -i reel.mp4 -frames:v 1 posters/reel.jpg`).

## After rebuilding a reel: bust the browser cache
The `<video src>` / `poster` URLs on `games/eidolon/index.html` carry `?v=<file mtime>`. After re-cutting, refresh the tags (run from `nicodev/`):

    python3 -c "import re,os;p='games/eidolon/index.html';s=open(p,encoding='utf-8').read();s=re.sub(r'(src=\"|poster=\")(/assets/media/eidolon-weapons/[^\"?]+)(\?v=\d+)?\"',lambda m:f'{m.group(1)}{m.group(2)}?v={int(os.path.getmtime(m.group(2).lstrip(\"/\")))}\"',s);open(p,'w',encoding='utf-8').write(s)"

Otherwise `python -m http.server` sends no cache headers and the browser keeps playing the old file.

## Kill-feed verb → weapon (from the footage)
stepped through / preempted = Fool · suppressed = Justice alt (fire blast) · wrested = Chariot, deposed = Chariot alt · overcame = Strength · decimated = Tower · befell = Death · reconfigured = Wheel · mitigated = Temperance · chose = Lovers, betrayed = Lovers alt · beckoned = Devil · transmogrified = Magician · severed = Moon · hallowed = Sun, purged = Sun alt · rectified = Justice · pervaded = ? (seen once, off-screen).
