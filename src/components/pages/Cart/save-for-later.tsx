import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";
import { CardRow } from "./card-row";

type Save4LaterProps = ComponentProps<"div">;

export function Save4Later({ className, ...props }: Save4LaterProps) {
  return (
    <div className={cn(className)} {...props}>
      <Card className="md:grid p-6  grid-cols-[3fr_1fr_1fr_1fr] items-center justify-items-center">
        {["Description", "Quantity", "Price", "Remove"].map((el) => (
          <p key={el} className="text-sm max-md:hidden font-medium">
            {el}
          </p>
        ))}
        <hr className="col-span-full max-md:hidden  my-6 w-full" />
        {Array.from(Array(2)).map((el) => (
          <>
            <CardRow later />
            <hr className="col-span-full my-6 last:hidden w-full" />
          </>
        ))}
      </Card>
    </div>
  );
}
