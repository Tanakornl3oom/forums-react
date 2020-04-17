import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import {
    Box,
    Typography,
    Button,
    IconButton,
    List,
    ListItemText,
    ListItem
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const gotoManageContent = () => {
        history.push('/manage-forum');
        setOpen(false);
    };

    const gotoContents = () => {
        history.push('/forums');
        setOpen(false);
    };

    const list = () => (
        <List>
            <ListItem button key={'forum'}>
                <ListItemText primary={'forum'} onClick={gotoContents} />
            </ListItem>
            <ListItem button key={'manage-forum'}>
                <ListItemText
                    primary={'manage-forum'}
                    onClick={gotoManageContent}
                />
            </ListItem>
        </List>
    );

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box
            display="flex"
            bgcolor="#1abc9c"
            p={2}
            alignItems="center"
            style={{ padding: '30px' }}
        >
            <Box>
                <Button color="primary" onClick={gotoContents}>
                    Contents
                </Button>
                <Button color="primary" onClick={gotoManageContent}>
                    Manage-Contents
                </Button>
            </Box>
            <Box flexGrow={1} textAlign="right">
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                    <Drawer open={open} onClose={toggleDrawer}>
                        {list()}
                    </Drawer>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;
