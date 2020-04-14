import React from 'react';
import {
    Typography,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    List,
    ListItemText,
    Divider,
    ListItem
} from '@material-ui/core';
import { width } from 'dom-helpers';

function CardForums() {
    const wrapper = React.useRef();
    return (
        <Grid container spacing={3}>
            <Grid item xs />
            <Grid item xs={11}>
                <ExpansionPanel square ref={wrapper}>
                    <ExpansionPanelSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography>Test Forums</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        {'Forum #1'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body1">
                                        {' middle '}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant="body1">
                                        {' right '}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {
                                                " — I'll be in your neighborhood doing errands this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {
                                                " — I'll be in your neighborhood doing errands this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default CardForums;
