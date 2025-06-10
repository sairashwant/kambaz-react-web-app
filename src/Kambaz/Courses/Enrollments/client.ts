import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUser = async (userId: string, courseId: string) => {
  const { data } = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return data;
};

export const unenrollUser = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(ENROLLMENTS_API, {
    data: { userId, courseId },
  });
  return data;
};

export const findAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};

export const findEnrolledCourseIdsForUser = async (userId: string) => {
  const { data } = await axios.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
  return data;
};
