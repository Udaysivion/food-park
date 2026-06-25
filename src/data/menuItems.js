// ─── Food Park – Full Menu Data ───────────────────────────────────────────────
import chickenFriedRice1 from "../assets/chicken fried rice 1.jpg";
import chickenMixedBiryani from "../assets/chicken mixed biryani.png";
import thumsupChicken from "../assets/thumsup chicken.png";
import mixedVegBiryani from "../assets/mixed veg biryani.png";

// ─── Verified Unsplash food images (accurate per dish type) ──────────────────
const IMG = {

  // ── BIRYANI ──────────────────────────────────────────────────────────────
  // Deep golden dum biryani with saffron, egg on top — Hyderabadi style
  biryaniBowl:   "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  // Biryani plated with mint and onion rings — chicken/joint style
  biryaniPlate:  "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
  // Biryani in serving pot / dum style with spices
  biryaniPot:    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
  // Rice dish with meat — biryani style (mutton/prawn)
  biryaniRich:   "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
  // Colourful biryani with vegetables
  vegBiryani:    "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
  // Mutton biryani — dark meat with rice
  muttonBiryani: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=800&q=80",
  // Egg biryani — boiled eggs on rice
  eggBiryani:    "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=800&q=80",

  // ── FRIED RICE ───────────────────────────────────────────────────────────
  // Chinese-style chicken fried rice in wok/bowl
  chickenFR:     "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
  // Fried rice with eggs and veggies
  eggFR:         "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  // Veg stir-fried rice — greens visible
  vegFR:         "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80",
  // Mixed fried rice — loaded with various ingredients
  mixedFR:       "https://images.unsplash.com/photo-1543826173-1beeb97525d8?auto=format&fit=crop&w=800&q=80",
  // General fried rice image
  friedRice:     "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",

  // ── NOODLES ──────────────────────────────────────────────────────────────
  // Steaming Asian noodle bowl
  noodles:       "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
  // Noodles served in a bowl with broth
  noodlesBowl:   "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80",
  // Hakka-style noodles with vegetables and sauce
  hakka:         "https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=800&q=80",
  // Noodle dish with toppings visible
  noodleToppings:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=800&q=80",

  // ── VEG CURRY ────────────────────────────────────────────────────────────
  // Indian vegetable curry — yellow/orange gravy
  vegCurry:      "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
  // Tomato-based Indian curry in bowl
  tomatoCurry:   "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
  // Paneer in rich cream/orange sauce — butter masala style
  paneerButter:  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
  // Green spinach curry — palak style
  palakPaneer:   "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
  // Paneer with cashew gravy — rich white/orange
  paneerCashew:  "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80",
  // Mushroom dish — brown gravy
  mushroom:      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  // Manchuriya / fried balls in sauce (Indo-Chinese)
  manchuriya:    "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
  // Gobi/cauliflower dish
  gobi:          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

  // ── CHICKEN ──────────────────────────────────────────────────────────────
  // Butter Chicken — rich dark-orange creamy gravy
  butterChicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
  // Chicken curry — brown/red Indian style with bone pieces
  chickenCurry:  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
  // Deep-fried golden chicken pieces — fry/65 style
  chicken65:     "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
  // Chilli chicken — red sauce with capsicum
  chilliChicken: "https://images.unsplash.com/photo-1604908177522-8f7f5f6f0f1c?auto=format&fit=crop&w=800&q=80",
  // Roasted / grilled chicken pieces — charred finish
  chickenRoast:  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
  // Crispy fried chicken — golden battered
  chickenFry:    "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?auto=format&fit=crop&w=800&q=80",
  // Chicken on the bone / joint pieces in curry
  chickenJoint:  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  // Chicken wings — fried or grilled
  wings:         "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
  // Ginger/pepper chicken — dry preparation
  pepperChicken: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80",

  // ── PRAWN ────────────────────────────────────────────────────────────────
  // Prawn curry — red/orange masala with prawns clearly visible
  prawnCurry:    "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80",
  // Prawns on plate — fried or grilled
  prawnFry:      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=800&q=80",
  // Prawn masala / indo-chinese prawn dish
  prawnMasala:   "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?auto=format&fit=crop&w=800&q=80",
  // Prawn fried rice — shrimp stir fried with rice
  prawnFR:       "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=800&q=80",

  // ── MUTTON ───────────────────────────────────────────────────────────────
  // Mutton curry — rich dark brown gravy with bone
  muttonCurry:   "https://images.unsplash.com/photo-1645112411341-6c4ee32510f8?auto=format&fit=crop&w=800&q=80",
  // Mutton fry — dry spiced preparation
  muttonFry:     "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  // Mutton masala — thick aromatic gravy
  muttonMasala:  "https://images.unsplash.com/photo-1585237134063-1a49d75e7c41?auto=format&fit=crop&w=800&q=80",

  // ── EGG ──────────────────────────────────────────────────────────────────
  // Egg curry — eggs in masala gravy
  eggCurry:      "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
  // Fried egg / sunny side up
  eggFry:        "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80",
  // Omelette — folded omelette with herbs
  omelet:        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  // Boiled eggs — halved with yolk visible
  boiledEgg:     "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80",
  // Scrambled eggs / bhurji — with spices
  eggBurji:      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",

  // ── FISH ─────────────────────────────────────────────────────────────────
  // Fish curry — tamarind / coconut based
  fishCurry:     "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?auto=format&fit=crop&w=800&q=80",
  // Fried fish — crispy semolina coated
  fishFry:       "https://images.unsplash.com/photo-1514516870921-35b1c3b8a8ee?auto=format&fit=crop&w=800&q=80",
  // Roasted fish with sauce
  fishRoast:     "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",

  // ── MEALS ────────────────────────────────────────────────────────────────
  // South Indian thali — multiple bowls on a plate
  thali:         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  // Full meals / plate with rice and curries
  fullMeals:     "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
  // Curd rice — white creamy rice
  curdRice:      "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=800&q=80",
};

