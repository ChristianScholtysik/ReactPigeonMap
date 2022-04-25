import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from "./MyMap";
import logo from './img/BIE_Logo_gruen.png';
import logo3 from './img/stockholm-sweden-logo-black-and-white.png';
import logo4 from './img/iceland_logo.png';

function MyTabs () {
    return (
      <div>
    
        <Tabs>
          <TabList>
            <Tab id="Home">
            Zuhause   </Tab>
            <Tab id="Holiday">Schöner Urlaub </Tab>
            <Tab >Lieblingsstadt  </Tab>
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
               <img src={logo3} id="stockholm_logo" width="30" height="30" alt="Stockholm Logo"/>  
               Stockholm 
                </h2>
          <MyMap lat={59.3275308} lng={18.1153209} /> 
          </TabPanel>
        </Tabs>
      </div>
    );
  }
 
  export default MyTabs
