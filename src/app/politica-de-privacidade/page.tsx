// src/app/politica-de-privacidade/page.tsx
import Header from '@/components/layout/Header';
import FooterPlanilha from '@/components/layout/Footer';

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12">
        <h1 className="text-3xl font-headline mb-6">Política de Privacidade</h1>
        <div className="space-y-4 prose prose-lg max-w-none">
          <p>Bem-vindo à Política de Privacidade da Planilha Liberdade.</p>
          <p>A sua privacidade é importante para nós. É política da Planilha Liberdade respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Planilha Liberdade, e outros sites que possuímos e operamos.</p>
          
          <h2 className="text-2xl font-headline mt-6 mb-3">1. Informações que coletamos</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

          <h2 className="text-2xl font-headline mt-6 mb-3">2. Cookies</h2>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
          
          <h2 className="text-2xl font-headline mt-6 mb-3">3. Compromisso do Usuário</h2>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Planilha Liberdade oferece no site e com caráter enunciativo, mas não limitativo:</p>
          <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, casas de apostas online (ex.: Betway), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Planilha Liberdade, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>

          <h2 className="text-2xl font-headline mt-6 mb-3">Mais informações</h2>
          <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
          <p>Esta política é efetiva a partir de Janeiro/2024.</p>
        </div>
      </main>
      <FooterPlanilha />
    </div>
  );
}
