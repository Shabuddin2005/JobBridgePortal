
import jobs from "../data/jobs";

export const getJobs = async () => {
  return jobs;
};

export const getJobById = async (id) => {
  return jobs.find((job) => job.id === Number(id));
};
