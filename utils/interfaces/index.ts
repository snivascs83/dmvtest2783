export interface ICTAButton {
  label: string;
  link: string;
  isExternalUrl: boolean;
  iconUrl: string;
  viewType: string;
  ariaLabel?: string;
  ariaDescription?: string;
}

export interface ISEO {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  og?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    image_alt?: string;
    image_width?: string;
    image_height?: string;
  };
  twitter?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    image_alt?: string;
  };
  noIndex?: boolean;
}
