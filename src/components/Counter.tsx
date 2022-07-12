import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { DefaultButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';

import { decrement, decrementByAmount, increment, incrementByAmount } from '../testStore/counterSlice';
import { TestRootState } from '../testStore/store';

const Counter:React.FC = () => {
    const count = useSelector((state:TestRootState) => state.counter.value); // state redux hook
    const dispatch = useDispatch(); // dispatch redux hook

    return (
        <Stack tokens={{childrenGap:5, padding:10}} horizontal horizontalAlign='center'>
            <DefaultButton
                iconProps={{iconName:'Add'}}
                text={'10'}
                onClick={()=> dispatch(incrementByAmount(10))}
            />
            <DefaultButton 
                iconProps={{iconName:'Add'}}
                onClick={()=> dispatch(increment())}
            />
            <span style={{fontSize:'20px', textAlign:'center', margin:'0 15px'}}>{count}</span>
            <DefaultButton
                iconProps={{iconName:'Remove'}}
                onClick={()=>dispatch(decrement())}
            />
            <DefaultButton
                iconProps={{iconName:'Remove'}}
                text={'10'}
                onClick={()=>dispatch(decrementByAmount(10))}
            />
        </Stack>
    );
}

export default Counter;