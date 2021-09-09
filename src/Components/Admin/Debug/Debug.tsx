import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Paper,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import { AdminStateContextConsumer as State } from '../AdminContext';

const Title = ({ className }: { className?: string }) => (
    <Typography className={className} variant='h4' component='h2'>
        Admin Context Debug Tool
    </Typography>
);

interface Props {
    className?: string;
}
interface States {}

class AdminDebugUI extends Component<Props, States> {
    render() {
        return (
            <>
                <Paper className={this.props.className}>
                    <Title />
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Admin Context
                        </AccordionSummary>
                        <AccordionDetails>
                            <State>
                                {(state) => (
                                    <p
                                        style={{
                                            width: '100%',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {JSON.stringify(state, null, 2)}
                                    </p>
                                )}
                            </State>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </>
        );
    }
}

export default AdminDebugUI;
