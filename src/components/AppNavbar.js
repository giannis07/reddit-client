import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/searchSlice';
import { FaSearch } from 'react-icons/fa';
import { Navbar , Form} from 'react-bootstrap';
import SubredditList from './SubredditList';



const AppNavbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  
  return (
    <Navbar bg="light" variant="light" expand="lg" className="py-3 px-5 whiteBg">   
        
        <Navbar.Brand href="#home">Reddit<span style={{ color: 'blue', fontWeight: 'bold' }}>Minimal</span></Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
           
          <Form className="d-flex" onSubmit={handleSearchChange}>
              <input
                  type="search"
                  placeholder="Search"
                  className="form-control me-2"
                  aria-label="Search"
                  value={searchQuery}   
                  onChange={handleSearchChange}                
              />
              <button 
                type="submit" 
                className="btn btn-outline-light" 
                style={{ border: 'none', background: 'none' }}
              >
                <FaSearch style={{ color: '#000' }} />  
              </button>
          </Form>

          {/* <SubredditList className="subreddit-list-hidden" /> */}

        </Navbar.Collapse>      
    </Navbar>
  );
};

export default AppNavbar;
