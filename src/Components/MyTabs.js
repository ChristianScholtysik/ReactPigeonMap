import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from "./MyMap";
import logo from './img/BIE_Logo_gruen.png';
import logo2 from './img/BIE_Logo_blau.png';
import logo3 from './img/stockholm-sweden-logo-black-and-white.png';
import logo4 from './img/iceland_logo.png';

function MyTabs () {
    return (
      <div>
    
        <Tabs>
          <TabList>
            <Tab id="Home">
            Zuhause <img src={logo2} id="bielefeld_logo" width="20" height="20" alt="Bielefeld Logo"/>  </Tab>
            <Tab id="Holiday">Schöner Urlaub <img src={logo4} id="iceland_logo" width="35" height="20" alt="Iceland Logo"/> </Tab>
            <Tab className="Fav-Town react-tabs__tab react-tabs__tab--selected">Lieblingsstadt <img src={logo3} id="stockhol_logo" width="20" height="20" alt="Stockholm Logo"/> </Tab>
          </TabList>

          <TabPanel>
            <h2 >
            <img src={logo} id="bielefeld_logo" width="30" height="30" alt="Bielefeld Logo"/>
                Bielefeld
            </h2>
          <MyMap lat={52.052567} lng={8.528521}/>
          </TabPanel>
          <TabPanel>
            <h2>
            <img src={logo4} id="iceland_logo" width="50" height="40" alt="Iceland Logo"/>
              Island 
            </h2>
          <MyMap lat={64.963051} lng={-19.020835} /> 
          </TabPanel>
          <TabPanel>
            <h2>
               <img src={logo3} id="stockhol_logo" width="30" height="30" alt="Stockholm Logo"/>  
               Stockholm 
                </h2>
          <MyMap lat={59.3275308} lng={18.1153209} /> 
          </TabPanel>
        </Tabs>
      </div>
    );
  }
 
  export default MyTabs
