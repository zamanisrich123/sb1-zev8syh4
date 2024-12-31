export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
  };
}

export interface User {
  id: string;
  username: string;
  rdp_info?: {
    host: string;
    username: string;
    password: string;
  };
  plan_id?: string;
  created_at: string;
}