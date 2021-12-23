import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMissions } from '../redux/mission/mission';

const Navbar = () => {
  const { status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'fetched') {
      dispatch(getMissions());
    }
  }, []);

  return (
    <nav className="navBar">
      <ul>
        <li key={1}>
          <NavLink to="/" className={(navData) => (navData.isActive ? 'active-link' : '')}>
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
