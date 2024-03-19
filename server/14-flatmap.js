const users = [
  {
    userId: 1,
    username: "Tom",
    attributes: ["Nice", "cute"]
  },
  {
    userId: 2,
    username: "Mike",
    attributes: ["Lovely"]
  },
  {
    userId: 3,
    username: "Nico",
    attributes: ["Nice", "Cool"]
  }
];

const answer = users.map(user => user.attributes).flat();
console.log("Map & Flat Methods:", answer);

const answer2 = users.flatMap(user => user.attributes);
console.log("FlatMap Method:", answer2);


// Reto -> Tratar de realizar un FlatMap, sin tener exactamente un Array de Arrays. 

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const startDates = Object.values(calendars).flatMap(item => {
  console.log("item:", item);
  return item.map(date => date.startDate);
});
console.log("Object.values() + FlatMap:", startDates);