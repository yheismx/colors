import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Colors from './components/Colors';
import RedColors from './components/RedColors';
import OrangeColors from './components/OrangeColors';
import YellowColors from './components/YellowColors';
import GreenColors from './components/GreenColors';
import BlueColors from './components/BlueColors';
import PurpleColors from './components/PurpleColors';
import BrownColors from './components/BrownColors';
import GrayColors from './components/GrayColors';
import RandomColors from './components/RandomColors';
import FilteredColors from './components/FilteredColors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useQuery, gql } from '@apollo/client';

const QUERY = gql`

  query getColors{
    getColors{
      name
      hex
      rgb
    }
  }

`;

function App() {

 
  const { data } = useQuery(QUERY);


  
 
  // console.log(data.getColors);

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [colors, setColors] = useState([]);
  
  const [handleFilter, setHandleFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');


    useEffect(() => {

      if(data){
        setColors(data.getColors);
      }
      
  
    }, [data])
 
    

    const [randomColor, setRandomColor] = useState([])

    const getRandomColor = () => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      setRandomColor([color])
      console.log(randomColor)
    }

    const cleanFilter = () => {
      setSearchValue('');
    }

  return (
   
      <Router>
        <Header
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
          setHandleFilter={setHandleFilter}
          handleFilter={handleFilter}
          setSearchValue={setSearchValue}
        />

        { toggleSidebar ? null : 

          <aside className="sidebar">
                      
                        
            <ul>
                <li onClick={cleanFilter}>
                  <Link to="/random">
                    <button onClick={getRandomColor} className="random-color">Random Color</button>
                  </Link>
                </li>
                <li onClick={cleanFilter}>
                  <Link className="link" to="/">Colors</Link>
                </li>
                <li onClick={cleanFilter}>
                  
                  <Link className="link"  to="/red">Red</Link>
                </li>
                <li onClick={cleanFilter}>
                  <Link className="link"  to="/orange">Orange</Link>
                </li>
                <li onClick={cleanFilter}>
                  <Link className="link"  to="/yellow">Yellow</Link>
                </li>

                <li onClick={cleanFilter}>
                  <Link className="link"  to="/green">Green</Link>
                </li>

                <li onClick={cleanFilter}>
                  <Link className="link"  to="/blue">Blue</Link>
                </li>

                <li onClick={cleanFilter}>
                  <Link className="link"  to="/purple">Purple</Link>
                </li>

                <li onClick={cleanFilter}>
                  <Link className="link"  to="/brown">Brown</Link>
                </li>

                <li onClick={cleanFilter}>
                  <Link className="link"  to="/gray">Gray</Link>
                </li>
            </ul>
          </aside>
              
      
        }

        
          
          <div  className="container">
            { searchValue !== '' ? <FilteredColors searchValue={searchValue}/>  :
            
            
              <Switch>
                <Route path="/random">
                  <RandomColors
                    colors={colors}
                    setRandomColor={setRandomColor}
                    randomColor={randomColor}
                  />
                </Route>

                <Route exact path="/">
                  <Colors
                    colors={colors}
                  />
                </Route>
                <Route path="/red">
                  <RedColors />
                </Route>
                <Route path="/orange">
                  <OrangeColors />
                </Route>

                <Route path="/yellow">
                  <YellowColors />
                </Route>

                <Route path="/green">
                  <GreenColors />
                </Route>

                <Route path="/blue">
                  <BlueColors />
                </Route>

                <Route path="/purple">
                  <PurpleColors />
                </Route>

                <Route path="/brown">
                  <BrownColors />
                </Route>

                <Route path="/gray">
                  <GrayColors />
                </Route>
                
              </Switch>
            }
            
          </div>
      </Router>
  );
}

export default App;
