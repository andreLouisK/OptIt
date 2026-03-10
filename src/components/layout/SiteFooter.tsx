export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} OptIT. Alle rettigheter reservert.</p>
        <p className="text-slate-500">
          Industriell digitalisering · CAD · CAM · ERP · PLM / PDM
        </p>
      </div>
    </footer>
  );
}

