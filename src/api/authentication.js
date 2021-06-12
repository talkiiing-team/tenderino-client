import { ref } from 'vue';
import Axios from 'axios';

export const roles = {
  unsigned: 'unsigned',
  emitter: 'emitter',
  valiadtor: 'validator',
  administrator: 'administrator',
};

export const authenticated = ref(false);
export const role = ref(roles.unsigned);

export const signIn = async ({ email, password }) => {
  console.log(email, password);
  try {
    const response = await Axios.post('/authentication', {
      strategy: 'local',
      email,
      password,
    });
    console.log(response);
    // if (response.type) {
    //   authenticated.value = true;
    // }
  } catch (err) {
    console.error(err);
  }
};
