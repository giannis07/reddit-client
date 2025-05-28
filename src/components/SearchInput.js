import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  } from '../features/slices/postSlice';  // Εισαγωγή του setQuery από το slice
import { FaSearch } from 'react-icons/fa';



const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const dispatch = useDispatch(); 

    const handleSearch=(event)=>{
        event.preventDefault();
        dispatch((searchTerm));
        console.log("Searching for:", searchTerm);
    }


    return (
        <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}   
            />
            <button 
              type="submit" 
              className="btn btn-outline-light" 
              style={{ border: 'none', background: 'none' }}
            >
              <FaSearch style={{ color: '#000' }} />  
            </button>
        </Form>
    );
}

export default SearchInput;

