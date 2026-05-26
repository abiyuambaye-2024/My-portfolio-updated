export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          <span className="text-accent">{"<"}</span>
          Abiyu Ambaye
          <span className="text-accent">{"/>"}</span>
          <span className="ml-2">— Solution Architect & QA Officer</span>
        </div>
        <div className="font-mono text-xs text-muted/50">
          © {new Date().getFullYear()} Abiyu Ambaye | Addis Ababa, Ethiopia
        </div>
      </div>
    </footer>
  );
}
