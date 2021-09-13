import { TextField } from '@material-ui/core';
import Autocomplete, {
    AutocompleteRenderInputParams,
    createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab/useAutocomplete';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import { ArticleObject } from '../../types/ArticleObject';

export const ArticleField = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function handleOnChange(
        event: React.ChangeEvent<{}>,
        value: string | ArticleObject | null,
    ): void {
        if (typeof value === 'string') {
            setTimeout(() => {
                const payload = Object.assign(new ArticleObject(), state.Article);
                payload.inputValue = value;
                payload.articleID = value;
                dispatch({ type: 'ArticleObject', payload });
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
            const payload = Object.assign(new ArticleObject(), state.Article);
            payload.inputValue = value.inputValue;
            payload.articleID = value.inputValue;
            dispatch({ type: 'ArticleObject', payload });
            dispatch({
                type: 'GOH',
                payload: {
                    CurrentOperation: 'CREATE',
                    DisableEditor: false,
                    DisableSubmit: false,
                },
            });
        } else if (value) {
            const payload = value;
            dispatch({ type: 'ArticleObject', payload });
        } else if ((event.currentTarget as Element).tagName === 'BUTTON') {
            const payload = new ArticleObject();
            dispatch({ type: 'ArticleObject', payload });
        }
    }
    const filter = createFilterOptions<ArticleObject>();
    function filterOptions(
        options: ArticleObject[],
        params: FilterOptionsState<ArticleObject>,
    ): ArticleObject[] {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
            const payload = Object.assign(new ArticleObject(), state.Article);
            payload.inputValue = params.inputValue;
            payload.articleID = `Add "${params.inputValue}"`;
            filtered.push(payload);
        }
        return filtered;
    }
    function GetOptionLabel(option: ArticleObject) {
        return option.inputValue ? option.inputValue : option.articleID;
    }
    function RenderOption(option: ArticleObject) {
        return `${option.articleID} (${option.title})${option.isActive ? '' : ' *'}`;
    }
    function RenderInput(params: AutocompleteRenderInputParams): JSX.Element {
        return <TextField {...params} label='Enter ArticleID' variant='outlined' />;
    }
    return (
        <Autocomplete<ArticleObject, false, undefined, true>
            className={className}
            value={state.Article}
            onChange={handleOnChange}
            filterOptions={filterOptions}
            options={state.AllArticle.ArticleChoices()}
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
