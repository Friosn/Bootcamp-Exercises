//Iteration #2 ------ASYNC-AWAIT

/* const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut(); */
//SOMETHING DOES NOT MAKE SENSE........
const runTimeOut = async () => {
  try {
    const promise = await setTimeout(function () {
      resolve();
    }, 2000);
    console.log("Time out!");
  } catch (error) {
    console.log("Error, human on the scene!");
  }
};

await runTimeOut();

const getAgify = async () => {
  const data = await fetch();
};
