export type MediaType = "Film" | "Album" | "Game";

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  creator: string;
  year: string;
  rating: number;
  description: string;
  imageUrl?: string;
}
