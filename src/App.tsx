import * as React from 'react';
import { DefaultButton, Stack } from '@fluentui/react';
import {initializeIcons} from '@fluentui/font-icons-mdl2';
import { Provider } from 'react-redux';
import { testStore } from './testStore/store';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import Utilize from './components/Utilize';
import { utilizeStore } from './utilizeStore/store';

initializeIcons();

export const App: React.FC = () => {
  const [isTest, setIsTest] = React.useState<boolean>(false);
  const [isUtilize, setIsUtilize] = React.useState<boolean>(false);

  return (
    <Stack>
      <Stack.Item>
        <DefaultButton
          text='Test'
          onClick={()=>{setIsTest(!isTest)}}
        />
        <DefaultButton
          text='Utilize'
          onClick={()=>{setIsUtilize(!isUtilize)}}
        />
      </Stack.Item>
      <Stack.Item hidden={!isTest}>
        <Provider store={testStore}>
          <Counter />
          <CounterTwo />
        </Provider>
      </Stack.Item>
      <Stack.Item hidden={!isUtilize}>
        <Provider store={utilizeStore}>
          <Utilize />
        </Provider>
      </Stack.Item>
    </Stack>
  );
};
