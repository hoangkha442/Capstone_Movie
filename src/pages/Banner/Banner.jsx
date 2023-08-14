import React from "react";
import { Desktop, Mobile } from '../../responsive/Responsive'
import BannerDesktop from "./BannerDesktop";
import BannerMobile from "./BannerMobile";

export default function Banner() {
  return (
    <div>
      <Desktop>
        <BannerDesktop />
      </Desktop>
      <Mobile>
        <BannerMobile />
      </Mobile>
    </div>
  );
}
