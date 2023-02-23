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
  qty?: 0;
  data?: ProductType[];
}

export interface ProductTypes {
  id: number;
  upc: string;
  category: string;
  product_name: string;
  minimum_stock: number;
  stock: number;
  buying_price: number;
  price: number;
  product_image: string;
  supplier: string;
  qty: 0;
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

export interface transactionsReports {
  id?: string;
  customer_id?: number;
  customer_name?: string;
  created_at?: any;
  invoice_number?: string;
  phone_number?: string;
  total_bill?: number;
  transaction_status?: string;
}

type ProductType = {
  id: number;
  upc: string;
  category: string;
  product_name: string;
  minimum_stock: number;
  stock: number;
  qty: 0;
  buying_price: number;
  price: number;
  product_image: string;
  supplier: string;
};

export interface transactionType {
  created_at: string;
  customer_id: number;
  customer_name: string;
  discount: number;
  id: number;
  invoice_number: string;
  invoice_url: string;
  payment_url: string;
  total_bill: number;
  total_price: number;
  transaction_Status: string;
  transaction_status: string;
  TransactionProductRes: [
    {
      price: number;
      product_id: number;
      product_image: string;
      product_name: string;
      quantity: number;
      total_price: number;
    }
  ];
}
