import IModel from "./IModel";

export interface Character extends IModel {
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    image:    string;
}

enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

enum Species {
    Alien = "Alien",
    Human = "Human",
}

enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
