import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Transactions = () => {
  const [payment, setPayment] = useState([]);
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allPayment');
        const transactions = response.data;

        setPayment(transactions);
        processChartData(transactions);
      } catch (err) {
        console.error('Error fetching payments:', err.message);
      }
    };

    fetchPayments();
  }, []);

  // Function to process transactions into monthly totals
  const processChartData = (transactions) => {
    const monthData = {};

    transactions.forEach((trans) => {
      const date = new Date(trans.date);
      const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
      const year = date.getFullYear(); // Get year
      const monthYear = `${month} ${year}`; // Example: "January 2025"

      if (!monthData[monthYear]) {
        monthData[monthYear] = 0;
      }
      monthData[monthYear] += trans.amount; // Sum transaction amounts per month
    });

    // Prepare sorted data for chart
    const sortedMonths = Object.keys(monthData).sort(
      (a, b) => new Date(a) - new Date(b) // Sort months correctly
    );
    const amounts = sortedMonths.map((month) => monthData[month]);

    setSalesData({
      labels: sortedMonths,
      datasets: [
        {
          label: 'Total Sales ($)',
          data: amounts,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Transactions</h1>

      {/* Bar Chart */}
      {salesData && (
        <div className="mb-6 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales</h2>
          <Bar
            data={salesData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Total Sales Per Month' },
              },
              scales: {
                x: { title: { display: true, text: 'Month' } },
                y: { title: { display: true, text: 'Sales Amount ($)' } },
              },
            }}
          />
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {payment.length > 0 ? (
              payment.map((trans) => (
                <tr key={trans._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{trans.transactionId}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {trans.name} ({trans.email})
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">${trans.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(trans.date).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
