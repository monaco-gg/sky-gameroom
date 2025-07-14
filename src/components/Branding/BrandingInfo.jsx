// BrandInfo.jsx - Versão completa e unificada
import Image from "next/image";
import { useEffect, useState } from "react";

import { AppConfig } from "../../utils/loaderConfig";

export const BrandingInfo = ({
  width = 48,
  height = 48,
  className = "",
  showText = true, // Opção para mostrar ou não o texto
}) => {
  // TODO: MRC customize
  const bradingLogo = AppConfig.texts.branding.logo || "/logo-text.png";
  const bradingTitle = AppConfig.texts.branding.title || "Game Room";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={bradingLogo}
        width={width}
        height={height}
        alt={`${bradingTitle} Logo`}
        className="rounded-lg"
      />
      {showText && (
        <p className="ml-6 text-3xl font-archivo font-semibold text-center text-brandinginfo-primary-text">
          {bradingTitle}
        </p>
      )}
    </div>
  );
};
