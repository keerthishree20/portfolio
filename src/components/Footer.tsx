export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-muted/50">
          &copy; {new Date().getFullYear()} KeerthiShree TS
        </p>
        <p className="text-[11px] text-muted/30">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
