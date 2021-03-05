import React, { useRef} from "react";
import { NavLink, Link } from "react-router-dom";


export default function Header({idSearch}) {
    const timeRef  = useRef();
    function handleChange(e){
      const textSearch=e.target.value;
      if(timeRef.current){
        clearTimeout(timeRef.current)
      }
      timeRef.current = setTimeout(() => {
        idSearch(textSearch)
      }, 300)
      
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            HELLO BEBUY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search theo text nội dung post"
                  onChange={handleChange}
                />
              </form>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/detail/1">
                  Detail
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
