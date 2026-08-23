const app = [
    {
        name: "John Doe",
        age: "32",
        diagnosed: "YES"
    },

    {
        name: "Elena Williams",
        age: "24",
        diagnosed: "NO"
    },

    {
        name: "Serena Adams",
        age: "44",
        diagnosed: "NO"
    }
];

const report = app
.filter((check) => check.diagnosed === "NO")
.map((check) => check.name);

console.log(report);
