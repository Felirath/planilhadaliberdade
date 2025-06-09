import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-3 px-6 md:px-10 bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-start">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="https://sua-melhor-versao.com/imagens/Logo.png"
            alt="Planilha Liberdade Logo"
            width={40}
            height={40}
            className="rounded-sm"
            data-ai-hint="company logo"
          />
          {/* <h1 className="text-xl font-headline text-primary">Planilha Liberdade</h1> */}
        </Link>
      </div>
    </header>
  );
}
