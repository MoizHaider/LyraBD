import app from './app';
import dotenv from "dotenv";
import { errorHandler } from './utils/errorUtils';
dotenv.config();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Welcome to LeadGen')
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
