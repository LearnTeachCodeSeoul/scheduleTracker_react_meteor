import React from 'react';
import styled from 'styled-components';
import Member from '../Member/Member';
import {
  ScheduleContainer,
  SortableTableHead,
  Tablehead,
  Search,
  SearchIcon,
  SearchContainer
} from '../../styles/ScheduleBoardStyle';
import IsAdmin from '../helpers/IsAdmin';
import { Meteor } from 'meteor/meteor';

const sortEmployees = (employees, key, order) => {
  employees.sort((a, b) => {
    let id = Meteor.userId();
    if(id){
      if(id === a._id) return -1;
      else if(id === b._id) return 1;
    }
    if (key == 'name'){
      if (!a.info['firstName'] || b.info['firstName']) return 1;
      else return a.info['firstName'].localeCompare(b.info['firstName']) * order;
    }
    else if (key == 'section')
      return (a.info['section'] - b.info['section']) * order;
    else return (a.info['rank'] - b.info['rank']) * order;
  });
};

class ScheduleBoard extends React.Component {
  state = {
    sort: {
      key: 'name',
      order: 1
    },
    searchKey: ''
  };

  static getDerivedStateFromProps(nextProps, state) {
    let nextEmployees = nextProps.employees;
    if (state.employees != nextEmployees)
      sortEmployees(nextEmployees, state.sort.key, state.sort.order);
    return {
      employees: nextEmployees,
      days: nextProps.days,
      week: nextProps.week
    };
  }

  handleSort = event => {
    const classes = event.currentTarget.classList;
    const sortKeys = /section|name|rank/;
    let employees = this.props.employees;
    let { key, order } = { ...this.state.sort };
    if (classes.contains(key)) order = -order;
    else key = classes.value.match(sortKeys)[0];
    sortEmployees(employees, key, order);
    this.setState({ sort: { key, order } });
  };

  searchHandler = e => {
    e.preventDefault();
    const searchKey = e.target.value;

    this.setState({
      searchKey: searchKey
    });
  };

  render = () => {
    //console.log('this.props, ScheduleBoard', this.props);
    const { employees, days, rank, section } = this.props;

    const members = employees.map(employee => {
      if (
        employee.info.firstName.includes(this.state.searchKey) ||
        employee.info.lastName.includes(this.state.searchKey)
      ) {
        return (
          <Member
            Section={section}
            Rank={rank}
            {...this.props}
            key={employee._id}
            {...employee}
          />
        );
      } else {
        return null;
      }
    });
    const tableheads = days.map((day, index) => (
      <Tablehead key={index}>
        {day.charAt(0).toUpperCase() + day.substr(1)}
      </Tablehead>
    ));

    return (
      <React.Fragment>
        <SearchContainer>
          <Search
            placeholder=" Enter Name"
            onChange={e => this.searchHandler(e)}
            type="text"
          />
          <SearchIcon src={'/searchIcon.png'} />
        </SearchContainer>
        <ScheduleContainer admin={Roles.userIsInRole(Meteor.userId(), 'admin')}>
          <SortableTableHead onClick={this.handleSort} className="section">
            Section
          </SortableTableHead>
          <SortableTableHead onClick={this.handleSort} className="name">
            Name
          </SortableTableHead>
          <SortableTableHead onClick={this.handleSort} className="rank">
            Rank
          </SortableTableHead>
          {tableheads}
          <IsAdmin style={{backgroundColor : 'red'}}>
            <Tablehead>Delete</Tablehead>
          </IsAdmin>
          {members}
        </ScheduleContainer>
      </React.Fragment>
    );
  };
}

export default ScheduleBoard;
