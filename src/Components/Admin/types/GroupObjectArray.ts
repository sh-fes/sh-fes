import { GroupInitialProperties, GroupObject } from "./GroupObject";

export interface GroupHistory {
    head: GroupObject;
    history: GroupObject[];
}
export class GroupObjectArray {
    public GroupObjects: GroupObject[] = [];
    constructor(props?: GroupObject[]) {
        if (props) this.GroupObjects = props;
    }
    public Add(group: GroupObject): void {
        this.GroupObjects.push(group);
    }
    public uniqueIDs(): string[] {
        return Array.from(new Set(this.GroupObjects.map((group) => group.groupID)));
    }
    public byGroupID(groupID: string): GroupObject[] {
        return this.GroupObjects.filter(group => group.groupID === groupID);
    }
    public GroupHistory(): GroupHistory[] {
        const groupIDs = this.uniqueIDs();
        return groupIDs.map((groupID) => {
            const groupsByGroupID = this.byGroupID(groupID).sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            const head = groupsByGroupID.shift() ?? new GroupObject();
            const history = groupsByGroupID;
            const groupHistory: GroupHistory = { head, history };
            return groupHistory;
        });
    }
    public GroupChoices(): GroupObject[] {
        const groupIDs = this.uniqueIDs();
        const uniqueGroups = groupIDs.map((groupID) =>
            this.GroupObjects
                .filter((v) => v.groupID === groupID)
                .reduce(
                    (a, b) => (a && new Date(a.createdAt) > new Date(b.createdAt) ? a : b),
                    GroupInitialProperties,
                ),
        );
        const GroupChoices = uniqueGroups.map((group) => new GroupObject(group));
        return GroupChoices;
    }
}