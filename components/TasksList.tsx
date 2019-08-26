import React from 'react';
import { Task , Item, Input} from '../types';
import { connect } from 'react-redux';
import { AppState } from '../reducer';
import PhoneNumber from './form/number';
import { fetchTasks, addItem, getInputValue } from '../actions';

interface OwnProps {
}

interface StateProps {
  tasks: Task[];
  items: Item[];
  input: string;


}

interface DispatchProps {
  fetchTasks: () => void;
  addItem: () => void;
  getInputValue: () => void;

}

interface AllProps
  extends StateProps,
    DispatchProps,
    OwnProps {}

export class TasksList extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
        items:props.items,
        tasks: props.tasks,
        input: props.input
    }

}
  onClick = () => {
    const { fetchTasks , addItem, getInputValue } = this.props;
    console.log(this)
    fetchTasks();
    addItem();
    getInputValue();
  };

  render() {
    const { tasks, items, input} = this.props;
    console.log(input)
    return (
      <div>
        <input id="inputText" value={input}  type="text" />
        TEST 6:
           <PhoneNumber mobile={'0455775052'} phone={'0243681899'}/>
        <ul> item: {
          items.map( (item, i )=>{
           return  <li key={i}>{item.name}</li>
          })
        } task:
          {tasks.map((task, i) => {
            return <li key={i}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onClick}>Fetch Tasks</button>
      </div>
    );
  }
}

export const ConnectedTasksList = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  AppState
>(state => ({
    tasks: state.tasks,
    items: state.items,
    input: state.input
  }),
  dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    addItem:()=> dispatch(addItem()),
    getInput:()=> dispatch(getInputValue())

  })
)(TasksList);
