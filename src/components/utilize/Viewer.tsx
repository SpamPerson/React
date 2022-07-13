import * as React from "react";
import { useSelector } from "react-redux";

import { Stack } from "@fluentui/react/lib/Stack";
import { UtilizeRootState } from "../../utilizeStore/store";

const Viewer: React.FC = () => {
   const utilize = useSelector((state: UtilizeRootState) => state.utilize);

   return (
      <Stack>
         <Stack.Item style={{ textAlign: "center", fontSize: "30px" }}>
            <h1>DATA</h1>
         </Stack.Item>
         {utilize.map((v) => (
            <Stack
               key={v.id}
               style={{
                  padding: 10,
                  marginTop: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: v.color,
                  border: v.isView ? `2px solid ${v.color}` : "none",
               }}
            >
               {v.isView && (
                  <span>
                     ID : {v.id} <br />
                     Name : {v.name} <br />
                     Color : {v.color} <br />
                     IsView : {v.isView ? "Y" : "N"} <br />
                     Kinds : {v.kinds}
                  </span>
               )}
            </Stack>
         ))}
      </Stack>
   );
};

export default Viewer;
