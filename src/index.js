import { PORT } from "./config/env.js";
import app from "./server.js";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))