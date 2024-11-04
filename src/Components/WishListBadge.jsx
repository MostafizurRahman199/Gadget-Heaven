// import React from 'react'

// export default function WishListBadge() {
//   return (
//     <div>WishListBadge</div>
//   )
// }


import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MyContext } from '../Utils/MyProvider';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function WishListBadge({isHomePage}) {

    const {cartLength, wishLength, setCartLength, setWishLength} = React.useContext(MyContext)

    React.useEffect(()=>{

    },[wishLength])
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={wishLength} color="secondary">
        <FavoriteIcon className={isHomePage} />
      </StyledBadge>
    </IconButton>
  );
}
