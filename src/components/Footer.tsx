const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-14 pt-11 md:pb-16 md:pt-14">
      <div className="mx-auto max-w-[1380px] cursor-default text-center">
        <p className="text-[clamp(1.15rem,1.28vw,1.9rem)] leading-tight text-foreground/95">
          Copyright © 2023-{currentYear} Beeplap Gharti Magar. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
