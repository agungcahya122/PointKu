export interface UserTypes {
  business_name?: string;
  email?: string;
  phone_number?: string;
  password?: string;
  address?: any;
}

export interface productData {
  id?: string;
  upc?: string;
  category?: string;
  product_name?: string;
  stock?: number;
  minimum_stock?: number;
  buying_price?: number;
  price?: number;
  product_image?: any;
  supplier?: string;
}
