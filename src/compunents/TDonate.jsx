import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

const TDonate = () => {
    const [fundings, setFundings] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
  axiosInstance.get('/fundings')
    .then(res => {
      console.log('Fetched fundings:', res.data);
      setFundings(res.data);
    })
    .catch(err => console.error(err));
}, [axiosInstance]);
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 mb-15">
      <h1 className="text-2xl  font-bold mb-4">All Fundings</h1>

      <table className="table-auto w-full border  border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">User Email</th>
            <th className="px-4 py-2 border">Amount (USD)</th>
            <th className="px-4 py-2 border">Date</th>
          </tr>
        </thead>
        <tbody  className="bg-white">
          {fundings.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-4">No funding yet</td>
            </tr>
          ) : (
            fundings.map(fund => (
              <tr key={fund._id}>
                <td className="px-4 py-2 border">{fund.donnorEmail}</td>
                <td className="px-4 py-2 border">${fund.amount}</td>
                <td className="px-4 py-2 border">{new Date(fund.paidAt).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TDonate
