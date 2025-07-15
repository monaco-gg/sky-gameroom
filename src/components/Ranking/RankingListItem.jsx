import { TicketIcon } from "@components/Icons/TicketIcon";
import UserAvatar from "@components/UserAvatar";
import Image from "next/legacy/image";

export const RANKING_TYPE = {
  TICKETS: "TICKETS",
  TIME: "TIME",
};

/**
 * Component for rendering a single item in the ranking list.
 *
 * @param {Object} props - The component props.
 * @param {string} props.avatarSrc - The source URL for the avatar image.
 * @param {string} props.name - The name of the user.
 * @param {number} props.matches - The number of matches played by the user.
 * @param {number} props.tickets - The number of tickets the user has.
 * @param {number} props.position - The position of the user in the ranking.
 * @param {boolean} props.featured - Flag to determine if the item is featured.
 * @param {boolean} props.useMedal - Flag to determine if the medal should be used.
 * @returns {JSX.Element} The ranking list item component.
 */
const RankingListItem = ({
  avatarSrc,
  name,
  matches,
  tickets,
  position,
  featured,
  useMedal,
  type = RANKING_TYPE.TICKETS,
}) => {
  
  //TODO: MRC Remover
  const featuredItemStyle = featured
    ? { backgroundColor: "#372779", borderTop: "1px solid #3D3E82" }
    : {};

  const itemBgClass = featured ? 'bg-primary bg-opacity-80 text-white' : 'text-topic-primary-text';

  console.log('itemBgClass: ' + itemBgClass)
  return (
    <div
      className={`flex items-center space-x-4 py-2 px-4 rounded-md ${itemBgClass}`}
      //style={featuredItemStyle}
    >
      {useMedal && position !== 0 && position <= 3 ? (
        <Image
          src={`/imgs/ranking/medal_${position}.png`}
          width={26.32}
          height={35}
          alt={`Medal ${position}`}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      ) : (
        <div
          className="flex items-center self-center justify-center text-xs font-semibold size-7"
          style={{ color: "#b4b4b4" }}
        >
          {position || "-"}
        </div>
      )}

      <UserAvatar
        user={{ name: name, image: avatarSrc }}
        size={32}
        className="rounded-full"
        fallbackClassName="rounded-full"
      />

      <div className="flex flex-col grow">
        <p className="text-lg font-semibold line-clamp-1 break-all text-ranking-primary-text">
          {name.length <= 20 ? name : `${name.substring(0, 20)}...`}
        </p>
        {type === RANKING_TYPE.TICKETS && (
          <div className="flex items-center space-x-2">
            <p className="text-md text-ranking-secondary-text" >
              {matches} partida{matches > 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <p className="text-lg font-semibold mr-2 text-ranking-tickets-text">
          {tickets || 0}
        </p>
        {type === RANKING_TYPE.TICKETS ? (
          <TicketIcon size={24} layout="fixed" />
        ) : (
          "ms"
        )}
      </div>
    </div>
  );
};

export default RankingListItem;
