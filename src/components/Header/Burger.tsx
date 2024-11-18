import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icon } from "@iconify/react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Burger(props: Props) {
  return (
    <Drawer>
      <DrawerTrigger className={props.className}>
        <Icon icon="lucide:menu" className="size-6" />
      </DrawerTrigger>

      <DrawerContent>
        {/* hidden is workaround of DialogContent` requires a `DialogTitle` */}
        <DrawerHeader className="hidden">
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Mobile nav bar</DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>{props.children}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
