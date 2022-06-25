import "./App.css";
import EditableTable from "./components/EditableTable/EditableTable";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <EditableTable />
            <Footer />
        </div>
    );
}

export default App;
