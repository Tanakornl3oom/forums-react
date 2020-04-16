import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import { Box, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    const history = useHistory();

    const gotoManageContent = () => {
        history.push('/manage-forum');
    };

    const gotoContents = () => {
        history.push('/forums');
    };

    return (
        <Box
            display="flex"
            bgcolor="#1abc9c"
            p={2}
            alignItems="center"
            style={{ padding: '30px' }}
        >
            <Typography>Header</Typography>
            <Box>
                <Button color="primary" onClick={gotoManageContent}>
                    Manage-Content
                </Button>
                <Button color="primary" onClick={gotoContents}>
                    Content
                </Button>
            </Box>
            <Box flexGrow={1} textAlign="right">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;
