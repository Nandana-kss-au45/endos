import React from "react";
import "./Page10.css";
 //import logo from "../../Assets/Images/logo3.png";
import { NavLink } from "react-router-dom";

function Page10() {
  return (
    <div>
      <div className="mainsection">
   
        {/* <div className="section1">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>
          <div>
            <ul className="navbar-nav justify-content-end flex-grow-1 ">
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Home</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Orders</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">All Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn px-4 ">Payments</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className=" s1-btn btn  px-4 ">Logout</button>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="section2 ">
          <nav
            class="s2-navabar navbar navbar-expand-lg "
            style={{ backgroundColor: "white" }}
          >
            <div class="container-fluid px-5">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <NavLink className="fw-bold navbar-brand" to="/">
                All Products
              </NavLink>
              <button
                class="btn btn-outline-success btnround"
                type="submit"
              ></button>
            </div>
            <hr />
          </nav>
          <div className="d-flex justify-content-between  align-items-center px-2 py-1">
            <div className="p-5">
              <input
                class="form-control px-5"
                type="text"
                value="Search for products/tag..."
                aria-label="readonly input example"
                readonly
              />
            </div>
            <div>
              <div className="d-flex px-6 ">
              <label class="container">
  <input type="checkbox" checked="checked"/>show low/out of stock products
  {/* <span class="checkmark"></span> */}
</label>
                {/* <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Order status </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> 
                <button type="button" class="btn btn-sm btn-link me-5"> */}
                {/* <div className="p2-selection mx-2 ">
                 <button className="btn bg-info"> </button>
                <div>  */}
             

  

                {/* </button> */}
                <div className="p2-selection mx-2 ">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>All nurseries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                
                {/* <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Lifetime</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}
                <button
                  type="button"
                  className="btn-page4 btn btn-success btn-md"
                >
                  + Add new nursery
                </button>
              </div>
            </div>
          </div>
          {/* <div className="section2-btn d-flex  px-5 ">
            <button className="s2-btn">All</button>
            <button className="s2-btn">Pending</button>
            <button className="s2-btn">Shipped</button>
            <button className="s2-btn">Delivered</button>
            <button className="s2-btn">Cancelled</button>
          </div> */}
          <div className="s2-table px-5 m-3 ">
            <div className="s2-table py-4">
              <table class="table table-borderless table-sm ">
                <thead className="s2-table-nava">
                  <tr>
                    <th scope="col">order id</th>
                    <th scope="col">Product Name</th>
                    {/* <th scope="col">Customer</th>
                    <th scope="col">Items</th> */}
                    <th scope="col">Products</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Nursery Name</th>
                  </tr>
                </thead>
                
                <tbody class="table-group-divider  my-5">
                  <tr>
                  <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
                    <td>Flowers</td>
                    {/* <td>CustomerName </td> */}
                    <td> 30 </td>
                    {/* <td>COD</td> */}
                    <td>
                      <div>
                        {/* <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending */}
                      </div>
                    </td>
                    <td>Rs 320 
                    </td>
                    <td>Nursery Name</td>
                    {/* <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td> */}
                    
                  </tr>
                  <tr>
                   <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
                    
                    <td>Plants</td>
                    {/* <td>CustomerName </td> */}
                    <td> 48 </td>
                    {/* <td>COD</td> */}
                    <td>
                      <div>
                          {/* <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "} 
                        Pending  */}
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>Nursery Name</td>
                    {/* <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td> */}
                  </tr>
                  <tr>
                  <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
                    <td>For Decor</td>
                    {/* <td>CustomerName </td> */}
                    <td> 22 </td>
                    {/* <td>COD</td> */}
                    <td>
                      <div>
                        {/* <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending */}
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>Nursery Name</td>
                    
                    {/* <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td> */}
                                        
                  
                  </tr>
                </tbody>
              </table>
              <footer>

            
    <div>
      
      <div className="container mx-auto mt-3">
        
        <div className="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-2">
          <div className="w-full px-2 py-3 bg-white rounded-lg shadow">
            
            <div className="text-sm font-medium text-gray-500 truncate">
            {/* <img src="src/assets/images/icon.png" /> */}
              
            </div>
            <div className="flex border-b-2 py-3">
              <div className="bg-gray-500 border border-solid p-2 rounded "></div>
              <div className="mx-3 mt-9">
                <h5 className="text-sm text-black font-semibold">Product Name</h5>
                <h6>per piece</h6>
                <h5 className="text-sm text-green-600 font-semibold">Rs 400</h5>
              </div>
              <span class="text-xs font-semibold inline-block py-1 px-2 rounded text-orange-600 bg-pink-200 uppercase last:mr-0 mr-1 h-6 mt-12 mx-10">
                COD
              </span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-200">In Stock:12</span>
              <button className="text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" >
<label class="switch"><span class="slider round"></span>
</label>
                <button>Details</button>
              </button>
            </div>
          </div>

          <div className="container mx-auto mt-3">
        
        <div className="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-2">
          <div className="w-full px-2 py-3 bg-white rounded-lg shadow">
            
            <div className="text-sm font-medium text-gray-500 truncate">
            {/* <img src="src/assets/images/icon.png" /> */}
              
            </div>
            <div className="flex border-b-2 py-3">
              <div className="bg-gray-500 border border-solid p-2 rounded "></div>
              <div className="mx-3 mt-9">
                <h5 className="text-sm text-black font-semibold">Product Name</h5>
                <h6>per piece</h6>
                <h5 className="text-sm text-green-600 font-semibold">Rs 400</h5>
              </div>
              <span class="text-xs font-semibold inline-block py-1 px-2 rounded text-orange-600 bg-pink-200 uppercase last:mr-0 mr-1 h-6 mt-12 mx-10">
                COD
              </span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-200">In Stock:12</span>

              
              <button className="text-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-white active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" >
<label class="switch"><span class="slider round"></span>
</label>
               <button>Details</button> 
              </button>
            </div>
          </div>
          </div>
            
          </div> 
          
          
        </div>
      </div>
    </div>
    
                
                
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Page10;
