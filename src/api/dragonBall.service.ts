import { config } from "../config";
import { Character } from "./domain/Character";

export class DragonBallService {

    async getCharacters() {
        try {
            console.log("me ejecuto");
            
            const response = await fetch(`${config.URL_API_DRAGON_BALL}/api/characters`);
            const json = await response.json();
            return json as Character[];
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    
    async findCharacter(name: string) {
        try {
            const response = await fetch(`${config.URL_API_DRAGON_BALL}/api/characters/${name}`);
            const json = await response.json();
            return json as Character;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}

export const dragonBallServiceInstance = new DragonBallService();

