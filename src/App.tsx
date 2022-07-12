import * as React from 'react';
import { DefaultButton, Stack } from '@fluentui/react';
import {initializeIcons} from '@fluentui/font-icons-mdl2';
import { Provider } from 'react-redux';
import { testStore } from './testStore/store';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import { utilizeStore } from './utilizeStore/store';
import Wrapper from './components/Wrapper';

initializeIcons();

export const App: React.FC = () => {
  const [isTest, setIsTest] = React.useState<boolean>(false);
  const [isUtilize, setIsUtilize] = React.useState<boolean>(false);

  const onClickTest = () => {
    setIsTest(!isTest)
    if(isUtilize) {
      setIsUtilize(false)
    }
  }

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
