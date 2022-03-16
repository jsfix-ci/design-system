import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import { Tooltip as TooltipComponent } from '../components/Tooltip';
import {
  DropDown,
  Smiles,
  CannedResponse,
  Attachment,
} from '@livechat/design-system-icons/dist/material';

import { Icon } from '../components/Icon';
import { Placement } from '@floating-ui/dom';

import './Tooltip.stories.css';
import { Simple } from '../components/Tooltip/Simple';
import { Info as TooltipInfoComponent } from '../components/Tooltip/Info';
import { Interactive as TooltipInteractiveComponent } from '../components/Tooltip/Interactive';
import { UserGuide as TooltipUserGuideComponent } from '../components/Tooltip/UserGuide';

const tooltipPlacements = [
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'right',
  'right-end',
  'right-start',
  'top',
  'top-end',
  'top-start',
];

export const Tooltip = (args: any): React.ReactElement => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <span className={'lc-tooltip-icon-wrap'}>
      <TooltipSimpleExample {...args}></TooltipSimpleExample>
    </span>
    <span className={'lc-tooltip-icon-wrap'}>
      <Icon source={CannedResponse}></Icon>
    </span>
    <span className={'lc-tooltip-icon-wrap'}>
      <Icon source={Attachment}></Icon>
    </span>
  </div>
);

Tooltip.args = {
  placement: 'bottom',
  isVisible: true,
};

export const TooltipInfo = (args: any) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TooltipInfoExample {...args}></TooltipInfoExample>
  </div>
);

TooltipInfo.args = {
  placement: 'bottom',
  isVisible: true,
  triggerOnClick: false,
};

export const TooltipInteractive = (args: any) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TooltipInteractiveExample {...args}></TooltipInteractiveExample>
  </div>
);

TooltipInteractive.args = {
  placement: 'bottom',
  isVisible: true,
  triggerOnClick: false,
};

export const TooltipUserGuide = (args: any) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TooltipUserGuideExample {...args}></TooltipUserGuideExample>
  </div>
);

TooltipInteractive.args = {
  placement: 'bottom',
  isVisible: true,
  triggerOnClick: false,
};

export interface ITooltipExample {
  placement: Placement;
  isVisible: boolean;
  triggerOnClick: boolean;
}

const TooltipSimpleExample: React.FC<ITooltipExample> = ({
  placement,
  isVisible,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TooltipComponent
        placement={placement}
        isVisible={isVisible}
        triggerRenderer={() => <Icon source={Smiles}></Icon>}
      >
        <Simple text="Simple tooltip" />
      </TooltipComponent>
    </div>
  );
};

const TooltipInteractiveExample: React.FC<ITooltipExample> = ({
  placement,
  isVisible,
  triggerOnClick,
}) => {
  return (
    <div
      style={{
        width: '500px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TooltipComponent
        placement={placement}
        isVisible={isVisible}
        triggerOnClick={triggerOnClick}
        triggerRenderer={() => (
          <div>
            <Button
              icon={<Icon source={DropDown}></Icon>}
              iconPosition={'right'}
            >
              Open Tooltip
            </Button>
          </div>
        )}
      >
        <TooltipInteractiveComponent
          header="Header - concise and clear"
          image={{
            src: 'https://cdn.glitch.global/710a918e-7410-4b64-8652-f75b9a33bc74/placeholder.png?v=1647354230937',
            alt: 'image',
          }}
          text="Tooltip content is used to explain the details of elements or features."
          handleClickPrimary={() => console.log('primary click handler')}
          handleClickSecondary={() => console.log('secondary click handler')}
          closeWithX
        />
      </TooltipComponent>
    </div>
  );
};

const TooltipUserGuideExample: React.FC<ITooltipExample> = ({
  placement,
  isVisible,
  triggerOnClick,
}) => {
  return (
    <div
      style={{
        width: '500px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TooltipComponent
        placement={placement}
        isVisible={isVisible}
        triggerOnClick={triggerOnClick}
        triggerRenderer={() => (
          <div>
            <Button
              icon={<Icon source={DropDown}></Icon>}
              iconPosition={'right'}
            >
              Open Tooltip
            </Button>
          </div>
        )}
      >
        <TooltipUserGuideComponent
          header="Header - concise and clear"
          image={{
            src: 'https://cdn.glitch.global/710a918e-7410-4b64-8652-f75b9a33bc74/placeholder.png?v=1647354230937',
            alt: 'image',
          }}
          text="Tooltip content is used to explain the details of elements or features."
          handleClickPrimary={() => console.log('primary click handler')}
          currentStep={1}
          stepMax={3}
          closeWithX
        />
      </TooltipComponent>
    </div>
  );
};

const TooltipInfoExample: React.FC<ITooltipExample> = ({
  placement,
  isVisible,
  triggerOnClick,
}) => {
  return (
    <div
      style={{
        width: '500px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TooltipComponent
        placement={placement}
        isVisible={isVisible}
        triggerOnClick={triggerOnClick}
        triggerRenderer={() => (
          <div>
            <Button
              icon={<Icon source={DropDown}></Icon>}
              iconPosition={'right'}
            >
              Open Tooltip
            </Button>
          </div>
        )}
      >
        <TooltipInfoComponent
          header="Header - concise and clear"
          text="Tooltip content is used to explain the details of elements or features."
          closeWithX
        />
      </TooltipComponent>
    </div>
  );
};

export default {
  title: 'Components/Tooltip',
  component: TooltipSimpleExample,
  argTypes: {
    placement: {
      options: tooltipPlacements,
      control: {
        type: 'select',
        labels: 'Placement',
      },
    },
  },
} as ComponentMeta<typeof TooltipSimpleExample>;
