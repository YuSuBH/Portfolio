import { useEffect, useRef } from "react";

const WORDS = [
  "React", "TypeScript", "Node", "Next.js", "Vite", "Git",
  "HTML", "CSS", "API", "SQL", "Docker", "Linux",
  "Python", "AWS", "Tailwind", "GraphQL", "REST", "Rust",
];

/** Build a long repeating sequence of word chars with gaps between words. */
function makeSequence(): string[] {
  const out: string[] = [];
  const count = 30 + Math.floor(Math.random() * 20);
  for (let i = 0; i < count; i++) {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    for (const ch of word) out.push(ch);
    // 1-3 blank gaps between words
    const gap = 1 + Math.floor(Math.random() * 3);
    for (let g = 0; g < gap; g++) out.push("");
  }
  return out;
}

const FONT_SIZE = 14;
const FPS = 20;
const ALPHA_DECAY = 0.88;

interface TrailCell {
  char: string;
  row: number;
  alpha: number;
  isHead: boolean;
}

interface Column {
  y: number;
  speed: number;
  maxOpacity: number;
  trail: TrailCell[];
  lastHeadRow: number;
  sequence: string[];  // word chars to stream down
  seqPos: number;      // current position in sequence
}

function makeColumn(totalRows: number): Column {
  return {
    y: -Math.floor(Math.random() * totalRows),
    speed: 0.3 + Math.random() * 0.7,
    maxOpacity: 0.5 + Math.random() * 0.4,
    trail: [],
    lastHeadRow: -999,
    sequence: makeSequence(),
    seqPos: 0,
  };
}

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDarkRef = useRef(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;
    const interval = 1000 / FPS;
    let columns: Column[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const numCols = Math.floor(canvas.width / FONT_SIZE);
      const numRows = Math.floor(canvas.height / FONT_SIZE);
      columns = Array.from({ length: numCols }, () => makeColumn(numRows));
    };

    const tick = (now: number) => {
      animId = requestAnimationFrame(tick);
      if (now - lastTime < interval) return;
      lastTime = now;

      const dark = isDarkRef.current;
      const numRows = Math.floor(canvas.height / FONT_SIZE);

      // Fully transparent each frame — no black fill
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${FONT_SIZE}px "Courier New", monospace`;

      columns.forEach((col, colIdx) => {
        const x = colIdx * FONT_SIZE;
        const headRow = Math.floor(col.y);

        // Mark previous head cells as non-head so they start decaying
        col.trail.forEach((cell) => { cell.isHead = false; });

        // Push a new head cell if the head moved to a new row
        if (headRow !== col.lastHeadRow && headRow >= 0 && headRow < numRows) {
          // Read next char from word sequence (skip blanks — they add spacing)
          const char = col.sequence[col.seqPos % col.sequence.length];
          col.seqPos++;
          if (char) {
            col.trail.push({
              char,
              row: headRow,
              alpha: col.maxOpacity,
              isHead: true,
            });
          }
          col.lastHeadRow = headRow;
        }

        // Decay alpha of all non-head cells
        col.trail.forEach((cell) => {
          if (!cell.isHead) cell.alpha *= ALPHA_DECAY;
        });

        // Remove fully faded cells
        col.trail = col.trail.filter((cell) => cell.alpha > 0.015);

        // Draw all cells
        col.trail.forEach((cell) => {
          if (cell.row < 0 || cell.row >= numRows) return;
          if (cell.isHead) {
            ctx.fillStyle = dark
              ? `rgba(180, 255, 200, ${cell.alpha})`
              : `rgba(40, 30, 140, ${cell.alpha})`;
          } else {
            ctx.fillStyle = dark
              ? `rgba(0, 200, 80, ${cell.alpha * 0.75})`
              : `rgba(79, 70, 229, ${cell.alpha * 0.65})`;
          }
          ctx.fillText(cell.char, x, cell.row * FONT_SIZE + FONT_SIZE);
        });

        // Advance head
        col.y += col.speed;

        // Reset column when head is off-screen and trail has faded out
        if (headRow > numRows && col.trail.length === 0) {
          columns[colIdx] = makeColumn(numRows);
        }
      });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain-canvas" />;
};

export default MatrixRain;

