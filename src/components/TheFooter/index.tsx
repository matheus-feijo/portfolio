import { Envelope } from "@phosphor-icons/react";

export function TheFooter() {
  return (
    <footer className="w-full bg-[#10121e] py-8">
      <div className="sm:flex-row mx-auto flex w-4/5 max-w-7xl flex-col items-center justify-between rounded-t-lg bg-[#181a28] px-6 py-6 shadow-lg mobile:py-4">
        <div className="sm:flex-row sm:items-center sm:gap-5 flex flex-col items-center gap-2">
          <a
            href="mailto:mat.feijo2506@gmail.com"
            className="flex items-center gap-2 rounded-md px-3 py-2 transition-all duration-200 hover:bg-white/10"
          >
            <Envelope
              size={22}
              weight="fill"
              className="text-white transition-colors duration-200 hover:text-[#FF4A57]"
            />
            <span className="text-sm text-white transition-colors duration-200 hover:text-[#FF4A57]">
              mat.feijo2506@gmail.com
            </span>
          </a>
        </div>

        <div className="sm:mb-0 sm:text-left mb-4 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Matheus Feijó.
          </p>
        </div>
      </div>
    </footer>
  );
}
