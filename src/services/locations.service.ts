import { Location } from "../models/Location";
import ApiService from "./api.service";

/**
 * Servicio para interactuar con la API de lugares.
 */
class LocationService extends ApiService<Location> {
    /**
     * URL de la API de lugares.
     */
    API_URL: string = "/location"
}

export default LocationService;