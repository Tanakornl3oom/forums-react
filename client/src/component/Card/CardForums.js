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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';

import './CardForums.scss';

function CardForums(props) {
    const renderChip = () => {
        return props.tags.map((tag, id) => {
            const color = ['default', 'primary', 'secondary'];
            return (
                <Chip
                    key={id}
                    size="small"
                    label={tag}
                    color={color[Math.floor(Math.random() * 3)]}
                />
            );
        });
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ExpansionPanel
                    square
                    style={{ borderTop: '3px solid  #1abc9c' }}
                >
                    <ExpansionPanelSummary
                        aria-controls="panel1d-content"
                        expandIcon={<ExpandMoreIcon />}
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
                                <Grid item xs={1}></Grid>
                            </Grid>
                            <NavLink
                                className={'detail'}
                                to={`forum/${props.id}`}
                            >
                                See more details...
                            </NavLink>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    );
}

export default CardForums;
