import chickenFriedRice1 from "../assets/chicken fried rice 1.jpg";
import chickenFriedRice2 from "../assets/chicken fried rice 2.jpg";
import boneless1 from "../assets/boneless 1.jpg";
import boneless2 from "../assets/boneless 2.jpg";
import hongkongChicken from "../assets/hongkong chicken.jpg";
import chickenMixedBiryani from "../assets/chicken mixed biryani.png";
import thumsupChicken from "../assets/thumsup chicken.png";
import mixedVegBiryani from "../assets/mixed veg biryani.png";

export const menuItems = {
  Breakfast: [
    {
      name: "Idli Sambar",
      altName: "Village Idli",
      desc: "Soft idlis served with village-style sambar and chutney.",
      price: 120,
      images: [
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554118811-1e8b7d3f3d2d?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Ghee Dosa",
      altName: "Crispy Ghee Dosa",
      desc: "Crispy dosa roasted with ghee and served hot.",
      price: 160,
      images: [
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Poori Curry",
      altName: "Potato Poori Curry",
      desc: "Fluffy pooris served with traditional potato curry.",
      price: 140,
      images: [
        "https://images.unsplash.com/photo-1585238341710-4913dfbbfaf7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608758925193-8b9f2b7c6d19?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  Lunch: [
    {
      name: "Andhra Meals",
      altName: "Traditional Thali",
      desc: "Rice, dal, curries, rasam, curd, papad and pickle.",
      price: 220,
      images: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565895405135-3d6b0b2e5a8d?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Veg Banana Leaf Meals",
      altName: "Banana Leaf Feast",
      desc: "Complete village-style meal served on banana leaf.",
      price: 250,
      images: [
        "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543353071-087092ec393f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Chicken Meals",
      altName: "Spicy Chicken Plate",
      desc: "Traditional chicken curry with rice and sides.",
      price: 280,
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601571393355-5f4ba2b7c8f6?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  Dinner: [
    {
      name: "Ragi Sangati",
      altName: "Millet Sangati",
      desc: "Healthy millet ball served with spicy village curry.",
      price: 210,
      images: [
        "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Chapati Curry",
      altName: "Soft Chapati Platter",
      desc: "Soft chapatis served with fresh curry.",
      price: 180,
      images: [
        "https://images.unsplash.com/photo-1585238341710-4913dfbbfaf7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Curd Rice",
      altName: "Comfort Curd Rice",
      desc: "Comforting curd rice with pickle and seasoning.",
      price: 130,
      images: [
        "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  Specials: [
    {
      name: "Natu Kodi Pulusu",
      altName: "Country Chicken",
      desc: "Country chicken curry cooked in rural Andhra style.",
      price: 320,
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604908177522-8f7f5f6f0f1c?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Mutton Curry",
      altName: "Spicy Mutton",
      desc: "Rich spicy mutton curry with traditional masala.",
      price: 340,
      images: [
        "https://images.unsplash.com/photo-1645112411341-6c4ee32510f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604909052864-1b6a6c4c5b9e?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Fish Pulusu",
      altName: "Tangy Fish Curry",
      desc: "Tangy Andhra fish curry cooked with local spices.",
      price: 300,
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514516870921-35b1c3b8a8ee?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Special Chicken Fried Rice",
      altName: "Chef's Chicken Fried Rice",
      desc: "Fragrant stir-fried rice tossed with tender chicken pieces, fresh vegetables, egg, and signature village spices.",
      price: 240,
      images: [
        chickenFriedRice1,
        chickenFriedRice2,
      ],
    },
    {
      name: "Chicken Boneless",
      altName: "Crispy Boneless Chicken",
      desc: "Bite-sized tender boneless chicken pieces marinated in traditional Andhra spices and fried to a crisp golden finish.",
      price: 260,
      images: [
        boneless1,
        boneless2,
      ],
    },
    {
      name: "Chicken Mixed Biryani",
      altName: "Special Mixed Biryani",
      desc: "A luxurious blend of fragrant, long-grain basmati rice, tender spiced chicken, boiled egg, and aromatic herbs cooked dum style.",
      price: 330,
      images: [
        chickenMixedBiryani,
      ],
    },
    {
      name: "Thumsup Chicken",
      altName: "Spicy Cola Chicken",
      desc: "A unique restaurant specialty: juicy chicken pieces glazed in a rich, spicy Thums Up reduction sauce with green chilies and curry leaves.",
      price: 280,
      images: [
        thumsupChicken,
      ],
    },
    {
      name: "Mixed Veg Biryani",
      altName: "Traditional Veg Biryani",
      desc: "Aromatic basmati rice layered with garden-fresh vegetables, soft paneer cubes, saffron, mint, and signature spices.",
      price: 220,
      images: [
        mixedVegBiryani,
      ],
    },
    {
      name: "Hongkong Chicken",
      altName: "Stir-fried Hongkong Style Chicken",
      desc: "Tender chicken chunks stir-fried with colourful bell peppers, cashew nuts, and a savory-sweet glazed chef's sauce.",
      price: 290,
      images: [
        hongkongChicken,
      ],
    },
  ],
  Beverages: [
    {
      name: "Buttermilk",
      altName: "Spiced Buttermilk",
      desc: "Fresh village-style spiced buttermilk.",
      price: 70,
      images: [
        "https://images.unsplash.com/photo-1589985643471-c3fb3d1ee205?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1572449043412-2ecb8a5f2d2f?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Lassi",
      altName: "Sweet Lassi",
      desc: "Thick and refreshing traditional lassi.",
      price: 90,
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Filter Coffee",
      altName: "Strong Filter Coffee",
      desc: "Strong hot coffee served fresh.",
      price: 80,
      images: [
        "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
};

export const categories = Object.keys(menuItems);

export const getMenuItem = (category, index) => {
  const items = menuItems[category];
  return items && items[index] ? { ...items[index], category, index } : null;
};

export const getRelatedItems = (category, index, max = 4) => {
  return Object.entries(menuItems)
    .flatMap(([cat, items]) =>
      items.map((item, idx) => ({ ...item, category: cat, index: idx }))
    )
    .filter((item) => item.category !== category || item.index !== index)
    .slice(0, max);
};
