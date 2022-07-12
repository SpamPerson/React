import {
   BaseButton,
   Button,
   Callout,
   DefaultButton,
   DirectionalHint,
   IContextualMenuProps,
   Stack,
   SwatchColorPicker,
   TextField,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UtilizeRootState } from "../utilizeStore/store";
import { PInfoStatus } from "../utilizeStore/type";
import { changeColor, changeName, isView } from "../utilizeStore/utilizeSlice";

const colorExample = [
   { id: "a", label: "red", color: "#a4262c" },
   { id: "b", label: "orange", color: "#ca5010" },
   { id: "c", label: "orangeYellow", color: "#986f0b" },
   { id: "d", label: "yellowGreen", color: "#8cbd18" },
   { id: "e", label: "green", color: "#0b6a0b" },
   { id: "f", label: "cyan", color: "#038387" },
   { id: "g", label: "cyanBlue", color: "#004e8c" },
   { id: "h", label: "magenta", color: "#881798" },
   { id: "i", label: "magentaPink", color: "#9b0062" },
   { id: "j", label: "black", color: "#000000" },
   { id: "k", label: "gray", color: "#7a7574" },
   { id: "l", label: "gray20", color: "#69797e" },
];

const Nav: React.FC = () => {
   const utilize = useSelector((state: UtilizeRootState) => state.utilize);
   const dispatch = useDispatch();
   const [isColorInput, setIsColorInput] = React.useState<boolean>(false);

   const onChangeColor = (event: React.FormEvent<HTMLElement>, colorId: string | undefined, color: string | undefined, id: string) => {
      let payload: PInfoStatus = {
         id: id,
         color: color!,
      };
      dispatch(changeColor(payload));
   };

   const onChangeName = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined, id?: string) => {
      let payload: PInfoStatus = {
         id: id,
         name: newValue,
      }
      dispatch(changeName(payload));
   }

   return (
      <Stack>
         <Stack.Item style={{fontSize:'30px', textAlign:'center'}}>
            <h1>Nav</h1>
         </Stack.Item>
         {utilize.map((v, i) => (
            <Stack tokens={{childrenGap:5}} key={v.id} style={{padding:'10px', marginTop:5, width:'100%', border:`1px solid ${v.color}`}}>
               <span style={{fontSize:20,textAlign:'center',fontWeight:'bold'}}>Name : {v.name}</span>
               <DefaultButton key={v.id} text={v.color} onClick={() => setIsColorInput(!isColorInput)} />
               <DefaultButton text={v.isView ? "Y" : "N"} onClick={() => dispatch(isView(v.id!))} />
               <SwatchColorPicker
                  colorCells={colorExample}
                  cellShape={"circle"}
                  columnCount={12}
                  cellBorderWidth={5}
                  onChange={(e, i, c) => onChangeColor(e, i, c, v.id!)}
               />
               <TextField placeholder="이름 변경" onChange={(e,n)=>onChangeName(e,n,v.id!)}/>
            </Stack>
         ))}
      </Stack>
   );
};

export default Nav;
