const db = require('../db')
const { Company, Customer, Appointment } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const customer1 = await new Customer ({
    name: "Erik Smith",
    address: "123 Shiesty Lane",
    phone: "1112223333",
    email: "esiff@gmail.com",
    password: "eDog1"
  })
  customer1.save()

  const customer2 = await new Customer ({
    name: "Brady Bull",
    address: "234 Zoom St",
    phone: "4445556666",
    email: "bullb@gmail.com",
    password: "bully2"
  })
  customer2.save()

  const customer3 = await new Customer ({
    name: "Erik Smith",
    address: "123 Shiesty Lane",
    phone: "1112223333",
    email: "esiff@gmail.com",
    password: "eDog1"
  })
  customer3.save()

  const company1 = await new Company ({
    name: "Mow R Us",
    address: "555 East Monroe st",
    phone: "5555555555",
    email: "mows@gmail.com",
    password: "mow1"
  })
  company1.save()

  const company2 = await new Company ({
    name: "Greener Pastures",
    address: "989 new avenue",
    phone: "7777777777",
    email: "green@gmail.com",
    password: "green"
  })
  company2.save()

  const company3 = await new Company ({
    name: "Tonys Landscaping",
    address: "111 goon lane",
    phone: "1011011010",
    email: "TL@gmail.com",
    password: "bronze1"
  })
  company3.save()

  const appointment1 = await new Appointment ({
    date: "20231014",
    time: "0900",
    company: company1._id,
    customer:customer1._id,
    address:customer1._id
  })
  appointment1.save()

  const appointment2 = await new Appointment ({
    date: "20231015",
    time: "1000",
    company: company2._id,
    customer:customer2._id,
    address:customer2._id
  })
  appointment2.save()

  const appointment3 = await new Appointment ({
    date: "20231016",
    time: "1200",
    company: company3._id,
    customer:customer3._id,
    address:customer3._id
  })
  appointment3.save()

}

const run = async () => {
    await main()
    // db.close()
  }
  
  run()