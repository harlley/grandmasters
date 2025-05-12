import { StatsProps } from "./stats.types";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Stats = ({
  lastRating,
  bestRating,
  recordWin,
  recordLoss,
  recordDraw,
}: StatsProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Current rating</p>
              <p className="text-lg font-bold">{lastRating || "N/A"}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Best rating</p>
              <p className="text-lg font-bold">{bestRating || "N/A"}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-3">Game history</p>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-muted p-2 rounded-md">
              <p className="text-sm font-semibold text-green-600">
                {recordWin}
              </p>
              <p className="text-xs text-muted-foreground">Wins</p>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <p className="text-sm font-semibold text-red-600">{recordLoss}</p>
              <p className="text-xs text-muted-foreground">Losses</p>
            </div>
            <div className="bg-muted p-2 rounded-md">
              <p className="text-sm font-semibold">{recordDraw}</p>
              <p className="text-xs text-muted-foreground">Draws</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
