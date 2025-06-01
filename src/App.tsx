import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import AuthLayout from "./layouts/AuthLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </main>
        <footer>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </footer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
