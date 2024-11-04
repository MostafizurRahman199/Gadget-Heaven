import { toast } from "react-toastify";

// Utility function to get items from local storage
export const getItems = (title) => {
    // Retrieve the stored product data as a string
    const productString = localStorage.getItem(title);
    
    // If data exists, parse and return it; otherwise, return an empty array
    if (productString) {
        const productObj = JSON.parse(productString);
        return productObj;
    } else {
        return [];
    }
};

// Utility function to add a new product item to local storage
export const setItemToLocalStorage = (product, title) => {
    // Get the existing product items from local storage
    const prevproduct = getItems(title);
    
    // Add the new product item to the array
    const newproduct = [...prevproduct, product];
    
    // Convert the updated array back to a string
    const newproductString = JSON.stringify(newproduct);
    
    // Store the updated product array in local storage
    localStorage.setItem(title , newproductString);

    if(title === 'cart-list'){
        toast.success("Add to Cart successfully");
        
    }if(title === 'wish-list'){
        toast.success("Product to wishlist successfully");

    }

};


export const removeFromLocalStorage = (id, title)=>{
    const product = getItems(title);

    const newproduct = product.filter(item => item.id != id);
    const newproductString = JSON.stringify(newproduct);
    localStorage.setItem(title, newproductString);

    if(title === 'cart-list'){
        toast.success("Remove from Cart successfully");
        
    }if(title === 'wish-list'){
        toast.success("Remove from wishlist successfully");

    }

}