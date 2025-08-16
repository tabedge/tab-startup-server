/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Project from './project.model';
import { IProject } from './project.interface';

const createProject = async (projectData: IProject) => {
  // Create the project
  const project = await Project.create(projectData);
  return project;
};

const getProjects = async (filters: any): Promise<IProject[]> => {
  const { category, search, userId } = filters;

  // Create a dynamic filter object
  const query: Record<string, any> = {};

  // Filter by userId if provided (to get projects of a specific user)
  if (userId) {
    query.author = userId;
  }

  // Filter by category if provided
  if (category) {
    query.category = category;
  }

  // Perform search across category, industry, and type if search is provided
  if (search) {
    query.$or = [
      { category: { $regex: search, $options: 'i' } }, // Case-insensitive search
      { industry: { $regex: search, $options: 'i' } },
      { type: { $regex: search, $options: 'i' } },
    ];
  }

  // Fetch the results from the database
  const result = await Project.find(query);
  return result;
};

const getProjectById = async (projectId: string) => {
  const result = await Project.findById(projectId);
  return result;
};

const updateProject = async (projectId: any, updateData: Partial<IProject>) => {
  const result = await Project.findOneAndUpdate({ projectId }, updateData, {
    new: true,
  });
  return result;
};

const deleteProject = async (projectId: number) => {
  const result = await Project.findOneAndUpdate(
    { projectId },
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const ProjectService = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
