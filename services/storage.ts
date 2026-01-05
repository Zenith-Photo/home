
import { Photo } from '../types';

const PHOTOS_KEY = 'zenith_photos_v1';

export const getPhotos = (): Photo[] => {
  const data = localStorage.getItem(PHOTOS_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePhoto = (photo: Photo) => {
  const photos = getPhotos();
  photos.push(photo);
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
};

export const deletePhoto = (id: string) => {
  const photos = getPhotos().filter(p => p.id !== id);
  localStorage.setItem(PHOTOS_KEY, JSON.stringify(photos));
};

export const getPhotosByLocation = (location: string): Photo[] => {
  return getPhotos().filter(p => p.location === location);
};
