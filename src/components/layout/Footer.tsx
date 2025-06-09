export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 md:px-10 bg-secondary text-secondary-foreground text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Liberdade Financeira. Todos os direitos reservados.
        </p>
        {/* Social media links can be added here */}
      </div>
    </footer>
  );
}
