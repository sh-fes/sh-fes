import { GroupKind } from "../../API";
import { GroupKindDisplayValue, Payload_Group } from "./types";

function GroupKindResolver(e: GroupKind) {
    switch (e) {
        case GroupKind.Athletic:
            return GroupKindDisplayValue.Athletic;
        case GroupKind.Culture:
            return GroupKindDisplayValue.Culture;
        case GroupKind.Grade1:
            return GroupKindDisplayValue.Grade1;
        case GroupKind.Grade2:
            return GroupKindDisplayValue.Grade2;
        case GroupKind.Grade3:
            return GroupKindDisplayValue.Grade3;
        case GroupKind.Grade4:
            return GroupKindDisplayValue.Grade4;
        case GroupKind.Grade5:
            return GroupKindDisplayValue.Grade5;
        case GroupKind.Grade6:
            return GroupKindDisplayValue.Grade6;
        case GroupKind.Teacher:
            return GroupKindDisplayValue.Teacher;
        case GroupKind.None:
            return GroupKindDisplayValue.None;
        default:
            return 'エラー';
    }
}
function tagsResolver(_tags: string): string {
    const tags = _tags.split(',').filter((e) => e !== '') ?? []
    return JSON.stringify(tags)
}
function dateResolver(e: string): string {
    if (e === '') return '';
    const date = new Date(e);
    return date.toLocaleString();
}
export function GroupDisplayValue(e: Payload_Group): { key: string; value: string }[] {
    return [
        { key: 'オブジェクトタイプ', value: e.__typename },
        { key: '公開設定', value: e.isActive ? '公開' : '非公開' },
        { key: 'グループID', value: e.groupID },
        { key: 'グループ名', value: e.groupName },
        { key: 'グループの種類', value: GroupKindResolver(e.groupKind) },
        { key: 'タグ', value: tagsResolver(e._tags) },
        { key: 'アイコンURL', value: e.icon },
        { key: 'サムネイルURL', value: e.thumb },
        { key: '編集者名', value: e.author },
        { key: '作成日時', value: dateResolver(e.createdAt) },
        { key: '更新日時', value: dateResolver(e.updatedAt) },
    ];
}
