export const simulateJob = (callback: (status: string) => void) => {

  callback("pending");

  setTimeout(() => {
    callback("processing");
  }, 2000);

  setTimeout(() => {

    const success = Math.random() > 0.2;

    callback(success ? "completed" : "failed");

  }, 5000);

};