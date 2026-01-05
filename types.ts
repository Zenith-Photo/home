
export type PhotoLocation = 'hero' | 'gallery' | 'background';

export interface Photo {
  id: string;
  url: string;
  title: string;
  location: PhotoLocation;
  timestamp: number;
}

export interface User {
  username: string;
  isAdmin: boolean;
}
