// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DisplayDailyTask from "./components/DisplayDailyTask/DisplayDailyTask";
import AddDailyTask from "./components/AddDailyTask/AddDailyTask"
import DisplayWeeklyTask from "./components/DisplayWeekTask/DisplayWeeklyTask";
import AddWeeklyTask from "./components/AddWeeklyTask/AddWeeklyTask";
import DisplayMonthlyTask from "./components/DisplayMonthlyTask/DisplayMonthlyTask";
import AddMonthlyTask from "./components/AddMonthlyTask/AddMonthlyTask";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [user, token] = useAuth();
  const [dailyTasks, setDailyTasks] = useState([]);
  const [weeklyTasks, setWeeklyTasks] = useState([]);
  const [monthlyTask, setMonthlyTasks] = useState([]);

  useEffect(() =>{
    fetchDailyTasks();
    fetchWeeklyTasks();
    fetchMonthlyTasks();
  }, []);
  
  
  
  
  async function fetchDailyTasks(){
    const response = await axios.get("http://127.0.0.1:8000/api/planner/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDailyTasks(response.data); 
    };
    

    async function postDailyTasks(dailyTasks){
      let tempDailyTask = await axios.post("http://127.0.0.1:8000/api/planner/", dailyTasks, {
            headers: {
              Authorization: "Bearer " + token,
            },
          },);
          fetchDailyTasks(tempDailyTask.data); 
      };

      async function updateDailyTasks(id){
        let editDailyTask = await axios.put(`http://127.0.0.1:8000/api/planner/${id}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            },);
            fetchDailyTasks(editDailyTask.data); 
        };
        async function fetchWeeklyTasks(){
          const response = await axios.get("http://127.0.0.1:8000/api/planner/week_of_year/", {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              setWeeklyTasks(response.data); 
          };

          async function postweeklyTasks(weeklyTasks){
            let tempWeeklyTask = await axios.post("http://127.0.0.1:8000/api/planner/", weeklyTasks, {
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                },);
                fetchWeeklyTasks(tempWeeklyTask.data); 
            };
            async function fetchMonthlyTasks(){
              const response = await axios.get("http://127.0.0.1:8000/api/planner/month/", {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  });
                  setMonthlyTasks(response.data); 
              };
              async function postMonthlyTasks(monthlyTasks){
                let tempMonthlyTask = await axios.post("http://127.0.0.1:8000/api/planner/", monthlyTasks, {
                      headers: {
                        Authorization: "Bearer " + token,
                      },
                    },);
                    fetchMonthlyTasks(tempMonthlyTask.data); 
                };
    


  return (
    <div>
      <Navbar />
      <Routes >
        <Route
          path="/"
          element={ 
            <PrivateRoute >
              <div style={{'background-color': 'lightsalmon'}}>
                <div className="border-box">
                  <DisplayDailyTask data={dailyTasks} />
                  <AddDailyTask AddDailyTaskProperty={postDailyTasks} />
                </div>
                <div className="border-box">
                  <DisplayWeeklyTask data={weeklyTasks}/>
                  <AddWeeklyTask AddWeeklyTaskProperty={postweeklyTasks}/>
                </div>
                <div className="border-box">
                  <DisplayMonthlyTask data={monthlyTask} />
                  <AddMonthlyTask AddMonthlyTaskProperty={postMonthlyTasks}/>
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
