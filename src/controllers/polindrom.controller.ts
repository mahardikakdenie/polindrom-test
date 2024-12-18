import { Request, Response } from "express";
import {
  createPolindrom,
  getAllPolindroms,
  getPolindromById,
  updatePolindrom,
  deletePolindrom,
} from "../service/polindrom.service";

export const createPolindromController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sentence } = req.body;
    if (!sentence) {
        res.status(400).json({ message: "Sentence is required" });
    }
    const polindrom = await createPolindrom(sentence);
    res.status(201).json(polindrom);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch polindrom data: ${error instanceof Error ? error.message : String(error)}` });
  }
};

export const getAllPolindromsController = async (_req: Request, res: Response) => {
  try {
    const polindroms = await getAllPolindroms();
    res.status(200).json(polindroms);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch polindrom data: ${error instanceof Error ? error.message : String(error)}` });
  }
};

export const getPolindromByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const polindrom = await getPolindromById(id);
    res.status(200).json(polindrom);
  } catch (error) {
    res.status(404).json({ message: `Failed to fetch polindrom data: ${error instanceof Error ? error.message : String(error)}` });
  }
};

export const updatePolindromController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { sentence } = req.body;
    if (!sentence) {
      return res.status(400).json({ message: "Sentence is required" });
    }
    const updatedPolindrom = await updatePolindrom(id, sentence);
    res.status(200).json(updatedPolindrom);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch polindrom data: ${error instanceof Error ? error.message : String(error)}` });
  }
};

export const deletePolindromController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPolindrom = await deletePolindrom(id);
    res.status(200).json(deletedPolindrom);
  } catch (error) {
    res.status(404).json({ message: `Failed to fetch polindrom data: ${error instanceof Error ? error.message : String(error)}` });
  }
};
