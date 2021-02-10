import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

// apis
import { fetchRestaurants } from '../apis/restaurants';

// images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

export const Restaurants = () => {
    const [state, dispatch] = useReducer(restaurantsReducer, initialState);

    useEffect(() => {
      dispatch({ type: restaurantsActionTyps.FETCHING });
      fetchRestaurants()
      .then((data) =>
        dispatch({
          type: restaurantsActionTyps.FETCH_SUCCESS,
          payload: {
            restaurants: data.restaurants
          }
        })
      )
    }, [])

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
    </Fragment>
  )
}