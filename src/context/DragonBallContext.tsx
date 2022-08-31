import { createContext, useEffect, useState } from "react";
import { Character } from "../api/domain/Character";
import { dragonBallServiceInstance } from "../api/dragonBall.service";
import { Spinner } from "../components/Spinner/Spinner";

interface IContext {
    characters: Character[];
    universes: number[];
}

const defaultState: IContext = {
    characters: [],
    universes: [],
};


export const DragonBallContext = createContext<IContext>(defaultState);

interface MyProps {
    children: React.ReactNode;
}
export const DragonBallProvider = ({ children }: MyProps) => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [universes, setUniverses] = useState<number[]>([]);
    // cuando cargue el componente
    useEffect(() => {
        setTimeout(() => {
            (async () => {
                const results = await dragonBallServiceInstance.getCharacters();
                const universes = [...new Set(results!.map(e => parseInt(e.universe)))].sort(function (a, b) { return a - b; })
                setUniverses(universes);
                setCharacters(results ?? []);
            })()
        }, 1500);
    }, [])

    if (characters.length == 0) {
        return <Spinner />
    }
    return (
        <DragonBallContext.Provider
            value={{ characters, universes }}
        >
            {children}
        </DragonBallContext.Provider>
    );
};