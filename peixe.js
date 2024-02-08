var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 580,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho

function preload() {
    //  Carregando o plano de fundo
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //  Carregando o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //  Carregando o peixe
    this.load.image('peixe', 'assets/peixes/tubarao.png');

    // Tarefa Adicional: Carregando a imagem da alga marinha
    this.load.image('alga', 'assets/alga-marinha.png');
}

function create() {
    //  Adicionando a imagem do mar
    this.add.image(400, 300, 'mar');

    //  Adicionando o logo
    this.add.image(400, 525, 'logo').setScale(0.50);

    // Tarefa Adicional: Adicionando alga marinha no cenário
    this.add.image(100, 510, 'alga').setScale(0.06);

    //  Armazenando o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    // Transformando a variável(?)
    peixinho.setFlip(true, false);
}

function update() {
    // Adicionando movimento ao peixinho
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}