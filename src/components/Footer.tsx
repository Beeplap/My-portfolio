const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-8 md:pb-12 md:pt-10">
      <div className="mx-auto max-w-[1260px] cursor-default text-center">
        <p className="text-[clamp(0.95rem,1.02vw,1.25rem)] leading-tight text-foreground/95">
          Copyright © 2023-{currentYear} Beeplap Gharti Magar. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
