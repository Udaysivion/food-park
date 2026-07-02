import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const DishDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  if (!state) {
    return (
      <main className="min-h-screen bg-[#F8F1E7]">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-5xl font-bold text-[#6B0F0F]">
            Dish Not Found
          </h1>
          <button
            onClick={() => navigate("/menu")}
            className="mt-8 rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white"
          >
            Back To Menu
          </button>
        </section>
      </main>
    );
  }

  const relatedItems = [
    {
      id: 101,
      name: "Ghee Dosa",
      price: 160,
      desc: "Crispy dosa roasted with ghee.",
      img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 102,
      name: "Andhra Meals",
      price: 220,
      desc: "Traditional Andhra full meals.",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 103,
      name: "Natu Kodi Pulusu",
      price: 350,
      desc: "Country chicken curry.",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
    },
  ].filter((item) => item.name !== state.name);

  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === state.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === state.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * item.price,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: state.id,
          name: state.name,
          price: state.price,
          quantity,
          total: state.price * quantity,
        },
      ]);
    }
  };

  const addRelatedToCart = (item) => {
    const existingItem = cartItems.find((cart) => cart.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id
            ? {
                ...cart,
                quantity: cart.quantity + 1,
                total: (cart.quantity + 1) * cart.price,
              }
            : cart
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          total: item.price,
        },
      ]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const grandTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="bg-[#3A1E12] pt-32 pb-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
          Dish Details
        </p>

        <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
          {state.name}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl px-6 text-lg text-gray-300">
          View dish details, choose quantity, add to cart, and check your order
          summary.
        </p>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[55%_45%]">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
            <img
              src={state.img}
              alt={state.name}
              className="h-[520px] w-full object-cover"
            />

            <div className="p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
                {state.category}
              </p>

              <h2 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                {state.name}
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                {state.desc}
              </p>

              <p className="mt-6 text-3xl font-bold text-[#D4A017]">
                ₹{state.price}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
              <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
                Add To Cart
              </h3>

              <div className="mt-8 flex items-center gap-5">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F1E7] text-2xl font-bold text-[#6B0F0F]"
                >
                  -
                </button>

                <span className="text-2xl font-bold text-[#3A1E12]">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F1E7] text-2xl font-bold text-[#6B0F0F]"
                >
                  +
                </button>
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF8EE] p-5">
                <div className="flex justify-between">
                  <span>Item Price</span>
                  <span>₹{state.price}</span>
                </div>

                <div className="mt-3 flex justify-between">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>

                <div className="mt-4 border-t pt-4 flex justify-between text-xl font-bold text-[#6B0F0F]">
                  <span>Total</span>
                  <span>₹{state.price * quantity}</span>
                </div>
              </div>

              <button
                onClick={addToCart}
                className="mt-7 w-full rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:bg-[#3A1E12]"
              >
                Add To Cart
              </button>
            </div>

            <div className="rounded-[2rem] bg-[#3A1E12] p-8 text-white shadow-2xl">
              <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
                Order Details
              </h3>

              {cartItems.length === 0 ? (
                <p className="mt-5 text-gray-300">
                  No items added yet.
                </p>
              ) : (
                <div className="mt-6 space-y-5">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white/10 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-bold">{item.name}</h4>
                          <p className="mt-1 text-sm text-gray-300">
                            ₹{item.price} × {item.quantity}
                          </p>
                          <p className="mt-2 font-bold text-[#D4A017]">
                            Total: ₹{item.total}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-full bg-red-500 px-3 py-1 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-white/20 pt-5">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Grand Total</span>
                      <span className="text-[#D4A017]">₹{grandTotal}</span>
                    </div>

                    <button className="mt-6 w-full rounded-full bg-[#D4A017] px-7 py-4 font-bold text-[#3A1E12]">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Related Items
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
              You May Also Like
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[2rem] bg-white shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600">{item.desc}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-bold text-[#D4A017]">₹{item.price}</p>

                    <button
                      onClick={() => addRelatedToCart(item)}
                      className="rounded-full bg-[#6B0F0F] px-5 py-2 font-semibold text-white"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/menu")}
              className="rounded-full border border-[#6B0F0F] px-8 py-4 font-semibold text-[#6B0F0F] transition hover:bg-[#6B0F0F] hover:text-white"
            >
              Back To Menu
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DishDetails;
