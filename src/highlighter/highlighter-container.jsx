import { Component } from 'react';
import classNames from 'classnames';

let subscribbers = [];
let current = null;

function set(value) {
  current = value;
  subscribbers.forEach(fn => fn(value));
}

function subscribe(fn) {
  subscribbers.push(fn);
}

function unsubscribe(fn) {
  subscribbers = subscribbers.filter(f => f !== fn);
}

class Highighter extends Component {
  state = {
    highlight: false,
  };

  constructor(props) {
    super(props);

    this.mutateClass = this.mutateClass.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    subscribe(this.onChangeHandler);
  }

  componentWillUnmount() {
    unsubscribe(this.onChangeHandler);
  }

  onChangeHandler(current) {
      this.setState({
        highlight: this.props.stack.includes(current),
      });
  }

  mutateClass(item, staticClassName, activeClassName) {
    return classNames(staticClassName, {
      [activeClassName]: item === current,
    });
  }

  render() {
    return this.props.children({
      mutateClass: this.mutateClass,
      set: set,
      cancel: () => set(null)
    });
  }
}

export default Highighter;

