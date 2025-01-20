import { Rocket, Dice1, Bomb, PlayCircle, Target,Volleyball,PcCase, Waves, Diamond } from "lucide-react";
import GameCard from "./GameCard";

const games = [
  { title: "Crash", icon: Rocket, gradient: "bg-gradient-to-br from-purple-600 to-blue-500" },
  { title: "Dice", icon: Dice1, gradient: "bg-gradient-to-br from-yellow-400 to-orange-500" },
  { title: "Mines", icon: Bomb, gradient: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { title: "Cards", icon: PlayCircle, gradient: "bg-gradient-to-br from-pink-500 to-rose-400" },
  { title: "Roulette", icon: Target, gradient: "bg-gradient-to-br from-indigo-500 to-purple-500" },
  { title: "Tower", icon: PcCase, gradient: "bg-gradient-to-br from-cyan-500 to-blue-500" },
  { title: "Goal", icon: Volleyball, gradient: "bg-gradient-to-br from-violet-600 to-indigo-600" },
  { title: "Snake Ladder", icon: Waves, gradient: "bg-gradient-to-br from-green-500 to-emerald-500" },
  { title: "Crystal", icon: Diamond, gradient: "bg-gradient-to-br from-teal-400 to-cyan-500" },
];

const GameGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.title}
            title={game.title}
            icon={game.icon}
            gradient={game.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
