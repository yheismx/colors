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


  const [handleModal, setHandleModal] = useState(false);

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
      setHandleModal(false);
      setSearchValue('');
      setHandleFilter('');
    }

  return (
   
      <Router>
        <Header
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
          setHandleFilter={setHandleFilter}
          handleFilter={handleFilter}
          setSearchValue={setSearchValue}
          setHandleModal={setHandleModal}
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

        
          
          <div  className={toggleSidebar ? 'container-full' : 'container'} >
            { searchValue !== '' ? <FilteredColors handleModal={handleModal} setHandleModal={setHandleModal} searchValue={searchValue}/>  :
            
            
              <Switch>
                <Route path="/random">
                  <RandomColors
                    colors={colors}
                    setRandomColor={setRandomColor}
                    randomColor={randomColor}
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route exact path="/">
                  <Colors
                    colors={colors}
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>
                <Route path="/red">
                  <RedColors
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>
                <Route path="/orange">
                  <OrangeColors
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/yellow">
                  <YellowColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/green">
                  <GreenColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/blue">
                  <BlueColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/purple">
                  <PurpleColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/brown">
                  <BrownColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>

                <Route path="/gray">
                  <GrayColors 
                    setHandleModal={setHandleModal}
                    handleModal={handleModal}
                  />
                </Route>
                
              </Switch>
            }
            
          </div>
      </Router>
  );
}

export default App;
