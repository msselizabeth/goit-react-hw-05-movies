

import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 40px;
  width: 100%;
  height: 50px;
  box-shadow: 0px 3px 0px grey;
  margin-bottom: 10px;
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: black;
  &:hover,
  :focus {
    color: pink;
  }
`;
