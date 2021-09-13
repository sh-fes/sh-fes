import { ArticleObject } from "./types/ArticleObject";
import { ArticleObjectArray } from "./types/ArticleObjectArray";
import { GroupObject } from "./types/GroupObject";
import { GroupObjectArray } from "./types/GroupObjectArray";
import { AdminState, ArticleOperationHandler, GroupOperationHandler, Username } from "./types/types";

export const UsernameInitialValue: Username = 'unknown-admin';

export const GOHInitialValue: GroupOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true,
};
export const GroupInitialValue = new GroupObject();
export const AllGroupInitialValue = new GroupObjectArray();

export const AOHInitialValue: ArticleOperationHandler = {
    CurrentOperation: null,
    DisableEditor: true,
    DisableSubmit: true
};
export const ArticleInitialValue = new ArticleObject();
export const AllArticleInitialValue = new ArticleObjectArray();

export const InitialValue: AdminState = {
    Username: UsernameInitialValue,

    GOH: GOHInitialValue,
    Group: GroupInitialValue,
    AllGroup: AllGroupInitialValue,

    AOH: AOHInitialValue,
    Article: ArticleInitialValue,
    AllArticle: AllArticleInitialValue,
};