import { injectable } from 'tsyringe';

@injectable()
export class MensagemUsercase {
    constructor() {}

    public processarMensagem(mensagem: string): void {
        console.log('Processando mensagem:', mensagem);
        // Adicione aqui a lógica para processar a mensagem
    }
}
