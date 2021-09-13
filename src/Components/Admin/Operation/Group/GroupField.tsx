import { TextField } from '@material-ui/core';
import Autocomplete, {
    AutocompleteRenderInputParams,
    createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab/useAutocomplete';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import { GroupObject } from '../../types';

export const GroupField = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function handleOnChange(
        event: React.ChangeEvent<{}>,
        value: string | GroupObject | null,
    ): void {
        if (typeof value === 'string') {
            setTimeout(() => {
                const payload = Object.assign(new GroupObject(), state.Group);
                payload.inputValue = value;
                payload.groupID = value;
                dispatch({ type: 'GroupObject', payload });
                dispatch({
                    type: 'GOH',
                    payload: {
                        CurrentOperation: 'CREATE',
                        DisableEditor: false,
                        DisableSubmit: false,
                    },
                });
            });
        } else if (value?.inputValue) {
            const payload = Object.assign(new GroupObject(), state.Group);
            payload.inputValue = value.inputValue;
            payload.groupID = value.inputValue;
            dispatch({ type: 'GroupObject', payload });
            dispatch({
                type: 'GOH',
                payload: {
                    CurrentOperation: 'CREATE',
                    DisableEditor: false,
                    DisableSubmit: false,
                },
            });
        } else if (value) {
            dispatch({ type: 'GroupObject', payload: value });
        }
    }
    const filter = createFilterOptions<GroupObject>();
    function filterOptions(
        options: GroupObject[],
        params: FilterOptionsState<GroupObject>,
    ): GroupObject[] {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
            const payload = Object.assign(new GroupObject(), state.Group);
            payload.inputValue = params.inputValue;
            payload.groupID = `Add "${params.inputValue}"`;
            filtered.push(payload);
        }
        return filtered;
    }
    function GetOptionLabel(option: GroupObject) {
        return option.inputValue ? option.inputValue : option.groupID;
    }
    function RenderOption(option: GroupObject) {
        return `${option.groupID} (${option.groupName})${option.isActive ? '' : ' *'}`;
    }
    function RenderInput(params: AutocompleteRenderInputParams): JSX.Element {
        return <TextField {...params} label='Enter GroupID' variant='outlined' />;
    }
    return (
        <Autocomplete<GroupObject, false, undefined, true>
            className={className}
            value={state.Group}
            onChange={handleOnChange}
            filterOptions={filterOptions}
            options={state.AllGroup.GroupChoices()}
            getOptionLabel={GetOptionLabel}
            renderOption={RenderOption}
            renderInput={RenderInput}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            freeSolo
        />
    );
};
