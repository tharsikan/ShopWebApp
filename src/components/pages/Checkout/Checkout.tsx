import { Link, Outlet } from "react-router-dom";
import Card from "../../common/Card";
import { OrderSummaryMob } from "../Cart/order-summary-mob";

const CheckoutLayout = () => {
  return (
    <div className="font-montserrat">
      <div className="grid md:grid-cols-12 gap-5">
        <Card className="col-span-full px-3.5 py-3.5 md:px-8 md:py-5 md:col-span-8">
          <h4 className="text-zinc-800 text-2xl font-semibold">Shop Name</h4>
          <OrderSummaryMob />
          <Outlet /> <br />
          <div className="container-mini border-t my-8 py-3.5 border-border flex flex-wrap gap-5">
            {links.map((el) => (
              <Link
                to={el.href}
                className="text-sky-700 text-[10px] md:text-xs "
                key={el.label}
              >
                {el.label}
              </Link>
            ))}
          </div>
        </Card>
        <Card className="max-h-96 md:col-span-4 max-md:hidden flex flex-col justify-between">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-semibold">Summary</h3>
            </div>

            <div className="text-accentGray-200 text-xs font-semibold">
              3 items
            </div>

            <div>
              <div className="flex justify-between gap-3 my-3">
                <div>1 x MSTTMS bunkbed</div>
                <div className="flex-shrink-0">$ 399.99</div>
              </div>
              <div className="flex justify-between gap-3 my-3">
                <div>1 x MSTTMS bunkbed</div>
                <div className="flex-shrink-0">$ 120.50</div>
              </div>
            </div>
            <hr className="border-accentGray-600 my-4" />
            <div>
              <div className="flex justify-between gap-3 my-3">
                <div>Shipping</div>
                <div className="flex-shrink-0">$ 58.00</div>
              </div>
              <div className="flex justify-between gap-3 my-3">
                <div>Shipping</div>
                <div className="flex-shrink-0">$ 20.0</div>
              </div>
            </div>
            <hr className="border-accentGray-600 my-4" />
          </div>

          <div className="flex justify-between items-center my-2">
            <div className="font-bold text-base">Total</div>
            <div className="font-bold text-base">$ 598.50</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutLayout;

const links = [
  { label: "Refund Policy", href: "" },
  { label: "Shipping Policy", href: "" },
  { label: "Privacy Policy", href: "" },
];
