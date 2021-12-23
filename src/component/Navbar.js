import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMissions } from '../redux/mission/mission';
import '../App.css';
import Icon from '../asset/planet.png';

const Navbar = () => {
  const { status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'fetched') {
      dispatch(getMissions());
    }
  }, []);

  return (
    <nav className="navBar a-center d-flex">
      <div className="nav-header a-center d-flex">
        <img src={Icon} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-ul d-flex a-center j-center">
        <li key={1}>
          <NavLink to="/" exact className={(navData) => (navData.isActive ? 'active-link' : '')}>
            Rocket
          </NavLink>
        </li>
        <li key={2}>
          <NavLink to="/Dragon" className={(navData) => (navData.isActive ? 'active-link' : '')}>
            Dragon
          </NavLink>
        </li>
        <li key={3}>
          <NavLink to="/Mission" className={(navData) => (navData.isActive ? 'active-link' : '')}>
            Mission
          </NavLink>
        </li>
        <li key={4}>
          <NavLink to="/Myprofile" className={(navData) => (navData.isActive ? 'active-link' : '')}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
