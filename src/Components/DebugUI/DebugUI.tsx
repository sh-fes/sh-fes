import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { GlobalStateContext } from '../../Global';

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
                <Container maxWidth={'lg'}>
                    <h2>Debug Tools</h2>
                    <Accordion onChange={this.update}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>State</AccordionSummary>
                        <AccordionDetails>
                            <p style={{ width: '100%', wordWrap: 'break-word' }}>
                                {this.state.authToken ?? 'Click to update'}
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Context</AccordionSummary>
                        <AccordionDetails>
                            <p
                                style={{
                                    width: '100%',
                                    wordWrap: 'break-word',
                                    whiteSpace: 'pre-wrap',
                                }}
                            >
                                {JSON.stringify(
                                    { ...this.context, authClient: 'ApolloClient' },
                                    null,
                                    2,
                                )}
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </>
        );
    }
}

export default DebugUI;
