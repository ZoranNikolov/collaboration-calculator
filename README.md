# Collaboration calculator

This is a collaboration calculator that calculates the pair of employees who has worked together on common projects for the longest period of time.

## Features

- Upload csv file;
- Supported several date formats: "MM/DD/YYYY", "DD/MM/YYYY", "MMM DD, YYYY", "DD MMM YYYY", "YYYY/MM/DD", "DD-MM-YYYY", "YYYY-MM-DD", "YYYY/MM/DD";
- Informs the user in case of an error with the uploaded data;
- On home page, you could find information about the app and about the supported date formats.
- You could use the contact form in order to inform the team reagarding any questions you might have.

## Installation

To install Collaboration calculator, follow these steps:

1. Clone the repository;
2. Install dependencies: `npm install`;
3. Run the application: `npm start`;

## Usage

To use this app, follow these steps:

1. Create a CSV file. 
2. The file needs to have a header row in the following format: "EmpID,ProjectID,DateFrom,DateTo".
3. The DateTo field can be NULL. In that case the app will set it to todays date.
3. The date fields can be in on of the following formats: "MM/DD/YYYY", "DD/MM/YYYY", "MMM DD, YYYY", "DD MMM YYYY", "YYYY/MM/DD", "DD-MM-YYYY", "YYYY-MM-DD", "YYYY/MM/DD";
4. After uploading the file, click the button "Load data". It will visualize the data from the file.
5. After loading the data you will be able to submit the information. info about the pair who has worked together for longest period of time will be visible on the right side of the screen.

## Task description

The task is to create an app that takes list of information from CSV file, uploaded by the user, and returns pair of employees who has collaborated on common projects for the longest period of time. The user will provide a list of employees, who has worked on a specific project from a specific date to specific date.
The data from the user will be grouped into rows and columns. Each row will contain employee ID, project ID, date from and date to.
The user will provide a CSV file, so the first row will contain headers, which are in the following format: "EmpID,ProjectID,DateFrom,DateTo".
The app needs to process the input data from the CSV file and return the pair of employees who has worked on common projects for the longest period of time.
After that the app needs to visualize info about the pair of employees and info about their common projects.
The info about the projects needs to be sorted by the period of time they have worked together on each project.

## Algorithm

1. The user uploads a CSV file.
2. The file type is checked. If the file type is not correct, the app returns error message.
3. If the file is correct, the data from the file is read. The data is splitted by comma.
4. If the first line of the splitted data is not equal to the desired headers, the app returns error message and blocks executing the other part of the code. The message informs the user to fix the first row of the file, so it meets the requirements.
5. If the first line of the splitted data is correct, then the app splits the rest of the data by new line character ('\n'). Then the app removes the remaining new line characters. 
6. The app iterates over each row and split it by comma. Then the app checks if the last element of each row if equal to NULL. If so, then the app replaces it with todays date in the format "YYYY-MM-DD". After that the app checks if the last two elements of each row are valid dates according to the to the supported date formats. If any of the dates is not valid, then the app returns error message and visualizes it on the sidebar. The message informs the user on which row the error occurred. 
7. If the dates are valid, the app formats them to date format: "YYYY-MM-DD".
8. After that the app creates an object, the keys of the object are the header and the values of the object are the employee ID, the project ID, the date from and the date to. The objects are stored inside array.
9. Then the app iterates over the array where the objects are stored. The app checks if there are two elements in the array with the same value of EmpID and ProjectID keys. If there is such pair the app converts the dates to miliseconds. It calculates the days difference. If it is positive value, this means that the two employees have worked together on the same project in the same time.
10. The app creates a new object and adds a key which is the string value of the pair (for example '10-12'). It adds 'days' key and the value of that key is the period the pair has worked together. The app adds also a 'projects' key, which stores the project IDs on which the pair has worked , and the days the pair has worked on that project. It also adds a 'commonProject' key, which stores the unique ID of the common projects.
11. If such object already exists (the app has already created object with the pair ID), it adds the period to the 'days' property of the object. It adds the period they have worked together on each project also. Stores the new project they have worked together on, also.
12. After creating the pairs who has worked together on common projects, the app finds out the pair who has worked together for the longest period of time, based on the 'days' property of each pair object. After thet the app sorts the projects property by its' 'days' property in descending order.
13. The data is rendered in the sidebar on the calculate page. In case there is no pair who has worked on common projects, the app informs the user.