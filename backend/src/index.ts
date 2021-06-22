/* eslint-disable @typescript-eslint/no-floating-promises */
import fastify, { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';
import { database } from './types/types';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import config from './config';

const PORT: number = parseInt(config.appPort, 10);
const options: FastifyServerOptions = { logger: true };
const server: FastifyInstance = fastify(options);

server.register(helmet);
server.register(cors);

const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
	baseURL: process.env.API_URL,
	headers: {
		'Authorization': process.env.NOTION_TOKEN,
		'Notion-Version': process.env.NOTION_VERSION
	}
} 

const instance: AxiosInstance = axios.create(axiosConfig);

server.get('/' , async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { data: results } = await instance.get<AxiosResponse<database>>('https://api.notion.com/v1/databases')
    return { results }
  } catch (error) {
    reply.send(error)
  }
})

server.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});