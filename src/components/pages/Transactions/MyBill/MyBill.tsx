const tableData = [
  {
    billingPeriod: "Jul 2023",
    sales: "$116.01",
    bill: "$0.00",
    amountPaid: "$0.00",
    balance: "$0.00",
    status: "Paid",
  },
];

const MyBill = () => {
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-12 justify-between text-[#212121] text-xs py-6 border-t border-b border-solid border-l-accentGray-950">
        <div className="col-span-4">
          <div className="text-bold text-sm font-bold">Billing Method</div>
          <div className="text-accentGray-800">
            If you have any questions relating to billing, please contact us.
          </div>
        </div>
        <div className="col-span-8 mt-5 lg:mt-0">
          <div className="border boder-solid border-l-accentGray-950 rounded-md p-3">
            <div className="flex justify-between items-end">
              <div className="flex justify-between gap-2">
                <img src="/assets/vectors/transactions/visa.svg" alt="visa" />

                <div>
                  <div className="font-bold text-xs">Visa ....0281</div>
                  <div className="text-[#212121]">Expires 8/2024</div>
                </div>
              </div>
              <div className="text-accentBlue-500 font-bold">Change</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 justify-between text-[#212121] text-xs py-6 border-t border-b border-solid border-l-accentGray-950">
        <div className="col-span-4">
          <div className="text-bold text-sm font-bold">My Bills</div>
        </div>
        <div className="col-span-8">
          <div className="overflow-auto mt-6">
            <table className="table-auto text-[10px] w-full mt-2 min-w-[500px]">
              <thead className="bg-accentGray-950 ">
                <tr>
                  <th className="py-2 px-2 text-start">Billing Period</th>
                  <th className="py-2 px-2 text-start">Sales</th>
                  <th className="py-2 px-2 text-start">Bill</th>
                  <th className="py-2 px-2 text-start">Amount Paid</th>
                  <th className="py-2 px-2 text-start">Balance</th>
                  <th className="py-2 px-2 text-start">Status</th>
                  <th className="py-2 px-2 text-start"></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((el, idx) => {
                  return (
                    <tr
                      key={"table-my-bill-row" + idx}
                      className="border-b border-solid border-l-accentGray-950"
                    >
                      <td className="py-3 px-2">{el.billingPeriod}</td>
                      <td className="py-3 px-2">{el.sales}</td>
                      <td className="py-3 px-2">{el.bill}</td>
                      <td className="py-3 px-2">{el.amountPaid}</td>
                      <td className="py-3 px-2">{el.balance}</td>
                      <td className="py-3 px-2">{el.status}</td>
                      <td className="py-3 px-2 flex gap-2 items-center">
                        <button className="flex gap-1 items-center rounded-full border border-solid border-l-accentGray-950 h-6 px-3 font-bold">
                          <img
                            src="/assets/vectors/transactions/export.svg"
                            title="export"
                            alt="export"
                          />{" "}
                          Export
                        </button>
                        <button className="rounded-full border border-solid border-l-accentGray-950 h-6 px-3 font-bold">
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBill;
