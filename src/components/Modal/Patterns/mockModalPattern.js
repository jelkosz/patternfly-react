import React from 'react';
import { Button } from '../../Button';
import ModalPattern from './ModalPattern';

export class MockModalPattern extends React.Component {

  constructor() {
    super();
    this.state = { showModal: false, loading: true };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
  }

  close() {
    this.setState({ showModal: false, loading: false });
  }

  save() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ showModal: false });
    }, 1000);
  }

  open() {
    this.setState({ showModal: true, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Modal
        </Button>

        <ModalPattern 
          show={this.state.showModal}
          loading={this.state.loading}
          onClose={this.close}
          onSave={this.save}
          title="Example Modal Pattern">
            <div><h1>hello world</h1></div>
        </ModalPattern>
      </div>
    );
  }

}

export const MockModalPatternSource = `
hello world sourcesp
`;
