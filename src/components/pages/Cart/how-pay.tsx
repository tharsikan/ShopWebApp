import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";

type HowPayProps = ComponentProps<"div">;

export function HowPay({ className, ...props }: HowPayProps) {
  return (
    <Card className="md:p-4 max-md:bg-transparent max-md:border-0">
      <div className="flex md:items-center max-md:flex-col justify-between">
        <h4 className="md:text-[22px] text-base font-semibold">
          How You'll Pay
        </h4>
        <div className="flex md:items-center text-black max-md:text-xs font-medium gap-1">
          <Icon
            icon={"material-symbols:security"}
            className="text-[#66C600] text-xl md:text-2xl"
          />
          <p>
            Buy with confidence - Muzfi Protection included with all purchases
          </p>
        </div>
      </div>
      <br />
      <RadioGroup.Root
        defaultValue={data.at(1)?.label}
        className="flex flex-col gap-[18px] rounded-md items-start"
      >
        {data.map((el) => (
          <div
            key={el.label}
            className="flex border h-14 bg-zinc-100 [&:has([aria-checked='true'])]:bg-yellow-500/20 [&:has([aria-checked='true'])]:border-yellow-500 border-border rounded-md items-center w-full p-3.5 gap-2.5"
          >
            <RadioGroup.Item
              value={el.label}
              className="aspect-square h-5 peer w-5 rounded-full border bg-white border-neutral-400 aria-checked:border-[#66C600]"
            >
              <RadioGroup.Indicator className="after:bg-[#66C600] relative flex aspect-square h-full w-full items-center justify-center after:block after:h-3 after:w-3 after:rounded-full after:content-['']" />
            </RadioGroup.Item>
            <label
              htmlFor={el.label}
              className="text-xs -mt-0.5 grow cursor-pointer gap-2 items-center"
            >
              <div className="flex w-full">
                <div className="text-zinc-900 text-sm font-semibold grow flex flex-col justify-center">
                  <p>{el.label}</p>
                  <p className="text-xs font-medium">{el.extra}</p>
                </div>
                <div className="flex gap-5 max-md:hidden text-[11px] text-neutral-500 flex-wrap">
                  {el.payment.map((img) => (
                    <img
                      alt={img}
                      key={img}
                      src={`/assets/vectors/payment/${img}.svg`}
                    />
                  ))}
                </div>
              </div>
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </Card>
  );
}

const data = [
  {
    label: "Debit or Credit Card",
    payment: ["visa", "mastercard", "mastero", "american-express"],
  },
  {
    label: "Your PayPal Account",
    extra: (
      <>
        Login into your paypal account{" "}
        <Link to="" className="text-blue-700 underline">
          Learn more
        </Link>
      </>
    ),
    payment: ["paypal"],
  },

];
