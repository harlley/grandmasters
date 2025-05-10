import Image from "next/image";
import { ProfileProps } from "./profile.types";

export const Profile = ({ player }: ProfileProps) => {
  const { name, username, avatar, followers, league, status } = player;

  return (
    <div>
      <h1>{name || username}&apos;s Profile</h1>
      {avatar && (
        <Image
          src={avatar}
          alt={`${username}&apos;s avatar`}
          width={100}
          height={100}
        />
      )}
      <p>Username: {username}</p>
      <p>Followers: {followers}</p>
      <p>League: {league}</p>
      <p>Status: {status}</p>
    </div>
  );
};
