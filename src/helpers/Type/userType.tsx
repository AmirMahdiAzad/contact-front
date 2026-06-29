type IAddress = {
  city: string;
};
type ICompany = {
  name: string;
  bs: string;
};

type userType = {
  name: string;
  phone: string;
  username: string;
  id: number;
  email: string;
  address: IAddress;
  company: ICompany;
};
export default userType;
