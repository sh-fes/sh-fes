import { TextField } from '@material-ui/core';
import Autocomplete, {
    AutocompleteRenderInputParams,
    createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab/useAutocomplete';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import { AdminArticleModel } from '../../types';

export const ArticleField = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function handleOnChange(
        event: React.ChangeEvent<{}>,
        value: string | AdminArticleModel | null,
    ): void {
        if (typeof value === 'string') {
            setTimeout(() => {
                const payload = Object.assign(new AdminArticleModel(), state.Article);
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
            const payload = Object.assign(new AdminArticleModel(), state.Article);
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
            const payload = new AdminArticleModel();
            dispatch({ type: 'ArticleObject', payload });
        }
    }
    const filter = createFilterOptions<AdminArticleModel>();
    function filterOptions(
        options: AdminArticleModel[],
        params: FilterOptionsState<AdminArticleModel>,
    ): AdminArticleModel[] {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
            const payload = Object.assign(new AdminArticleModel(), state.Article);
            payload.inputValue = params.inputValue;
            payload.articleID = `Add "${params.inputValue}"`;
            filtered.push(payload);
        }
        return filtered;
    }
    function GetOptionLabel(option: AdminArticleModel) {
        return option.inputValue ? option.inputValue : option.articleID;
    }
    function RenderOption(option: AdminArticleModel) {
        return `${option.articleID} (${option.title})${option.isActive ? '' : ' *'}`;
    }
    function RenderInput(params: AutocompleteRenderInputParams): JSX.Element {
        return <TextField {...params} label='Enter ArticleID' variant='outlined' />;
    }
    return (
        <Autocomplete<AdminArticleModel, false, undefined, true>
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
