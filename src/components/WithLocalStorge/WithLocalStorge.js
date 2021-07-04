import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    
    save = (key, data) => {
        localStorage.setItem(key, data);
      
    }
    
    remove = (key) => {
        localStorage.removeItem(key);
      
    }
    
    render() {
      return (
        <WrappedComponent
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
    
  return HOC; 
}

export default withStorage;