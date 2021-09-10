import { AdminState, GroupObject, GroupOperationHandler, Payload_Username } from "./types";

export const UsernameInitialValue: Payload_Username = 'unknown-admin';
export const GroupInitialValue = new GroupObject();
export const GOHInitialValue: GroupOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true,
    GroupChoices: [],
};
export const InitialValue: AdminState = {
    Username: UsernameInitialValue,
    Group: GroupInitialValue,
    GOH: GOHInitialValue,
};