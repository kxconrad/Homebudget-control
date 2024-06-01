import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Details from "./details/Details";

export default function Navigation({ routing }) {
  return <Router>
    <nav className="text-slate-600
     bg-slate-200 w-full flex
      justify-center items-center mb-5
       border-b border-slate-400">
      <ul className="flex gap-10 my-5 justify-center">
        {
          routing.map(value =>
            <li key={value.id}
                className="hover:text-black">
              <Link to={value.path}>{value.title}</Link>
            </li>)
        }
      </ul>
      <div className="ml-5">
        <button type="button"
                class="bg-sky-500 hover:bg-sky-400 rounded px-2 py-2 whitespace-nowrap text-white min-w-[200px]">Dodaj
          koszt
        </button>
      </div>
    </nav>
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard />
        }
      ></Route>
      <Route
        path="/details"
        element={
          <Details />
        }
      ></Route>
    </Routes>
  </Router>;
}