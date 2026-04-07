const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-11 pt-9 md:pb-14 md:pt-11">
      <div className="mx-auto w-full max-w-[1008px] cursor-default text-center">
        <p className="text-sm leading-tight text-foreground/95 md:text-base">
          Copyright © 2023-{currentYear} Beeplap Gharti Magar. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
