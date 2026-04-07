import type { SVGProps } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";

const CodebergIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M16.05 5.4C15.53 5.4 15.06 5.73 14.87 6.21L7.67 24.46C7.35 25.28 8.15 26.06 8.95 25.69L14.72 23.05C15.55 22.67 16.51 22.67 17.33 23.05L23.11 25.69C23.91 26.06 24.71 25.28 24.38 24.46L17.18 6.21C16.99 5.73 16.53 5.4 16.05 5.4Z"
      fill="currentColor"
    />
  </svg>
);

const Contact = () => {
  const openMailClient = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "ghartibeeplap@gmail.com";
    const subject = "Portfolio Contact";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/beeplap",
      icon: Github,
    },
    {
      name: "Codeberg",
      href: "https://codeberg.org/beeplap",
      icon: CodebergIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/beeplap",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/beeplap.g.magar",
      icon: Facebook,
    },
  ];

  return (
    <section id="contact" className="px-4 pt-12 md:pt-14">
      <div className="mx-auto w-full max-w-[1008px]">
        <div className="rounded-[22px] border border-[hsl(172_100%_30%_/0.42)] bg-[radial-gradient(120%_140%_at_72%_0%,hsl(0_0%_18%_/0.5),transparent_55%),linear-gradient(140deg,hsl(220_15%_7%_/0.98),hsl(220_12%_8%_/0.96))] px-5 py-10 shadow-[0_0_42px_hsl(172_100%_30%_/0.2)] md:min-h-[470px] md:px-10 md:py-12">
          <div className="mx-auto flex max-w-4xl cursor-default flex-col items-center justify-center text-center">
            <img
              src="/assets/beeo.jpg"
              alt="Beeplap Gharti Magar profile picture"
              className="h-32 w-32 rounded-full border-[2px] border-cyan-300/90 object-cover shadow-[0_0_18px_hsl(182_100%_65%_/0.24)] md:h-40 md:w-40"
            />

            <h2 className="mt-5 text-3xl font-medium leading-none tracking-tight md:text-4xl">
              Beeplap Gharti Magar
            </h2>
            <p className="mt-3 text-base text-foreground/95 md:text-xl">
              Software Developer & Content Creator
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-5 md:flex-row md:justify-center md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm leading-tight text-foreground/88 md:text-base">
                  Email me at:
                </p>
                <a
                  href="mailto:ghartibeeplap@gmail.com"
                  onClick={openMailClient}
                  className="text-base leading-tight text-white transition-colors hover:text-cyan-200 md:text-xl"
                >
                  ghartibeeplap@gmail.com
                </a>
              </div>

              <div className="hidden h-[62px] w-px bg-cyan-200/90 md:block" />

              <div className="flex items-center gap-3.5">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black text-white shadow-[0_0_0_hsl(182_100%_65%_/0)] transition-all duration-200 hover:scale-105 hover:border-cyan-300/35 hover:bg-[hsl(220_14%_10%)] hover:shadow-[0_0_18px_hsl(182_100%_65%_/0.18)]"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
