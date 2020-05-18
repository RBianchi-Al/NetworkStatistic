import React from 'react';

import Chart, {
  ArgumentAxis,
  Series,
  CommonSeriesSettings,
  Label,
  Legend,
  Border,
  Export
} from 'devextreme-react/chart';

import { frequencias } from '../Table';

class App extends React.Component {
  render() {
    return (
      <Chart
        title="Australian Medal Count"
        dataSource={frequencias}
        id="chart">
        <Series valueField="frequencia" argumentField="name" name="frequencia" color="#cd7f32" />

        <CommonSeriesSettings
          argumentField="name"
          type="steparea">
          <Border visible={false} />
        </CommonSeriesSettings>
        <ArgumentAxis valueMarginsEnabled={false}>
          <Label format="decimal" />
        </ArgumentAxis>
        <Export enabled={true} />
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center" />
      </Chart>
    );
  }
}

export default App;

















// import React from 'react';

// import Chart, {
//   ArgumentAxis,
//   Legend,
//   Series,
//   ValueAxis,
//   Label,
//   Export,
//   Tick
// } from 'devextreme-react/chart';
// import { frequencias } from '../Table';

// class App extends React.Component {
//   customizeText(e) {
//     return `Frequência ${e.value}`;
//   }
//   render() {
//     return (
//       <Chart
//         title="Daily Sales"
//         dataSource={frequencias}
//         rotated={true}
//         id="chart"
//       >

//         <ArgumentAxis>
//           <Label customizeText={this.customizeText} />
//         </ArgumentAxis>

//         <ValueAxis>
//           <Tick visible={false} />
//           <Label visible={false} />
//         </ValueAxis>

//         <Series
//           valueField="name"
//           argumentField="frequencia"
//           type="bar"
//           color="#79cac4"
//         >
//           <Label visible={true} backgroundColor="#c18e92" />
//         </Series>

//         <Legend visible={false} />

//         <Export enabled={true} />

//       </Chart>
//     );
//   }
// }

// export default App;
