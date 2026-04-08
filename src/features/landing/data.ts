export type MenuItem = {
  title: string;
  subtitle: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    title: "Chicken Parm",
    subtitle: "fresh basil, parmesan, tomato",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Chicken Alfredo",
    subtitle: "creamy sauce, grilled chicken",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Spaghetti & Meatballs",
    subtitle: "house red sauce, herbs",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Baked Mac & Cheese",
    subtitle: "crispy top, cheddar blend",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=700&q=80",
  },
];

export const features: string[] = [
  "Outdoor Seating",
  "Takeout",
  "Online Delivery",
  "Coupons",
  "Group Orders",
  "Tracking",
];
