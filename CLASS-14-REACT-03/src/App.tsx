import { Auth } from "./screens/Auth";
import { Board } from "./screens/Board";
import { Dashboard } from "./screens/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/signin" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/board/:boardId" element={<Board />} />
            <Route path="*" element={<Board />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  );
}

export default App