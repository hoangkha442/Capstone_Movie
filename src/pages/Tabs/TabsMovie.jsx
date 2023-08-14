import React from "react";
import { Desktop, Mobile } from "../../responsive/Responsive";
import TabDesktop from "./TabDesktop";
import TabsMobile from "./TabsMobile";

export default function TabsMovie() {
  return (
    <div>
      <Desktop>
        <TabDesktop />
      </Desktop>
      <Mobile>
        <TabsMobile />
      </Mobile>
    </div>
  );
}
