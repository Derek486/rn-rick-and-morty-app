import { Episode } from "../models/Episode";
import ApiService from "./api.service";

/**
 * Servicio para interactuar con la API de episodios.
 */
class EpisodesService extends ApiService<Episode> {
    /**
     * URL de la API de episodios.
     */
    API_URL: string = "/episode"
}

export default EpisodesService;