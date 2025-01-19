import { Request, Response } from 'express';

export function root(request: Request, response: Response) {
    response.status(200).send('<h4>Express server up and running...</h4>');
}