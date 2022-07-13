import * as React from 'react';
import { Provider } from 'react-redux';

import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import {initializeIcons} from '@fluentui/font-icons-mdl2';

import { testStore } from './testStore/store';
import Counter from './components/test/Counter';
import { utilizeStore } from './utilizeStore/store';
import CounterTwo from './components/test/CounterTwo';
import Wrapper from './components/utilize/Wrapper';



initializeIcons(); // Fluent UI Icons

export const App: React.FC = () => {
  const [isTest, setIsTest] = React.useState<boolean>(false); // Test Component visibility
  const [isUtilize, setIsUtilize] = React.useState<boolean>(false); // Utilize Component visibility 

  /**
   * * When Test button Click
   */
  const onClickTest = () => {
    setIsTest(!isTest)
    if(isUtilize) {
      setIsUtilize(false)
    }
  }

  /**
   * * When Utilize button Click
   */
  const onClickUtilize = () => {
    setIsUtilize(!isUtilize)
    if(isTest) {
      setIsTest(false)
    }
  }

  return (
    <Stack>
      <Stack.Item>
        <DefaultButton
          text='Test'
          onClick={onClickTest}
        />
        <DefaultButton
          text='Utilize'
          onClick={onClickUtilize}
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
          <Wrapper/>
        </Provider>
      </Stack.Item>
    </Stack>
  );
};
