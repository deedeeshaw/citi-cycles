# Citi-Cycles
Visualization of the usage of cycles sponsored by Citi Bank in Jersey City

Since 2013, the Citi Bike Program has implemented a robust infrastructure for collecting data on the program's utilization. Each month bike data is collected, organized, and made public on the [Citi Bike Data] (https://www.citibikenyc.com/system-data) webpage.

For this project I imported two csv file; March 2018 and March 2019 with the following data into MySQL:
Trip Duration (seconds), Start Time and Date, Stop Time and Date, Start Station Name, Start Station ID, Start Station Latitude, Start Station Longitude, End Station ID, End Station Name, End Station Latitude, End Station Longitude, User Type (Customer = 24-hour pass or 3-day pass user; Subscriber = Annual Member), Gender (0 = undeclared, 1 = male, 2=female), Year of Birth, Trip Duration.

I transformed the data in MySQL by replacing the numeric representation of gender to “undeclared”, “male” and “female”, adding a column for the age of the users and converting the trip duration to hours from minutes.

I also created a table ‘start_stations’ containing the columns Start Station ID, Start Station Name, Start Station Latitude, Start Station Longitude and an identical table for end stations

Using python, pandas, javascript, tableau, and leaflet the data is visualized and presented on a Bootstrap designed web page by means of flask.