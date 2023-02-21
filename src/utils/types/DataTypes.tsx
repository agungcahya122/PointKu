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

export interface MemberIdTypes {
  email?: string;
  name?: string;
  address?: any;
  phone_number?: string;
}

type Member = {
  id?: number;
  email?: string;
  name?: string;
  phone_number?: string;
  address?: string;
};
