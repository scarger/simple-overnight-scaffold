import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

//SNIPPET TAKEN FROM THIS ARTICLE: https://levelup.gitconnected.com/setup-express-with-typescript-in-3-easy-steps-484772062e01 
//(Original Author: https://github.com/seanpmaxwell)

@Controller('api')
export class ApiController {

    @Get(':msg')
    private getMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        res.status(200).json({
            message: req.params.msg,
        });
    }

    @Put(':msg')
    private putMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Post(':msg')
    private postMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Delete(':msg')
    private delMessage(req: Request, res: Response) {
        try {
            throw new Error(req.params.msg);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(400).json({
                error: req.params.msg,
            });
        }
    }
}