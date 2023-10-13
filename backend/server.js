const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// connect db
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
<<<<<<< HEAD
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
=======
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
>>>>>>> 8970029 (initial commit to this project)
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
<<<<<<< HEAD
=======
// why i am not using  try catch instead of using this
// process.on("unhandledRejection", (err) => {
//   console.log(`Shutting down the server for ${err.message}`);
//   console.log(`shutting down the server for unhandle promise rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });
// Using a `try...catch` block to handle exceptions and errors is a valid approach, but it serves a different purpose than the code snippet you provided. The code you provided is specifically designed to handle unhandled promise rejections at a global level, especially in a Node.js server context. Here's why you might choose to use the code you posted instead of `try...catch`:

// 1. **Global Handling**: The code you provided is a global handler for unhandled promise rejections using the `process.on("unhandledRejection", ...)` event. It means that it will catch and handle any unhandled promise rejections that occur throughout your entire Node.js application, not just in a specific function or block of code. This is particularly useful for handling promise rejections that might occur in various parts of your application, including asynchronous operations triggered by different modules.

// 2. **Preventing Crashes**: By shutting down the server and calling `process.exit(1)` in response to an unhandled promise rejection, you can prevent your Node.js application from continuing to run in an unstable state. This can be important for production applications, where unexpected errors could compromise data integrity or availability.

// 3. **Logging**: The code logs information about the unhandled promise rejection, including the error message. This can be extremely helpful for debugging and diagnosing issues in a production environment.

// 4. **Consistency**: Having a central mechanism for handling unhandled promise rejections ensures a consistent approach to error handling and shutdown procedures throughout your application.

// On the other hand, using `try...catch` at a lower level in your code can be beneficial when you want to handle specific exceptions or errors within a particular function or code block. It's suitable for scenarios where you want to handle errors gracefully within a specific context.

// In summary, whether to use a global unhandled promise rejection handler or `try...catch` blocks depends on your application's architecture and error-handling strategy. Both approaches have their place, and you can use them in combination to handle errors at different levels of your application.
>>>>>>> 8970029 (initial commit to this project)
