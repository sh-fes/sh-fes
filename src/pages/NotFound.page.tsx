import React, { Component } from 'react';
import { ThemeSwitcher } from '../Components/Theme';
import { GlobalStateContext } from '../Global';

interface Props {}
interface States {}

class NotFoundPage extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    render() {
        return (
            <>
                <h1>Not Found</h1>
                <ThemeSwitcher />
                <p>{JSON.stringify(this.context)}</p>
            </>
        );
    }
}

export default NotFoundPage;
