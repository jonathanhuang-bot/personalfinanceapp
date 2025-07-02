import './App.css';
import {Dashboard} from "./pages/dashboard";
import {Auth} from "./pages/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {
  return (
    <Router>
      <div className = "app-container">
        <Routes>
          <Route path = "/" element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider> 
          }/>
          <Route path = "/auth" element={<Auth/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App
