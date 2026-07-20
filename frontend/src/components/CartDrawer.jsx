import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useCart } from "../context/CartContext";

const RESTAURANT_WHATSAPP = "919876543210"; // Food Park WhatsApp Number

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getSubtotal,
  } = useCart();

  const [orderType, setOrderType] = useState("Takeaway");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [tableOrAddress, setTableOrAddress] = useState("");
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();
  const packagingFee = orderType === "Dine-In" ? 0 : 25;
  const grandTotal = subtotal + packagingFee;

  const formatWhatsAppMessage = () => {
    let msg = `*🍛 NEW INDEPENDENT ORDER – FOOD PARK FAMILY RESTAURANT*\n`;
    msg += `-------------------------------------------\n`;
    msg += `*Order Type:* ${orderType}\n`;
    msg += `*Customer Name:* ${customerName || "Guest"}\n`;
    msg += `*Phone:* ${customerPhone || "N/A"}\n`;
    if (tableOrAddress) {
      msg += `*${orderType === "Dine-In" ? "Table #" : "Address/Notes"}:* ${tableOrAddress}\n`;
    }
    msg += `-------------------------------------------\n\n`;
    msg += `*ITEMS ORDERED:*\n`;

    cart.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}* (${item.portion})\n`;
      msg += `   • Spice: ${item.spiceLevel}\n`;
      if (item.addons && item.addons.length > 0) {
        msg += `   • Add-ons: ${item.addons.map((a) => `${a.name} (+₹${a.price})`).join(", ")}\n`;
      }
      if (item.instructions) {
        msg += `   • Note: ${item.instructions}\n`;
      }
      msg += `   • Qty: ${item.quantity} x ₹${item.unitPrice} = *₹${item.totalPrice}*\n\n`;
    });

    msg += `-------------------------------------------\n`;
    msg += `*Subtotal:* ₹${subtotal}\n`;
    if (packagingFee > 0) msg += `*Packaging/Handling Fee:* ₹${packagingFee}\n`;
    msg += `*TOTAL AMOUNT:* *₹${grandTotal}*\n`;
    msg += `-------------------------------------------\n`;
    msg += `Please confirm my order. Thank you!`;

    return encodeURIComponent(msg);
  };

  const handleWhatsAppOrder = () => {
    if (!customerName || !customerPhone) {
      alert("Please enter your Name and Mobile Number to place your order.");
      return;
    }
    const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${formatWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const handleDirectOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("Please enter your Name and Mobile Number to place your order.");
      return;
    }

    const orderPayload = {
      orderId: `FP-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName,
      customerPhone,
      orderType,
      tableOrAddress,
      items: cart,
      subtotal,
      packagingFee,
      grandTotal,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
    } catch (e) {
      console.log("Local order logged", e);
    }

    setConfirmedOrder(orderPayload);
    clearCart();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-screen max-w-md bg-[#F8F1E7] shadow-2xl flex flex-col border-l border-[#D4A017]/30"
          >
            {/* Header */}
            <div className="bg-[#3A1E12] px-6 py-5 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#D4A017] p-2 text-[#3A1E12]">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold">Your Order Cart</h2>
                  <p className="text-xs text-gray-300">Independent Direct Ordering</p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 hover:bg-white/10 text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List or Confirmed Screen */}
            {confirmedOrder ? (
              <div className="flex-1 overflow-y-auto p-6 text-center space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs text-gray-600">
                  Order ID: <span className="font-mono font-bold text-[#6B0F0F]">{confirmedOrder.orderId}</span>
                </p>

                <div className="rounded-2xl border border-[#D4A017]/30 bg-white p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Customer:</span>
                    <span className="font-bold text-[#3A1E12]">{confirmedOrder.customerName}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Type:</span>
                    <span className="font-bold text-[#3A1E12]">{confirmedOrder.orderType}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Total Paid:</span>
                    <span className="font-bold text-[#6B0F0F]">₹{confirmedOrder.grandTotal}</span>
                  </div>
                  <p className="pt-1 text-[11px] text-gray-500 text-center">
                    Estimated Prep Time: 20-25 mins
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setConfirmedOrder(null)}
                  className="w-full rounded-2xl bg-[#6B0F0F] py-3 text-sm font-bold text-white shadow-md hover:bg-[#8B1A1A]"
                >
                  Start New Order
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl mb-4">🍛</div>
                <h3 className="font-serif text-xl font-bold text-[#6B0F0F] mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-gray-600 max-w-xs mb-6">
                  Add delicious dishes, choose your portions and add-ons to place an order.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full bg-[#6B0F0F] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#8B1A1A]"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Items Scrollable List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.cartItemId}
                      className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-sm space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <img
                          src={cartItem.image}
                          alt={cartItem.name}
                          className="h-14 w-14 rounded-xl object-cover border border-gray-100"
                        />
                        <div className="flex-1">
                          <h4 className="font-serif text-sm font-bold text-[#6B0F0F] leading-tight">
                            {cartItem.name}
                          </h4>
                          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11px] text-gray-600">
                            <span className="rounded bg-[#F8F1E7] px-1.5 py-0.5 font-semibold text-[#6B0F0F]">
                              {cartItem.portion}
                            </span>
                            <span className="rounded bg-gray-100 px-1.5 py-0.5">
                              {cartItem.spiceLevel}
                            </span>
                          </div>

                          {/* Add-ons List */}
                          {cartItem.addons && cartItem.addons.length > 0 && (
                            <div className="mt-1 text-[11px] text-gray-500 space-y-0.5">
                              {cartItem.addons.map((addon) => (
                                <div key={addon.id} className="flex justify-between">
                                  <span>+ {addon.name}</span>
                                  <span className="font-medium">₹{addon.price}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {cartItem.instructions && (
                            <p className="mt-1 text-[10px] italic text-[#D4A017]">
                              Note: {cartItem.instructions}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromCart(cartItem.cartItemId)}
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Item Bottom Bar */}
                      <div className="flex items-center justify-between border-t pt-2 text-xs">
                        <div className="flex items-center rounded-lg border border-gray-200 bg-[#F8F1E7] px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(cartItem.cartItemId, -1)}
                            className="p-1 text-[#6B0F0F] hover:bg-white rounded"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-bold text-[#3A1E12]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(cartItem.cartItemId, 1)}
                            className="p-1 text-[#6B0F0F] hover:bg-white rounded"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 block">
                            ₹{cartItem.unitPrice} x {cartItem.quantity}
                          </span>
                          <span className="font-bold text-[#6B0F0F]">
                            ₹{cartItem.totalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form & Checkout */}
                <div className="border-t border-[#D4A017]/30 bg-white p-4 space-y-3.5">

                  {/* Order Type Selector */}
                  <div className="text-center mb-1.5">
                    <p className="text-[10px] text-green-700 font-bold uppercase tracking-wider mb-1">
                      ⚡ Pre-order takeaway to skip the wait!
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {["Takeaway", "Dine-In"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`rounded-xl py-1.5 font-bold transition border ${
                            orderType === type
                              ? "bg-[#6B0F0F] text-white border-[#6B0F0F]"
                              : "bg-[#F8F1E7] text-[#3A1E12] border-gray-200 hover:border-[#D4A017]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="rounded-xl border border-gray-300 bg-[#F8F1E7] px-3 py-2 focus:border-[#6B0F0F] focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="rounded-xl border border-gray-300 bg-[#F8F1E7] px-3 py-2 focus:border-[#6B0F0F] focus:outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder={orderType === "Dine-In" ? "Table Number (e.g. Table 4)" : "Pickup Time / Special Notes"}
                    value={tableOrAddress}
                    onChange={(e) => setTableOrAddress(e.target.value)}
                    className="w-full text-xs rounded-xl border border-gray-300 bg-[#F8F1E7] px-3 py-2 focus:border-[#6B0F0F] focus:outline-none"
                  />

                  {/* Price Summary */}
                  <div className="space-y-1 text-xs border-t pt-2.5">
                    <div className="flex justify-between text-gray-600">
                      <span>Items Subtotal</span>
                      <span className="font-semibold text-gray-800">₹{subtotal}</span>
                    </div>
                    {packagingFee > 0 && (
                      <div className="flex justify-between text-gray-600">
                        <span>Packaging & Handling Fee</span>
                        <span className="font-semibold text-gray-800">₹{packagingFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-[#6B0F0F] pt-1 border-t">
                      <span>Total Amount Payable</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>

                  {/* Order Placement Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white shadow-md hover:bg-[#20bd5a] transition"
                    >
                      <MessageCircle size={16} />
                      WhatsApp Order
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectOrder}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#6B0F0F] py-3 text-xs font-bold text-white shadow-md hover:bg-[#8B1A1A] transition"
                    >
                      <Send size={16} />
                      Place Order Direct
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CartDrawer;
