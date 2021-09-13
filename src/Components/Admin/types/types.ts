import { ArticleObject } from "./ArticleObject";
import { ArticleObjectArray } from "./ArticleObjectArray";
import { GroupObject } from "./GroupObject";
import { GroupObjectArray } from "./GroupObjectArray";

export interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
}

export type Username = string;
export type OperationType = 'CREATE' | 'UPDATE' | 'DELETE' | 'RECREATE' | null;

type Username_ActionType = Action<'Username', Username>;

export interface GroupOperationHandler {
    CurrentOperation: OperationType;
    DisableEditor: boolean;
    DisableSubmit: boolean;
}
type GroupOperationHandler_ActionType = Action<'GOH', Partial<GroupOperationHandler>>;
type Group_ActionType = Action<'GroupObject', GroupObject>;
type AllGroup_ActionType = Action<'AllGroup', GroupObjectArray>;
type AllGroup_Add_ActionType = Action<'AllGroup_Add', GroupObject>;

export interface ArticleOperationHandler {
    CurrentOperation: OperationType;
    DisableEditor: boolean;
    DisableSubmit: boolean;
}
type ArticleOperationHandler_ActionType = Action<'AOH', Partial<ArticleOperationHandler>>;
type Article_ActionType = Action<'ArticleObject', ArticleObject>;
type AllArticle_ActionType = Action<'AllArticle', ArticleObjectArray>;
type AllArticle_Add_ActionType = Action<'AllArticle_Add', ArticleObject>;

export interface AdminState {
    Username: Username;

    GOH: GroupOperationHandler;
    Group: GroupObject;
    AllGroup: GroupObjectArray;

    AOH: ArticleOperationHandler;
    Article: ArticleObject;
    AllArticle: ArticleObjectArray;
}

export type ActionType =
    | Username_ActionType
    | GroupOperationHandler_ActionType | Group_ActionType | AllGroup_ActionType | AllGroup_Add_ActionType
    | ArticleOperationHandler_ActionType | Article_ActionType | AllArticle_ActionType | AllArticle_Add_ActionType;