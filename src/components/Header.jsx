import React from 'react'
import Logo from '../assets/logo-symbol.svg';
import SearchIcon from '@material-ui/icons/Search';


const Header = ({setToggleSidebar, toggleSidebar, setHandleFilter,handleFilter, setSearchValue, setHandleModal}) => {

    const toggle = () => {
        setToggleSidebar(!toggleSidebar);
    }

    const handleInputFilter = (e) => {
        setHandleFilter(e.target.value);
    }

    const handleSearch = () => {
        setSearchValue(handleFilter);
        setHandleModal(false);
    }

    return (
        <header className="header">
            <img onClick={toggle} style={{marginLeft: '10px'}} src={Logo} alt=""/>
            <div >
                <input onChange={handleInputFilter} className="input-search" type="text" value={handleFilter} placeholder="Search by name"/>
                <button className="button-header"onClick={handleSearch}><SearchIcon/></button>
            </div>           
        </header>
    )
}

export default Header
