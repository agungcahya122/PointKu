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

export interface MembersTypes {
  data?: Member[];
}

export interface MemberIdTypes {
  email?: string;
  name?: string;
  address?: any;
  phone_number?: string;
}

export interface ProductsTypes {
  data?: ProductType[];
}

export interface MembersTypes {
  data?: Member[];
}

type Member = {
  id?: number;
  email?: string;
  name?: string;
  phone_number?: string;
  address?: string;
};

type ProductType = {
  id?: number;
  upc?: string;
  category?: string;
  product_name?: string;
  minimum_stock?: number;
  stock?: number;
  buying_price?: number;
  price?: number;
  product_image?: string;
  supplier?: string;
};
