import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import AddMovie from './AddMovie';
import FilterByName from './FilterByName';
import {Link} from 'react-router-dom';
import RatingStarFilter from '../RatingStar'

const MyNavbar = ({add, inputSearch, setInputSearch, starRate, setStarRate}) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to="/" style={{color:"white"}}>MOVIE APP</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <AddMovie className= "addBtn" add= {add}/>
              <FilterByName  inputSearch={inputSearch} setInputSearch={setInputSearch}/>
              <div className="StarsFilter">
              <RatingStarFilter isMovieRating={false} starRate={starRate} setStarRate={setStarRate} />
              </div>
            </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default MyNavbar
