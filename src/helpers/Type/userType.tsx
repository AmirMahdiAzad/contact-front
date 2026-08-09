type userType = {
  id: number;
  documentId: string;
  name: string;
  email: string;
  phone: string;

  image?: {
    id: number;
    name: string;
    url: string;
  };
};

export default userType;