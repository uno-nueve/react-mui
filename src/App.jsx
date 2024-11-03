import { Box, Button, TextField } from "@mui/material";
import "./App.css";

function App() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    padding: "24px",
                    display: "flex",
                    justifyContent: "center",
                    width: "400px",
                    border: "1px solid #d4d4d4",
                    borderRadius: "24px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        width: "100%",
                    }}
                >
                    <TextField required id="first-name" label="Nombre" />
                    <TextField required id="last-name" label="Apellido" />
                    <TextField required id="email" label="Email" type="email" />
                    <Button variant="contained" sx={{ width: "100%" }}>
                        Enviar
                    </Button>
                </div>
            </Box>
        </>
    );
}

export default App;
