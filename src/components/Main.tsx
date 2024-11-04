import React from 'react'
import { ContactArea } from './main-areas/ContactArea'
import { DestinationArea } from './main-areas/DestinationArea'
import { InitArea } from './main-areas/InitArea'
import { TestimonyArea } from './main-areas/TestimonyArea'
import { VisitArea } from './main-areas/VisitArea'

const Main = () => (
  <>
    {/* <AlertModal /> */}
    <InitArea />
    <VisitArea />
    <TestimonyArea />
    <DestinationArea />
    {/* <GalleryArea /> */}
    <ContactArea />
  </>
)

export default Main
