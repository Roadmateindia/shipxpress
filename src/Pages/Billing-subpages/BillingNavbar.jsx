import React from "react";
import { NavLink } from "react-router-dom";

export default function BillingNavbar() {
  const tabs = [
    { name: "Price Calculator", path: "/billing/price-calculator" },
    { name: "CODRemittance", path: "/Pages/Billing-subpage/CodRemittance" },
    { name: "Wallet Transactions", path: "/billing/wallet" },
    { name: "Shipping Charges", path: "/billing/shipping-charges" },
    { name: "Invoice", path: "/billing/invoice" },
    { name: "Credit Notes", path: "/billing/credit-notes" },
    { name: "TDS", path: "/billing/TDS" },
  ];

  return (
    <header className="bg-white text-gray-900 shadow-md">
      {/* Title */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold">Billing -Price Calculator</h1>
      </div>

      {/* Tabs  */}
      <div className="flex gap-3 border-t px-6 pb-2 pt-2 text-sm font-medium overflow-x-auto">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-3 py-1 rounded ${
                isActive ? "bg-gray-800 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
