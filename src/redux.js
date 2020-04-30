/** seamless-immutable integrado ao Redux.
 * defina o estado inicial dos seus reducers */
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [],
  loading: false
});

const reducer = (state = initialState, action) {
  switch (action.type)...
}

/** quando você tentar alterar o estado da sua aplicação no reducer sem
 * utilizar o merge, um erro será disparado e a ação será impedida */
