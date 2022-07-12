import * as React from "react";

import { Stack } from "@fluentui/react/lib/Stack";

import Toolbar from "./Toolbar";
import Nav from "./Nav";
import Viewer from "./Viewer";


const Wrapper: React.FC = () => {
   return (
      <Stack>
         <Stack.Item>
            <Toolbar />
         </Stack.Item>
         <Stack horizontal tokens={{childrenGap:10}}>
            <Stack.Item style={{padding:10}}>
               <Nav />
            </Stack.Item>
            <Stack.Item style={{padding:10,width:'100%'}}>
               <Viewer />
            </Stack.Item>
         </Stack>
      </Stack>
   );
};

export default Wrapper;
