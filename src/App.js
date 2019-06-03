import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';



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
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김다정',
  'birthday' : '990128',
  'gender' : '여자',
  'job' : '경리'
 }
]

function App(){
  
    return (
      <div>
        {
          customer.map(c => {
            return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.name}
            gender={c.gender}
            job={c.job}
            />
              );
          })
        }
      </div>
   );
  
  
}
// class App extends Component(){
//   reunder(){
//     return (
//       <Customer/>
//    );
//   }

// }

export default App;
