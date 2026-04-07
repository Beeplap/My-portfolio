import { Box, Github, Send, Twitch } from "lucide-react";

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
      icon: Box,
    },
    {
      name: "Telegram",
      href: "https://t.me/",
      icon: Send,
    },
    {
      name: "Twitch",
      href: "https://www.twitch.tv/",
      icon: Twitch,
    },
  ];

  return (
    <section id="contact" className="px-4 pt-10 md:pt-12">
      <div className="mx-auto max-w-[1260px]">
        <div className="rounded-[22px] border border-[hsl(172_100%_30%_/0.42)] bg-[radial-gradient(120%_140%_at_72%_0%,hsl(0_0%_20%_/0.45),transparent_52%),linear-gradient(140deg,hsl(220_15%_7%_/0.98),hsl(220_12%_8%_/0.96))] px-5 py-8 shadow-[0_0_40px_hsl(172_100%_30%_/0.2)] md:px-8 md:py-10">
          <div className="mx-auto flex max-w-3xl cursor-default flex-col items-center text-center">
            <img
              src="/assets/beeo.jpg"
              alt="Beeplap Gharti Magar profile picture"
              className="h-28 w-28 rounded-full border-[2px] border-cyan-300/90 object-cover shadow-[0_0_18px_hsl(182_100%_65%_/0.24)] md:h-32 md:w-32"
            />

            <h2 className="mt-4 text-[clamp(2rem,2.7vw,2.85rem)] font-medium leading-none tracking-tight">
              Beeplap Gharti Magar
            </h2>
            <p className="mt-3 text-[clamp(1.05rem,1.45vw,1.5rem)] text-foreground/95">
              Software Developer & Content Creator
            </p>

            <div className="mt-7 flex w-full flex-col items-center gap-5 md:flex-row md:justify-center md:gap-6">
              <div className="text-center md:text-left">
                <p className="text-[clamp(1rem,1.1vw,1.2rem)] leading-tight text-foreground/88">
                  Email me at:
                </p>
                <a
                  href="mailto:ghartibeeplap@gmail.com"
                  onClick={openMailClient}
                  className="text-[clamp(1.18rem,1.28vw,1.45rem)] leading-tight text-white transition-colors hover:text-cyan-200"
                >
                  ghartibeeplap@gmail.com
                </a>
              </div>

              <div className="hidden h-[52px] w-px bg-cyan-200/90 md:block" />

              <div className="flex items-center gap-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105"
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
