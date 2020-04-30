/** Em objetos imutáveis, quando um novo valor é retornado, ele sobrescreve o
 * objeto inicial tornando todo processo mais rápido.
 * Com esta lib, remover a mutabilidade de um objeto fica fácil
 * */

import Immutable from 'seamless-immutable';

let obj = Immutable({
  name: "JavaScript"
});

obj.name = "JavaScripttttt"; // Não funciona e dispara ImmutableError

/** método merge realiza o processo de copiar, alterar e retornar um novo
 *  obj modificado com as novas informações */

let obj = Immutable({
  name: "JavaScript"
});

obj.merge({ name: "JavaScripttttt" }); // Funciona


/** Immutable pode ser utilizado para qualquer tipo de estrutura de dados como
 * ints, strings, arrays ou objetos e ele utiliza as funções nativas, como o
 * freeze, unidas às técnicas próprias para tornar os objs imutáveis. */
