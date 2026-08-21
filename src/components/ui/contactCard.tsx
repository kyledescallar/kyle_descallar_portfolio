interface ContactCardProps {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function ContactCard({
  title,
  children,
  dark = false,
}: ContactCardProps) {
  return (
    <section
      className={`
        rounded-[9px]
        p-5
        shadow-[-6px_6px_0px_#294f50]
        ${dark
          ? "bg-[#294f50] text-[#eeeeee]"
          : "bg-[#9eadae] text-[#294f50]"
        }
      `}
    >

      <h3 className="mb-3 text-[15px] font-bold">
        {title}
      </h3>

      {children}

    </section>
  );
}