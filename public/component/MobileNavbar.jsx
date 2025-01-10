import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { HelpingHand } from "lucide-react";

const MobileNavbar = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent style={{ position: "absolute", top: "0" }}>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            yfyfy
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              {/* <Button variant="outline">Cancel</Button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
