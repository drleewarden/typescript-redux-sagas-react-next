import React from 'react';
import { Task , Item} from '../types';
import { connect } from 'react-redux';
import { AppState } from '../reducer';
import PhoneNumber from './form/number';
import { fetchTasks, addItem } from '../actions';

interface OwnProps {}

interface StateProps {
  tasks: Task[];
  items: Item[];

}

interface DispatchProps {
  fetchTasks: () => void;
  addItem: () => void;
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
        tasks: props.tasks
    }

}
  onClick = () => {
    const { fetchTasks , addItem } = this.props;
    console.log(this)
    fetchTasks();
    addItem();
  };

  render() {
    const { tasks, items} = this.props;
    console.log(items)
    return (
      <div>
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
    items: state.items
  }),
  dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    addItem:()=> dispatch(addItem())

  })
)(TasksList);
