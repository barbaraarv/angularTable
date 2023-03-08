import { Peliculas } from "./peliculas-data";
export interface UserList {
  id: number;
  nombre: string;
  user: string;
  peliculas: Peliculas[];
}