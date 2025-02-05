import React, { useState } from "react";
import {
  CheckCircle,
  Mail,
  User,
  MapPin,
  DollarSign,
  CreditCard,
  Globe,
} from "lucide-react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../redux/features/order/orderApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const VerifyOrderPage = () => {
  const [isVerified, setIsVerified] = useState(false);

  const [searchParams] = useSearchParams();

  const { data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  const transactionDetails: OrderData = data?.data?.[0];

  const handleVerification = () => {
    // Simulate verification process
    setIsVerified(true);
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transaction Verified!
          </h2>
          <p className="text-gray-600 mb-6">
            Your transaction has been successfully processed and confirmed.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 font-semibold">
              Transaction ID: {transactionDetails?.bank_trx_id}
            </p>
          </div>
          <NavLink
            to="/"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition px-5"
          >
            Return to Home
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">
              Transaction Verification
            </h1>
          </div>

          {/* Transaction Details */}
          <div className="p-8 space-y-6">
            {/* Email */}
            <div className="flex items-center border-b pb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold">{transactionDetails?.email}</p>
              </div>
            </div>

            {/* Name */}
            <div className="flex items-center border-b pb-4">
              <User className="w-6 h-6 text-green-600 mr-4" />
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-semibold">{transactionDetails?.name}</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center border-b pb-4">
              <MapPin className="w-6 h-6 text-red-600 mr-4" />
              <div>
                <p className="text-gray-600">Address</p>
                <p className="font-semibold">{transactionDetails?.address}</p>
              </div>
            </div>

            {/* Amount */}
            <div className="flex items-center border-b pb-4">
              <DollarSign className="w-6 h-6 text-purple-600 mr-4" />
              <div>
                <p className="text-gray-600">Original Amount</p>
                <p className="font-semibold">
                  {transactionDetails?.currency}{" "}
                  {transactionDetails?.amount.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Payable Amount */}
            <div className="flex items-center border-b pb-4">
              <CreditCard className="w-6 h-6 text-indigo-600 mr-4" />
              <div>
                <p className="text-gray-600">Payable Amount</p>
                <p className="font-semibold">
                  {transactionDetails?.currency}{" "}
                  {transactionDetails?.payable_amount.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Bank Status */}
            <div className="flex items-center border-b pb-4">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
              <div>
                <p className="text-gray-600">Bank Status</p>
                <p
                  className={`font-semibold ${
                    transactionDetails?.bank_status === "Completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transactionDetails?.bank_status}
                </p>
              </div>
            </div>

            {/* Bank Transaction ID */}
            <div className="flex items-center border-b pb-4">
              <Globe className="w-6 h-6 text-blue-500 mr-4" />
              <div>
                <p className="text-gray-600">Bank Transaction ID</p>
                <p className="font-semibold">
                  {transactionDetails?.bank_trx_id}
                </p>
              </div>
            </div>

            {/* Currency */}
            <div className="flex items-center pb-4">
              <Globe className="w-6 h-6 text-yellow-600 mr-4" />
              <div>
                <p className="text-gray-600">Currency</p>
                <p className="font-semibold">{transactionDetails?.currency}</p>
              </div>
            </div>

            {/* Verification Button */}
            <button
              onClick={handleVerification}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold mt-6"
            >
              Verify Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOrderPage;
