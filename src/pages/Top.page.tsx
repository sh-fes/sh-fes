import React, { Component } from 'react';
import { GlobalStateContext } from '../Global';
import { ThemeSwitcher } from '../Global/Theme';

interface Props {}
interface States {}

class TopPage extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    render() {
        return (
            <>
                <h1>Top Page</h1>
                {/** There is three way to use context
                 *   1. Use Context.Consumer
                 *   2. Use contextType
                 *   3. Use useContext (this is react hook)
                 */}
                <GlobalStateContext.Consumer>
                    {(state) => state?.theme ?? undefined}
                </GlobalStateContext.Consumer>
                <ThemeSwitcher />
                {this.context?.scroll?.last ?? undefined}
            </>
        );
    }
}

export default TopPage;
