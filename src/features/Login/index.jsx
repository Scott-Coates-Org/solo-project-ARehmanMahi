import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();

  return auth.user ? (
    <Navigate to="/" />
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Button
        onClick={auth.login}
        sx={{ my: 2 }}
        variant="contained"
        startIcon={
          <img width="50" src="/images/googlelogo.png" alt="Google Logo" />
        }
      >
        Continue with Google
      </Button>
    </Box>
  );
};

export default Login;
