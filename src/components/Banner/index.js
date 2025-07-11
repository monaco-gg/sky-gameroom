import "./pong.css";

export default function Banner() {
  return (
    <>
      <div className="flex justify-center items-center pt-10 lg:pt-0">
        <div className="rounded text-center">
          <div className="flex flex-col justify-start items-start mt-8">
            <h1 
              className="text-2xl font-semibold mb-2 text-topic-primary-text"
              style={{ 
                textShadow: '0 2px 3px rgba(255, 255, 255, 0.4), 0 1px 2px rgba(255, 255, 255, 0.3), 0 0 6px rgba(255, 255, 255, 0.25)',
                filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.3))'
              }}
            >
              Monaco Game Room
            </h1>
            <span className="text-base text-description-primary-text mb-5">
              Participe da competição de games clássicos e concorra a
              prêmios!
            </span>
          </div>
          <div className="flex justify-center items-center pt-12 pb-20">
            <div className="pong"></div>
          </div>
        </div>
      </div>
    </>
  );
}
