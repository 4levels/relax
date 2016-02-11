import React from 'react';
import Component from 'components/component';

import styles from './index.less';
import Actions from './actions';
import Tabs from './tabs';

export default class TopBar extends Component {
  render () {
    return (
      <div className={styles.root}>
        <Actions />
        <Tabs />
      </div>
    );
  }
}
