import HomePage from "@/Components/HomeModule/Home/HomePage";
import { BaseUrl } from "@/static/static";
export const metadata = {
  title: "AbhimaniTrip – Best Travel Guides, Weekend Trips & Budget Travel",
  description:
    "Explore India with AbhimaniTrip — your guide to weekend trips, budget travel, itineraries, hotel recommendations, and real travel tips.",
  keywords: [
    "travel india",
    "weekend trips",
    "budget travel",
    "itineraries",
    "best places to visit",
    "travel tips",
    "abhimanitrip",
  ],
  alternates: {
    canonical: BaseUrl,
  },

};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
