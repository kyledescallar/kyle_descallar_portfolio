import type { FormEvent } from "react";

import SectionTitle from "@/components/common/sectionTitle";
import gmailLogo from "@/assets/images/gmail logo.webp";
import contactLogo from "@/assets/images/contact_logo.jpg";
import ContactCard from "@/components/ui/contactCard";
import Socials from "@/components/socials"
export default function Contact() {

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    alert("Message sent!");
  };

  return (
    <section className="py-14">

      <div className="mx-auto w-full max-w-[1000px] px-6 md:px-0">

        <SectionTitle>
          Let’s Talk
        </SectionTitle>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* LEFT */}
          <div className="grid gap-5">

            <ContactCard title="Contact Information">

              <a
                href="mailto:kylinodescallar@gmail.com"
                className="mt-3 flex h-10 items-center gap-5 rounded-lg bg-[#eeeeee] px-3 text-xs text-[#667576] underline"
              >

                <img
                  src={gmailLogo}
                  alt="Gmail"
                  className="h-6 w-6 object-contain"
                />

                kylinodescallar@gmail.com

              </a>

              <a
                href="tel:+631234567890"
                className="mt-3 flex h-10 items-center gap-5 rounded-lg bg-[#eeeeee] px-3 text-xs text-[#667576]"
              >

                <img
                  src={contactLogo}
                  alt="Phone contact"
                  className="h-6 w-6 object-contain"
                />

                0123-456-7890

              </a>

            </ContactCard>

            <ContactCard title="Socials">

              <Socials />

            </ContactCard>

          </div>

          {/* RIGHT */}
          <ContactCard
            title="Send a Message"
            dark
          >

            <p className="mb-4 text-[9px]">
              Fill in the form below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="text-[9px]"
            >

              {/* FIRST / LAST NAME */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                <label>
                  First Name

                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="mt-1 w-full rounded-md border-0 bg-[#eeeeee] px-2 py-2 text-[#294f50] outline-none"
                  />

                </label>

                <label>
                  Last Name

                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="mt-1 w-full rounded-md border-0 bg-[#eeeeee] px-2 py-2 text-[#294f50] outline-none"
                  />

                </label>

              </div>

              {/* EMAIL */}
              <label className="mt-2 block">

                Email

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="mt-1 w-full rounded-md border-0 bg-[#eeeeee] px-2 py-2 text-[#294f50] outline-none"
                />

              </label>

              {/* MESSAGE */}
              <label className="mt-2 block">

                Message

                <textarea
                  placeholder="Send your message"
                  rows={5}
                  required
                  className="mt-1 w-full resize-none rounded-md border-0 bg-[#eeeeee] px-2 py-2 text-[#294f50] outline-none"
                />

              </label>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-[#eeeeee] px-4 py-1.5 text-[10px] font-bold text-[#294f50] transition hover:bg-white"
              >
                Send →
              </button>

            </form>

          </ContactCard>

        </div>

      </div>

    </section>
  );
}