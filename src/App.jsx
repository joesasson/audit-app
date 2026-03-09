import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Checklist from './components/Checklist';
import Breakdown from './components/Breakdown';
import AuditList from './components/AuditList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuditList />} />
        <Route path="/:auditId" element={<Checklist />} />
        <Route path="/:auditId/breakdown" element={<Breakdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
