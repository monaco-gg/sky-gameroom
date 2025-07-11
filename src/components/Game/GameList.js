import Image from "next/legacy/image";
import { games } from "@utils/data";
import GameSlider from "./GameSlider";

export default function GameList() {
  return <>
    <div className="container">
      <div className="pt-20 lg:pt-0">
        <div className="flex flex-col justify-start items-start mt-8">
          <h1 className="text-2xl font-semibold mb-2 text-topic-primary-text">Games</h1>
          <span className="text-base text-description-primary-text mb-5">
            Relembre os games clássicos em um estilo único.
          </span>
        </div>
        <div className="lg:hidden md:hidden">
          <GameSlider data={games} />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-center">
            {games.map((game, index) => (
              <div key={index} className="outline-none rounded-lg">
                <Image
                  src={game.image}
                  width={500}
                  height={750}
                  alt={`Prêmio ${index}`}
                  className="block  mx-auto"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>;
}
