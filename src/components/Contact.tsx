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
    <section id="contact" className="px-4 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1380px]">
        <div className="rounded-[22px] border border-[hsl(172_100%_30%_/0.42)] bg-[radial-gradient(120%_140%_at_72%_0%,hsl(0_0%_20%_/0.45),transparent_52%),linear-gradient(140deg,hsl(220_15%_7%_/0.98),hsl(220_12%_8%_/0.96))] px-6 py-12 shadow-[0_0_55px_hsl(172_100%_30%_/0.22)] md:px-12 md:py-16">
          <div className="mx-auto flex max-w-4xl cursor-default flex-col items-center text-center">
            <img
              src="/assets/beeo.jpg"
              alt="Beeplap Gharti Magar profile picture"
              className="h-40 w-40 rounded-full border-[2px] border-cyan-300/90 object-cover shadow-[0_0_24px_hsl(182_100%_65%_/0.24)] md:h-[188px] md:w-[188px]"
            />

            <h2 className="mt-5 text-[clamp(2.6rem,4.3vw,4.15rem)] font-medium leading-none tracking-tight">
              Beeplap Gharti Magar
            </h2>
            <p className="mt-4 text-[clamp(1.3rem,2vw,2.15rem)] text-foreground/95">
              Software Developer & Content Creator
            </p>

            <div className="mt-9 flex w-full flex-col items-center gap-6 md:flex-row md:justify-center md:gap-9">
              <div className="text-center md:text-left">
                <p className="text-[clamp(1.2rem,1.45vw,1.75rem)] leading-tight text-foreground/88">
                  Email me at:
                </p>
                <a
                  href="mailto:ghartibeeplap@gmail.com"
                  onClick={openMailClient}
                  className="text-[clamp(1.45rem,1.65vw,2.05rem)] leading-tight text-white transition-colors hover:text-cyan-200"
                >
                  ghartibeeplap@gmail.com
                </a>
              </div>

              <div className="hidden h-[72px] w-px bg-cyan-200/90 md:block" />

              <div className="flex items-center gap-4">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105"
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
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
