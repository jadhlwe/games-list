import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Color = 'red' | 'blue' | 'green' | 'yellow';
type Tube = Color[];

const WaterSort = () => {
  const [tubes, setTubes] = useState<Tube[]>([]);
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);

  const colors: Color[] = ['red', 'blue', 'green', 'yellow'];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialTubes: Tube[] = [[], [], [], [], []]; // 4 tubes for colors + 1 empty
    const totalColors = colors.length * 4; // 4 segments of each color
    const colorPool = colors.flatMap(color => Array(4).fill(color));
    
    // Randomly distribute colors to first 4 tubes
    for (let i = 0; i < totalColors; i++) {
      const randomIndex = Math.floor(Math.random() * colorPool.length);
      const color = colorPool.splice(randomIndex, 1)[0];
      const tubeIndex = Math.floor(i / 4);
      initialTubes[tubeIndex].push(color);
    }
    
    setTubes(initialTubes);
    setMoves(0);
    setSelectedTube(null);
  };

  const handleTubeClick = (tubeIndex: number) => {
    if (selectedTube === null) {
      if (tubes[tubeIndex].length > 0) {
        setSelectedTube(tubeIndex);
      }
    } else {
      if (canPour(selectedTube, tubeIndex)) {
        pourWater(selectedTube, tubeIndex);
        setMoves(prev => prev + 1);
      } else {
        toast.error("Invalid move!");
      }
      setSelectedTube(null);
    }
  };

  const canPour = (from: number, to: number) => {
    if (from === to) return false;
    if (tubes[from].length === 0) return false;
    if (tubes[to].length >= 4) return false;
    
    const sourceColor = tubes[from][tubes[from].length - 1];
    return tubes[to].length === 0 || tubes[to][tubes[to].length - 1] === sourceColor;
  };

  const pourWater = (from: number, to: number) => {
    const newTubes = [...tubes];
    const colorToPour = newTubes[from][newTubes[from].length - 1];
    
    while (
      newTubes[from].length > 0 &&
      newTubes[to].length < 4 &&
      newTubes[from][newTubes[from].length - 1] === colorToPour
    ) {
      newTubes[to].push(newTubes[from].pop()!);
    }
    
    setTubes(newTubes);
    checkWinCondition();
  };

  const checkWinCondition = () => {
    const isWin = tubes.every(tube => 
      tube.length === 0 || 
      (tube.length === 4 && tube.every(color => color === tube[0]))
    );
    
    if (isWin) {
      toast.success(`Congratulations! You won in ${moves} moves!`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <div className="flex gap-4 items-center">
        <h2 className="text-xl font-bold">Moves: {moves}</h2>
        <Button onClick={initializeGame}>New Game</Button>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {tubes.map((tube, index) => (
          <div
            key={index}
            onClick={() => handleTubeClick(index)}
            className={`relative w-16 h-48 border-2 rounded-b-xl cursor-pointer transition-transform ${
              selectedTube === index ? 'scale-110' : ''
            }`}
          >
            {tube.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className={`absolute bottom-0 w-full h-1/4 bg-${color}-500 transition-all`}
                style={{
                  bottom: `${colorIndex * 25}%`,
                  backgroundColor: color,
                  opacity: 0.8
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterSort;