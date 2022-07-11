import { Stack } from "@fluentui/react";
import * as React from "react";
import { useSelector } from "react-redux";
import { UtilizeRootState } from "../utilizeStore/store";

const Utilize: React.FC = () => {
   const utilize = useSelector((state: UtilizeRootState) => state.utilize.value);

   return (
      <Stack>
         {utilize.map((v) => (
            <span key={v.id}>
                {v.name}
            </span>
         ))}
      </Stack>
   );
};

export default Utilize;
