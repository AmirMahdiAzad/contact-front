type IAddress = {
  city: string;
};
type ICompany = {
  name: string;
  bs: string;
};

type User = {
  name: string;
  phone: string;
  username: string;
  id: number;
  email: string;
  address: IAddress;
  company: ICompany;
};
export default User;
