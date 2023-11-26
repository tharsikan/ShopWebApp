import * as Dialog from "@radix-ui/react-dialog";
import { HTMLAttributes, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../helpers/utils";
import Card from "./Card/Card";

interface DialogWrapperProps extends HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode | any;
  wrapperClassName?: string;
}

export default function DialogWrapper({
  className,
  content,
  wrapperClassName,
  children,
  ...props
}: DialogWrapperProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root onOpenChange={setOpen}>
      <Dialog.Trigger className={cn("block w-full", className)}>
        {children}
      </Dialog.Trigger>{" "}
      <Dialog.Overlay className="fixed z-[9999] inset-0 bg-black/60" />
      <AnimatePresence>
        {open && (
          <Dialog.Content
            forceMount
            asChild
            className={cn(
              "fixed z-[10000] inset-0 m-auto h-fit md:w-fit  p-2 ",
              wrapperClassName,
              {}
            )}
            {...props}
          >
            <motion.div
              initial={{ y: 100, scale: 0.5, opacity: 0 }}
              exit={{ y: 0, scale: 0, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
            >
              <Card className="p-4 md:p-6 relative h-fit max-w-xl overflow-hidden">
                {content}
                <Dialog.Close
                  asChild
                  className="absolute right-3 cursor-pointer  top-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 27 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4814 13.8174L22.878 6.4195L20.9016 4.44336L13.5039 11.8402L6.10625 4.44336L4.12988 6.4195L11.5276 13.8185L4.12988 21.2154L6.10625 23.1915L13.5039 15.7947L20.9016 23.1915L22.878 21.2154L15.4814 13.8174Z"
                      fill="#878A8C"
                    />
                  </svg>
                </Dialog.Close>
              </Card>
            </motion.div>
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
