import facebookLogo from "@/assets/images/facebook logo.webp";
import instagramLogo from "@/assets/images/insta logo.svg";
import githubLogo from "@/assets/images/githhub  logo.svg";

export default function Socials() {
  return (
    <div className="flex items-center gap-5">

      <a
        href="#"
        title="Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1684e8] text-xl text-white transition hover:-translate-y-1"
      >
        <img src={facebookLogo} alt="Facebook" className="h-6 w-6 object-contain" />
      </a>

      <a
        href="#"
        title="Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-xl text-white transition hover:-translate-y-1"
      >
        <img src={instagramLogo} alt="Instagram" className="h-6 w-6 object-contain" />
      </a>

      <a
        href="https://github.com/kyledescallar"
        target="_blank"
        title="GitHub"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 border border-gray-300  transition hover:-translate-y-1"
      >
        <img src={githubLogo} alt="GitHub" className="h-6 w-6 object-contain" />
      </a>

    </div>
  );
}