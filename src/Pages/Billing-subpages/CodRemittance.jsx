import React from "react";
import { Download } from "lucide-react"; 
import BillingNavbar from "../../Pages/Billing-subpages/BillingNavbar"; // Navbar import

export default function CODRemittance() {
  const data = [
    {
      id: 1,
      remittanceId: "680594",
      codAmount: "₹1074",
      status: "Paid",
      date: "May 23, 2025",
      freight: "₹1074",
      remitAmount: "₹0",
      fee: "₹0",
      paymentRef: "Wallet Adjustment",
      remark: "",
    },
    {
      id: 2,
      remittanceId: "649416",
      codAmount: "₹4282",
      status: "Paid",
      date: "Apr 30, 2025",
      freight: "₹0",
      remitAmount: "₹4282",
      fee: "₹0",
      paymentRef: "29-04-2025 - FCM-250429GDRAA",
      remark: "",
    },
    {
      id: 3,
      remittanceId: "648926",
      codAmount: "₹1178",
      status: "Paid",
      date: "Apr 23, 2025",
      freight: "₹0",
      remitAmount: "₹1178",
      fee: "₹0",
      paymentRef: "23-04-2025 - FCM-250423G6B3SL",
      remark: "",
    },
    {
      id: 4,
      remittanceId: "646147",
      codAmount: "₹2430",
      status: "Paid",
      date: "Apr 22, 2025",
      freight: "₹0",
      remitAmount: "₹2430",
      fee: "₹0",
      paymentRef: "21-04-2025 - FCM-250421GAF65Q",
      remark: "",
    },
  ];

  return (
    <div>
      {/* Billing Navbar with Active Tab */}
      <BillingNavbar activeTab="COD Remittance" />

      <div className="p-6 bg-white rounded-lg shadow-md mt-4">
        {/* Top Summary Section */}
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">Remitted Till Date</p>
            <p className="text-xl font-bold">₹7829658</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">Last Remittance</p>
            <p className="text-xl font-bold">₹1074</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">Next Remittance (Expected)</p>
            <p className="text-xl font-bold">₹6364</p>
          </div>
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Remittance Due</p>
            <p className="text-xl font-bold">₹6364</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Remittance ID#</th>
                <th className="px-3 py-2">COD Amount</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Payment Date</th>
                <th className="px-3 py-2">Freight Deductions</th>
                <th className="px-3 py-2">Remittance Amount</th>
                <th className="px-3 py-2">Convenience Fee</th>
                <th className="px-3 py-2">Payment Ref#</th>
                <th className="px-3 py-2">Remark</th>
                <th className="px-3 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-3 py-2">{row.id}</td>
                  <td className="px-3 py-2">{row.remittanceId}</td>
                  <td className="px-3 py-2">{row.codAmount}</td>
                  <td className="px-3 py-2">{row.status}</td>
                  <td className="px-3 py-2">{row.date}</td>
                  <td className="px-3 py-2">{row.freight}</td>
                  <td className="px-3 py-2">{row.remitAmount}</td>
                  <td className="px-3 py-2">{row.fee}</td>
                  <td className="px-3 py-2">{row.paymentRef}</td>
                  <td className="px-3 py-2">{row.remark}</td>
                  <td className="px-3 py-2">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
