const stylesConfig = require("../../config/styles.config.json");

export default function GameBackground({ imageUrl, children }) {
  const shadowOpacity = stylesConfig.gameBackground?.shadowOpacity ?? 0.15;
  const bgStyle = {
    background: `radial-gradient(circle at 50% 0%, rgba(0,0,0,${shadowOpacity}) 0%, transparent 60%)`,
    width: "inherit",
    height: "100svh",
    position: "absolute",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    zIndex: "-999",
    overflow: "hidden",
  };

  return (
    <div className="overflow-hidden m-0 p-0 w-full">
      <div style={bgStyle} className="bg-no-repeat bg-cover bg-center"></div>
      <div className="relative z-10 px-8 py-6 text-white">{children}</div>
    </div>
  );
}
