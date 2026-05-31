export type StayCategory =
  | "cabins"
  | "pools"
  | "beach"
  | "mountains"
  | "city"
  | "design";

export interface CategoryOption {
  key: StayCategory;
  label: string;
  icon: string;
}

export interface HostProfile {
  name: string;
  yearsHosting: number;
  profession: string;
  quote: string;
  superhost: boolean;
}

export interface StayReview {
  id: string;
  author: string;
  rating: number;
  month: string;
  comment: string;
}

export interface Stay {
  id: string;
  title: string;
  location: string;
  country: string;
  category: StayCategory;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  guestFavorite: boolean;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  cancellation: "flexible" | "moderate" | "strict";
  description: string;
  amenities: string[];
  imageTones: string[];
  host: HostProfile;
  reviews: StayReview[];
  coordinates: {
    x: number;
    y: number;
  };
  image: string;
}
