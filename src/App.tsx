
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing pages
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminClients from "./pages/admin/AdminClients";
import AdminWorkers from "./pages/admin/AdminWorkers";
import AdminMaterials from "./pages/admin/AdminMaterials";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminExpenses from "./pages/admin/AdminExpenses";
import AdminComplaints from "./pages/admin/AdminComplaints";
import AdminReports from "./pages/admin/AdminReports";

// Worker pages
import WorkerDashboard from "./pages/worker/WorkerDashboard";

// Delivery person pages
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";

// Client pages
import ClientDashboard from "./pages/client/ClientDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/workers" element={<AdminWorkers />} />
        <Route path="/admin/materials" element={<AdminMaterials />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/expenses" element={<AdminExpenses />} />
        <Route path="/admin/complaints" element={<AdminComplaints />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        
        {/* Worker routes */}
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        
        {/* Delivery person routes */}
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
        
        {/* Client routes */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        
        {/* Catch all route - 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
