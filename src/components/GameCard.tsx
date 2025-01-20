import { LucideIcon } from "lucide-react";

interface GameCardProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
}

const GameCard = ({ title, icon: Icon, gradient }: GameCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-6 cursor-pointer transition-transform hover:scale-105 ${gradient} shadow-lg`}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
        <span className="text-white font-medium text-sm">{title}</span>
      </div>
    </div>
  );
};

export default GameCard;