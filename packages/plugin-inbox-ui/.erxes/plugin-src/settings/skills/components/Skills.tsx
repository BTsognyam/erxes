import Button from '@erxes/ui/src/components/Button';
import DataWithLoader from '@erxes/ui/src/components/DataWithLoader';
import HeaderDescription from '@erxes/ui/src/components/HeaderDescription';
import ModalTrigger from '@erxes/ui/src/components/ModalTrigger';
import Pagination from '@erxes/ui/src/components/pagination/Pagination';
import Table from '@erxes/ui/src/components/table';
import { Title } from '@erxes/ui/src/styles/main';
import { __ } from '@erxes/ui/src/utils';
import Wrapper from '@erxes/ui/src/layout/components/Wrapper';
import { NotWrappable } from '@erxes/ui-settings/src/styles';
import React from 'react';
import SkillTypes from '../containers/SkillTypes';
import { ISkillDocument, ISkillTypesDocument } from '@erxes/ui-settings/src/skills/types';
import SkillForm from './SkillForm';
import SkillRow from './SkillRow';

const breadcrumb = [
  { title: 'Settings', link: '/settings' },
  { title: __('Skill types') }
];

type Props = {
  history: any;
  queryParams: any;
  currentTypeName: string;
  totalCount: number;
  isLoading: boolean;
  remove: (id: string) => void;
  refetchQueries: any;
  skills: ISkillDocument[];
  skillTypes: ISkillTypesDocument[];
};

function Skills(props: Props) {
  const {
    queryParams,
    totalCount,
    isLoading,
    skills,
    skillTypes,
    currentTypeName,
    remove,
    refetchQueries
  } = props;

  const renderForm = formProps => {
    return (
      <SkillForm
        {...formProps}
        skillTypes={skillTypes}
        refetchQueries={refetchQueries}
      />
    );
  };

  function renderActionBar() {
    const trigger = (
      <Button id='skill-new-skill' btnStyle='success' icon='plus-circle'>
        {__('New skill')}
      </Button>
    );

    const title = <Title>{currentTypeName || __('All Skills')}</Title>;

    const actionBarRight = (
      <NotWrappable>
        <ModalTrigger
          title='New Skill'
          trigger={trigger}
          content={renderForm}
        />
      </NotWrappable>
    );

    return (
      <Wrapper.ActionBar
        left={title}
        right={actionBarRight}
        background='colorWhite'
      />
    );
  }

  function renderObjects() {
    return skills.map(skill => {
      return (
        <SkillRow
          key={skill._id}
          removeItem={remove}
          skill={skill}
          skillTypes={skillTypes}
          refetchQueries={refetchQueries}
        />
      );
    });
  }

  function renderData() {
    return (
      <Table whiteSpace='nowrap' hover={true} bordered={true}>
        <thead>
          <tr>
            <th>{__('Name')}</th>
            <th>{__('Type')}</th>
            <th>{__('Actions')}</th>
          </tr>
        </thead>
        <tbody>{renderObjects()}</tbody>
      </Table>
    );
  }

  function renderContent() {
    return (
      <DataWithLoader
        data={renderData()}
        loading={isLoading}
        count={totalCount}
        emptyText={__('Add individual skills into your Skill Types')}
        emptyImage='/images/actions/11.svg'
      />
    );
  }

  return (
    <Wrapper
      header={
        <Wrapper.Header title={__('Skill types')} breadcrumb={breadcrumb} />
      }
      mainHead={
        <HeaderDescription
          icon='/images/actions/32.svg'
          title={'All Skills'}
          description={`${__(
            'The skills feature works with the erxes Messenger and the Team Inbox'
          )}.${__(
            'By creating and assigning certain skills to your team members, they will only see conversations that they have the skills for'
          )}.${__(
            'As for the customers, they will see the option to choose from when interacting with you through the erxes Messenger'
          )}.${__('This way conversations are directed to the right person')}`}
        />
      }
      actionBar={renderActionBar()}
      leftSidebar={<SkillTypes queryParams={queryParams} />}
      content={renderContent()}
      footer={<Pagination count={totalCount} />}
    />
  );
}

export default Skills;
