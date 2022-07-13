import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { DefaultButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react/lib/Stack";
import { TestRootState } from "../../testStore/store";
import { initialization } from "../../testStore/counterSlice";

const CounterTwo: React.FC = () => {
   const count = useSelector((state: TestRootState) => state.counter.value);
   const dispatch = useDispatch();

   return (
      <Stack horizontal horizontalAlign="center">
         <span style={{ fontSize: "20px", textAlign: "center", margin: "0 15px" }}>값 : {count}</span>
         <DefaultButton text="초기화" onClick={() => dispatch(initialization())} />
      </Stack>
   );
};

export default CounterTwo;
