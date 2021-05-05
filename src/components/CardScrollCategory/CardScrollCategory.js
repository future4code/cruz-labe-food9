import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }));

const CardScrollCaregory = () => {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [restaurant, getRestaurant] = useRequestData([], `${BASE_URL}/restaurants`);
    
    const restaurantCategoryScreen =
    restaurant.restaurants &&
    restaurant.restaurants.map((restaurants,indice) => {
      return (
        <Tab label={restaurants.category} {...a11yProps(indice)} />
      )
    });

    const categoryRestaurantScreen =
    restaurant.restaurants &&
    restaurant.restaurants.map((restaurants,indice) => {
      return (
        <TabPanel value={value} index={indice}>
                {restaurants.name}
        </TabPanel>
      )
    });

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {restaurantCategoryScreen}
                </Tabs>
            </AppBar>
            {categoryRestaurantScreen}
        </div>
    );
}

export default CardScrollCaregory