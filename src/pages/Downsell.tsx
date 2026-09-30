import React, { useState, useEffect } from "react";
import { ShieldCheck, Clock, Check, Plus } from "lucide-react";
import upsellBundleImg from "../assets/images/upsell_toolkit_bundle_pt_1790791765739.jpg";

interface DownsellProps {
  onBackToMain: () => void;
}

export default function Downsell({ onBackToMain }: DownsellProps) {
  // Cronômetro regressivo iniciando em 8 minutos e 41 segundos: 8 * 60 + 41 = 521 segundos
  const [timeLeft, setTimeLeft] = useState(521);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 521; // Loop de demonstração
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Carregar dinamicamente o script de funil de vendas do Hotmart
    const scriptId = "hotmart-checkout-elements-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initHotmart = () => {
      const win = window as any;
      if (win.checkoutElements) {
        try {
          win.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (error) {
          console.error("Hotmart Funnel init error:", error);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      script.async = true;
      script.onload = () => {
        initHotmart();
      };
      document.body.appendChild(script);
    } else {
      const timer = setTimeout(() => {
        initHotmart();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] antialiased font-sans text-gray-800 pb-16">
      
      {/* Top Banner (Barra Vermelha Escura) */}
      <div className="bg-[#5c1313] text-white text-[11px] md:text-xs py-2.5 px-4 text-center font-mono flex items-center justify-center gap-2 select-none sticky top-0 z-40">
        <span className="inline-block animate-pulse text-gold-medium font-bold">🚨</span>
        <span className="font-sans font-medium tracking-wide">
          OPORTUNIDADE FINAL: SEU DESCONTO DE 50% SERÁ DESATIVADO PARA SEMPRE QUANDO VOCÊ SAIR
        </span>
        <span className="mx-1">•</span>
        <span className="font-bold text-gold-medium tracking-widest bg-black/30 px-2 py-0.5 rounded">
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        
        {/* Caixa de aviso amarela */}
        <div className="bg-[#FFFDF3] border border-[#EEDC82] text-[#856404] rounded-xl p-4 mb-8 text-center text-xs md:text-sm font-medium shadow-xs">
          ⚠️ ESPERE! ESTA É A SUA ÚLTIMA CHANCE DE ECONOMIZAR 50% ANTES DE PERDER ESTA OFERTA PARA SEMPRE.
        </div>

        {/* Headline Principal (Vermelho Escuro) */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-[44px] text-[#5c1313] tracking-tight leading-[1.15] font-semibold mb-4">
            Você tem certeza de que quer abrir mão disso?
          </h1>
          <h2 className="font-serif text-sm md:text-base lg:text-lg text-[#b87333] font-semibold italic tracking-wide mb-6">
            Mapa de Pontos de Acupressão + BRINDES EXCLUSIVOS: Guia de Gua Sha Facial & Protocolo de Dietoterapia de 21 Dias
          </h2>
          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Não limite o seu conhecimento à teoria pura do manual. Obtenha o <strong className="text-[#5c1313] font-semibold">Mapa de Pontos de Acupressão</strong> agora mesmo pela metade do preço e receba o <strong className="text-[#5c1313] font-semibold">Guia de Gua Sha Facial & Automassagem</strong> e o <strong className="text-[#5c1313] font-semibold">Protocolo de Dietoterapia de 21 Dias</strong> como brindes imediatos. Três ferramentas práticas para potencializar o bem-estar naturalmente!
          </p>
        </div>

        {/* Imagem Mockup do Bundle */}
        <div className="max-w-md mx-auto mb-10 rounded-2xl overflow-hidden shadow-xl border border-sand-dark/30 bg-white p-2">
          <img
            src={upsellBundleImg}
            alt="Kit Completo de Acupressão e Gua Sha - Mockup"
            className="w-full h-auto rounded-xl object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Cartões de Conteúdo */}
        <div className="space-y-6 mb-10" id="downsell-items-list">
          
          {/* Card 1 - Produto Principal */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs text-left relative">
            <span className="absolute -top-3 left-6 bg-[#006040] text-white px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider font-bold">
              PRODUTO PRINCIPAL COM 50% OFF
            </span>
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-4 mt-2">
              Mapa Essencial de Pontos de Acupressão
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-[#006040] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Atlas de 18 Pontos Ilustrados:</strong> Descubra a localização exata, função energética e notas de segurança para cada ponto.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-[#006040] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">6 Protocolos Completos:</strong> Um para cada padrão de desequilíbrio e síndrome do manual principal de Dietoterapia.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-[#006040] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Acesso Vitalício Seguro:</strong> Formato digital para baixar e ter para sempre em seu celular, tablet ou computador.
                </span>
              </div>
            </div>
          </div>

          {/* Plus Icon Divider */}
          <div className="flex items-center justify-center py-2">
            <Plus className="w-8 h-8 text-emerald-700 bg-emerald-50 rounded-full p-1.5 border border-emerald-100 shadow-xs" />
          </div>

          {/* Card 2 - Brinde Gua Sha */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs text-left relative">
            <span className="absolute -top-3 left-6 bg-emerald-700 text-white px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider font-bold">
              BRINDE COMPLEMENTAR GRÁTIS
            </span>
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-4 mt-2">
              PRESENTE GRÁTIS: Guia de Gua Sha Facial & Automassagem
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Técnica Principal Completa:</strong> Ângulo exato, pressão correta e alternativas práticas usando apenas as mãos.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Mapa Facial de 6 Zonas:</strong> Diagramas claros com as direções de movimento para pescoço, maxilar, bochechas, testa e sobrancelhas.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">6 Rotinas Baseadas em Padrões:</strong> Baço (anti-inflamatório), Yang (aquecimento), Yin (hidratação), Fígado (tensão), Umidade e Calor.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Segurança e Prática:</strong> Contraindicações, erros comuns a evitar, cronograma sugerido e diário de acompanhamento.
                </span>
              </div>
            </div>
          </div>

          {/* Plus Icon Divider 2 */}
          <div className="flex items-center justify-center py-2">
            <Plus className="w-8 h-8 text-emerald-700 bg-emerald-50 rounded-full p-1.5 border border-emerald-100 shadow-xs" />
          </div>

          {/* Card 3 - Brinde Protocolo de 21 Dias */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs text-left relative">
            <span className="absolute -top-3 left-6 bg-emerald-700 text-white px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider font-bold">
              BRINDE COMPLEMENTAR GRÁTIS
            </span>
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-4 mt-2">
              PRESENTE GRÁTIS: Protocolo de Dietoterapia de 21 Dias
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Planos de Refeição Diários:</strong> Passo a passo detalhado para seis padrões tradicionais da MTC.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Listas de Compras Semanais:</strong> Listas estruturadas e receitas terapêuticas práticas para facilitar a rotina.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Adaptações Clínicas:</strong> Soluções para padrões de desequilíbrio bioenergético combinado.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 font-semibold">Check-ins Imprimíveis:</strong> Formulários práticos de controle de sintomas e progresso do paciente.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Caixa de Destaque de Preço Promocional de Downsell */}
        <div className="bg-[#FFF5F5] border-2 border-dashed border-[#E5A9A9] rounded-2xl p-6 md:p-8 mb-10 text-center shadow-2xs">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#A63A3A] font-extrabold uppercase block mb-2">
            💥 TRÊS MANUAIS PELO PREÇO DE UM! 💥
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-base md:text-lg font-bold text-gray-400 line-through font-mono">
              R$27,90
            </span>
            <span className="text-3xl md:text-5xl font-serif font-black tracking-tight text-[#5c1313]">
              R$14,90
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Adquira o Mapa de Pontos de Acupressão pela metade do preço por apenas <strong className="text-[#5c1313] font-bold">R$14,90</strong> e receba o Guia de Gua Sha Facial e o Protocolo de 21 Dias como brindes imediatos. Livre de riscos com a nossa garantia de 100% do seu dinheiro de volta!
          </p>
        </div>

        {/* HOTMART - Sales Funnel Widget */}
        <div className="my-8 max-w-xl mx-auto bg-white p-4 rounded-2xl border border-sand-dark/30 shadow-xs">
          <div id="hotmart-sales-funnel"></div>
        </div>

        {/* Botão de Cancelar / Pular */}
        <div className="text-center">
        </div>

      </div>

    </div>
  );
}
