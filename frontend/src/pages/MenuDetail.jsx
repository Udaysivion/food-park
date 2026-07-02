import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { getRelatedItems, menuItems } from "../data/menuItems";

const SWIGGY_URL =
  "https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033";
const ZOMATO_URL =
  "https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order";

const OrderButtons = ({ compact = false }) => (
  <div className={`flex flex-wrap gap-3 ${compact ? "mt-3" : "mt-6"}`}>
    <a
      href={SWIGGY_URL}
      target="_blank"
      rel="noreferrer"
      className={`rounded-lg bg-[#FC8019] font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-[#e66f0d] ${
        compact ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm"
      }`}
    >
      Order on Swiggy
    </a>
    <a
      href={ZOMATO_URL}
      target="_blank"
      rel="noreferrer"
      className={`rounded-lg bg-[#E23744] font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-[#c92f3b] ${
        compact ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm"
      }`}
    >
      Order on Zomato
    </a>
  </div>
);

const MenuDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, index } = useParams();
  const decodedCategory = decodeURIComponent(category || "Biryani");
  const categoryItems = menuItems[decodedCategory] || [];
  const selectedItem =
    location.state?.item || categoryItems[Number(index)] || null;
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedItems = useMemo(
    () => getRelatedItems(decodedCategory, Number(index), 6),
    [decodedCategory, index]
  );

  if (!selectedItem) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F1E7] px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#6B0F0F]">
            Menu item not found
          </h1>
          <button
            onClick={() => navigate("/menu")}
            className="mt-6 rounded-full bg-[#6B0F0F] px-7 py-3 font-semibold text-white"
          >
            Back to Menu
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F1E7] text-[#2A140C]">
      <section className="bg-[#3A1E12] px-6 pb-16 pt-32 text-center text-white">
        <button
          onClick={() => navigate("/menu")}
          className="mb-5 text-sm font-semibold text-[#D4A017] hover:text-white"
        >
          ← Back to Menu
        </button>
        <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          {decodedCategory}
        </p>
        <h1 className="mt-3 font-serif text-5xl font-bold md:text-6xl">
          {selectedItem.name}
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <article className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-xl md:grid-cols-[minmax(0,420px)_1fr] md:p-9">
          <div>
            <img
              src={selectedItem.images?.[selectedImage]}
              alt={selectedItem.name}
              className="h-80 w-full rounded-2xl object-cover"
            />
            {selectedItem.images?.length > 1 && (
              <div className="mt-3 flex gap-3">
                {selectedItem.images.map((image, imageIndex) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(imageIndex)}
                    className={`h-16 w-16 overflow-hidden rounded-xl border-2 ${
                      selectedImage === imageIndex
                        ? "border-[#6B0F0F]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#D4A017]">
              {decodedCategory}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#6B0F0F]">
              {selectedItem.name}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              {selectedItem.desc}
            </p>
            <OrderButtons />
            <p className="mt-3 text-xs text-gray-400">
              You’ll continue securely on your selected delivery platform.
            </p>
          </div>
        </article>

        <div className="mt-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              You may also like
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#6B0F0F]">
              More Menu Items
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((item) => (
              <article
                key={`${item.category}-${item.index}`}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                    {item.category}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-[#6B0F0F]">
                      {item.name}
                    </h3>
                    <span className="font-bold">₹{item.full}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                  <OrderButtons compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MenuDetail;
