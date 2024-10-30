import React from 'react';

import { AppHeader } from '../components/AppHeader/AppHeader';
import { CheckContent } from '../components/CheckContent/CheckContent';
import { Counter } from '../components/Counter/Counter';
import { DynamicList } from '../components/DynamicList/DynamicList';
import { SimpleForm } from '../components/SimpleForm/SimpleForm';
import { TaskList } from '../components/TaskList/TaskList';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
    <DynamicList n={4} />
    <DynamicList n={8} />
    <TaskList
      tasks={[
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false },
        { id: 4, text: 'Task 4', completed: true },
      ]}
    />
    <SimpleForm />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
