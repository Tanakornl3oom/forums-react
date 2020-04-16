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
    ListItem,
    Chip
} from '@material-ui/core';

function CardForums(props) {
    const wrapper = React.useRef();

    const renderChip = () => {
        return props.tags.map((tag, id) => {
            return <Chip key={id} size="small" label={tag} />;
        });
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs />
            <Grid item xs={12}>
                <ExpansionPanel
                    square
                    ref={wrapper}
                    style={{ borderTop: '3px solid  #1abc9c' }}
                >
                    <ExpansionPanelSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography>{props.title}</Typography>
                        <Typography component="span">{renderChip()}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <Grid container spacing={2}>
                                <Grid item></Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body1">
                                        {props.content}
                                    </Typography>
                                </Grid>

                                <Grid item></Grid>
                            </Grid>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default CardForums;
