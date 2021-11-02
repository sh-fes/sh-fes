import { AdminArticleModel } from "./ArticleModel";
import { AdminArticleObjectArray } from "./ArticleModelArray";
import { AdminGroupObject } from "./GroupModel";
import { AdminGroupObjectArray } from "./GroupModelArray";

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
type Group_ActionType = Action<'GroupObject', AdminGroupObject>;
type AllGroup_ActionType = Action<'AllGroup', AdminGroupObjectArray>;
type AllGroup_Add_ActionType = Action<'AllGroup_Add', AdminGroupObject>;

export interface ArticleOperationHandler {
    CurrentOperation: OperationType;
    DisableEditor: boolean;
    DisableSubmit: boolean;
}
type ArticleOperationHandler_ActionType = Action<'AOH', Partial<ArticleOperationHandler>>;
type Article_ActionType = Action<'ArticleObject', AdminArticleModel>;
type AllArticle_ActionType = Action<'AllArticle', AdminArticleObjectArray>;
type AllArticle_Add_ActionType = Action<'AllArticle_Add', AdminArticleModel>;

export interface AdminState {
    Username: Username;

    GOH: GroupOperationHandler;
    Group: AdminGroupObject;
    AllGroup: AdminGroupObjectArray;

    AOH: ArticleOperationHandler;
    Article: AdminArticleModel;
    AllArticle: AdminArticleObjectArray;
}

export type ActionType =
    | Username_ActionType
    | GroupOperationHandler_ActionType | Group_ActionType | AllGroup_ActionType | AllGroup_Add_ActionType
    | ArticleOperationHandler_ActionType | Article_ActionType | AllArticle_ActionType | AllArticle_Add_ActionType;