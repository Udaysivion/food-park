import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const AVAILABLE_ADDONS = [
  { id: "egg", name: "Extra Boiled Egg", price: 15, icon: "🥚" },
  { id: "thumsup", name: "Thums Up (250ml)", price: 25, icon: "🥤" },
  { id: "raitha", name: "Extra Raitha", price: 20, icon: "🥛" },
  { id: "salan", name: "Extra Gravy / Salan", price: 20, icon: "🍲" },
  { id: "paneer", name: "Extra Paneer / Cheese", price: 35, icon: "🧀" },
  { id: "pickle", name: "Spicy Andhra Pickle", price: 15, icon: "🌶️" },
  { id: "lassi", name: "Sweet Lassi (200ml)", price: 40, icon: "🥛" },
];

const SPICE_LEVELS = [
  { id: "mild", label: "Mild", icon: "🌱" },
  { id: "medium", label: "Medium", icon: "🌶️" },
  { id: "spicy", label: "Spicy", icon: "🌶️🌶️" },
  { id: "extra-spicy", label: "Extra Spicy", icon: "🔥" },
];

const OrderModal = () => {
  const { isModalOpen, closeOrderModal, selectedDishForModal, addToCart } = useCart();

  const [portion, setPortion] = useState("Full");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [spiceLevel, setSpiceLevel] = useState("Medium");
  const [instructions, setInstructions] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedDishForModal) {
      setPortion("Full");
      setSelectedAddons([]);
      setSpiceLevel("Medium");
      setInstructions("");
      setQuantity(1);
    }
  }, [selectedDishForModal]);

  if (!isModalOpen || !selectedDishForModal) return null;

  const dish = selectedDishForModal;

  // Portion Prices
  const fullPrice = Number(dish.full || dish.price || 150);
  const halfPrice = dish.half ? Number(dish.half) : null;
  const currentPortionPrice = portion === "Half" && halfPrice ? halfPrice : fullPrice;

  // Add-ons total
  const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

  // Unit price & grand total
  const unitPrice = currentPortionPrice + addonsTotal;
  const grandTotal = unitPrice * quantity;

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      }
      return [...prev, addon];
    });
  };

  const handleAddToCart = () => {
    addToCart({
      item: dish,
      portion,
      portionPrice: currentPortionPrice,
      addons: selectedAddons,
      spiceLevel,
      instructions,
      quantity,
    });
    closeOrderModal();
  };

  const getDishImage = (item) => {
    if (item.images && item.images.length > 0) return item.images[0];
    return item.image || "/assets/foodpark-logo.png";
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeOrderModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window Container - Strict max height so footer is 100% visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative z-10 w-full max-w-xl max-h-[75vh] sm:max-h-[75vh] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D4A017]/40 bg-[#F8F1E7] shadow-2xl"
        >
          {/* Compact Header Bar */}
          <div className="relative shrink-0 h-20 sm:h-24 w-full overflow-hidden bg-[#3A1E12]">
            <img
              src={getDishImage(dish)}
              alt={dish.name}
              className="h-full w-full object-cover opacity-80"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/foodpark-logo.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E12] via-[#3A1E12]/50 to-transparent" />

            <button
              onClick={closeOrderModal}
              className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white transition hover:bg-black"
            >
              <X size={16} />
            </button>

            <div className="absolute bottom-2 left-4 right-4 text-white">
              <span className="inline-block rounded-full bg-[#D4A017] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#3A1E12]">
                {dish.category || "Food Park Special"}
              </span>
              <h2 className="mt-0.5 font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                {dish.name}
              </h2>
            </div>
          </div>

          {/* Scrollable Form Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 scrollbar-thin">

            {/* Description */}
            <p className="text-[11px] text-gray-700 leading-relaxed">
              {dish.desc || "Prepared fresh using authentic spices and premium ingredients."}
            </p>

            {/* Portion Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B0F0F] mb-1.5">
                1. Select Portion Size
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPortion("Full")}
                  className={`flex items-center justify-between rounded-xl p-2.5 sm:p-3 border transition-all ${
                    portion === "Full"
                      ? "border-[#6B0F0F] bg-[#6B0F0F] text-white shadow-md font-semibold"
                      : "border-gray-200 bg-white text-[#3A1E12] hover:border-[#D4A017]"
                  }`}
                >
                  <span className="text-xs font-semibold">Full Portion</span>
                  <span className="text-xs font-bold">₹{fullPrice}</span>
                </button>

                {halfPrice ? (
                  <button
                    type="button"
                    onClick={() => setPortion("Half")}
                    className={`flex items-center justify-between rounded-xl p-2.5 sm:p-3 border transition-all ${
                      portion === "Half"
                        ? "border-[#6B0F0F] bg-[#6B0F0F] text-white shadow-md font-semibold"
                        : "border-gray-200 bg-white text-[#3A1E12] hover:border-[#D4A017]"
                    }`}
                  >
                    <span className="text-xs font-semibold">Half Portion</span>
                    <span className="text-xs font-bold">₹{halfPrice}</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-between rounded-xl p-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 text-[11px]">
                    <span>Half Portion</span>
                    <span>N/A</span>
                  </div>
                )}
              </div>
            </div>

            {/* Spice Level Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B0F0F] mb-1.5">
                2. Choose Spice Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SPICE_LEVELS.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setSpiceLevel(lvl.label)}
                    className={`flex items-center justify-center gap-1 rounded-xl py-1.5 px-2 text-[11px] font-semibold border transition ${
                      spiceLevel === lvl.label
                        ? "border-[#6B0F0F] bg-[#6B0F0F]/10 text-[#6B0F0F] ring-2 ring-[#6B0F0F]/30"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{lvl.icon}</span>
                    <span>{lvl.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons Section (Dynamic Price Update) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B0F0F]">
                  3. Select Add-ons & Beverages
                </label>
                <span className="text-[10px] text-[#D4A017] font-semibold uppercase">
                  Prices auto-update
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AVAILABLE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon)}
                      className={`flex items-center justify-between rounded-xl p-2 sm:p-2.5 text-left border transition-all ${
                        isChecked
                          ? "border-[#D4A017] bg-[#D4A017]/15 text-[#3A1E12] font-semibold ring-1 ring-[#D4A017]"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#D4A017]/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded border text-white transition ${
                            isChecked ? "border-[#6B0F0F] bg-[#6B0F0F]" : "border-gray-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check size={12} />}
                        </div>
                        <span className="text-xs font-medium">
                          {addon.icon} {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#6B0F0F]">
                        +₹{addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B0F0F] mb-1">
                4. Special Cooking Notes (Optional)
              </label>
              <input
                type="text"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="e.g. Less oil, extra onions..."
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs text-[#3A1E12] focus:border-[#6B0F0F] focus:outline-none"
              />
            </div>
          </div>

          {/* Sticky Fixed Bottom Action Bar - Always Visible */}
          <div className="shrink-0 border-t border-[#D4A017]/30 bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-lg">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase text-gray-600">Qty:</span>
              <div className="flex items-center rounded-xl border border-gray-300 bg-[#F8F1E7] p-0.5">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded-lg p-1 text-[#6B0F0F] hover:bg-white transition"
                >
                  <Minus size={14} />
                </button>
                <span className="w-7 text-center font-bold text-xs text-[#3A1E12]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded-lg p-1 text-[#6B0F0F] hover:bg-white transition"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Order Button with Live Calculated Total */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-between rounded-xl bg-[#6B0F0F] px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-white shadow-lg transition hover:bg-[#8B1A1A] active:scale-98"
            >
              <span className="text-xs sm:text-sm">Add To Independent Order</span>
              <span className="rounded-full bg-[#D4A017] px-2.5 py-0.5 text-xs font-black text-[#3A1E12]">
                ₹{grandTotal}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderModal;
