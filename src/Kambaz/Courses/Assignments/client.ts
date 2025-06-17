import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  group?: string;
  displayGrade?: string;
  submissionType?: string;
  assignTo?: string;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

export const findAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
  const response = await axios.get(`${ASSIGNMENTS_API}?course=${courseId}`);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string): Promise<{ status: string }> => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const updateAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};
