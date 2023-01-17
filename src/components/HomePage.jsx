import { useEffect, useState, useCallback } from "react";

import {
  Card,
  Page,
  Tabs,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import trophyImgUrl from "../assets/home-trophy.png";

import { ProductsCard } from "./ProductsCard";
import { VideoCard } from "./VideoCard";
import { UploadReels } from "./UploadReels";


export function HomePage() {

  const tabs = [
    {
      id: "dashboard",
      content: "Reels",
      accessibilityLabel: "",
      panelID: "",
    },
    {
      id: "popupSettings",
      content: "Upload Reels",
      panelID: "settingsPage",
    },
    {
      id: "followersData",
      content: "Followers Data",
      panelID: "followers-table",
    },

    {
      id: "subscriptions",
      content: "Subscriptions",
      panelID: "pricingPlan",
    }
  ];

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  return (
    <Page fullWidth>
      <div>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
            <Card.Section>
              {selected == 0 && <ProductsCard />}
              {selected == 1 && <UploadReels />}
              {selected == 2 && <ProductsCard />}
              {selected == 3 && <ProductsCard />}
            </Card.Section>
          </Tabs>
        </Card>
      </div>
    </Page>
  );
}
