import { AxiosResponse } from "axios";
import api from "../api/api";
import { ResponseApi } from "../types/ResponseApi";
import IModel from "../models/IModel";

/**
 * Clase abstracta para un servicio genérico de API.
 * @template M Tipo genérico que representa el modelo de datos esperado.
 */
abstract class ApiService<M extends IModel> {
    /**
     * URL base de la API. Debe ser proporcionada por las clases que heredan.
     * @protected
     */
    protected API_URL!: string;

    /**
     * Método para obtener todos los elementos.
     * @returns Una promesa que resuelve en un objeto de tipo ResponseApi (info, results).
     */
    async getAllElements(): Promise<ResponseApi> {
        const response: AxiosResponse = await api.get(this.API_URL);
        return response.data;
    }

    /**
     * Método para obtener un elemento por su ID.
     * @param id ID del elemento que se desea obtener.
     * @returns Una promesa que resuelve en el modelo genérico M o en null si no se encontró el elemento.
     */
    async getElementById(id: number): Promise<M | null> {
        const response: AxiosResponse = await api.get(`${this.API_URL}/${id}`);
        return response.data;
    }

    /**
     * Método para obtener la clase genérica M.
     * @returns La clase genérica M.
     */
    getModelClass(): () => M {
        return Object.getPrototypeOf(this).constructor.Model;
    }
}

export default ApiService;
