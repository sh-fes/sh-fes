import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from '../Global';

interface Props {}
interface States {}

class TopPage extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    render() {
        return (
            <>
                <h1>Top Page</h1>
                <Button variant={'contained'} color={'secondary'} component={Link} to={'/admin'}>
                    Admin UI
                </Button>
            </>
        );
    }
}

export default TopPage;
