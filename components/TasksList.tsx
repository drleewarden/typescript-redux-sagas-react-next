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
  onClick = () => {
    const { fetchTasks , addItem } = this.props;
    fetchTasks();
    addItem();
  };

  render() {
    const { tasks, items} = this.props;
    return (
      <div>
        TEST:
           <PhoneNumber mobile={'0455775052'} phone={'0243681899'}/>
        <ul>{
          items.map( item =>{
              <li>{item.name}</li>
          })
        }
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
