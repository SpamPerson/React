import { DefaultButton, Stack } from '@fluentui/react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initialization } from '../testStore/counterSlice';
import { TestRootState } from '../testStore/store';


const CounterTwo:React.FC = () => {
    const count = useSelector((state:TestRootState)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <Stack horizontal horizontalAlign='center'>
            <span style={{fontSize:'20px', textAlign:'center', margin:'0 15px'}}>값 : {count}</span>
            <DefaultButton
                text='초기화'
                onClick={()=>dispatch(initialization())}
            />
        </Stack>
    );
}

export default CounterTwo;