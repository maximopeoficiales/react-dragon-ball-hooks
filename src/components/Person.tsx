import { Character } from "../api/domain/Character";

interface MyProps {
    character: Character;
}

export const Person = ({ character }: MyProps) => {
    return (

        <div className=" block p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
            <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
            <div className="flex justify-center ">
                <img src={character.imageUrl} alt={character.name} className="h-56" />

            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>


    )
}
