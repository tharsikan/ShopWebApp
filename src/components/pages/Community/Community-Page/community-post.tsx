import { ComponentProps } from "react";
import { cn } from "../../../../helpers/utils";
import Wrapper from "../../../../layouts/MainLayout/wrapper";
import Feeds from "../../Home/Feeds";
import Posts from "../../Home/Posts";

type CommunityPostProps = ComponentProps<"div">;

export function CommunityPost({ className, ...props }: CommunityPostProps) {
  return (
    <>
      <Wrapper className={cn(className)}>
        <Feeds />
      </Wrapper>
      <Posts />
    </>
  );
}
