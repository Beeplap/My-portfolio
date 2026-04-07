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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105"
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
