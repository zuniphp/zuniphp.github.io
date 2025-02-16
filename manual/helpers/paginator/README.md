# Zuni PHP - Paginator

### Tabela de exemplo
```sql
  CREATE TABLE tabela_exemplo (
      id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      titulo varchar(250)
  );

  INSERT  INTO tabela_exemplo(`titulo`) values
  ('Celular solucao definitiva para e-mail entra em pre-venda'),
  ('Samsung e Toshiba assinam acordo de licenciamento de chips'),
  ('Web cria 1,2 mi de empregos diretos em um ano nos EUA'),
  ('Jogos da Copa do Mundo poderao ser assistidos pelo celular'),
  ('Brasileiros criam aplicativo de iPhone para jornal dos EUA'),
  ('Intel fornecera chips para dispositivos moveis da Nokia'),
  ('Corte alema autoriza alunos a avaliarem professores na web'),
  ('Empresa cria tela de plasma Full HD de 85 polegadas'),
  ('Lucro e vendas da Oracle superam expectativas'),
  ('Qual sistema operacional vai dominar os netbooks?'),
  ('Celular inteligente gera polêmica sobre bons modos'),
  ('Aparelho mistura imagens reais e virtuais em tempo real'),
  ('Aplicativo permite escrever SMS no ar'),
  ('obs tem prognostico excelente apos transplante, diz hospital'),
  ('Microsoft ve forte crescimento na publicidade em celulares');

```

### Configuracao no Model

```php
<?php

class Model_Exemplo extends Zuni_Model 
{

    // lista todos os registros
    function getObjectAll($limit = null, $offset = null) 
    {

        $q = new Zuni_Query_Read();
        $q->addEntity('tabela_exemplo');
        $q->addProperty('limit', $limit);
        $q->addProperty('order', 'id DESC');
        $q->addProperty('offset', $offset);
        return $this->queryFetch($q->getInstruction(), 'all');
    }

    // total de regitros
    function total() 
    {
        $q = new Zuni_Query_Read();
        $q->addEntity('tabela_exemplo');
        $this->queryFetch($q->getInstruction(), 'all');
        return $this->numRows();
    }


}

```

### Configuracao no Controle
```php
<?php

class Controller_Exemplo extends Zuni_Controller 
{
    public $total;
    public $lista;

    function init() 
    {
        $this->loadClass(array(
            'Helper_Paginator',
            'Model_Exemplo'
        ));


        $get = $this->getSegment(2);

        $this->Helper_Paginatior->urlLink('http://localhost/teste/exemplo/page/');
        $this->Helper_Paginatior->currentPage($get);
        $perPage = $this->Helper_Paginatior->perPage(3);
        $startPage = $this->Helper_Paginatior->startPage();

        $this->total = $this->Helper_Paginatior->totalRows($this->Exemplo_model->total());
        $this->lista = $this->Exemplo_model->getObjectAll($perPage, $startPage);

    }

    function index_action() 
    {
        $dados['lista'] = $this->lista;
        $this->loadView('exemplo', $dados);
    }

    function page() 
    {
        $dados['lista'] = $this->lista;
        $this->loadView('exemplo', $dados);
    }

}

```

### Configuracao na View ###

```php
  <!DOCTYPE html>
  <html lang="pt-bt">
  <head>
  <meta charset="utf-8">
  <title>Exemplo de paginacao</title>
  </head>
  <body>
  <h1>Exemplo de paginacao</h1>

  <?php foreach ($view_lista as $row):
  <?php echo $row->titulo; <br />
  <?php endforeach;
  <p>
  <?php echo $this->Helper_Paginatior->createLink();
  </p>

  </body>
  </html>

```

### Outros exemplos
```php
<?php
 * // configura o nome dos links
  $this->Helper_Paginatior->linkFirst('primeiro');
  $this->Helper_Paginatior->linkLast('ultimo');
  $this->Helper_Paginatior->linkPrev('anterior');
  $this->Helper_Paginatior->linkNext('proximo');
  // quantidade de links na pagina
  $this->Helper_Paginatior->linkNum(5);
 * @example
  // metodo para remover o link caso nao queira o primeiro e ultimo link, ou
  // proximo e anterior, ou os links dos numeros
  $this->Helper_Paginatior->removeLinkFirsLast();
  $this->Helper_Paginatior->removeLinkPrevNext();
  $this->Helper_Paginatior->removeLinkNum();

 * @example
  // insere css class no links
  $this->Helper_Paginatior->anchorAttrCurrent(array('style'=>'color:#f00'));
  $this->Helper_Paginatior->anchorAttrFirstLast(array('style'=>'color:#060'));
  $this->Helper_Paginatior->anchorAttrPrevNext(array('style'=>'color:#9675EA'));
  $this->Helper_Paginatior->anchorAttrOn(array('style'=>'color:#FCA505'));
  $this->Helper_Paginatior->anchorAttrOff(array('style'=>'color:#666'));
 */
```
- Absolute repository
- Go to: https://rubricate.github.io/
