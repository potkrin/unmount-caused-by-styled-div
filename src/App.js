import React, { useState, useEffect } from "react";
import "./App.css";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";

// タブの要素のコンポーネント
function TabChild({ childNumber }) {
  useEffect(() => {
    console.log(`TabChild ${childNumber} がマウントされました`);
    return () => {
      console.log(`TabChild ${childNumber} がアンマウントされました`);
    };
  }, []);

  return <div>TabChild {childNumber}</div>;
}

// タブ切り替え実装用
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index} // このタブが選択されていない場合は非表示 (アンマウントを防ぐ)
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // <div className="App"></div> の背景色を変更するために styled-components を使用
  const AppDiv = styled("div")(() => ({
    backgroundColor: "white",
  }));

  return (
    <>
      <AppDiv>
        {/* <div> のかわりに <AppDiv> を利用するとタブ切替時にDmaxMain がアンマウントされる謎挙動が発生する */}
        {/* <div className="App"> */}

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="tabs example"
        >
          <Tab label="タブ1" />
          <Tab label="タブ2" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TabChild childNumber={1} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabChild childNumber={2} />
        </TabPanel>
        {/* </div> */}
        {/* <div> のかわりにこちらの <AppDiv> を利用するとタブ切替時にDmaxMain がアンマウントされる謎挙動が発生する */}
      </AppDiv>
    </>
  );
}

export default App;
