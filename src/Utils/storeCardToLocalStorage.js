import { toast } from "react-toastify";



export const getItems = (title) => {
    const productString = localStorage.getItem(title);

    if (productString) {
        const productObj = JSON.parse(productString);
        return productObj;
    } else {
        return [];
    }
};

const WishlistToast = (title)=>{

        toast.success(title, {
           
            style: {
                backgroundColor: '#FFE4EC', 
                color: '#AD1457',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            },
        });
   
}


const CartToast = (title)=>{
  
        toast.success(title, {
          
            style: {
                backgroundColor: '#DFF5E0', 
                color: '#2D6A4F', 
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            },
        });
   
}


export const setItemToLocalStorage = (product, title) => {
  
    const prevproduct = getItems(title);
    const newproduct = [...prevproduct, product];
    const newproductString = JSON.stringify(newproduct);
    localStorage.setItem(title , newproductString);
    

    if (title === 'cart-list') {
        CartToast("Added to Cart successfully")
        
    } else if (title === 'wish-list') {
        WishlistToast("Added to Wishlist successfully");
    }
    

};


export const removeFromLocalStorage = (id, title)=>{
    const product = getItems(title);

    const newproduct = product.filter(item => item.id != id);
    const newproductString = JSON.stringify(newproduct);
    localStorage.setItem(title, newproductString);

   
    if (title === 'cart-list') {
        CartToast("Removed from Cart successfully")
        
    } else if (title === 'wish-list') {
        WishlistToast("Removed from Wishlist successfully");
    }
    

}