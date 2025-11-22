import express from 'express';



const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.render('main');
}
);

app.get('/login', (req, res) => {
  res.render('layouts/login');
}
); 

app.get('/register', (req, res) => {
  res.render('layouts/register');
}
);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
