import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import "./index.css";

const App = () => (
    <div className="min-h-screen bg-background text-white">
        <div className="flex w-full flex-col lg:flex-row">
            <Sidebar />
            <div className="flex h-full min-h-screen w-full flex-col lg:ml-72">
                <Header />
                <MainContent />
            </div>
        </div>
    </div>
);

export default App;
