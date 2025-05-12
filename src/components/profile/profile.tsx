import Image from "next/image";
import { ProfileProps } from "./profile.types";

export const Profile = ({ player, stats }: ProfileProps) => {
  const { name, username, avatar, followers, league, status } = player;

  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center gap-4">
        {avatar && (
          <Image
            src={avatar}
            alt={`${username}'s avatar`}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold">{name || username}</h2>
          <p>@{username}</p>
          <p>Status: {status}</p>
          <p>League: {league}</p>
          <p>Followers: {followers}</p>
        </div>
      </div>

      {stats && (
        <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto">
          {JSON.stringify(stats, null, 2)}
        </pre>
      )}
    </div>
  );
};
