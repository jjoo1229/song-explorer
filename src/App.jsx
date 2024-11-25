import { useState } from "react";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const [data, setData] = useState([]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchPage />
    </QueryClientProvider>
  );
}

export default App;
