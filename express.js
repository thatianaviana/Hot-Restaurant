    routeName: "yoda",
    name: "Yoda",
    phone: "Jedi Master",
    email: 900,
    UniqueId: 2000
  },
 

// Routes
/ =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get(get("/add", f, function(req, res) {
  r    routeName: "yoda",
    name: "Yoda",
    phone: "Jedi Master",
    email: 900,
    UniqueId: 2000
  },
 

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});
