export interface ImageUrls {
  small: string;
  regular: string;
  full: string;
}

export interface ImageType {
  id: string;
  alt_description: string;
  urls: ImageUrls;
}