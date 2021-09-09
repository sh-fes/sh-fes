import { Group } from "./API";

export enum GroupKindDisplayValue {
    Athletic = '運動部',
    Culture = '文化部',
    Grade1 = '中学1年生',
    Grade2 = '中学2年生',
    Grade3 = '中学3年生',
    Grade4 = '高校1年生',
    Grade5 = '高校2年生',
    Grade6 = '高校3年生',
    Teacher = '教員',
    None = '指定なし',
}

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

