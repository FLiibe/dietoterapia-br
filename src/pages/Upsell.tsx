import React, { useState, useEffect } from "react";
import { ShieldCheck, Clock, Check, ArrowRight, Lock } from "lucide-react";
import upsellBundleImg from "../assets/images/upsell_toolkit_bundle_pt_1790791765739.jpg";

interface UpsellProps {
  onBackToMain: () => void;
}

export default function Upsell({ onBackToMain }: UpsellProps) {
  // Cronômetro de 3 minutos e 9 segundos como no print original: 3 * 60 + 9 = 189 segundos
  const [timeLeft, setTimeLeft] = useState(189);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 189; // Loop para fins de demonstração
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
    <div className="min-h-screen bg-[#FCFBF9] antialiased font-sans text-gray-800">
      
      {/* Top Banner (Barra Verde Escura) */}
      <div className="bg-[#09261a] text-white text-[11px] md:text-xs py-2.5 px-4 text-center font-mono flex items-center justify-center gap-2 select-none sticky top-0 z-40">
        <span className="inline-block animate-pulse text-gold-medium font-bold">⚠️</span>
        <span className="font-sans font-medium tracking-wide">
          Oportunidade Única: Esta oferta complementar está disponível apenas aqui
        </span>
        <span className="mx-1">•</span>
        <span className="font-bold text-gold-medium tracking-widest bg-black/30 px-2 py-0.5 rounded">
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        
        {/* Cartão de confirmação de compra do produto principal */}
        <div className="bg-[#EAF7F0] border border-[#D1EFE0] rounded-xl p-5 mb-8 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-[#1E5631] font-bold tracking-wider text-xs md:text-sm uppercase mb-1">
            <span className="text-lg">✔</span>
            <span>Sua compra está confirmada</span>
          </div>
          <p className="text-xs md:text-sm text-[#2D7A47] font-medium leading-relaxed">
            Os seus materiais de Dietoterapia Chinesa estão sendo enviados para o seu e-mail neste momento.
          </p>
        </div>

        {/* Headline Principal */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-[44px] text-forest-dark tracking-tight leading-[1.15] font-semibold mb-4">
            Antes de Ir, Complete o Seu Kit Prático
          </h1>
          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Adicione o <strong className="text-forest-dark font-semibold">Mapa Essencial de Pontos de Acupressão</strong> e receba <strong className="text-forest-dark font-semibold">dois guias complementares exclusivos</strong> sem custo adicional.
          </p>
        </div>

        {/* Bloco de Imagem Mockup do Bundle */}
        <div className="max-w-md mx-auto mb-10 rounded-2xl overflow-hidden shadow-xl border border-sand-dark/30 bg-white p-2">
          <img
            src={upsellBundleImg}
            alt="Kit Completo de Acupressão e Gua Sha - Mockup"
            className="w-full h-auto rounded-xl object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* 3 Cartões de Conteúdo */}
        <div className="space-y-5 mb-8" id="upsell-items-list">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs hover:shadow-sm transition-shadow text-left">
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-2.5">
              1. Mapa Essencial de Pontos de Acupressão
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
              <strong className="text-gray-900 font-semibold">18 pontos ilustrados e seis sequências práticas</strong> organizadas em torno dos padrões abordados no seu Manual de Dietoterapia Chinesa.
            </p>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Consulte rapidamente a localização dos pontos, suas funções tradicionais e orientações de segurança essenciais sem depender totalmente da memória.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs hover:shadow-sm transition-shadow text-left">
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-2.5">
              2. PRESENTE GRÁTIS: Guia de Gua Sha Facial & Automassagem
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Um <strong className="text-gray-900 font-semibold">guia ilustrado completo</strong> cobrindo técnicas fundamentais, seis zonas faciais, rotinas baseadas em padrões energéticos e precauções importantes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-dark/40 shadow-xs hover:shadow-sm transition-shadow text-left">
            <h3 className="font-serif text-lg md:text-xl font-bold text-forest-dark mb-3">
              3. PRESENTE GRÁTIS: Protocolo de Dietoterapia Chinesa de 21 Dias
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
              Um <strong className="text-gray-900 font-semibold">guia de implementação completo</strong> que inclui:
            </p>
            
            {/* Lista de Checkmarks */}
            <div className="space-y-2.5 pl-1">
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Planos de refeições diários para seis padrões tradicionais da MTC</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Listas de compras semanais e receitas práticas estruturadas</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Adaptações para padrões de desequilíbrio combinado</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Check-ins imprimíveis e orientações completas de preparação</span>
              </div>
            </div>
          </div>

        </div>

        {/* Caixa de Destaque (Vá da Teoria à Prática Clínica) */}
        <div className="bg-[#FCF9F2] border border-[#EBDCB9] rounded-2xl p-6 md:p-8 mb-10 text-center shadow-2xs">
          <h4 className="font-serif text-base md:text-lg font-bold text-forest-dark mb-2">
            Vá da Teoria à Prática Clínica
          </h4>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Use o manual principal para compreender o padrão, o Mapa de Acupressão para consultar pontos complementares e o Protocolo de 21 Dias para organizar as rotinas alimentares.
          </p>
        </div>

        {/* HOTMART - Sales Funnel Widget */}
        <div className="my-8 max-w-xl mx-auto bg-white p-4 rounded-2xl border border-sand-dark/30 shadow-xs">
          <div id="hotmart-sales-funnel"></div>
        </div>

      </div>

    </div>
  );
}
