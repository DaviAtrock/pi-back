import supertest from 'supertest';
import { server } from '../src/server';

export const Test = supertest(server);
