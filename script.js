//Configuração do Formulário
//Isso inicia um evento de escuta no elemento com o ID 'contact-form', que é suposto ser o 
//formulário que você deseja monitorar para submissões.
document.getElementById('contact-form').addEventListener('submit', function(event) {
//Essa linha impede o comportamento padrão de submissão do formulário, que é recarregar a página. 
//Ao evitar isso, o JavaScript assume o controle sobre o que acontece após a submissão do formulário.
    event.preventDefault();
//Aqui, é criado um objeto FormData a partir do elemento que acionou o evento de submissão, ou seja,
//o próprio formulário. O objeto FormData é uma maneira de coletar os valores dos campos do formulário.    
    const formData = new FormData(event.target);
//Isso obtém o valor do campo de entrada com o nome 'nome' do formulário usando o objeto FormData.
    const nome = formData.get('nome');
//Isso obtém o valor do campo de entrada com o nome 'email' do formulário usando o objeto FormData.
    const email = formData.get('email');
//Isso obtém o valor do campo de entrada com o nome 'telefone' do formulário usando o objeto FormData.    
    const telefone = formData.get('telefone');
//Aqui, os valores obtidos dos campos de entrada são combinados em uma mensagem formatada que será
//exibida posteriormente (neste caso, em um alerta).    
    const message = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`;

 //Um alerta é exibido ao usuário, informando que a mensagem foi enviada com sucesso.   
    alert('Mensagem enviada com sucesso!');
//Isso redefinirá os campos do formulário, limpando os valores inseridos após a submissão.
    event.target.reset();
});

//Isso adiciona um ouvinte de evento ao elemento com o ID "alterarTexto". Esse ouvinte está 
//configurado para ser ativado quando o botão é clicado.
document.getElementById("alterarTexto").addEventListener("click", function() {
//Aqui, é criada uma constante novoConteudo que contém um template string vazio. Um template string é 
//delimitado por acentos graves (``) e permite que você insira texto multilinha e expressões incorporadas 
    const novoConteudo = `
<p>Tornar-se um desenvolvedor de blockchain requer um conjunto diversificado de habilidades, que abrangem desde conceitos básicos de programação até conhecimentos avançados sobre criptografia e tecnologias de blockchain. Aqui está uma programação de estudos sugerida, dividida em níveis, para ajudar alguém a se tornar um desenvolvedor de blockchain:</p>


<h2>Nível Iniciante: Fundamentos de Programação e Blockchain</h2>
<p>Duração: 3-6 meses</p>

<p><strong> 1. Introdução à Programação:</strong></p>

<p><blockquote>* Escolha uma linguagem de programação (ex: Python, JavaScript) e aprenda os conceitos básicos, como variáveis, loops, condicionais e funções.</p>
<p>* Recursos recomendados: Codecademy, freeCodeCamp, Coursera.</p>
<p>* Conceitos Básicos de Blockchain:</p></blockquote>

<p><strong>2. Conceitos Básicos de Blockchain:</strong></p>

<p><blockquote>* Entenda o que é blockchain, sua estrutura, como os blocos são conectados e a importância da descentralização.</p>
<p>* Recursos recomendados: Documentação oficial do Bitcoin, artigos introdutórios.</blockquote></p>

<p><strong>3. Criptografia e Segurança:</strong></p>

<p><blockquote>* Familiarize-se com os princípios de criptografia, assinaturas digitais e hashes.</p>
<p>* Recursos recomendados: Cryptography and Network Security - Principles and Practice (livro), Khan Academy (criptografia).</p></blockquote>
<br>


<h2>Nível Intermediário: Desenvolvimento de Smart Contracts e DApps</h2>
<p>Duração: 6-9 meses</p>

<p><strong>1. Desenvolvimento Web:</strong></p>

<p><blockquote>* Aprenda HTML, CSS e JavaScript para construir interfaces de usuário.</p>
<p>* Recursos recomendados: MDN Web Docs, Codecademy.</p></blockquote>

<p><strong>2. Solidity e Smart Contracts:</strong></p>

<p><blockquote>* Domine a linguagem Solidity para escrever smart contracts na Ethereum e outras plataformas.</p>
<p>* Aprenda sobre eventos, modificadores e estruturas de controle.</p>
<p>* Recursos recomendados: Documentação Solidity, cursos online sobre Ethereum.</p></blockquote>

<p><strong>3. Ethereum e Plataformas Similares:</strong></p>

<p><blockquote>* Compreenda como o Ethereum funciona, a estrutura de contratos, gas, transações e EVM.</p>
<p>* Recursos recomendados: Documentação Ethereum, Ethereum Whitepaper.</p></blockquote>

<p><strong>4. Desenvolvimento de DApps (Aplicações Descentralizadas):</strong></p>

<p><blockquote>* Aprenda a construir DApps usando frameworks como Truffle e Embark.</p>
<p>* Integre contratos inteligentes com interfaces web.</p>
<p>* Recursos recomendados: Documentação Truffle, tutoriais online.</p></blockquote>
<br>


<h2>Nível Avançado: Aprofundando em Protocolos e Segurança</h2>
<p>Duração: 9-12 meses</p>

<p><strong>1. Protocolos de Consenso:</strong></p>

<p><blockquote>* Estude diferentes algoritmos de consenso, como Proof of Work (PoW) e Proof of Stake (PoS).</p>
<p>* Explore como eles garantem a segurança e a imutabilidade da blockchain.</p>
<p>* Recursos recomendados: Livros e artigos acadêmicos sobre algoritmos de consenso.</p></blockquote>

<p><strong>2. Segurança e Testes de Contratos:</strong></p>

<p><blockquote>* Aprofunde-se na segurança de smart contracts e explore ferramentas como MythX.</p>
<p>* Aprenda sobre ataques comuns, como reentrancy e front-running.</p>
<p>* Recursos recomendados: Guia de Segurança Solidity, ferramentas de análise de contratos.</p></blockquote>

<p><strong>3. Desenvolvimento Multiplataforma:</strong></p>

<p><blockquote>* explore blockchain em diferentes plataformas, como Binance Smart Chain, Polkadot, etc.</p>
<p>* Compare as diferenças de arquitetura e recursos.</p>
<p>* Recursos recomendados: Documentação de outras plataformas, tutoriais online.</p></blockquote>

<p><strong>4. Pesquisa e Desenvolvimento:</strong></p>

<p><blockquote>* Mantenha-se atualizado com as últimas tendências em blockchain e criptomoedas.</p>
<p>* Experimente novas tecnologias, participe de hackathons e contribua para projetos de código aberto.</p></blockquote>
<br>
<br>
<p>Lembre-se de que a jornada de aprendizado pode variar para cada pessoa, e é importante ajustar o ritmo de estudo de acordo com a compreensão individual.</p>
<p>Além disso, a prática é essencial, portanto, construir projetos pessoais e colaborar com outros desenvolvedores de blockchain é uma parte fundamental do processo de aprendizado.</p>
    `;
//Isso obtém o elemento HTML com o ID "paragrafo". Presume-se que "paragrafo" seja a ID de um 
//elemento HTML <p> (parágrafo).
    const paragrafoElement = document.getElementById("paragrafo");
//Aqui, o conteúdo HTML dentro do elemento com o ID "paragrafo" é atualizado para o valor da constante 
//novoConteudo. Isso significa que o conteúdo atual dentro desse parágrafo será substituído pelo valor do 
//template string vazio definido anteriormente.
    paragrafoElement.innerHTML = novoConteudo;
});