import React from 'react';
import { Box, useTheme, IconButton, Typography, Avatar } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import InputBase from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const TopMenu = () => {
    const flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant='h5' component='h5'>Dashboard</Typography>
            <Box display="flex">
                <IconButton aria-label="search" size="medium">
                    <SearchOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="search" size="medium" onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === "dark"? (<DarkModeOutlinedIcon/>) :(
                            <LightModeOutlinedIcon/>
                        )
                    }
                </IconButton>
                <IconButton aria-label="dashboard" size="medium">
                    <GridViewOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="search" size="medium">
                    <NotificationsOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="search" size="medium">
                    <SettingsOutlinedIcon fontSize="inherit" />
                </IconButton>
                <Avatar alt="Remy Sharp" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=757" />
            </Box>
        </Box>
    );
};

export default TopMenu;