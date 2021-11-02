import { AdminArticleObjectArray } from "./types";
import { AdminArticleModel } from "./types/ArticleModel";
import { AdminGroupObject } from "./types/GroupModel";
import { AdminGroupObjectArray } from "./types/GroupModelArray";
import { AdminState, ArticleOperationHandler, GroupOperationHandler, Username } from "./types/types";

export const UsernameInitialValue: Username = 'unknown-admin';

export const GOHInitialValue: GroupOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true,
};
export const GroupInitialValue = new AdminGroupObject();
export const AllGroupInitialValue = new AdminGroupObjectArray();

export const AOHInitialValue: ArticleOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true
};
export const ArticleInitialValue = new AdminArticleModel();
export const AllArticleInitialValue = new AdminArticleObjectArray();

export const InitialValue: AdminState = {
    Username: UsernameInitialValue,

    GOH: GOHInitialValue,
    Group: GroupInitialValue,
    AllGroup: AllGroupInitialValue,

    AOH: AOHInitialValue,
    Article: ArticleInitialValue,
    AllArticle: AllArticleInitialValue,
};