
new Promise((resolve,reject) => {
    setTimeout (() => {

        let a = 5;
        if (a % 2 != 0) {
            resolve("successful"); 
        } else {
            reject("failed");
        }

    },2000)
   
}).then((message) => console.log(message))
.catch((error) => console.log(error));


//Create a function that rejects and catch the error.

async function checkNumber(number) {
    if (number < 50) {
        return "success"
    } else {
        return "failed"
    }
}

async function run() {
    try {
        const result = await checkNumber(60);
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    } finally {
        console.log("closing");
        
    }
}

run();


//Create getPatient() that waits one second and returns a patient object.

patientDatabase = {
    
        name: "Alexa Shanon",
        age: "24",
        bloodGroup: "AB+",
        appointmentDept: "dermatalogy"
    
};


const serverDatabase = new Promise ((resolve, reject) => {
        setTimeout(() => {
            
                resolve(patientDatabase);
            
        },1000)
    });




const getPatient = async () => {
    try {
        const result = await serverDatabase;  // returns pending w/o await
        console.log("Data received", result);
    } catch (error) {
        console.log("Database failed to connect....");
        
    }
    
}

getPatient();



//Print "start", an awaited result, and "end"; predict order before running.

console.log("start")
let res = false
const something = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (res) {
                resolve("awaited result")
            } else {
                reject(new Error ("nope"))
            }
        },2000)
    })
}



const something2 = async () => {
    try {
        const response = await something();
        console.log(response);
        
    } catch (error) {
        console.log("error message",error.message);
   
    } finally {
        console.log("end")
    }
};


something2();


//Use Promise.all for two independent fake API calls only after sequential awaits are clear.







let arr1 = ['apple','banana','pineapple'];
let arr2 = ['strawberry','kiwi','orange'];

const a = async () => {
    return new Promise ((resolve) => {
        resolve("task 1 completed");
    })
}

const b = async () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Task 2 completed");
        },2000)
    })
    
}

const result = async () => {
    const value1 = await a();
    const value2 = await b();
    console.log([value1,value2]);
    
}

result();


//Task

const getWeather = async (city) => {
    // delay
    // return weather
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            if (city === "jersey")
            resolve("The weather is bad...")
        else {
            reject(new Error ("the weather is good..."))
        }
        },1000)
    })
};

const getCurrency = async (code) => {
    // delay
    // return currency
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            if (code === 20)
            resolve("The currency rates are high.")
        else {
            reject(new Error ("The rates are low"))
        }
        },1000)
    })
};

const combineResults = async () => {
    const results = await Promise.all([
        // getWeather(...)
        // getCurrency(...)
        getWeather("jersey"),
        getCurrency(20)
    ])
    console.log(results);
    

    // combine results
};

combineResults();
