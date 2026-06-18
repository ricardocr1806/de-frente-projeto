import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <Logo />
          <p className="text-sm text-mist">
            Reconstruindo o diálogo, restaurando a conexão.
          </p>
        </div>
        <p className="text-xs leading-relaxed text-mist/70">
          © {new Date().getFullYear()} Pierry Rodrigues. Todos os direitos
          reservados.
          <br className="hidden lg:block" /> Este conteúdo tem caráter educativo
          e não substitui acompanhamento profissional.
        </p>
      </div>
    </footer>
  );
}
