import React from 'react';
import PagesMenu from './PagesMenu'

const aboutPages = {
  "About Me": "/about",
  "What I Look Like": "/what-i-look-like"
}

export default function HeaderLinks() {

  return (
    <React.Fragment>
        <PagesMenu name={"About"} props={aboutPages}/>
    </React.Fragment>
  );
}