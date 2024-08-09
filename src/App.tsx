import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const AppRoutes = () => {
    const element = useRoutes(routes);
    return element;
  };

  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
