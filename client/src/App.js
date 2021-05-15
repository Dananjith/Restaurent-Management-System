import React, { Component } from 'react'
import {BrowserRouter,Route} from "react-router-dom";
import Home from './Components/Home';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import GetSpecific from './Components/GetSpecific';
import NavBar from './Components/NavBar/Sidebar';


import createOrder from './Components/Orders/createOrder';
import editOrder from './Components/Orders/editOrder';
import orderHome from './Components/Orders/orderHome';
import orderView from './Components/Orders/orderView';

import createItem from './Components/items/createItem';
import editItem from './Components/items/editItem';
import itemHome from './Components/items/itemHome';
import itemView from './Components/items/itemView';

import AddDriver from './Components/delivery/AddDriver';
import AddVehicle from './Components/delivery/AddVehicle';
import fetchDrivers from './Components/delivery/FetchAllDrivers';
import fetchVehicles from './Components/delivery/FetchAllVehicles';
import manageDelivery from './Components/delivery/ManageDelivery';
import updateDriver from './Components/delivery/UpdateDriver';
import updateVehicle from './Components/delivery/UpdateVehicle';
import updateOrderStatus from './Components/delivery/EditOrderStatus';






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBar/>
      <div className="container">
     
        <Route path = "/get_Emp" exact component ={Home}></Route>
        <Route path = "/emp_add" exact component ={AddEmployee}></Route>
        <Route path = "/emp_update/:id" exact component ={UpdateEmployee}></Route>
        <Route path = "/employee/:id" exact component ={GetSpecific}></Route>
       


        {/* Order Routes*/}
        <Route path ="/order/" exact component = {orderHome}></Route>
          <Route path = "/order/add" component = {createOrder}></Route>
          <Route path ="/order/edit/:id" component={editOrder}></Route>
          <Route path ="/order/orders/:id" component={orderView}></Route>

          {/* Item Routes*/}
          <Route path ="/item/" exact component = {itemHome}></Route>
          <Route path = "/item/add" component = {createItem}></Route>
          <Route path ="/item/edit/:id" component={editItem}></Route>
          <Route path ="/item/item/:id" component={itemView}></Route>
          
          {/* Delivery Routes*/}
          <Route path='/add_driver' component={AddDriver}></Route>
          <Route path='/add_vehicle' component={AddVehicle}></Route>
          <Route path='/display_driver' component={fetchDrivers}></Route>
          <Route path='/display_vehicle' component={fetchVehicles}></Route>
          <Route path='/update_driver/:id' component={updateDriver}></Route>
          <Route path='/update_vehicle/:id' component={updateVehicle}></Route>
          <Route path="/ManageDelivery" component={manageDelivery}></Route>
          <Route path='/EditOrderStatus' component={updateOrderStatus}></Route>
       
      </div>
      </BrowserRouter>
    )
  }
}
