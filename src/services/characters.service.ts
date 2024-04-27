import { Character } from "../models/Character";
import ApiService from "./api.service";

/**
 * Servicio para interactuar con la API de personajes.
 */
class CharactersService extends ApiService<Character> {
    /**
     * URL de la API de personajes.
     */
    API_URL: string = "/character";
}

export default CharactersService;
