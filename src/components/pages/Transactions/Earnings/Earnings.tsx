const tableData = [
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "XXXX1248",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "XXXX1248",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "-$84.67",
    status: "Paid to Bank Account",
    bankAccount: "XXXX1248",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "XXXX1248",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "XXXX1248",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
  {
    payoutDate: "8/01/2023",
    total: "$116.01",
    status: "Paid to Bank Account",
    bankAccount: "N/A",
    additionalDetails: "",
  },
];

const Earnings = () => {
  return (
    <div className="bg-white p-3 mt-5">
      <div className="flex justify-end text-[#212121] underline text-xs">
        View Payment Settings
      </div>

      <div className="overflow-auto">
        <table className="table-auto text-[10px] w-full mt-2 min-w-[400px]">
          <thead className="bg-accentGray-950 ">
            <tr>
              <th className="py-2 px-2 text-start">Payout Date</th>
              <th className="py-2 px-2 text-start">Total</th>
              <th className="py-2 px-2 text-start">Status</th>
              <th className="py-2 px-2 text-start">Bank Account Number</th>
              <th className="py-2 px-2 text-start">Additional Details</th>
              <th className="py-2 px-2 text-start"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((el, idx) => {
              return (
                <tr
                  key={"table-earnings-row" + idx}
                  className="border-b border-solid border-l-accentGray-950"
                >
                  <td className="py-3 px-2">{el.payoutDate}</td>
                  <td className="py-3 px-2">{el.total}</td>
                  <td className="py-3 px-2">{el.status}</td>
                  <td className="py-3 px-2">{el.bankAccount}</td>
                  <td className="py-3 px-2 flex gap-2 items-center justify-end sm:justify-center">
                    <button className="gap-1 items-center rounded-full border border-solid border-l-accentGray-950 h-6 px-3 font-bold hidden sm:flex">
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
  );
};

export default Earnings;
