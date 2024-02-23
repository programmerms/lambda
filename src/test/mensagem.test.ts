import { handler } from './lambda'; // Importe a função Lambda que você deseja testar

describe('Testes para a função Lambda', () => {
    test('Teste de processamento de mensagem SQS', async () => {
        // Crie um evento SQS de exemplo com uma mensagem
        const event: any = {
            Records: [
                {
                    body: JSON.stringify({ key: 'value' }) // Corpo da mensagem SQS
                }
            ]
        };

        // Mock console.log
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        // Chame a função Lambda com o evento SQS
        await handler(event);

        // Verifique se a função Lambda processou a mensagem corretamente
        expect(consoleLogSpy).toHaveBeenCalledWith('Mensagem recebida:', JSON.stringify({ key: 'value' }));

        // Restaure a função original de console.log
        consoleLogSpy.mockRestore();
    });
});




describe('Teste da função Lambda SQS', () => {
    it('Deve extrair o corpo da mensagem corretamente', async () => {
        // Mock do evento SQS
        const sqsEvent = {
            Records: [
                {
                    body: JSON.stringify({ message: 'Olá, mundo!' }) // Simulando uma mensagem SQS
                }
            ]
        };

        // Mock da função de callback
        const callback = jest.fn();

        // Chamar a função Lambda e esperar que ela não lance uma exceção
        await expect(handler(sqsEvent)).resolves.not.toThrow();

        // Verificar se a função de callback foi chamada corretamente
        expect(callback).toHaveBeenCalledTimes(1);

        // Se você tiver mais lógica para testar dentro da função handler, adicione os casos de teste apropriados aqui
    });
});