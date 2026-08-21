import Socials from "@/components/socials";
import heroImage from "@/assets/images/kyle.png";

export default function Section() {
  return (
    <section className="flex min-h-[calc(100vh-148px)] items-center">

      <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-0">

        {/* LEFT SIDE */}
        <div>

          <p className="mb-2 text-[18px]">
            EY YO!
          </p>

          <h1 className="text-[48px] text-[#294f50] font-extrabold leading-[1.12] tracking-[-2px] sm:text-[58px] md:text-[62px]">
            Kyle Niño
            <br />
            Descallar
          </h1>

          {/* Pills */}
          <div className="my-5 flex gap-4">

            <span className="rounded-full bg-[#9eadae] px-6 py-3 text-[17px]">
              BSIT-3D
            </span>

            <span className="rounded-full bg-[#9eadae] px-6 py-3 text-[17px]">
              AppsDev
            </span>

          </div>

          <p className="mb-6 max-w-[510px] text-[17px] leading-[1.3] text-black">
            I am a Bachelor of Science in Information
            Technology student at Cordova Public College.
            I enjoy learning technology, creating websites,
            and building simple digital experiences.
          </p>

          <Socials />

        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-[300px] items-center justify-center">

          <div className="relative">

            <div className="absolute -bottom-[17px] -left-[15px] h-[360px] w-[350px] rounded-xl bg-[#294f50]" />

              <img
                src={heroImage}
                alt="Decorative portfolio illustration"
                className="relative flex h-[360px] w-[350px] items-center justify-center overflow-hidden border border-[#294f50] rounded-xl object-cover"
              />


          </div>

        </div>

      </div>

    </section>
  );
}