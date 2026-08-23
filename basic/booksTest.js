const bookItems = [
    {
      author: "John Doe",
      label: "JavaScript Basics",
      gender: "male",
      id: 1
    },
    {
      author: "Jane Smith",
      label: "React Tutorial",
      gender: "female",
      id: 2
    },
    {
      author: "Alex Johnson",
      label: "Node.js Guide",
      gender: "male",
      id: 3
    },
    {
      author: "Emily Brown",
      label: "TypeScript Tips",
      gender: "female",
      id: 4
    }
  ];


  const fitr = bookItems
  .filter((f) => f.gender === "female" && f.id > 2)
  .map((f) => f.label)


  console.log(fitr);
  