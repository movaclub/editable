export interface Tabular {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  age: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
}
