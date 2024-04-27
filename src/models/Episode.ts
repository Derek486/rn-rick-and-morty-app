import IModel from "./IModel";

export interface Episode extends IModel {
    air_date:    string;
    episode:    string;
    url:        string;
}
