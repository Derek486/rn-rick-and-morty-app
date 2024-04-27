import { Character } from "../models/Character"
import { Episode } from "../models/Episode"
import { Location } from "../models/Location"

export type ResponseApi = {
    info: {
        count: number,
        pages: number,
        next: string
        prev: string | null
    },
    results: [ Character | Location | Episode ]
}