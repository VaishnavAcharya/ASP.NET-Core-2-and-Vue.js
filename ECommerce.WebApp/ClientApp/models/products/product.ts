
export interface IProductModel {
    Id: number;
    Name: string;
    Slug: string;
    Thumbnail: string;
    ShortDescription: string;
    Description: string;
    Price: number;
}

export class ProductModel implements IProductModel {
    public Id: number = 0;
    public Name: string = null as any;
    public Slug: string = null as any;
    public Thumbnail: string = null as any;
    public ShortDescription: string = null as any;
    public Description: string = null as any;
    public Price: number = 0;
}