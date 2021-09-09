import { GroupKind } from "../../API";
import { Group } from "./API";

export interface Action<Type, Payload> {
    type: Type
    payload: Payload
}

export interface Payload_Group extends Group {
    inputValue: string;
    _tags: string;
}
export type Payload_Username = string

type GroupID_ActionType = Action<'setGroup', Payload_Group>
type Username_ActionType = Action<'setUsername', Payload_Username>

export interface AdminState {
    Group: Payload_Group;
    Username: Payload_Username;
}

export type ActionType =
    | GroupID_ActionType
    | Username_ActionType

