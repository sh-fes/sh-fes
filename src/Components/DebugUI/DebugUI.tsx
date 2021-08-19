import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { GlobalStateContext } from '../../Global';
import { ThemeSwitcher } from '../Theme';

interface Props {}
interface States {
    authToken: string | null;
}

class DebugUI extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    constructor(props: Props) {
        super(props);
        this.state = { authToken: null };
        this.update = this.update.bind(this);
    }
    update() {
        Auth.currentSession().then((session) => {
            this.setState({ authToken: session.getIdToken().getJwtToken() });
        });
    }
    render() {
        return (
            <>
                <h2>Debug Tool</h2>
                <h3>State</h3>
                <button onClick={this.update}>UpdateState</button>
                <p>{this.state.authToken ?? 'undefined'}</p>
                <h3>Context</h3>
                <ThemeSwitcher />
                <p>{JSON.stringify({ ...this.context, authClient: 'ApolloClient' })}</p>
            </>
        );
    }
}

export default DebugUI;
