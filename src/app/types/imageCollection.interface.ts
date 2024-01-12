export interface IImageCollection {
  collection: {
    version: string;
    href: string;
    items: IImageCollectionItem[];
  };
}
export interface IImageCollectionItem {
  href: string;
  data: IImageCollectionData[];
  links: IImageCollectionLink[];
}

export interface IImageCollectionData {
  description: string;
  title: string;
  photographer?: string;
  location?: string;
  nasa_id: string;
  description_508?: string;
  secondary_creator?: string;
  date_created: string;
  keywords: string[];
  media_type: string;
  center: string;
}

export interface IImageCollectionLink {
  href: string;
  rel: string;
  render: string;
}
