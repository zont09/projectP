import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Page1 />}></Route>
                    <Route path="/page2" element={<Page2 />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
