import { GroupKind } from "../../API";
import { AdminState } from "./types";

export const InitialValue: AdminState = {
    Group: {
        inputValue: '',
        __typename: "Group",
        id: '',
        groupID: '',
        groupName: '',
        groupKind: GroupKind.None,
        tags: [],
        _tags: '',
        icon: '',
        thumb: '',
        author: '',
        createdAt: '',
        isActive: true,
        updatedAt: '',
        articles: {
            __typename: "ModelArticleConnection",
            items: [],
            nextToken: null,
        },
    },
    Username: 'unknown-admin'
}