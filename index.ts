import 'reflect-metadata';
import { container } from 'tsyringe';
import { LambdaHandler } from '../controller/LambdaHandler';
import { MensagemUsercase } from './application/usercase/MensagemUsercase';

// Registrar dependências no contêiner do tsyringe
container.register('MensagemUsercase', { useClass: MensagemUsercase });

// Instanciar LambdaHandler usando tsyringe
const lambdaHandler = container.resolve(LambdaHandler);

// Função que será invocada pela AWS Lambda
export async function handler(event: any): Promise<any> {
    return lambdaHandler.handleEvent(event);
}
