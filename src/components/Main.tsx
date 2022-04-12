import React from "react";
import { ContactArea } from "./main-areas/ContactArea";
import { ProductsArea } from "./main-areas/ProductsArea";
import { InitArea } from "./main-areas/InitArea";
import { DestinationArea } from "./main-areas/DestinationArea";
import { AlertModal } from "./main-areas/AlertModal";
import { GalleryArea } from "./main-areas/GalleryArea";

const Main = () => (
  <>
    <AlertModal />
    <InitArea />
    <ProductsArea />
    <DestinationArea />
    <GalleryArea />
    <ContactArea />
  </>
);

export default Main;
