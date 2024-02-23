import { BuscaEmailUseCase } from './BuscaEmailUseCase';
import { inject, injectable } from 'tsyringe';

@injectable()
class UsuarioUseCase {
    constructor(@inject('BuscaEmailUseCase') private buscaEmailUseCase: BuscaEmailUseCase) {}

    async verificaSeUsuarioExiste(usuarioId: string): Promise<boolean> {
        // Lógica para verificar se o usuário existe
        return true; // Exemplo simples
    }

    async obterEmailUsuario(usuarioId: string): Promise<string> {
        // Utilizando o BuscaEmailUseCase para obter o email do usuário
        const email = await this.buscaEmailUseCase.buscaEmail(usuarioId);
        return email;
    }
}






export { UsuarioUseCase };

import { UsuarioUseCase } from './UsuarioUseCase';
import { BuscaEmailUseCase } from './BuscaEmailUseCase';
import { container } from 'tsyringe';

// Mock da classe BuscaEmailUseCase
jest.mock('./BuscaEmailUseCase');

describe('Testes para UsuarioUseCase', () => {
    let usuarioUseCase: UsuarioUseCase;

    beforeEach(() => {
        // Criando uma instância de BuscaEmailUseCase (que é um mock)
        const buscaEmailUseCaseMock = new BuscaEmailUseCase() as jest.Mocked<BuscaEmailUseCase>;

        // Configurando o mock para retornar um valor fixo
        buscaEmailUseCaseMock.buscaEmail.mockResolvedValue('usuario@example.com');

        // Substituindo a instância real de BuscaEmailUseCase pelo mock
        container.registerInstance('BuscaEmailUseCase', buscaEmailUseCaseMock);

        // Criando uma instância de UsuarioUseCase
        usuarioUseCase = container.resolve(UsuarioUseCase);
    });

    it('Deve obter o email do usuário', async () => {
        // Testando o método obterEmailUsuario
        const email = await usuarioUseCase.obterEmailUsuario('usuario1');
        expect(email).toBe('usuario@example.com');
    });

    // Adicione mais casos de teste conforme necessário
});
