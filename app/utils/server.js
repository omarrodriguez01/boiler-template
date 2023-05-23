const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

//READ
app.get("/api/maintenances", async (req, res) => {
  const maintenances = await prisma.maintenances.findMany();
  res.json(maintenances);
  return maintenances;
});

app.get("/api/customers", async (req, res) => {
  const customers = await prisma.customers.findMany();
  res.json(customers);
  return customers;
});

app.get("/api/employees", async (req, res) => {
  const employees = await prisma.employees.findMany();
  res.json(employees);
  return employees;
});

app.get("/api/cars", async (req, res) => {
  const cars = await prisma.cars.findMany();
  res.json(cars);
  return cars;
});

//CREATE
app.post("/api/createMaintenance", jsonParser, async (req, res) => {
  try {
    const properties = req.body;
    console.log(properties);
    const maintenance = await prisma.maintenances.create({
      data: {
        customer_id: properties.customer_id,
        car_id: properties.car_id,
        employee_id: properties.employee_id,
        description: properties.description,
        maintenance_date: properties.maintenance_date,
      },
    });
    res.json(maintenance);
    return maintenance;
  } catch (err) { //If POST with prisma fails, return false
    console.log(err);
    res.json(false);
    return false;
  }
});

//UPDATE
app.post("/api/editMaintenance", jsonParser, async (req, res) => {
  try {
    const properties = req.body;
    //console.log(properties);
    const maintenance = await prisma.maintenances.update({
      where: {
        maintenance_id: properties.maintenance_id,
      },
      data: {
        customer_id: properties.customer_id,
        car_id: properties.car_id,
        employee_id: properties.employee_id,
        description: properties.description,
        maintenance_date: properties.maintenance_date,
      },
    });
    res.json(maintenance);
    return maintenance;
  } catch (err) { //If POST with prisma fails, return false
    console.log(err);
    res.json(false);
    return false;
  }
});

//DELETE
app.post("/api/deleteMaintenance", jsonParser, async (req, res) => {
  const properties = req.body;
  console.log(properties);
  const maintenance = await prisma.maintenances.delete({
    where: {
      maintenance_id: properties.maintenance_id,
    },
  });
  res.json(maintenance);
  return maintenance;
});

//Start server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
