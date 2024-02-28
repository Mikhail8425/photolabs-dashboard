import React, { Component } from "react";
import Loading from "./Loading";
import Panel from "./Panel";
import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      focused: null,
    };
    this.selectPanel = this.selectPanel.bind(this);
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

    if (this.state.loading) {
      return <Loading />;
    }

    selectPanel = (id) => {
      this.setState((previousState) => ({
        focused: previousState.focused !== null ? null : id,
      }));
    };

    const panels = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
    .map(panel => (
    <Panel
      key={panel.id}
      label={panel.label}
      value={panel.value}
      onSelect={event => this.selectPanel(panel.id)}
    />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
