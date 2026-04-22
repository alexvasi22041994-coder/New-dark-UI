'use client';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24 bg-bg text-white">
      <div className="max-w-6xl mx-auto bento-grid grid-rows-auto">
        {/* Status Card */}
        <div className="bento-card col-span-4 md:col-span-2 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[12px] uppercase tracking-wider font-semibold text-text-dim">Project Status</span>
            <span className="text-success text-[12px] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Live
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Next.js App Ready
          </h1>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-accent w-[65%]"></div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bento-card col-span-4 md:col-span-1">
          <div className="text-[12px] uppercase tracking-wider font-semibold text-text-dim mb-3">System Meta</div>
          <p className="text-sm font-mono leading-relaxed text-text-dim">
            Dependencies Installed & Ready
          </p>
        </div>

        {/* Documentation Link Card */}
        <div className="bento-card col-span-4 md:col-span-1 group hover:border-accent transition-colors duration-300">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full"
          >
            <div className="text-[12px] uppercase tracking-wider font-semibold text-text-dim mb-3">Resources</div>
            <h2 className="text-xl font-semibold flex items-center gap-2 group-hover:text-accent transition-colors">
              Docs <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </h2>
            <p className="text-sm text-text-dim mt-2 leading-relaxed">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>

        {/* Placeholder for Terminal/Code visual from design */}
        <div className="bento-card col-span-4 md:col-span-4 h-48 md:h-64 font-mono text-sm overflow-hidden bg-black/50">
          <div className="text-[12px] uppercase tracking-wider font-semibold text-text-dim mb-4">Initial Configuration</div>
          <div className="text-gray-400 space-y-1">
            <p>$ npm install next react react-dom</p>
            <p className="text-zinc-600">Packages: +150</p>
            <p className="text-success">Progress: [====================&gt;      ] 65%</p>
            <p className="mt-4">...initializing workspace</p>
            <p>...checking engine compatibility</p>
            <p className="text-accent underline">info</p> <p className="inline">Ready to compile.</p>
            <span className="inline-block w-2 h-4 bg-success ml-1 animate-pulse align-middle"></span>
          </div>
        </div>
      </div>
    </main>
  );
}
