import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Para quem é este material?",
      answer: "Este material foi desenvolvido especialmente para acupunturistas, nutricionistas, terapeutas corporais, fisioterapeutas, médicos e todos os profissionais ou estudantes da área da saúde que desejam aplicar os conceitos práticos da Dietoterapia Chinesa em suas consultas para potencializar os resultados de seus tratamentos de forma rápida, segura e natural.",
    },
    {
      question: "Preciso dominar previamente a Medicina Chinesa?",
      answer: "Não! O material foi estruturado de forma extremamente didática e acessível, partindo dos conceitos básicos da MTC (como o Qi, Yin/Yang e as substâncias fundamentais) até chegar à aplicação clínica prática. Mesmo que você esteja começando do zero, poderá aplicar essas diretrizes com total segurança no seu dia a dia.",
    },
    {
      question: "Como recebo o material?",
      answer: "O acesso é totalmente digital e imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para acessar os arquivos.",
    },
    {
      question: "O acesso expira?",
      answer: "Não, seu acesso é vitalício e permanente. Você poderá baixar todos os arquivos localmente e consultá-los quantas vezes precisar, a qualquer momento e lugar, sem nenhum limite de tempo ou taxas adicionais.",
    },
    {
      question: "Posso acessar pelo meu celular?",
      answer: "Sim! Todo o conteúdo foi projetado e otimizado em formato digital PDF interativo de alta definição, o que significa que se adapta de forma impecável para uma leitura confortável em smartphones (iOS e Android), tablets, notebooks ou computadores desktop.",
    },
    {
      question: "E se, por algum motivo, eu não gostar ou não for o que eu esperava?",
      answer: "Temos tanta certeza da qualidade deste material que oferecemos uma garantia incondicional de satisfação de 7 dias. Se você acessar o conteúdo e achar que ele não agrega valor à sua prática profissional, poderá solicitar o reembolso de 100% do seu dinheiro diretamente pela Hotmart de maneira rápida e sem complicações.",
    },
    {
      question: "Existe algum tipo de suporte ou esclarecimento de dúvidas?",
      answer: "Com certeza! Oferecemos um canal exclusivo de suporte técnico por e-mail, onde um membro da nossa equipe ajudará você de forma prioritária caso tenha qualquer dificuldade para baixar ou visualizar seus arquivos.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3 px-4" id="faq-accordion-group">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl border border-sand-dark/60 overflow-hidden shadow-sm transition-all duration-300"
            id={`faq-item-${idx}`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-sand-light transition-colors duration-200"
              aria-expanded={isOpen}
              id={`faq-toggle-${idx}`}
            >
              <span className="font-serif text-sm md:text-base font-semibold text-forest-dark leading-tight">
                {faq.question}
              </span>
              <span className="text-gold-medium shrink-0">
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Dynamic collapse answer */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] border-t border-sand-medium opacity-100 py-4 px-5" : "max-h-0 opacity-0 overflow-hidden"
              } bg-sand-light/30`}
              id={`faq-content-${idx}`}
            >
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
