import axios from "axios";
import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const baseURL = "https://jsonplaceholder.typicode.com/users?_limit=10";

export default function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseURL);
        setData(response.data);
  
      
    };
    getData();
  }, []);

  console.log(Data,'data!');
  return (
    <div className="App">
    <h1>Users</h1>
   
    <ul>
      {Data &&
        Data.map(({ id,email,name,phone,username,website,company,address}) => (
          <li key={id}>
           
  <Card style={{ width: '18rem' }}>
  <Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>{email}</ListGroup.Item>
    <ListGroup.Item>{name}</ListGroup.Item>
    <ListGroup.Item>{website}</ListGroup.Item>
    <ListGroup.Item>{phone}</ListGroup.Item>
    <ListGroup.Item>{username}</ListGroup.Item>

<ListGroup.Item>{company.name}</ListGroup.Item>
<ListGroup.Item>{company.bs}</ListGroup.Item>
<ListGroup.Item>{company.catchPhrase}</ListGroup.Item>


    <ListGroup.Item>{address.city}</ListGroup.Item>
    <ListGroup.Item>{address.street}</ListGroup.Item>
    <ListGroup.Item>{address.zipcode}</ListGroup.Item>
    <ListGroup.Item>{address.suite}</ListGroup.Item>
</ListGroup>
</Card.Body>
</Card>
          </li>
        ))}
    </ul>
  </div>
  );
}