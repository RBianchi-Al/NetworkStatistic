import React from 'react';

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series,
} from 'devextreme-react/chart';

import { frequencias } from '../Table';

class Grafic3 extends React.Component {
  render() {
    return (
      <Chart
        title="World Population by Decade"
        dataSource={frequencias}
        id="chart"
      >
        <ArgumentAxis tickInterval={10}>
          <Label format="decimal" />
        </ArgumentAxis>

        <Series argumentField="name" valueField="frequencia"></Series>

        <Legend visible={false} />
      </Chart>
    );
  }
}

export default Grafic3;
