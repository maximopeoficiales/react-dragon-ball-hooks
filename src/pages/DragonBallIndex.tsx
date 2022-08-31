import { useContext, useMemo, useState } from "react";
import { Form } from "../components/Form";
import { Person } from "../components/Person";
import { DragonBallContext } from "../context/DragonBallContext";

interface MyProps {
    children?: JSX.Element;
    title?: string
}

export function DragonBallIndex({ children, title }: MyProps) {
    const { characters, universes } = useContext(DragonBallContext)
    const [idUniverse, setIdUniverse] = useState(7)
    const charactersFiltered = useMemo(() => characters.filter(c => parseInt(c.universe) === idUniverse), [idUniverse])



    return (
        <div className="App p-4 ">
            <h1 className="text-center font-bold text-4xl my-2">{title ? title : "Dragon Ball"}</h1>
            {children}

            <Form onSubmit={(e) => {
                console.log(e);

            }} />
            <div className="flex my-4">
                <p>Selecciona tu universo</p>
                <select className="mx-2"
                    value={idUniverse}
                    onChange={(e) => {
                        setIdUniverse(parseInt(e.target.value))
                    }}
                >
                    {universes.map((u) => (
                        <option value={u} key={u}>{u}</option>
                    ))}
                </select>
            </div>


            <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {(charactersFiltered.length) && charactersFiltered.map(c => (

                    <Person character={c} key={c.id} />
                ))}

            </div>
        </div>
    )
}

