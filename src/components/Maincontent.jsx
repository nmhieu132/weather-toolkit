import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Hour from './Hour';
import Today from './Today';
import Week from './Week';
import {makeStyles} from '@mui/styles'
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        margin-top='30px'
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  } 
  const useStyles = makeStyles({
      tab:{
        '& button':{
          color: '#6c757d',
          fontWeight: 'bold',
        },
        '& .Mui-selected':{
          color: '#333',
          '& span':{
            
          }
        },
        '& .css-1aquho2-MuiTabs-indicator':{
          backgroundColor:'#333'
      }
      },

  })
function Maincontent(){
    const [value, setValue] = useState(0);
    const classes=useStyles();
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs className={classes.tab} value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Today" {...a11yProps(0)}/>
                <Tab label="Week" {...a11yProps(1)}/>
                <Tab label="Hour" {...a11yProps(2)}/>
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Today/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Week/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Hour/>
        </TabPanel>
        
        </>
    );
}
export default Maincontent