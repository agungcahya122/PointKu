export interface UserTypes {
  business_name?: string;
  email?: string;
  phone_number?: string;
  password?: string;
  address?: any;
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
