const Contact = () => {
  const openMailClient = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'ghartibeeplap@gmail.com';
    const subject = 'Hello from your portfolio!';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto cursor-default text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">HAVE AN IDEA?</h2>
        <p className="text-xl mb-8">LET'S CHAT!</p>
        
        <a
          href="mailto:ghartibeeplap@gmail.com"
          onClick={openMailClient}
          className="text-xl text-primary hover:text-primary/80 transition-colors"
        >
          ghartibeeplap@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
