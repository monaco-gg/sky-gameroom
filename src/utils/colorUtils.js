/**
 * Converte cor hexadecimal para RGB
 * @param {string} hex - Cor em formato hexadecimal (ex: "#FFFFFF")
 * @returns {Object} Objeto com valores RGB {r, g, b}
 */
export const hexToRgb = (hex) => {
  // Remove o # se presente
  const cleanHex = hex.replace('#', '');
  
  // Converte para RGB
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);
  
  return { r, g, b };
};

/**
 * Converte cor hexadecimal para string rgba
 * @param {string} hex - Cor em formato hexadecimal
 * @param {number} opacity - Opacidade (0-1)
 * @returns {string} String rgba (ex: "rgba(255,255,255,0.15)")
 */
export const hexToRgba = (hex, opacity = 1) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${opacity})`;
};

/**
 * Gera gradiente radial parametrizado
 * @param {Object} config - Configuração do gradiente
 * @returns {string} String CSS do gradiente radial
 */
export const generateRadialGradient = (config) => {
  const { color, opacity, position, size } = config;
  const rgbaColor = hexToRgba(color, opacity);
  
  return `radial-gradient(circle at ${position}, ${rgbaColor} 0%, transparent ${size})`;
}; 