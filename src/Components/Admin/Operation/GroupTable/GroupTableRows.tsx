import { Icon, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { useState } from 'react';
import { GroupHistory } from '../../types';
import { GroupTableCells } from './GroupTableCells';

export const GroupTableRows = ({ groupHistory }: { groupHistory: GroupHistory }) => {
    const [open, setOpen] = useState(false);
    const hasHistory = groupHistory.history.length > 0;
    const arrowIcon = (
        <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
    );
    const blankIcon = <Icon />;
    const history = groupHistory.history.map((group) => (
        <GroupTableCells key={group.id} group={group} icon={blankIcon} />
    ));
    return (
        <>
            <GroupTableCells
                group={groupHistory.head}
                icon={hasHistory ? arrowIcon : blankIcon}
                style={{
                    borderLeft: 'solid 4px #000000',
                }}
            />
            {open ? history : null}
        </>
    );
};
