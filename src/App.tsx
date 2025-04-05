
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing pages
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminWorkers from "./pages/admin/AdminWorkers";
import AdminMaterials from "./pages/admin/AdminMaterials";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminExpenses from "./pages/admin/AdminExpenses";
import AdminComplaints from "./pages/admin/AdminComplaints";
import AdminReports from "./pages/admin/AdminReports";

// Worker pages
import WorkerDashboard from "./pages/worker/WorkerDashboard";
import WorkerTasks from "./pages/worker/WorkerTasks";
import WorkerMaterials from "./pages/worker/WorkerMaterials";
import WorkerPayments from "./pages/worker/WorkerPayments";

// Delivery person pages
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import DeliveryDeliveries from "./pages/delivery/DeliveryDeliveries";
import DeliveryEarnings from "./pages/delivery/DeliveryEarnings";

// Client pages
import ClientDashboard from "./pages/client/ClientDashboard";
import ClientOrders from "./pages/client/ClientOrders";
import ClientBills from "./pages/client/ClientBills";
import ClientComplaints from "./pages/client/ClientComplaints";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/workers" element={<AdminWorkers />} />
        <Route path="/admin/materials" element={<AdminMaterials />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/expenses" element={<AdminExpenses />} />
        <Route path="/admin/complaints" element={<AdminComplaints />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        
        {/* Worker routes */}
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/worker/tasks" element={<WorkerTasks />} />
        <Route path="/worker/materials" element={<WorkerMaterials />} />
        <Route path="/worker/payments" element={<WorkerPayments />} />
        
        {/* Delivery person routes */}
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
        <Route path="/delivery/deliveries" element={<DeliveryDeliveries />} />
        <Route path="/delivery/earnings" element={<DeliveryEarnings />} />
        
        {/* Client routes */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/orders" element={<ClientOrders />} />
        <Route path="/client/bills" element={<ClientBills />} />
        <Route path="/client/complaints" element={<ClientComplaints />} />
        
        {/* Catch all route - 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
