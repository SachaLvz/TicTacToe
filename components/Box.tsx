type Player = 1 | 2 | null;

function Box({value, onClick}: {value: Player, onClick: () => void}){

    const val = value;

   if(!value)
        return (
        <div>
            <button onClick={onClick} className="flex items-center justify-center text-[5vw] bg-red-300 hover:bg-red-200 aspect-square relative px-10"></button>
        </div>
        )

        return (
        <div>
          <button disabled className="flex items-center justify-center text-[5vw] bg-red-300 hover:bg-red-200 aspect-square relative px-10">{value}</button>
        </div>
        )
}

export default Box;