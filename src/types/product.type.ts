export interface ProductsType {
  id: number | string;
  name: string;
  id_account: string;
  id_product: number | string;
  product_id: number | string;
  createAt: string;
  updateAt: string;
  quantity: number;
  pd_id: number;
  id_manu: number;
  thumbnail: string;
  product_name: string;
  price: number;
  slug: string | undefined;
  discount: number;
  other_discount: number;
  description: string;
  total_quantity: number;
  product_slug: string;
  remaining_quantity: string;
  website: string;
  img: string;
  screen_size: null;
  ram: null;
  point: number;
  parent_id: null;
  cpu: null;
  content: string;
  hard_disk: null;
  startType: number;
  final_price: number;
  mn_name: string;
  starType: number;
  totalPage: number;
  totalStar: number
}
