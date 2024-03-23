export type WebasseturlResponse = {
  locations: Locations;
  items: AssetUrls;
};

export type Locations = {
  [Key: string]: {
    scheme: string;
    hosts: string[];
  };
};

export type AssetUrls = {
  [Key: string]: {
    url_expiry: string;
    url_location: string;
    url_path: string;
  };
};