export const menuItems = {
  // ── BIRYANI ──────────────────────────────────────────────────────────────────
  Biryani: [
    {
      name: "HYD Dhum Biryani",
      desc: "Classic Hyderabadi dum biryani with aromatic basmati, tender chicken, and saffron-infused spices.",
      full: 170, half: 120,
      images: [IMG.biryaniBowl],
    },
    {
      name: "Joint Fry Biryani",
      desc: "Crispy fried chicken joints layered with spiced basmati rice cooked dum style.",
      full: 180, half: 130,
      images: [IMG.biryaniPot],
    },
    {
      name: "Joint Rost Biryani",
      desc: "Roasted chicken joints slow-cooked with fragrant rice and whole spices.",
      full: 180, half: 130,
      images: [IMG.biryaniPlate],
    },
    {
      name: "Chicken Fry-Bit Biryani",
      desc: "Bite-sized crispy chicken pieces tossed through spiced dum biryani rice.",
      full: 170, half: 120,
      images: [chickenMixedBiryani],
    },
    {
      name: "Chicken Boneless Biryani",
      desc: "Tender boneless chicken pieces in aromatic basmati dum biryani – no bones, all flavour.",
      full: 180, half: 130,
      images: [IMG.biryaniBowl],
    },
    {
      name: "Mutton Biryani",
      desc: "Slow-cooked succulent mutton with basmati rice, caramelised onions and aromatic masala.",
      full: 220, half: 160,
      images: [IMG.muttonBiryani],
    },
    {
      name: "Prawn Biryani",
      desc: "Juicy prawns marinated in Andhra spices layered with saffron-tinged dum biryani.",
      full: 210, half: 150,
      images: [IMG.biryaniRich],
    },
    {
      name: "FoodPark Spl Biryani",
      desc: "Our signature biryani – a chef's secret blend of mixed meats, herbs and dum-cooked rice.",
      full: 250, half: null,
      images: [chickenMixedBiryani],
    },
    {
      name: "Egg Biryani",
      desc: "Boiled eggs simmered in spicy masala and layered with fragrant basmati rice.",
      full: 130, half: 90,
      images: [IMG.eggBiryani],
    },
    {
      name: "Plane Biryani",
      desc: "Light and aromatic plain biryani rice – perfect as a base with any curry.",
      full: 90, half: 70,
      images: [mixedVegBiryani],
    },
    {
      name: "Vegetable Biryani",
      desc: "Garden-fresh vegetables and paneer cooked dum style with saffron-infused basmati.",
      full: 90, half: 70,
      images: [IMG.vegBiryani],
    },
  ],

  // ── FRIED RICE – NON VEG ─────────────────────────────────────────────────────
  "Fried Rice Non Veg": [
    {
      name: "Chicken Fried Rice",
      desc: "Wok-tossed basmati with tender chicken, egg, spring onions and soy sauce.",
      full: 150, half: 100,
      images: [chickenFriedRice1],
    },
    {
      name: "Spl Chicken Fried Rice",
      desc: "Chef's special version loaded with extra chicken, veggies and secret seasoning.",
      full: 160, half: 110,
      images: [IMG.chickenFR],
    },
    {
      name: "Spl Mutton Fried Rice",
      desc: "Rich mutton pieces stir-fried with long-grain rice and aromatic spices.",
      full: 210, half: 150,
      images: [IMG.friedRice],
    },
    {
      name: "Spl Prawn Fried Rice",
      desc: "Succulent prawns, colourful veggies and egg tossed in a sizzling hot wok.",
      full: 200, half: 140,
      images: [IMG.prawnFR],
    },
    {
      name: "Mixed Fried Rice",
      desc: "A hearty combination of chicken, prawns, egg and vegetables in one plate.",
      full: 230, half: null,
      images: [IMG.mixedFR],
    },
    {
      name: "Egg Fried Rice",
      desc: "Fluffy scrambled eggs with wok-tossed rice, spring onions and soy sauce.",
      full: 80, half: 60,
      images: [IMG.eggFR],
    },
  ],

  // ── FRIED RICE – VEG ─────────────────────────────────────────────────────────
  "Fried Rice Veg": [
    {
      name: "Vegetable Fried Rice",
      desc: "Crisp garden vegetables tossed with rice and seasoning in a hot wok.",
      full: 70, half: 50,
      images: [IMG.vegFR],
    },
    {
      name: "Spl Veg Fried Rice with Tomato Cashew Curry",
      desc: "Special veg fried rice served alongside rich tomato-cashew curry.",
      full: 140, half: null,
      images: [IMG.tomatoCurry],
    },
    {
      name: "Spl Veg Fried Rice with Paneer Curry",
      desc: "Fragrant veg rice paired with creamy paneer curry – a vegetarian delight.",
      full: 150, half: null,
      images: [IMG.paneerButter],
    },
    {
      name: "Spl Veg Fried Rice with Babycorn / Mushroom",
      desc: "Crispy babycorn or mushroom curry served with aromatic special veg fried rice.",
      full: 140, half: null,
      images: [IMG.mushroom],
    },
    {
      name: "Mixed Veg Fried Rice",
      desc: "Colourful mix of seasonal vegetables stir-fried to perfection with basmati.",
      full: 150, half: null,
      images: [IMG.vegFR],
    },
    {
      name: "Spl Mixed Veg Fried Rice",
      desc: "An elevated version of mixed veg fried rice with extra garnish and spice.",
      full: 160, half: null,
      images: [IMG.friedRice],
    },
  ],

  // ── NOODLES ───────────────────────────────────────────────────────────────────
  Noodles: [
    {
      name: "Veg Noodles",
      desc: "Stir-fried noodles with crisp vegetables, soy sauce and a hint of chilli.",
      full: 50, half: 30,
      images: [IMG.noodles],
    },
    {
      name: "Egg Noodles",
      desc: "Classic egg noodles tossed with spring onions and seasoned soy glaze.",
      full: 60, half: 40,
      images: [IMG.noodlesBowl],
    },
    {
      name: "Chicken Noodles",
      desc: "Wok-tossed noodles with shredded chicken, peppers and house sauce.",
      full: 100, half: 70,
      images: [IMG.noodleToppings],
    },
    {
      name: "Prawn Noodles",
      desc: "Succulent prawns with noodles in a light, fragrant stir-fry sauce.",
      full: 120, half: null,
      images: [IMG.noodles],
    },
    {
      name: "Mutton Noodles",
      desc: "Tender mutton pieces with noodles in a rich, spicy gravy base.",
      full: 130, half: null,
      images: [IMG.noodlesBowl],
    },
    {
      name: "Mixed Noodles",
      desc: "A combination of chicken, prawns, egg and vegetables – noodles done grand.",
      full: 150, half: null,
      images: [IMG.noodleToppings],
    },
  ],

  // ── VEG CURRY ITEMS ───────────────────────────────────────────────────────────
  "Veg Curry": [
    {
      name: "Mixed Veg Curry",
      desc: "A medley of seasonal vegetables simmered in a rich Andhra masala gravy.",
      full: 100, half: null,
      images: [IMG.vegCurry],
    },
    {
      name: "Tomato Cashew Curry",
      desc: "Tangy tomatoes and creamy cashews in a luscious, mildly spiced curry.",
      full: 100, half: null,
      images: [IMG.tomatoCurry],
    },
    {
      name: "Paneer Butter Masala",
      desc: "Soft paneer cubes in a velvety, buttery tomato-cream sauce.",
      full: 110, half: null,
      images: [IMG.paneerButter],
    },
    {
      name: "Palak Paneer Curry",
      desc: "Fresh spinach puree with paneer cubes in a mildly spiced green curry.",
      full: 110, half: null,
      images: [IMG.palakPaneer],
    },
    {
      name: "Paneer Cashew Curry",
      desc: "Rich cashew gravy with paneer – indulgent and aromatic.",
      full: 140, half: null,
      images: [IMG.paneerCashew],
    },
    {
      name: "Gobi Masala Curry",
      desc: "Cauliflower florets in a spiced tomato-onion masala gravy.",
      full: 80, half: null,
      images: [IMG.gobi],
    },
    {
      name: "Kadai Veg Curry",
      desc: "Mixed vegetables tossed in a kadai with bell peppers and whole spices.",
      full: 110, half: null,
      images: [IMG.tomatoCurry],
    },
    {
      name: "Baby Corn Curry",
      desc: "Tender baby corn in a mildly spiced, creamy curry sauce.",
      full: 90, half: null,
      images: [IMG.vegCurry],
    },
    {
      name: "Baby Corn with Cashew",
      desc: "Baby corn in a luxurious cashew-based creamy gravy.",
      full: 130, half: null,
      images: [IMG.paneerCashew],
    },
    {
      name: "Mushroom Curry",
      desc: "Button mushrooms in a flavourful spiced Andhra-style gravy.",
      full: 90, half: null,
      images: [IMG.mushroom],
    },
    {
      name: "Mushroom with Cashew",
      desc: "Mushrooms simmered in a rich cashew and tomato cream sauce.",
      full: 130, half: null,
      images: [IMG.paneerCashew],
    },
    {
      name: "Veg Manchuriya Curry",
      desc: "Crispy veg balls in a tangy, savoury Indo-Chinese gravy.",
      full: 70, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Veg Manchuriya Cashew",
      desc: "Veg manchuriya balls in a rich cashew gravy – best of both worlds.",
      full: 110, half: null,
      images: [IMG.manchuriya],
    },
  ],

  // ── VEG FRY ITEMS ─────────────────────────────────────────────────────────────
  "Veg Fry": [
    {
      name: "Paneer Manchuriya",
      desc: "Crispy paneer cubes in a spicy, tangy Indo-Chinese manchuriya sauce.",
      full: 120, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Paneer Cashew Fry",
      desc: "Golden fried paneer pieces tossed with roasted cashews and spices.",
      full: 140, half: null,
      images: [IMG.paneerCashew],
    },
    {
      name: "Kadai Paneer",
      desc: "Paneer with colourful bell peppers cooked in an authentic kadai masala.",
      full: 130, half: null,
      images: [IMG.paneerButter],
    },
    {
      name: "Paneer 65",
      desc: "Crispy deep-fried paneer bites marinated in spiced yoghurt – a South Indian classic.",
      full: 120, half: null,
      images: [IMG.palakPaneer],
    },
    {
      name: "Baby Corn Manchuriya",
      desc: "Crispy battered baby corn tossed in spicy manchuriya sauce.",
      full: 100, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Baby Corn Cashew Fry",
      desc: "Stir-fried baby corn with cashew nuts and aromatic spices.",
      full: 130, half: null,
      images: [IMG.vegCurry],
    },
    {
      name: "Kadai Baby Corn",
      desc: "Baby corn with bell peppers and onions stir-fried kadai style.",
      full: 110, half: null,
      images: [IMG.tomatoCurry],
    },
    {
      name: "Baby Corn 65",
      desc: "Deep-fried spiced baby corn pieces with South Indian tempering.",
      full: 100, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Mushroom Manchuriya",
      desc: "Crispy mushroom pieces in a spiced, tangy manchuriya sauce.",
      full: 110, half: null,
      images: [IMG.mushroom],
    },
    {
      name: "Mushroom Cashew Fry",
      desc: "Sauteed mushrooms with roasted cashews in a dry spiced coating.",
      full: 130, half: null,
      images: [IMG.paneerCashew],
    },
    {
      name: "Kadai Mushroom",
      desc: "Mushrooms with peppers and onions cooked in kadai spice blend.",
      full: 110, half: null,
      images: [IMG.mushroom],
    },
    {
      name: "Mushroom 65",
      desc: "Crispy deep-fried mushroom bites with South Indian spice marinade.",
      full: 100, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Veg Manchuriya",
      desc: "Crispy vegetable balls in a spicy Indo-Chinese dry sauce.",
      full: 70, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Veg Manchuriya Cashew",
      desc: "Veg manchuriya with roasted cashews in a rich dry glaze.",
      full: 110, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Gobi Manchuriya",
      desc: "Crispy cauliflower florets in spiced manchuriya sauce – a crowd favourite.",
      full: 70, half: null,
      images: [IMG.manchuriya],
    },
  ],

  // ── CHICKEN ───────────────────────────────────────────────────────────────────
  Chicken: [
    {
      name: "Chilli Chicken",
      desc: "Crispy chicken pieces tossed in a fiery Indo-Chinese chilli sauce. Dry or wet.",
      full: 140, half: null,
      images: [IMG.chilliChicken],
    },
    {
      name: "Chicken Manchuriya",
      desc: "Tender chicken in a tangy, spicy manchuriya glaze. Dry or wet.",
      full: 140, half: null,
      images: [IMG.manchuriya],
    },
    {
      name: "Chicken 65",
      desc: "Iconic South Indian deep-fried chicken with curry leaves and green chillies.",
      full: 140, half: null,
      images: [IMG.chicken65],
    },
    {
      name: "Chicken Fry",
      desc: "Golden-fried chicken pieces – bone-in or boneless as per preference.",
      full: 140, half: null,
      images: [IMG.chickenFry],
    },
    {
      name: "Chicken Rost",
      desc: "Andhra-style dry-roasted chicken with a bold, charred spice crust.",
      full: 150, half: null,
      images: [IMG.chickenRoast],
    },
    {
      name: "Chicken Dhum Joint (2 pcs)",
      desc: "Two dum-marinated chicken joints cooked slow with whole spices.",
      full: 90, half: null,
      images: [IMG.chickenJoint],
    },
    {
      name: "Chicken Joint Fry (2 pcs)",
      desc: "Two crispy fried chicken joints with Andhra spice coating.",
      full: 100, half: null,
      images: [IMG.chickenFry],
    },
    {
      name: "Chicken Joint Rost (2 pcs)",
      desc: "Two roasted chicken joints with a smoky, charred masala finish.",
      full: 110, half: null,
      images: [IMG.chickenRoast],
    },
    {
      name: "Chicken Curry",
      desc: "Classic Andhra chicken curry – bone-in or boneless, rich and spicy.",
      full: 130, half: null,
      images: [IMG.chickenCurry],
    },
    {
      name: "Butter Chicken",
      desc: "Tender chicken in a velvety tomato-butter-cream sauce – mild and indulgent.",
      full: 140, half: null,
      images: [IMG.butterChicken],
    },
    {
      name: "Ginger Chicken",
      desc: "Chicken with bold ginger flavour in a spiced dry or gravy preparation.",
      full: 140, half: null,
      images: [IMG.pepperChicken],
    },
    {
      name: "Pepper Chicken",
      desc: "Chicken with freshly cracked black pepper and South Indian spices.",
      full: 140, half: null,
      images: [IMG.pepperChicken],
    },
    {
      name: "Cashewnut Chicken",
      desc: "Chicken in a rich cashew nut sauce – dry or wet, deeply satisfying.",
      full: 170, half: null,
      images: [IMG.butterChicken],
    },
    {
      name: "Kadai Chicken",
      desc: "Chicken with peppers and onions in a classic kadai masala.",
      full: 160, half: null,
      images: [IMG.chickenCurry],
    },
    {
      name: "Chicken Masala",
      desc: "Chicken in a bold, aromatic whole-spice masala gravy.",
      full: 140, half: null,
      images: [IMG.chickenCurry],
    },
    {
      name: "Thumsup Chicken",
      desc: "Signature restaurant special – chicken glazed in a spicy Thums Up cola reduction.",
      full: 150, half: null,
      images: [thumsupChicken],
    },
    {
      name: "Chicken Winglets",
      desc: "Crispy spiced chicken winglets – perfect snack or starter.",
      full: 150, half: null,
      images: [IMG.wings],
    },
    {
      name: "Chicken Fried Wings",
      desc: "Juicy chicken wings coated in seasoned batter and fried golden.",
      full: 150, half: null,
      images: [IMG.wings],
    },
  ],

  // ── PRAWN ─────────────────────────────────────────────────────────────────────
  Prawn: [
    {
      name: "Prawn Curry",
      desc: "Succulent prawns in a tangy, coconut-infused Andhra curry gravy.",
      full: 140, half: null,
      images: [IMG.prawnCurry],
    },
    {
      name: "Prawn Fry",
      desc: "Crispy fried prawns with Andhra masala coating – a sea-lover's delight.",
      full: 150, half: null,
      images: [IMG.prawnFry],
    },
    {
      name: "Prawn Masala",
      desc: "Prawns cooked in a rich, aromatic masala gravy with whole spices.",
      full: 160, half: null,
      images: [IMG.prawnMasala],
    },
    {
      name: "Prawn Manchuriya",
      desc: "Crispy prawns in a spicy Indo-Chinese manchuriya sauce.",
      full: 170, half: null,
      images: [IMG.prawnFry],
    },
    {
      name: "Prawn 65",
      desc: "South Indian style deep-fried spiced prawns with curry leaves.",
      full: 160, half: null,
      images: [IMG.prawnFR],
    },
    {
      name: "Chilli Prawn",
      desc: "Juicy prawns tossed in fiery chilli and garlic sauce.",
      full: 160, half: null,
      images: [IMG.prawnMasala],
    },
    {
      name: "Cashew Prawn",
      desc: "Prawns sauteed with roasted cashews in a creamy spice blend.",
      full: 190, half: null,
      images: [IMG.prawnCurry],
    },
  ],

  // ── MUTTON ────────────────────────────────────────────────────────────────────
  Mutton: [
    {
      name: "Mutton Curry",
      desc: "Slow-cooked mutton in a bold Andhra spice gravy.",
      full: 160, half: null,
      images: [IMG.muttonCurry],
    },
    {
      name: "Mutton Fry",
      desc: "Dry-fried mutton pieces with South Indian spice tempering.",
      full: 170, half: null,
      images: [IMG.muttonFry],
    },
    {
      name: "Mutton Masala",
      desc: "Mutton in a deeply spiced whole-masala Andhra gravy.",
      full: 180, half: null,
      images: [IMG.muttonMasala],
    },
    {
      name: "Mutton Manchuriya",
      desc: "Tender mutton in a fiery Indo-Chinese manchuriya sauce.",
      full: 180, half: null,
      images: [IMG.muttonFry],
    },
    {
      name: "Mutton 65",
      desc: "Crispy deep-fried mutton bites in South Indian style marinade.",
      full: 180, half: null,
      images: [IMG.muttonMasala],
    },
    {
      name: "Chilli Mutton",
      desc: "Mutton pieces tossed in bold chilli-garlic sauce with peppers.",
      full: 180, half: null,
      images: [IMG.muttonCurry],
    },
    {
      name: "Cashew Mutton",
      desc: "Succulent mutton in a luxurious cashew cream and spice gravy.",
      full: 200, half: null,
      images: [IMG.muttonMasala],
    },
  ],

  // ── EGG ───────────────────────────────────────────────────────────────────────
  Egg: [
    {
      name: "Egg Curry",
      desc: "Boiled eggs in a tangy, lightly spiced Andhra curry gravy.",
      full: 40, half: null,
      images: [IMG.eggCurry],
    },
    {
      name: "Egg Fry",
      desc: "Pan-fried eggs with a crispy edge and South Indian seasoning.",
      full: 50, half: null,
      images: [IMG.eggFry],
    },
    {
      name: "Egg Omlet",
      desc: "Fluffy village-style omelette with green chillies and onions.",
      full: 20, half: null,
      images: [IMG.omelet],
    },
    {
      name: "Boiled Egg",
      desc: "Simple perfectly boiled eggs – a quick protein-rich bite.",
      full: 20, half: null,
      images: [IMG.boiledEgg],
    },
    {
      name: "Egg Masala",
      desc: "Boiled eggs in a richly spiced masala gravy.",
      full: 50, half: null,
      images: [IMG.eggCurry],
    },
    {
      name: "Egg 65",
      desc: "Crispy fried egg bites marinated in South Indian spices.",
      full: 50, half: null,
      images: [IMG.eggFry],
    },
    {
      name: "Chilli Egg",
      desc: "Eggs in a spicy Indo-Chinese chilli sauce with peppers.",
      full: 50, half: null,
      images: [IMG.eggBurji],
    },
    {
      name: "Egg Burji",
      desc: "Scrambled eggs with onion, tomato, green chillies and spices.",
      full: 50, half: null,
      images: [IMG.eggBurji],
    },
  ],

  // ── FISH ──────────────────────────────────────────────────────────────────────
  Fish: [
    {
      name: "Fish Boneless Curry",
      desc: "Tender boneless fish pieces in a tangy Andhra-style tamarind curry.",
      full: 100, half: null,
      images: [IMG.fishCurry],
    },
    {
      name: "Fish Boneless Fry",
      desc: "Crispy fried boneless fish coated in a spiced semolina crust.",
      full: 100, half: null,
      images: [IMG.fishFry],
    },
    {
      name: "Fish Rost with Cashew",
      desc: "Roasted fish pieces in a rich cashew sauce – smoky and luxurious.",
      full: 130, half: null,
      images: [IMG.fishRoast],
    },
  ],

  // ── MEALS ─────────────────────────────────────────────────────────────────────
  Meals: [
    {
      name: "Plate Meals",
      desc: "A wholesome plate with rice, dal, two curries, rasam, and pickle.",
      full: 60, half: null,
      images: [IMG.thali],
    },
    {
      name: "Full Meals",
      desc: "Complete thali with rice, multiple curries, sambar, rasam, curd, papad, and dessert.",
      full: 80, half: null,
      images: [IMG.fullMeals],
    },
    {
      name: "Curd Rice",
      desc: "Comforting homestyle curd rice with tempering and a side of pickle.",
      full: 50, half: null,
      images: [IMG.curdRice],
    },
    {
      name: "Meal with Fish Curry",
      desc: "Meals combo served with a generous portion of Andhra fish curry.",
      full: 70, half: null,
      images: [IMG.fishCurry],
    },
    {
      name: "Meal with Chicken Curry",
      desc: "Meals combo with a rich and spicy Andhra chicken curry.",
      full: 100, half: null,
      images: [IMG.chickenCurry],
    },
    {
      name: "Meal with Chicken Joint Curry",
      desc: "Meals combo with tender chicken joint curry – hearty and satisfying.",
      full: 90, half: null,
      images: [IMG.chickenJoint],
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
