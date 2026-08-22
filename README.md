# StayNest 🏡

StayNest is a full-stack web application inspired by Airbnb. It allows users to view, create, edit, and delete property listings.

The project is currently being developed step by step while learning full-stack web development with Node.js, Express, MongoDB, and EJS.

## 🚀 Features

* View all property listings
* View details of a specific listing
* Add a new listing
* Edit an existing listing
* Delete a listing
* MongoDB database integration
* EJS templating
* Reusable EJS layouts using EJS-Mate
* Initial CSS styling for an improved user interface
* Responsive and structured listing pages

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* EJS-Mate
* Method-Override

## 📂 Project Structure

```text
StayNest/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── show.ejs
│       └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd StayNest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The application uses:

```text
mongodb://127.0.0.1:27017/StayNest
```

### 5. Start the application

```bash
node app.js
```

The application will run on:

```text
http://localhost:8080
```

## 📌 CRUD Operations

| Operation         | Method | Route                |
| ----------------- | ------ | -------------------- |
| View all listings | GET    | `/listings`          |
| Create form       | GET    | `/listings/new`      |
| View listing      | GET    | `/listings/:id`      |
| Create listing    | POST   | `/listings`          |
| Edit form         | GET    | `/listings/:id/edit` |
| Update listing    | PUT    | `/listings/:id`      |
| Delete listing    | DELETE | `/listings/:id`      |

## 🎨 UI Improvements

The project initially started with a basic CRUD implementation. CSS styling has now been added to improve the appearance and structure of the listing pages.

More UI improvements and features will be added as the project progresses.

## 🔮 Future Improvements

* User authentication and authorization
* Reviews and ratings
* Search and filtering
* Categories for listings
* Image upload
* Booking functionality
* Improved responsive design
* Deployment

## 👩‍💻 Author

**Sakshi Saindane**

This project is created as part of my journey to learn and build full-stack web applications.
