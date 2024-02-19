import { SQSEvent } from 'aws-lambda';
import { inject, injectable } from 'tsyringe';
import { MensagemUsercase } from '../application/usercase/MensagemUsercase';

@injectable()
export class LambdaHandler {
    constructor(
        @inject('MensagemUsercase') private mensagemUsercase: MensagemUsercase
    ) {}

    public async handleEvent(event: SQSEvent): Promise<any> {
        try {
            for (const record of event.Records) {
                const mensagem = JSON.parse(record.body);
                this.mensagemUsercase.processarMensagem(mensagem);
            }

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Evento do SQS processado com sucesso' })
            };
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Ocorreu um erro ao processar o evento do SQS' })
            };
        }
    }
}
