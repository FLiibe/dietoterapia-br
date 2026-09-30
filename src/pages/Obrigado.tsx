import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import AcuLogo from "../components/AcuLogo";

interface ObrigadoProps {
  onBackToMain: () => void;
}

export default function Obrigado({ onBackToMain }: ObrigadoProps) {
  return (
    <div className="min-h-screen bg-[#FCFBF9] antialiased font-sans text-gray-800 pb-20">
      
      {/* Barra superior de status seguro */}
      <div className="bg-[#113827] text-white text-[11px] md:text-xs py-2.5 px-4 text-center font-mono flex items-center justify-center gap-2 select-none sticky top-0 z-40">
        <ShieldCheck className="w-4 h-4 text-[#cf9f46] shrink-0" />
        <span className="font-sans font-medium tracking-wide">
          Ambiente 100% Seguro • Transação Concluída com Sucesso
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        
        {/* Header com Logo */}
        <header className="flex flex-col items-center justify-center mb-10 mt-2 cursor-pointer" onClick={onBackToMain}>
          <AcuLogo size="sm" />
        </header>

        {/* Caixa Principal de Sucesso */}
        <div className="bg-white rounded-3xl border border-sand-dark/40 p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto mb-10">
          <div className="flex justify-center mb-6">
            <div className="bg-[#EAF7F0] p-4 rounded-full">
              <CheckCircle className="w-16 h-16 text-emerald-600 animate-bounce" />
            </div>
          </div>
          
          <span className="inline-block bg-[#EAF7F0] text-[#1E5631] text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase mb-3">
            Pagamento Confirmado
          </span>
          
          <h1 className="font-serif text-3xl md:text-5xl text-forest-dark tracking-tight font-semibold leading-tight mb-4">
            Obrigado pela sua compra!
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Sua inscrição foi processada e o acesso aos materiais está totalmente liberado. Você já é parte da nossa comunidade profissional!
          </p>
        </div>

      </div>

    </div>
  );
}
