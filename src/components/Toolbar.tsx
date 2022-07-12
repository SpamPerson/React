import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react/lib/Stack";

import { UtilizeRootState } from "../utilizeStore/store";
import { isView } from "../utilizeStore/utilizeSlice";

const Toolbar: React.FC = () => {
   const utilize = useSelector((state: UtilizeRootState) => state.utilize); // state redux hook
   const dispatch = useDispatch(); // dispatch redux hook

   return (
      <Stack
         horizontal
         tokens={{ childrenGap: 10, padding: 10 }}
         horizontalAlign="center"
         style={{ width: "100%", backgroundColor: "GrayText", height: "44px" , marginTop:10 }}
      >
         {utilize.map((v) => (
            <Stack.Item key={v.id} style={{ fontSize: 20, fontWeight: "bold" }}>
               [ID:{v.id}, Name:{v.name}, isView: <PrimaryButton text={v.isView ? "Y" : "N"} style={{background:v.color}} onClick={() => dispatch(isView(v.id!))} />]
            </Stack.Item>
         ))}
      </Stack>
   );
};

export default Toolbar;
