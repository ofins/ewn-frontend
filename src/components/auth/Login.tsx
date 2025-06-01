import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const API_BASE_URL = "http://localhost:3000";

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // Replace with your actual API endpoint
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    mutationFn: loginUser,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={mutation.isPending}>
          Login
        </button>
        {mutation.isPending && <p>Logging in...</p>}
        {mutation.isError && (
          <p style={{ color: "red" }}>{(mutation.error as Error).message}</p>
        )}
        {mutation.isSuccess && (
          <p style={{ color: "green" }}>Login successful!</p>
        )}
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
