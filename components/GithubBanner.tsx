export default function GithubBanner() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1500 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="1500" height="500" fill="url(#bgGradient)" />

        {/* Decorative Circles */}
        <circle cx="1200" cy="100" r="200" fill="#38bdf8" opacity="0.08" />
        <circle cx="1300" cy="400" r="150" fill="#6366f1" opacity="0.08" />

        {/* Name */}
        <text
          x="100"
          y="200"
          fontSize="64"
          fontWeight="700"
          fill="url(#textGradient)"
          fontFamily="Poppins, sans-serif"
        >
          Abdullah Al Saif
        </text>

        {/* Role */}
        <text
          x="100"
          y="260"
          fontSize="32"
          fill="#cbd5f5"
          fontFamily="Inter, sans-serif"
        >
          Full Stack Developer
        </text>

        {/* Tagline */}
        <text
          x="100"
          y="320"
          fontSize="24"
          fill="#94a3b8"
          fontFamily="Inter, sans-serif"
        >
          Building scalable apps with React, Next.js & Node.js
        </text>

        {/* Code Block Style */}
        <g transform="translate(900, 220)">
          <rect
            width="420"
            height="180"
            rx="16"
            fill="#020617"
            stroke="#334155"
          />

          <text
            x="20"
            y="50"
            fontSize="18"
            fill="#38bdf8"
            fontFamily="JetBrains Mono, monospace"
          >
            const dev = {"{"}
          </text>

          <text
            x="40"
            y="80"
            fontSize="18"
            fill="#a78bfa"
            fontFamily="JetBrains Mono, monospace"
          >
            role: "Full Stack",
          </text>

          <text
            x="40"
            y="110"
            fontSize="18"
            fill="#34d399"
            fontFamily="JetBrains Mono, monospace"
          >
            stack: ["Next.js", "Node"],
          </text>

          <text
            x="20"
            y="140"
            fontSize="18"
            fill="#38bdf8"
            fontFamily="JetBrains Mono, monospace"
          >
            {"}"}
          </text>
        </g>
      </svg>
    </div>
  );
}
