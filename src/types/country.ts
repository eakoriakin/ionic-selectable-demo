import { Port } from './port';

export class Country {
    public id: number;
    public name: string;
    public ports?: Port[];
}
