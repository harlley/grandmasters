import Image from "next/image";
import { ProfileProps } from "./profile.types";
import { Badge } from "@/components/ui/badge";
import { TimeSince } from "@/components/time-since";

export const Profile = ({ player }: ProfileProps) => {
  const { name, username, avatar, status, joined, last_online } = player;

  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 h-20 relative bg-muted rounded-full overflow-hidden">
        {avatar ? (
          <Image src={avatar} alt={username} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-2xl font-bold text-primary">
              {username?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h1 className="text-xl font-semibold text-foreground">{username}</h1>

        {name && <p className="text-sm text-muted-foreground mb-1">{name}</p>}

        <div className="flex items-center gap-1 mb-1.5">
          <span className="text-base">🇧🇷</span>
          <span className="text-sm">Brazil</span>
        </div>

        <Badge variant="secondary" className="text-xs font-normal">
          {status}
        </Badge>

        <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Member since</span>
            <span className="font-medium">
              {joined ? new Date(joined * 1000).toLocaleDateString() : "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Last online</span>
            <span className="font-medium">
              <TimeSince timestamp={last_online} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
