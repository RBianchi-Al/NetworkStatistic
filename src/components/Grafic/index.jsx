import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';

import { frequencias } from '../Table';

class Grafic extends React.Component {
  constructor(props) {
    super(props);

    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }

  render() {
    return (
      <PieChart
        id="pie"
        dataSource={frequencias}
        palette="Bright"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series argumentField="name" valueField="frequencia">
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default Grafic;

// import React, {useState} from 'react';

// import PieChart, {
//   Series,
//   Label,
//   Connector,
//   Size,
//   Export
// } from 'devextreme-react/pie-chart';
// import { blue } from '@material-ui/core/colors';

// export default function Grafic (props){
//   const [pointClickHandler, setPointClickHandler] = useState('')
//   const [legendClickHandler, setLegengClickHandler] = useState('')
//   const {frequencias} = props;

//   function toggleVisibility(item) {
//     item.isVisible() ? item.hide() : item.show();
//     toggleVisibility(item);
//   }

//   return (

//       <PieChart
//         id="pie"
//         dataSource={frequencias}
//         palette="Bright"
//         title="Area of Countries"

//         onPointClick={pointClickHandler}
//         onLegendClick={legendClickHandler}
//       >
//         <Series
//           argumentField="name"
//           valueField="frequencia"

//         >
//           <Label visible={true}>
//             <Connector visible={true} width={1} />
//           </Label>
//         </Series>

//         <Size width={500} />
//         <Export enabled={true} />
//       </PieChart>
//     );

//   }

// class Grafic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: types[0]
//     };

//     this.handleChange = this.handleChange.bind(this);

//   }
//   handleChange(e) {
//     this.setState({
//       type: e.value
//     });
//   }
//   render() {

//     );
//   }
// }

// export default Grafic;

// import React from 'react';
// import Chart from 'react-google-charts';

// function Grafic(props) {
//   const { frequencias } = props;

//   return (
//     <Chart
//       width={'500px'}
//       height={'300px'}
//       chartType="PieChart"
//       loader={<div>Carregando...</div>}
//       data={frequencias}
//       options={{
//         title: 'My Daily Activities',
//       }}
//       rootProps={{ 'data-testid': '1' }}
//     />
//   );
// }

// export default Grafic;

// // const rows = [

// //   ['Task', 'Hours per Day'],
// //   createData('Work', 11),
// //   ['Eat', 2],
// //   ['Commute', 2],
// //   ['Watch TV', 2],
// //   ['Sleep', 7],

// // ]
