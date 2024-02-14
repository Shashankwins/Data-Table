import { Country } from "./country";
import { State } from "./state";

export interface User {
    "id": string,
    "subject": string[],
    "name": string,
    "dob": string,
    "houseNo": string,
    "street": string,
    "country": Country
    "state": State,
    "marks": number
}
