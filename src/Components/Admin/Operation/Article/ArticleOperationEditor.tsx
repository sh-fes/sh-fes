import { gql, useMutation } from '@apollo/client';
import { Button, TextField } from '@material-ui/core';
import { CreateArticleMutation, CreateArticleMutationVariables } from '../../../../API';
import { createArticle } from '../../../../graphql/mutations';
import { adminClient } from '../../../../GraphqlClient';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { ArticleObject } from '../../types/ArticleObject';

const TextFieldArticleID = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new ArticleObject(), state.Article);
        payload.articleID = e.target.value;
        dispatch({ type: 'ArticleObject', payload });
    }
    const disabled = state.AOH.DisableEditor || state.AOH.CurrentOperation === 'UPDATE';
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='articleID'
            value={state.Article.articleID}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
// const TextFieldArticleKind = ({ className }: { className?: string }) => {
//     const state = useAdminState();
//     const dispatch = useAdminDispatch();
//     function onChange(e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) {
//         const payload = Object.assign(new ArticleObject(), state.Article);
//         payload.groupKind = e.target.value as ArticleKind;
//         dispatch({ type: 'ArticleObject', payload });
//     }
//     const disabled = state.AOH.DisableEditor;
//     return (
//         <FormControl margin='dense' className={className} disabled={disabled}>
//             <InputLabel>groupKind</InputLabel>
//             <Select
//                 MenuProps={{ disableScrollLock: true }}
//                 value={state.Article.groupKind}
//                 onChange={onChange}
//             >
//                 {Object.entries(ArticleKindDisplayValue).map(([value, displayValue], key) => (
//                     <MenuItem key={key} value={value}>
//                         {displayValue}
//                     </MenuItem>
//                 ))}
//             </Select>
//         </FormControl>
//     );
// };
const TextFieldGroupID = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new ArticleObject(), state.Article);
        payload.groupID = e.target.value;
        dispatch({ type: 'ArticleObject', payload });
    }
    const disabled = state.AOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='groupID'
            value={state.Article.groupID}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldTitle = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new ArticleObject(), state.Article);
        payload.title = e.target.value;
        dispatch({ type: 'ArticleObject', payload });
    }
    const disabled = state.AOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='title'
            value={state.Article.title}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldThumb = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new ArticleObject(), state.Article);
        payload.thumb = e.target.value;
        dispatch({ type: 'ArticleObject', payload });
    }
    const disabled = state.AOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='thumb'
            value={state.Article.thumb}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldTags = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new ArticleObject(), state.Article);
        payload._tags = e.target.value;
        payload.tagsToArray();
        dispatch({ type: 'ArticleObject', payload });
    }
    const disabled = state.AOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='tags(?optional)'
            value={state.Article._tags}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const CancelButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: null, DisableEditor: true, DisableSubmit: true },
        });
        const articles = state.AllArticle.ArticleChoices().filter(
            (article) => article.articleID === state.Article.articleID,
        );
        if (articles.length > 0) dispatch({ type: 'ArticleObject', payload: articles[0] });
        else dispatch({ type: 'ArticleObject', payload: new ArticleObject() });
    }
    const disabled = state.AOH.DisableSubmit;
    return (
        <Button className={className} onClick={onClick} disabled={disabled}>
            Cancel
        </Button>
    );
};
const SubmitButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const disabled = state.AOH.DisableSubmit;
    return (
        <Button
            className={className}
            type='submit'
            variant='contained'
            color='secondary'
            disabled={disabled}
        >
            Submit
        </Button>
    );
};
export const OperationEditor = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    const [CreateArticle] = useMutation<CreateArticleMutation, CreateArticleMutationVariables>(
        gql(createArticle),
        { client: adminClient },
    );
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        state.Article.Create(CreateArticle, state.Username);
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: null, DisableEditor: true, DisableSubmit: true },
        });
    }
    return (
        <form className={className} onSubmit={onSubmit}>
            <div className={Style.FormTextFieldGroup}>
                <TextFieldArticleID className={Style.Form_articleID} />
                <TextFieldGroupID className={Style.Form_groupID} />
                <TextFieldTitle className={Style.Form_title} />
                <TextFieldThumb className={Style.Form_thumb} />
                <TextFieldTags className={Style.Form__tags} />
            </div>
            <div className={Style.FormButtonGroup}>
                <CancelButton className={Style.Form_cancel} />
                <SubmitButton className={Style.Form_submit} />
            </div>
        </form>
    );
};
