
type ProductImage = {
    imagePath: string;
    thumbnailPath: string;
}

export type Product = {
    id: number;
    name: string;
    description: string;
    companyName: string;
    beforePrice: number;
    discount: number;
    afterPrice: number;
    images: ProductImage[]
}

export type CartItem = {
    id: number;
    name: string;
    price: number;
    count: number;
    thumbnailPath: string
}