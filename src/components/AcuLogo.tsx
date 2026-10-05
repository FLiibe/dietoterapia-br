import React from "react";

const logoImg = "https://res.cloudinary.com/dgncwrnvw/image/upload/v1791161343/DTBR_LOGO_i4aom5.webp";

interface AcuLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AcuLogo({ className = "", size = "md" }: AcuLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-24 h-24 md:w-28 md:h-28",
    lg: "w-32 h-32 md:w-36 md:h-36",
  };

  return (
    <div className={`flex flex-col items-center text-center justify-center ${className}`}>
      {/* High Fidelity Generated Logo Icon */}
      <img
        src={logoImg}
        alt="AcuSalud Academía Logo"
        className={`${sizeClasses[size]} object-contain`}
        id="acuacademy-logo-svg"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

