import { GitCompareArrows } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground text-sm">
      <a
        href="https://github.com/MajorTom327/gapped"
        target="_blank"
        rel="noreferrer"
        className={"group flex items-center gap-2"}
      >
        <GitCompareArrows />
        <span className="text-muted-foreground">Gapped</span>
      </a>
      <a href="https://valentin-thomas.com" className="text-foreground text-sm">
        by Valentin Thomas
      </a>
    </footer>
  );
};
