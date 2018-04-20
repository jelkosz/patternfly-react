import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from '../../../../storybook/decorators/storyTemplates';

import ModalPattern from './ModalPattern';

import {
  MockModalPattern,
  MockModalPatternSource
} from './mockModalPattern';

const stories = storiesOf('Modal Pattern', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Modal Pattern',
    documentationLink:
      'http://www.patternfly.org/pattern-library/communication/about-modal/'
  })
);

stories.add(
  'ModalPattern',
  withInfo({
    source: false,
    propTables: [ModalPattern],
    propTablesExclude: [MockModalPattern],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockModalPatternSource}</pre>
      </div>
    )
  })(() => <MockModalPattern />)
);
