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

const runTimeOut = async () => {
  try {
    const promise = await setTimeout();
  } catch (error) {}
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  promise.then(() => {
    console.log("Time out!");
  });
};

runTimeOut();
