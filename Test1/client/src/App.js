import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInForm from './comp/LogInForm';
import BookingForm from './comp/BookingForm';
import SignUpForm from './comp/SignUpForm';
import BookingDetail from './comp/BookingDetail';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogInForm />} />
        <Route path="/" element={<BookingForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/data" element={<BookingDetail/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
