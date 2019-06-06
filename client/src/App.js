import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root:{
    width:'100%',
    marginTop : theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  }
})

const customer = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '도도',
  'birthday' : '920128',
  'gender' : '남자',
  'job' : '직장인'
 },
 {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '960128',
  'gender' : '남자',
  'job' : '프로그래머'
 },
 {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/4',
  'name' : '김다정',
  'birthday' : '990128',
  'gender' : '여자',
  'job' : '경리'
 }
]

function App(){
  //const {classes} = this.props;
    return (
 
        // <Paper className={classes.root} >
        // <Table className={classes.table}>
        <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customer.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name}   birthday={c.birthday} gender={c.gender} job={c.job} />)})}
          </TableBody>
        </Table>
        </Paper>
       
    
   );
  
  
}
// class App extends Component(){
//   reunder(){
//     return (
//       <Customer/>
//    );
//   }

// }

export default withStyles(styles)(App);
