import Image from 'next/image';
import Link from 'next/link';

export default function FooterPlanilha() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 md:px-10 bg-foreground text-background text-center">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
                <Image
                    src="https://sua-melhor-versao.com/imagens/logo%20branca.png"
                    alt="Planilha Liberdade Logo Branca"
                    width={120}
                    height={30}
                    data-ai-hint="company white logo"
                />
            </div>
            <div className="flex space-x-4 mb-4 sm:mb-0 text-sm">
                <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
                <Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link>
            </div>
        </div>
        <p className="text-xs mt-6">
          &copy; {currentYear} Planilha Liberdade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
