import { GroupObject } from "./GroupObject";
import { GroupObjectArray } from "./GroupObjectArray";

export interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
}

export type Payload_Username = string;
export type OperationType = 'CREATE' | 'UPDATE' | 'DELETE' | 'RECREATE' | null;
export interface GroupOperationHandler {
    CurrentOperation: OperationType;
    DisableEditor: boolean;
    DisableSubmit: boolean;
}

type Username_ActionType = Action<'Username', Payload_Username>;
type Group_ActionType = Action<'GroupObject', GroupObject>;
type AllGroup_ActionType = Action<'AllGroup', GroupObjectArray>;
type AllGroup_Add_ActionType = Action<'AllGroup_Add', GroupObject>;
type GroupOperationHandler_ActionType = Action<'GOH', Partial<GroupOperationHandler>>;

export interface AdminState {
    Username: Payload_Username;
    Group: GroupObject;
    AllGroup: GroupObjectArray;
    GOH: GroupOperationHandler;
}

export type ActionType =
    | Username_ActionType
    | Group_ActionType
    | AllGroup_ActionType
    | AllGroup_Add_ActionType
    | GroupOperationHandler_ActionType;