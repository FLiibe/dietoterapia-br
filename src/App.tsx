import React, { useState, useEffect } from "react";
import {
  Check,
  Clock,
  Smartphone,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Download,
  Infinity,
  RefreshCw,
  Monitor,
  Heart,
  Star,
  Lock,
  Wrench,
  AlertCircle,
  X,
  CreditCard
} from "lucide-react";
import AcuLogo from "./components/AcuLogo";
import MovementTabs from "./components/MovementTabs";
import WhatsAppChat from "./components/WhatsAppChat";
import FAQAccordion from "./components/FAQAccordion";

// Import generated book bundle image
const bundleImg = "https://i.ibb.co/8g0fQfRt/Chat-GPT-Image-6-lug-2026-11-15-23.png";

// ============================================================================
// REGION: FIXED BRAZILIAN REAL (BRL) CURRENCY CONFIGURATION
// ============================================================================

const currency = {
  code: "BRL",
  symbol: "R$",
  basico: "10,00",
  completo: "47,90",
  basicoOriginal: "147,90",
  completoOriginal: "299,90",
  bono1: "85",
  bono2: "56",
  bono3: "68",
  bono4: "85",
  bono5: "56",
  bono6: "97",
  bono7: "47",
  bonosTotal: "494"
};

export default function App() {
  // --- STATE DECLARATIONS ---

  // Live countdown timer state (starting from 10 minutes, 51 seconds like the original screenshot)
  const [timeLeft, setTimeLeft] = useState(651); // 10 minutes * 60 + 51 = 651 seconds
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "completo">("completo");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 651)); // Loop for demo purposes
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setCheckoutStep("success");
    if (selectedPlan === "basico") {
      window.open("https://pay.hotmart.com/M106627277Y?checkoutMode=10", "_blank");
    } else {
      window.open("https://pay.hotmart.com/C106627489Q?checkoutMode=10", "_blank");
    }
  };

  const handleResetCheckout = () => {
    setShowCheckoutModal(false);
    setCheckoutStep("form");
    setUserName("");
    setUserEmail("");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-sand-light antialiased font-sans text-gray-800">
      
      {/* 1. TOP TIMER BANNER (Dark Green Bar) */}
      <div className="bg-[#09261a] text-white text-[11px] md:text-xs py-2 px-4 text-center font-mono flex items-center justify-center gap-2 select-none shadow-sm sticky top-0 z-40">
        <span className="inline-block animate-pulse text-gold-medium font-bold">⚠️</span>
        <span className="font-sans font-medium tracking-wide">
          Esta oferta exclusiva expirará em breve
        </span>
        <span className="mx-1">•</span>
        <span className="font-bold text-gold-medium tracking-widest bg-black/30 px-2 py-0.5 rounded">
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col items-center justify-center mb-6 mt-2">
          <AcuLogo size="sm" />
        </header>

        {/* 2. HERO / PRESENTATION SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-12" id="hero-section">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-medium border border-gold-light/30 text-[9px] md:text-[10px] tracking-[0.15em] font-medium text-forest-medium uppercase mb-4 select-none shadow-xs">
            <span>🍃</span> ALIMENTE SEU QI • TRANSFORME VIDAS
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-forest-dark tracking-tight leading-[1.15] mb-6 font-medium">
            Aprenda a aplicar a{" "}
            <span className="text-gold-dark italic font-semibold">Dietoterapia Chinesa</span>
            <br />
            para tratar seus pacientes
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Obtenha acesso a diretrizes clínicas práticas para tratar e prescrever alimentos de acordo com o diagnóstico energético e potencializar ao máximo os resultados de seus pacientes de forma natural.
          </p>

          {/* Main Book Mockup Image */}
          <div className="relative max-w-xl mx-auto mb-10 group rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.01]" id="book-mockup-wrapper">
            <img
              src={bundleImg}
              alt="Manual Completo de Dietoterapia Chinesa e Bônus de Consulta"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft decorative shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* CTA Button 1 */}
          <button
            onClick={() => scrollToSection("plan-completo-card")}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#113827] hover:bg-[#1a4b35] text-white font-semibold text-sm md:text-base tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-forest-dark/20 cursor-pointer group"
            id="hero-cta-btn"
          >
            QUERO ACESSAR AGORA
          </button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500 font-medium" id="trust-badges-bar">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4.5 h-4.5 text-gold-medium" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-sand-dark hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-4.5 h-4.5 text-gold-medium" />
              <span>Acesso vitalício</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-sand-dark hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4.5 h-4.5 text-gold-medium" />
              <span>Em qualquer dispositivo</span>
            </div>
          </div>
        </section>

      </div>

      {/* 3. "Este material es para ti si..." SECTION (Deep Forest Green Background) */}
      <section className="bg-[#113827] text-white py-16 md:py-20 shadow-inner" id="who-is-it-for-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-light tracking-tight font-medium mb-3">
              Este material é para você se...
            </h3>
            <p className="text-xs md:text-sm text-sand-dark/80 tracking-wide uppercase font-mono max-w-2xl mx-auto">
              Profissionais que buscam transformar a teoria em uma prática clínica real e eficaz.
            </p>
          </div>

          {/* Grid of 8 Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12" id="pain-points-grid">
            
            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você já estudou Medicina Chinesa, mas ainda sente insegurança para orientar seus pacientes na alimentação do dia a dia.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você não sabe exatamente quais alimentos específicos indicar para cada síndrome energética ou desequilíbrio orgânico.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você tem dificuldade para traduzir a teoria abstrata em diretrizes alimentares e direcionamentos clínicos simples e objetivos.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você deseja agregar um valor real e diferenciado às suas consultas presenciais ou online para se destacar na sua especialidade.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você quer entregar planos de ação extremamente práticos, naturais e totalmente personalizados para cada um de seus pacientes.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você busca se posicionar e se destacar na sua área da saúde como um terapeuta holístico muito mais completo e de alto nível.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você quer aumentar consideravelmente a adesão e a constância de seus tratamentos, acelerando a recuperação de seus pacientes.
              </p>
            </div>

            <div className="flex gap-3.5 p-5 rounded-xl bg-[#09261a]/60 border border-forest-light hover:border-gold-medium/50 transition-colors duration-300">
              <Check className="w-5 h-5 text-gold-medium shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-sand-light leading-relaxed">
                Você busca um material de consulta extremamente rápido, visual e bem estruturado para ter como apoio durante suas consultas clínicas diárias.
              </p>
            </div>

          </div>

          {/* CTA Button 2 (Orange/Gold Button) */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection("plan-completo-card")}
              className="inline-flex items-center justify-center px-8 py-4.5 rounded-full bg-[#c59f5b] hover:bg-[#dfc28d] text-forest-dark font-bold text-xs md:text-sm tracking-wide uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              id="pain-points-cta-btn"
            >
              QUERO ACESSAR AGORA
            </button>
          </div>
        </div>
      </section>

      {/* 4. "Los Cinco Elementos" & Grid Section (Light Beige/Sand Background) */}
      <section className="py-16 md:py-20 px-6 bg-sand-medium/60" id="five-movements-section">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-[10.5px] md:text-xs font-mono tracking-[0.3em] uppercase text-gold-dark font-semibold">
              O que você vai aprender
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight leading-tight mt-2 font-medium">
              Os Cinco Elementos aplicados à clínica diária
            </h3>
          </div>

          {/* Interactive Elements Tabs & clinical grid (reusable customized component) */}
          <MovementTabs />

        </div>
      </section>

      {/* 5. "Contenido dentro del manual" SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white border-y border-sand-dark/40" id="guide-contents-section">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight font-medium">
              O que você encontrará dentro do manual
            </h3>
          </div>

          {/* Elegant 5 numbered cards list */}
          <div className="space-y-4" id="guide-contents-list">
            
            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-sand-light border border-sand-dark/50 hover:border-gold-medium/60 transition-colors duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#113827] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                1
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-1">
                  Fundamentos da Dietoterapia Chinesa
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Compreenda de forma clara e lógica os princípios bioenergéticos que regem a ação terapêutica dos alimentos comuns no corpo humano.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-sand-light border border-sand-dark/50 hover:border-gold-medium/60 transition-colors duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#113827] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                2
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-1">
                  Os Cinco Elementos, Sabores e Natureza Térmica
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Aprenda a classificar e selecionar alimentos com coerência clínica com base nas 5 naturezas térmicas, nos 5 sabores tradicionais e no seu tropismo de canal.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-sand-light border border-sand-dark/50 hover:border-gold-medium/60 transition-colors duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#113827] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                3
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-1">
                  Diagnóstico Energético e Orientação Dietética
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Descubra como transformar um diagnóstico tradicional de MTC (Deficiências, Excessos, Calor, Frio, Estagnações) em recomendações alimentares extremamente objetivas e simples.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-sand-light border border-sand-dark/50 hover:border-gold-medium/60 transition-colors duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#113827] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                4
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-1">
                  Receitas Terapêuticas e Casos Clínicos
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Acesse protocolos prontos e indicações terapêuticas já formuladas para uso e prescrição imediatos nas suas consultas profissionais.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-sand-light border border-sand-dark/50 hover:border-gold-medium/60 transition-colors duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#113827] text-white flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                5
              </div>
              <div>
                <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-1">
                  Planejamento e Orientação Prática ao Paciente
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Modelos práticos e guias rápidos prontos para imprimir que facilitam muito a adesão, a compreensão e os resultados terapêuticos de seus pacientes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. "Lo que dicen los profesionales" SECTION */}
      <section className="py-16 md:py-20 px-6 bg-sand-light" id="testimonials-section">
        <div className="max-w-5xl mx-auto">
          
          {/* 7. Patients Feed Section */}
          <div className="pt-4" id="whatsapp-feed-container">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight font-medium mb-3">
                Veja o que os pacientes tratados com Dietoterapia Chinesa estão dizendo
              </h3>
              <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto">
                Mensagens reais de pacientes reais que vivenciaram as mudanças clínicas com sua alimentação orientada.
              </p>
            </div>

            {/* Interactive Chat Screens Component */}
            <WhatsAppChat />

            {/* CTA Button 3 (Dark green button) */}
            <div className="text-center mt-12">
              <button
                onClick={() => scrollToSection("plan-completo-card")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#113827] hover:bg-[#1b4b35] text-white font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                id="whatsapp-cta-btn"
              >
                QUERO ACESSAR AGORA
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. BONOS EXCLUSIVOS SECTION */}
      <section className="py-16 md:py-20 px-6 bg-sand-medium/40 border-t border-sand-dark/60" id="bonuses-section">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-gold-dark font-semibold bg-white px-3 py-1 rounded-full border border-sand-dark/80">
              BÔNUS EXCLUSIVOS
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight leading-tight mt-4 font-medium">
              Além disso, você receberá estes presentes de imediato
            </h3>
          </div>

          {/* 7 Bonus Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="bonuses-cards-grid">
            
            {/* Bono 1 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 1
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Cartões de Consulta Rápida:<br />Síndromes e Alimentos
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Cartões em formato digital prontos para imprimir (tamanho A6) com as principais síndromes clínicas da MTC e a lista simplificada de seus alimentos indicados e contraindicados.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono1} {currency.code}</span>
              </div>
            </div>

            {/* Bono 2 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 2
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Guia de Receitas Terapêuticas da Medicina Chinesa
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Livro de receitas prático em PDF com sopas reconstituintes, caldos medicinais e chás curativos estruturados para nutrir o Sangue, tonificar o Qi, aquecer o frio ou drenar a umidade.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono2} {currency.code}</span>
              </div>
            </div>

            {/* Bono 3 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 3
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Calendário Sazonal de Alimentação segundo os Cinco Movimentos
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Guia completo estação por estação que indica exatamente quais alimentos priorizar e quais evitar para harmonizar o Qi dos órgãos correspondentes (Fígado na primavera, Coração no verão, etc.) e manter a saúde de seus pacientes em sintonia com a natureza.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono3} {currency.code}</span>
              </div>
            </div>

            {/* Bono 4 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 4
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Fichas de Anamnese e Acompanhamento Nutricional Energético
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Modelos práticos e fichas profissionais prontas para baixar e imprimir no seu consultório. Agilizam o registro clínico do diagnóstico tradicional pela língua, pulso, hábitos alimentares e a evolução do tratamento bioenergético de seus pacientes.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono4} {currency.code}</span>
              </div>
            </div>

            {/* Bono 5 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 5
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Caldos e Fundos Terapêuticos
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Receituário prático em PDF com 6 caldos-base desenvolvidos para diferentes padrões energéticos da MTC, como Deficiência de Qi do Baço, Deficiência de Yin, Umidade e Calor. Inclui modo de preparo, orientações de conservação e formas de transformar cada caldo em uma refeição completa.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono5} {currency.code}</span>
              </div>
            </div>

            {/* Bono 6 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 6
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Atlas de Diagnóstico pela Língua
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Atlas visual com fotografias de 12 padrões frequentes da língua, organizados por cor, forma, umidade e saburra. Ajuda a reconhecer o padrão energético provável durante a consulta e funciona como referência visual de apoio, sempre em conjunto com a anamnese e os demais sinais da Medicina Tradicional Chinesa.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono6} {currency.code}</span>
              </div>
            </div>

            {/* Bono 7 */}
            <div className="bg-white p-6 rounded-2xl border-2 border-gold-light/40 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-gold-medium text-white px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                Bônus 7
              </div>
              <div className="pt-2">
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-2">
                  Combinações Alimentares a Evitar
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Guia prático que apresenta combinações alimentares tradicionalmente desaconselhadas pela MTC, choques entre naturezas térmicas e incompatibilidades segundo cada padrão energético. Inclui exemplos cotidianos, boas combinações e orientações para aplicar esses princípios sem criar restrições desnecessárias.
                </p>
              </div>
              <div className="border-t border-sand-medium pt-3 mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">Valor individual:</span>
                <span className="text-xs font-bold text-red-700 font-mono line-through">{currency.symbol}{currency.bono7} {currency.code}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. DEEP GREEN INVESTMENT PRICING SECTION */}
      <section className="bg-[#113827] text-white py-16 md:py-24 px-6 shadow-inner relative overflow-hidden" id="pricing-section">
        
        {/* Soft elegant background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-medium/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest-light/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block bg-[#09261a] border border-gold-medium/40 text-gold-light text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 shadow-xs">
              🔥 CONDIÇÕES EXCLUSIVAS DE LANÇAMENTO
            </span>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-light tracking-tight font-medium leading-tight">
              Escolha o plano ideal para a sua prática profissional
            </h3>
            <p className="text-xs md:text-sm text-sand-dark/80 mt-3 max-w-xl mx-auto font-sans">
              Junte-se a centenas de terapeutas e profissionais da saúde que já estão transformando a vida de seus pacientes com a Dietoterapia Tradicional Chinesa.
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-4xl mx-auto px-2 md:px-0" id="pricing-plans-grid">
            
            {/* PLAN BÁSICO CARD */}
            <div className="bg-[#0c2a1d] rounded-3xl border border-forest-light/40 p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-forest-light/70 text-left relative" id="plan-basico-card">
              
              <div>
                {/* Header Title */}
                <h4 className="text-3xl font-serif font-black text-white tracking-wide uppercase mb-6" id="title-plan-basico">
                  PLAN BÁSICO
                </h4>

                {/* Features List */}
                <div className="space-y-4 pt-4 border-t border-forest-light/30">
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-sand-light font-medium">
                    <span className="text-emerald-500 shrink-0 mt-0.5 font-bold">✔</span>
                    <span>Manual Completo <strong>"Dietoterapia China"</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-sand-dark/60 line-through select-none">
                    <span className="text-red-500 shrink-0 mt-0.5 font-bold">❌</span>
                    <span>Sem bônus exclusivos incluídos no pacote</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-sand-dark/60 line-through select-none">
                    <span className="text-red-500 shrink-0 mt-0.5 font-bold">❌</span>
                    <span>Sem atualizações futuras gratuitas</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-sand-dark/60 line-through select-none">
                    <span className="text-red-500 shrink-0 mt-0.5 font-bold">❌</span>
                    <span>Sem suporte prioritário de dúvidas por e-mail</span>
                  </div>
                </div>

                {/* Prices Stack like the screenshot */}
                <div className="mb-6 flex flex-col items-center text-center mt-12" id="price-stack-basico">
                  {/* Original Price Strikethrough in red */}
                  <span className="text-xs font-bold text-red-500 line-through tracking-wider uppercase mb-1">
                    De R$165 por apenas
                  </span>
                  {/* Current Price */}
                  <div className="flex items-baseline gap-2 justify-center">
                    <span className="text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-none">
                      R$10
                    </span>
                  </div>
                  {/* Bottom Label */}
                  <span className="text-[10px] text-sand-dark/60 mt-1.5 font-medium tracking-wide uppercase">
                    pagamento único (BRL)
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-forest-light/20">
                <a
                  href="https://pay.hotmart.com/M106627277Y?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl bg-[#09261a] hover:bg-[#113827] border border-white text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-center"
                  id="checkout-plan-basico"
                >
                  Quero o Plano Básico
                </a>
              </div>

            </div>

            {/* ACESSO COMPLETO CARD (RECOMMENDED) */}
            <div className="bg-white text-gray-800 rounded-3xl border-4 border-[#cf9f46] p-6 md:p-8 flex flex-col justify-between shadow-2xl relative transition-all duration-300 hover:shadow-[#cf9f46]/15 text-left scale-100 lg:scale-[1.03] z-10" id="plan-completo-card">
              
              {/* Recommended Corner Ribbon / Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#cf9f46] text-white px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md border border-white whitespace-nowrap">
                <span>🎗</span> RECOMENDADO
              </div>

              <div>
                {/* Header Title */}
                <h4 className="text-3xl font-serif font-black text-forest-dark tracking-wide uppercase mb-6" id="title-plan-completo">
                  PLAN COMPLETO
                </h4>

                {/* Features List */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✔</span>
                    <span>Manual Completo <strong>"Dietoterapia China"</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✔</span>
                    <span>Acesso <strong>Vitalício</strong> permanente (download para sempre)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✔</span>
                    <span>Atualizações <strong>100% grátis</strong> de por vida</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✔</span>
                    <span>Suporte prioritário de dúvidas por e-mail</span>
                  </div>

                  {/* Inside card box for bonuses with gift icon */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 1:</strong> Tarjetas de Consulta Rápida (Síndromes y Alimentos)</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 2:</strong> Guia de Receitas da Medicina Tradicional Chinesa</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 3:</strong> Calendário Sazonal segundo os Cinco Movimentos</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 4:</strong> Fichas de Anamnese e Acompanhamento Nutricional</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 5:</strong> Receituário de Caldos e Fundos Terapêuticos</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 6:</strong> Atlas de Diagnóstico Clínico pela Língua</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 font-medium">
                      <span className="shrink-0">🎁</span>
                      <span><strong>BÔNUS 7:</strong> Combinações Alimentares a Evitar na MTC</span>
                    </div>
                  </div>

                  {/* Bottom box matching the green background box in screenshot */}
                  <div className="bg-[#f0f9f4] rounded-xl border border-emerald-100 p-4 mt-6 text-left">
                    <p className="text-xs text-emerald-800 font-bold leading-relaxed">
                      Todo o necessário para orientar desde a sua primeira consulta.
                    </p>
                  </div>

                </div>

                {/* Prices Stack */}
                <div className="mb-6 flex flex-col items-center text-center mt-12" id="price-stack-completo">
                  {/* Original Price Strikethrough in red */}
                  <span className="text-xs font-bold text-red-500 line-through tracking-wider uppercase mb-1">
                    De R$299 por apenas
                  </span>
                  {/* Current Price */}
                  <div className="flex items-baseline gap-2 justify-center">
                    <span className="text-5xl md:text-6xl font-serif font-black tracking-tight text-[#113827] leading-none">
                      R$47,90
                    </span>
                  </div>
                  {/* Bottom Label */}
                  <span className="text-[10px] text-gray-400 mt-1.5 font-medium tracking-wide uppercase">
                    pagamento único (BRL)
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://pay.hotmart.com/C106627489Q?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4.5 rounded-xl bg-[#113827] hover:bg-[#1b4b35] text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99] shadow-lg hover:shadow-emerald-900/10 text-center"
                  id="checkout-plan-completo"
                >
                  QUERO O PLAN COMPLETO
                </a>
              </div>

            </div>

          </div>

          {/* Secure indicator footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-sand-dark/60 font-mono mt-12">
            <span className="flex items-center gap-1">🔒 Pagamento 100% Seguro e Criptografado</span>
            <span className="hidden sm:inline">•</span>
            <span>Garantia de reembolso de 7 dias</span>
          </div>

        </div>
      </section>

      {/* 10. "Lo que recibes de inmediato" SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white" id="immediate-delivery-section">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight font-medium">
              O que você recebe imediatamente
            </h3>
          </div>

          {/* 7 Cards Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto" id="benefits-grid">
            
            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Manual Completo</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Tudo o que você precisa saber para diagnosticar e tratar seus pacientes com a Dietoterapia Chinesa tradicional.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Ferramentas Práticas</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Materiais práticos para agilizar a tomada de decisões e o diagnóstico bioenergético na sua consulta.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Cartões em PDF</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Cartões de consulta rápida com a classificação exata de alimentos por sabor, natureza e síndrome.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Guia de Receitas</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Receitas medicinais prontas para entregar e recomendar aos seus pacientes de acordo com seu padrão desequilibrado.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <Infinity className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Acesso Vitalício</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Baixe seus arquivos e consulte-os de forma permanente sempre que precisar, sem prazos de validade.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Actualizações Grátis</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Receba futuras adições, melhorias e materiais complementares sem precisar pagar nenhum centavo a mais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-sand-light border border-sand-dark/60 rounded-xl flex items-start gap-3 lg:col-span-3 lg:max-w-md lg:mx-auto lg:w-full">
              <div className="p-2 bg-gold-medium/10 text-gold-dark rounded-lg shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs md:text-sm text-forest-dark mb-1">Compatibilidade Total</h5>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                  Estude confortavelmente pelo seu celular, tablet, notebook ou computador desktop com arquivos PDF perfeitamente otimizados.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. GARANTÍA INCONDICIONAL SECTION */}
      <section className="py-16 md:py-20 px-6 bg-sand-medium/40 border-y border-sand-dark/50" id="guarantee-section">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="w-16 h-16 rounded-full bg-[#113827] text-gold-medium flex items-center justify-center mx-auto mb-4 border-2 border-gold-medium/30 shadow">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <span className="text-[10px] font-mono tracking-[0.25em] text-gold-dark font-bold uppercase">
            GARANTIA INCONDICIONAL
          </span>

          <h3 className="font-serif text-3xl md:text-4xl text-forest-dark tracking-tight leading-tight mt-2 mb-4 font-semibold">
            7 dias de garantia total
          </h3>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Você pode adquirir o material agora mesmo com total tranquilidade, explorar todo o conteúdo detalhadamente e, si considerar que não agrega um valor substancial à sua prática clínica diária, basta solicitar o reembolso no prazo de 7 dias e devolveremos 100% do seu dinheiro de imediato. Sem letras miúdas e sem complicações. O risco é totalmente nosso.
          </p>

        </div>
      </section>

      {/* 12. PREGUNTAS FRECUENTES (FAQs) SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white" id="faqs-section">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-dark tracking-tight font-medium">
              Perguntas frequentes
            </h3>
          </div>

          {/* Collapsible Accordion Component */}
          <FAQAccordion />

        </div>
      </section>

      {/* 13. "Somos AcuAcademy" SECTION (Dark Green Background) */}
      <section className="bg-[#113827] text-white py-16 md:py-20 px-6 text-center" id="about-us-section">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Circular Frame enclosing AcuLogo elements */}
          <div className="bg-white p-6 rounded-2xl border-4 border-gold-medium/30 mb-6 flex items-center justify-center shadow-lg">
            <AcuLogo size="sm" />
          </div>

          <span className="text-[10px] font-mono tracking-[0.3em] text-gold-light uppercase font-bold mb-3">
            SOMOS ACUASALUD ACADEMIA
          </span>

          <h3 className="font-serif text-2xl md:text-4xl text-gold-light tracking-tight font-medium mb-8 leading-tight max-w-xl">
            Formação séria para profissionais da Medicina China
          </h3>

          <div className="space-y-4 text-xs md:text-sm text-sand-light/90 max-w-2xl leading-relaxed text-justify sm:text-center" id="about-us-paragraphs">
            <p>
              Somos um canal de conteúdo educativo de excelência e uma comunidade de terapeutas que zela pela formação ética e rigorosa dos profissionais da saúde.
            </p>
            <p>
              Nosso principal propósito e missão é decodificar e simplificar o conhecimento ancestral da Medicina Tradicional Chinesa para transformá-lo em materiais clínicos extremamente didáticos, práticos e diretamente aplicáveis na sua consulta do dia a dia.
            </p>
            <p>
              Desenvolvemos ferramentas de estudo integrais que permitem aos profissionais da saúde se sentirem mais seguros, confiantes e plenamente preparados para diagnosticar e oferecer consultas de alto nível.
            </p>
            <p>
              Se você deseja aprofundar seus conhecimentos técnicos e aplicar a Medicina Chinesa com um nível superior de estratégia, coerência e solidez em benefício de seus pacientes, você está definitivamente no lugar certo.
            </p>
          </div>

        </div>
      </section>

      {/* 14. FINAL CTA SECTION (Light Sand Background) */}
      <section className="py-16 md:py-24 px-6 text-center bg-sand-medium/40 border-t border-sand-dark/60" id="final-cta-section">
        <div className="max-w-4xl mx-auto">
          
          <h3 className="font-serif text-3xl md:text-5xl text-forest-dark tracking-tight leading-tight mb-4 font-semibold">
            Comece hoje mesmo a aplicar a<br />Dietoterapia Chinesa na sua consulta
          </h3>

          <p className="text-xs md:text-sm text-gray-500 font-mono tracking-wider uppercase mb-8">
            Acesso imediato • Garantia de 7 dias • Sem riscos para você
          </p>

          {/* Button */}
          <button
            onClick={() => scrollToSection("plan-completo-card")}
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gold-medium hover:bg-gold-light text-forest-dark font-bold text-sm md:text-base tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
            id="final-cta-checkout-btn"
          >
            QUERO ACESSAR AGORA
          </button>

        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="bg-sand-medium border-t border-sand-dark/60 py-8 px-6 text-center">
        <p className="text-[10px] md:text-xs text-gray-500 font-mono">
          © 2026 AcuSalud Academia • Medicina Tradicional Chinesa • Todos os direitos reservados.
        </p>
      </footer>


      {/* INTERACTIVE SIMULATED CHECKOUT MODAL */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-xs" id="checkout-modal">
          <div className="bg-white rounded-2xl border border-sand-dark w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-[#113827] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gold-medium" />
                <h4 className="font-serif text-base font-bold text-white tracking-wide">
                  Confirmação de Acesso
                </h4>
              </div>
              <button
                onClick={handleResetCheckout}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {checkoutStep === "form" ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  
                  {/* Summary Box */}
                  <div className="bg-sand-light p-4 rounded-xl border border-sand-dark/70 text-xs space-y-2">
                    <div className="flex justify-between font-semibold text-forest-dark">
                      <span>
                        {selectedPlan === "basico"
                          ? "Plano Básico — Dietoterapia:"
                          : "Acesso Completo — Manual + 7 Bônus:"}
                      </span>
                      <span className="font-mono text-emerald-800 font-bold text-sm flex flex-col items-end">
                        <span>
                          {selectedPlan === "basico" 
                            ? `${currency.symbol}${currency.basico} ${currency.code}` 
                            : `${currency.symbol}${currency.completo} ${currency.code}`}
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed font-sans text-[11px]">
                      {selectedPlan === "basico"
                        ? "Inclui o manual completo 'Dietoterapia Chinesa' em formato PDF."
                        : "Inclui o manual completo (Acesso Vitalício), atualizações grátis permanentes e os 7 bônus práticos de consulta (cartões, receitas, calendário sazonal, fichas de anamnese, caldos terapêuticos, atlas da língua e combinações alimentares a evitar)."}
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="username-input" className="block text-xs font-semibold text-gray-700">
                      Nome Completo
                    </label>
                    <input
                      id="username-input"
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-sand-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-medium/30 focus:border-forest-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="useremail-input" className="block text-xs font-semibold text-gray-700">
                      E-mail
                    </label>
                    <input
                      id="useremail-input"
                      type="email"
                      required
                      placeholder="Ex: maria@exemplo.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-sand-dark text-sm focus:outline-hidden focus:ring-2 focus:ring-forest-medium/30 focus:border-forest-medium"
                    />
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-800 flex gap-2 leading-relaxed">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                    <p>
                      Certifique-se de inserir um e-mail válido. O acesso ao material digital em PDF será enviado automaticamente de imediato.
                    </p>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleResetCheckout}
                      className="flex-1 py-2.5 rounded-lg border border-sand-dark text-gray-600 font-semibold text-xs text-center hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-lg bg-[#113827] hover:bg-[#1b4b35] text-white font-semibold text-xs text-center transition-all shadow-md"
                      id="submit-checkout-btn"
                    >
                      Confirmar Acesso
                    </button>
                  </div>

                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg font-bold text-forest-dark">
                      ¡Acceso Confirmado con Éxito!
                    </h5>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto leading-relaxed">
                      Olá <strong>{userName}</strong>, registramos sua solicitação para o <strong>{selectedPlan === "basico" ? "Plano Básico" : "Acesso Completo"}</strong>. Enviamos o manual e seus materiais para download no e-mail <strong>{userEmail}</strong>.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleResetCheckout}
                      className="px-6 py-2 rounded-lg bg-[#113827] text-white font-semibold text-xs hover:bg-[#1b4b35] transition-all"
                    >
                      Entendido
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
