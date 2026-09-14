import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');
const path = require('path');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../Digintra_Backend/.env') });
const connectDB = require('../../Digintra_Backend/config/db.js');
const Blog = require('../../Digintra_Backend/models/Blog.js');

async function test() {
  await connectDB();
  const blogs = await Blog.find({});
  console.log("Found", blogs.length, "blogs.");
  process.exit();
}
test();
