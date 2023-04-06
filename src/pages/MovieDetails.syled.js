import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BoxMovieDetails = styled.div`
  display: flex;
  justify-content: center;

`

export const Image = styled.img`
   width: 300px;
   height: 400px
`

export const DescriptionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-left: 20px;
`

export const MovieDetailsContainer = styled.div`
   
     margin-top: 30px;
`

export const BoxAdditionalInfomation = styled.div`
    margin-top: 30px;

`
export const BackBtn = styled(Link)`
  display: inline-block;
  padding: 3px;
  text-align: center;
  text-decoration: none;
  border: 1px solid black;
  color: blue;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 15px;
`;