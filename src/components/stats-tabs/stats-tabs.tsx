import { StatsTabsProps } from "./stats-tabs.types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GAMES } from "@/constants";
import { Stats } from "@/components/stats";

export const StatsTabs = ({ stats }: StatsTabsProps) => {
  const defaultValue = GAMES.length > 0 ? GAMES[0].id : undefined;

  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="w-full h-auto flex mb-0">
        {GAMES.map((game) => (
          <TabsTrigger key={game.id} value={game.id} className="flex-1 text-xs">
            {game.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {GAMES.map((game) => {
        const gameData = stats[game.id];

        return (
          <TabsContent key={game.id} value={game.id}>
            {gameData ? (
              <Stats
                lastRating={gameData.last?.rating}
                bestRating={gameData.best?.rating}
                recordWin={gameData.record?.win}
                recordLoss={gameData.record?.loss}
                recordDraw={gameData.record?.draw}
              />
            ) : (
              <div className="text-center text-sm h-[190px] py-10 flex items-center justify-center">
                No data available for {game.name}
              </div>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
