import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { noop, Button } from '../../../index';
//import { noop, Wizard, Icon, Button } from '../../../index';
import ModalPatternBody from './ModalPatternBody';

class ModalPattern extends React.Component {

  render() {
    return(
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header>
            <Modal.CloseButton onClick={this.props.onClose} />
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <ModalPatternBody loading={this.props.loading} loadingTitle={this.props.loadingTitle} loadingMessage={this.props.loadingMessage}>
            {this.props.children}
          </ModalPatternBody> 
          <Modal.Footer>
            <Button
              bsStyle="default"
              className="btn-cancel"
              onClick={this.props.onClose}
            >
              {this.props.cancelText}
            </Button>
            <Button bsStyle="primary" onClick={this.props.onSave}>
              {this.props.saveText}
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }

}

ModalPattern.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onHide: PropTypes.func,
  onExited: PropTypes.func,
  loadingTitle: PropTypes.string,
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  cancelText: PropTypes.string,
  saveText: PropTypes.string,
  children: PropTypes.node
};

ModalPattern.defaultProps = {
  show: false,
  title: '',
  onHide: noop,
  onExited: noop,
  loadingTitle: 'Please Wait',
  loadingMessage: 'Communicating with server...',
  loading: false,
  cancelText: 'Cancel',
  saveText: 'Save',
  children: null
};

export default ModalPattern;
