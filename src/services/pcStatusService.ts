import type { PcStatus } from "../types/PcStatus"; 
const API_URL = "https://gamingcenter.onrender.com/getAll"; 
export const getBusyPcs = async (): Promise<PcStatus[]> => { 
const response = await fetch(API_URL); 
if (!response.ok) {
 throw new Error("Failed to fetch PC status");
 }
return response.json();

};