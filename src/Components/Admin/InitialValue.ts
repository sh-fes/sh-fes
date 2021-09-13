import { AdminState, GroupObject, GroupObjectArray, GroupOperationHandler, Payload_Username } from "./types";

export const UsernameInitialValue: Payload_Username = 'unknown-admin';
export const GroupInitialValue = new GroupObject();
export const AllGroupInitialValue = new GroupObjectArray();
export const GOHInitialValue: GroupOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true,
};
export const InitialValue: AdminState = {
    Username: UsernameInitialValue,
    Group: GroupInitialValue,
    AllGroup: AllGroupInitialValue,
    GOH: GOHInitialValue,
};