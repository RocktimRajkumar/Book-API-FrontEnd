# &#x1F4D8; Book APP
**&#x1F534; Angular 7** is one of the Most Popular Front End Web Framework on the internet, Spring MVC is also one of the Most Popular Application Framework on the internet, So let’s combine/integrate these two frameworks and build a simple CRUD application.  
The goal of the application is to display the list of books, adding a new book, updating the existing book and deleting a book.  
I will use Angular 7 in the front end for building forms, displaying the records and making an HTTP calls.  
In the backend, using Spring REST i will perform the CRUD operations.



## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/RocktimRajkumar/Book-API-FrontEnd.git
```

**2. Intall Angular CLI globally**

```bash
npm install -g @angular/cli@7.3.7
```

**3. Intall dependencies/npm modules**

Go to the project directory and execute the following command from the terminal

```bash
npm install
```

**4. Change the REST API URL's**

In the book.service.ts change the REST API URL's, i have created backend project using Spring REST, you can find it here <[https://github.com/RocktimRajkumar/Book-API](https://github.com/RocktimRajkumar/Book-API)>

**5. Build and run the app**

```bash
ng serve --open
```

The app will open in the default browser with <http://localhost:4200/>.
