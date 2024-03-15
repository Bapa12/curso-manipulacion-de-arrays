const tasks = document.getElementById("tasks");
const listOfTasks = [
  {
    name: "Studying",
    status: "Finished"
  },
  {
    name: "Wash the Dishes",
    status: "Finished"
  },
  {
    name: "Do Laundry",
    status: "On it"
  },
  {
    name: "Cooking",
    status: "Not Done Yet"
  },
  {
    name: "Cleaning",
    status: "Not Done Yet"
  },
  {
    name: "Make the Bed",
    status: "Not Done Yet"
  }
];

listOfTasks.forEach(item => {
  tasks.innerHTML += `<li>
                        Task: ${item.name}
                        Status: ${item.status}
                        <li> `
});
