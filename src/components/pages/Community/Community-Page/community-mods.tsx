import { ModeratorCard } from "../../Mod-Que/moderators";

export const CommunityMods = () => {
  return (
    <div>
      {Array.from(Array(3)).map((_, idx) => (
        <ModeratorCard minimal {..._} idx={idx + 1} />
      ))}
    </div>
  );
};
