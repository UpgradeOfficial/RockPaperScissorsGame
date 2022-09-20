import { fireEvent, render, screen } from "@testing-library/react";
import { AuthProvider } from "../contexts/AuthContext";
import Register from "../pages/Register";

test("Email input should be rendered", () => {
  render(
    
      <Register />
    
  );
  const userInputEl = screen.getByPlaceholderText(/Email/i);
  expect(userInputEl).toBeInTheDocument();
  
});
