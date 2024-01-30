export type User = {
  id?: string;
  username: string;
  password: string;
  name: string;
  role: string;
};

export type Menu = {
  id: string;
  menu: string;
  harga: number;
};

export type Variant = {
  id: string;
  menuId: string;
  name: string;
};

export type Order = {
  id: string;
  usersId: string;
};

export type Pesanan = {
  id: string;
  menuId: string;
  pesanId: string;
};
