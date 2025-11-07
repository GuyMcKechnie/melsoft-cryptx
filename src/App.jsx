import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import "./index.css";

const App = () => (
    <div className="min-h-screen bg-white py-6 px-6 text-heading mx-auto flex h-full w-full overflow-hidden shadow-card">
        <Sidebar />
        <div className="flex flex-1 flex-col">
            <Header />
            <MainContent />
        </div>
    </div>
);

export default App;
