import {Github} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-muted-foreground">
      <a href="https://github.com/MajorTom327/gapped" target="_blank" rel="noreferrer"
         className={"flex gap-2 items-center group"}>
        <Github/>
        <span className="text-muted-foreground">Gapped</span>
      </a>
      <a href="https://valentin-thomas.com" className="text-foreground text-sm">by Valentin Thomas</a>
    </footer>
  )
}