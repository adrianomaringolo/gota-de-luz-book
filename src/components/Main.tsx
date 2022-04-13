import React from "react";
import { ContactArea } from "./main-areas/ContactArea";
import { InitArea } from "./main-areas/InitArea";
import { DestinationArea } from "./main-areas/DestinationArea";
import { AlertModal } from "./main-areas/AlertModal";
import { GalleryArea } from "./main-areas/GalleryArea";
import { TestimonyArea } from "./main-areas/TestimonyArea";

const Main = () => (
  <>
    <AlertModal />
    <InitArea />
    <TestimonyArea />
    <DestinationArea />
    <GalleryArea />
    <ContactArea />
  </>
);

export default Main;
