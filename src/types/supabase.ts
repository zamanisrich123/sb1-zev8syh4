export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          rdp_info: Json | null
          plan_id: string | null
          created_at: string
        }
        Insert: {
          id: string
          username: string
          rdp_info?: Json | null
          plan_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          rdp_info?: Json | null
          plan_id?: string | null
          created_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          name: string
          price: number
          specs: Json
          features: string[]
          active: boolean
          created_at: string
        }
        Insert: {
          id: string
          name: string
          price: number
          specs: Json
          features: string[]
          active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          specs?: Json
          features?: string[]
          active?: boolean
          created_at?: string
        }
      }
    }
  }
}