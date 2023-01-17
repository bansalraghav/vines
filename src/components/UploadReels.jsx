import { useEffect, useState, useCallback } from "react";
import { VideoCard } from "./VideoCard";
import {
  Card,
  Tabs,
  Spinner,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  Button,
} from "@shopify/polaris";

import axios from "axios";

export function UploadReels() {


  // useEffect(() => {
  //   const popupSettings =
  //     "/loadAnnouncementSettings?shop=williamswomancare.myshopify.com";
  //   axios
  //     .post(popupSettings, {})
  //     .then(function (response) {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const [reelsData, setReelsData] = useState();
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    const reelsData =
      "/loadReelsData?shop=closerdevstore.myshopify.com";
    axios
      .post(reelsData, {})
      .then(function (response) {
        const data = response.data;
        setReelsData(data);
        console.log(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // console.log("testing")
  // console.log(reelsData);

  if (isLoading) {
    return (
      <div style={{ height: "50px", width: "50px", margin: "0 auto" }}>
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  } else {
    return (
      <>
        <div class="outer" style={{ flexDirection: "column", display: "flex" }}>
          <div class="row" style={{ display: "flex" }}>
            <div style={{ width: "270px", height: "100px", marginLeft: "20px" }}>
              <Card>
                <Card.Section title="Upload Reels">
                  <Button>Test</Button>
                </Card.Section>
              </Card>
            </div>
          </div>
          <div class="row" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "270px", height: "350px", padding: "10px", marginBottom: "80px" }}><VideoCard reelData={reelsData["reel0"].link} no="1" /></div>
            <div style={{ width: "270px", height: "350px", padding: "10px", marginBottom: "80px" }}><VideoCard reelData={reelsData["reel1"].link} no="2" /></div>
            <div style={{ width: "270px", height: "350px", padding: "10px", marginBottom: "80px" }}><VideoCard reelData={reelsData["reel2"].link} no="3" /></div>
            <div style={{ width: "270px", height: "350px", padding: "10px", marginBottom: "80px" }}><VideoCard reelData={reelsData["reel3"].link} no="4" /></div>
            <div style={{ width: "270px", height: "350px", padding: "10px", marginBottom: "80px" }}><VideoCard reelData={reelsData["reel4"].link} no="5" /></div>
          </div>
        </div>
      </>
    );
  }
}
