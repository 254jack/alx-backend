const kue = require("kue");
const queue = kue.createQueue();

const jobData = {
  phoneNumber: "+1234567890",
  message: "Hello, World!",
};

const job = queue.create("push_notification_code", jobData).save((err) => {
  if (err) {
    console.error(`Failed to create job: ${err}`);
  } else {
    console.log(`Notification job created: ${job.id}`);
  }
});

job
  .on("complete", () => {
    console.log("Notification job completed");
  })
  .on("failed", () => {
    console.log("Notification job failed");
  });
