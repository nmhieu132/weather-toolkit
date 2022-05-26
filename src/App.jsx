import {Container,Box} from '@mui/material'
import Sidebar from './components/Sidebar'
import './App.css';
import {common, grey} from '@mui/material/colors'
import Maincontent from './components/Maincontent'
import {useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { getWeatherAsync,weatherSelector } from './redux/weatherSlice';


function App() {
  const blanc = common.white;
  const gri = grey[100];
  const dispatch = useDispatch()
  const weather = useSelector(weatherSelector)
  useEffect(() => {
    dispatch(getWeatherAsync())
  },[])
  console.log(weather)
  return (
    
      <Container maxWidth="lg" sx={{pt:4}}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: 1/4,
              height: "90vh",
              backgroundColor: blanc,
              display: 'flex',
              flexDirection:'column',
              alignItems: 'start',
              paddingLeft: '30px'
            }}
          >
            <Sidebar/>
          </Box>
          <Box
            sx={{
              width: 3/4,
              height: "90vh",
              backgroundColor: gri
            }}
          >
            <Maincontent/>
          </Box>
        </Box>
      </Container>
    
  );
}

export default App;
