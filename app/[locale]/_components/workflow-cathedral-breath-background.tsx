/** Viewport motes in a 1920×1080 viewBox (uniform scale so they stay round). */
const DUST_MOTES = [
  [76, 86, 1.6],
  [210, 238, 2.2],
  [346, 64, 1.3],
  [442, 443, 1.9],
  [557, 151, 1.5],
  [672, 680, 2.4],
  [787, 97, 1.2],
  [902, 356, 1.8],
  [998, 767, 1.4],
  [1114, 194, 2.1],
  [1229, 518, 1.3],
  [1363, 76, 1.9],
  [1459, 410, 1.6],
  [1574, 637, 2.2],
  [1690, 130, 1.3],
  [1786, 475, 1.8],
  [134, 594, 1.5],
  [269, 842, 1.9],
  [403, 983, 1.3],
  [518, 724, 1.6],
  [634, 907, 2.1],
  [749, 551, 1.2],
  [864, 1037, 1.8],
  [979, 22, 1.5],
  [1094, 940, 1.3],
  [1210, 313, 1.9],
  [1325, 799, 1.4],
  [1440, 227, 2.2],
  [1555, 886, 1.2],
  [1670, 713, 1.8],
  [1805, 983, 1.6],
  [38, 389, 1.3],
  [173, 1004, 1.8],
  [307, 508, 1.5],
  [461, 32, 2.1],
  [595, 302, 1.2],
  [730, 821, 1.9],
  [845, 205, 1.3],
  [960, 626, 1.6],
  [1075, 443, 2.4],
  [1190, 1026, 1.3],
  [1306, 119, 1.8],
  [1421, 572, 1.5],
  [1536, 292, 1.9],
  [1651, 950, 1.2],
  [1747, 335, 1.6],
  [115, 745, 2.1],
  [250, 130, 1.3],
  [365, 367, 1.8],
  [499, 950, 1.5],
  [653, 54, 1.9],
  [806, 670, 1.2],
  [922, 259, 2.2],
  [1037, 853, 1.4],
  [1171, 173, 1.3],
  [1286, 454, 1.8],
  [1402, 1048, 1.6],
  [1517, 86, 1.2],
  [1632, 551, 1.9],
  [1766, 788, 1.5],
  [96, 454, 1.4],
  [422, 205, 1.7],
  [614, 102, 1.3],
  [883, 918, 2],
  [1250, 637, 1.5],
  [1488, 162, 1.8],
  [1718, 616, 1.4],
  [58, 821, 1.6],
  [288, 616, 1.2],
  [538, 378, 1.9],
  [768, 486, 1.5],
  [1018, 702, 1.3],
  [1267, 54, 1.7],
  [1498, 821, 1.4],
  [1728, 227, 2],
  [192, 54, 1.5],
  [384, 702, 1.8],
  [710, 918, 1.3],
  [998, 140, 1.6],
  [1344, 378, 1.9],
  [48, 180, 1.4],
  [156, 720, 1.7],
  [240, 960, 1.3],
  [320, 120, 1.8],
  [400, 540, 1.5],
  [480, 860, 2],
  [560, 40, 1.4],
  [640, 400, 1.6],
  [720, 240, 1.3],
  [800, 1040, 1.9],
  [880, 480, 1.5],
  [960, 800, 1.7],
  [1040, 60, 1.4],
  [1120, 640, 1.8],
  [1200, 280, 1.3],
  [1280, 920, 1.6],
  [1360, 160, 2.1],
  [1440, 700, 1.4],
  [1520, 360, 1.7],
  [1600, 40, 1.5],
  [1680, 520, 1.9],
  [1760, 900, 1.3],
  [1840, 200, 1.6],
  [88, 300, 1.8],
  [200, 480, 1.4],
  [360, 820, 1.6],
  [520, 160, 1.3],
  [680, 600, 2],
  [840, 40, 1.5],
  [1000, 360, 1.7],
  [1160, 880, 1.4],
  [1320, 500, 1.8],
  [1480, 1000, 1.3],
  [1640, 260, 1.6],
  [1800, 740, 1.9],
] as const;

/**
 * Latar hidup Workflow (T-054.2 / T-054.3): debu katedral saja,
 * nempel viewport seperti wallpaper Home. Gerbang dan filigree dicabut.
 * Setiap mote: glow + starburst aperture + flare anamorphic (optik kamera).
 */
export function WorkflowCathedralBreathBackground() {
  return (
    <div className="wf-cathedral-dust" aria-hidden="true">
      <svg
        className="wf-cathedral-dust-svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="currentColor"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="wf-cathedral-mote-glow"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.88" />
            <stop offset="16%" stopColor="currentColor" stopOpacity="0.34" />
            <stop offset="42%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="wf-cathedral-mote-glow-wine"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-accent-muted)"
              stopOpacity="0"
            />
            <stop
              offset="38%"
              stopColor="var(--color-accent-muted)"
              stopOpacity="0.16"
            />
            <stop
              offset="100%"
              stopColor="var(--color-accent-muted)"
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient
            id="wf-cathedral-mote-flare"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="32%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.72" />
            <stop offset="68%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="wf-cathedral-mote-flare-core"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="38%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="62%" stopColor="currentColor" stopOpacity="0.22" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <g id="wf-cathedral-mote-spark">
            <circle r="9.2" fill="url(#wf-cathedral-mote-glow-wine)" />
            <circle r="7.1" fill="url(#wf-cathedral-mote-glow)" />
            <ellipse
              rx="28"
              ry="1.15"
              fill="url(#wf-cathedral-mote-flare)"
            />
            <ellipse
              rx="13.5"
              ry="1.7"
              fill="url(#wf-cathedral-mote-flare-core)"
            />
            <ellipse rx="1.25" ry="13.6" opacity="0.34" />
            <ellipse rx="0.4" ry="11.8" opacity="0.7" />
            <ellipse rx="11.6" ry="1.05" opacity="0.28" />
            <ellipse rx="9.4" ry="0.38" opacity="0.7" />
            <g opacity="0.16">
              <ellipse rx="0.4" ry="7.2" transform="rotate(45)" />
              <ellipse rx="0.4" ry="7.2" transform="rotate(-45)" />
            </g>
            <circle r="1.15" />
            <circle className="wf-cathedral-core" r="0.42" />
          </g>
        </defs>
        {DUST_MOTES.map(([x, y, r], index) => (
          <g key={`${x}-${y}-${r}-${index}`} className="wf-cathedral-mote">
            <g transform={`translate(${x} ${y}) scale(${r * 1.15})`}>
              <g className="wf-cathedral-optics">
                <use href="#wf-cathedral-mote-spark" />
              </g>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
