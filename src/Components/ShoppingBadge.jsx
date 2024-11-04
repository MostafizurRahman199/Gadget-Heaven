
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MyContext } from '../Utils/MyProvider';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function ShoppingBadge({isHomePage}) {

    const {cartLength, wishLength, setCartLength, setWishLength} = React.useContext(MyContext)


  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartLength} color="secondary">
        <ShoppingCartIcon className={isHomePage} />
      </StyledBadge>
    </IconButton>
  );
}
