export interface Product { id: number; name: string; category: string; image: string; size: string; price: number; original: number; label?: string; }
export interface CartItem { product: Product; quantity: number; }
