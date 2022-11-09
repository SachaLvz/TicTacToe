import Box from '../components/Box';

type Player = 1 | 2;
type Cell = Player | null;
type Row = Cell[];
type Board = Row[];
type Coord = { x: number; y: number };

export function createEmptyGame(): Board {
    return new Array(3).fill(new Array(3).fill(null));
  }
  
  function getNextPlayer(board: Board): Player {
    const emptyCellCount = board.flat().filter((cell) => cell === null).length;
    return emptyCellCount % 2 === 0 ? 2 : 1;
  }
  
  function getWinner(board: Board): Player | null {
    const rows = board;
    const columns = [
      [rows[0][0], rows[1][0], rows[2][0]],
      [rows[0][1], rows[1][1], rows[2][1]],
      [rows[0][2], rows[1][2], rows[2][2]]
    ];
    const diagonals = [
      [rows[0][0], rows[1][1], rows[2][2]],
      [rows[0][2], rows[1][1], rows[2][0]]
    ];
  
    const scenarios = [...rows, ...columns, ...diagonals];
    const winningScenarios = scenarios.filter((cells) =>
      cells.every((cell) => cell !== null && cell === cells[0])
    );
  

    const winner = winningScenarios[0]?.[0] ?? null;
  
    return winner;
  }
  
  export function play(board: Board, coord: Coord): Board {
    const isEmptyCell = board[coord.y][coord.x] === null;
    const winner = getWinner(board);
  
    if (isEmptyCell && !winner) {
      const nextPlayer = getNextPlayer(board);
  
      const newBoard = board.map((row, y) =>
        row.map((cell, x) => (y === coord.y && x === coord.x ? nextPlayer : cell))
      );
  
      return newBoard;
    }
  
    return board;
  }
  

export default function Page(){

 const board = createEmptyGame();
 const coord = { x: 1, y: 1 };

    return (
        <div className="flex justify-center items-center">
           <div className="bg-purple-500 rounded-lg p-4">
                <h1>Au tour de {getNextPlayer(board)}</h1>
                <div className="grid grid-cols-3 gap-4">

                 <Box value={2} onClick={() => play(board, {x: 0, y: 0})}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={1} onClick={() => play(board, coord)}></Box>
                 <Box value={2} onClick={() => play(board, {x: 0, y: 0})}></Box>
                
               </div>
           </div>
        </div>
    )
}