const validations = {
  name: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid name',
    },
  },

  cpf: {
    custom: {
      isValid: (value) => parseInt(value?.replaceAll('.', '')?.replace('-', '')?.length, 10) === 11,
      message: 'Type a valid CPF',
    },
  },

  phone: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 13,
      message: 'Type a valid phone',
    },
  },

  cep: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 9,
      message: 'Type a valid CEP',
    },
  },

  city: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid city name',
    },
  },

  neighborhood: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid neighborhood',
    },
  },

  street: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid street name',
    },
  },

  state: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Select a state',
    },
  },

  birthday: {
    custom: {
      isValid: (value) => !value || !isNaN(new Date(value?.split('-').join('-'))),
      message: 'Select your birthdate',
    },
  },

  number: {
    custom: {
      isValid: (value: number) => Number(value),
      message: 'Type a valid number',
    },
  },
};

export default validations;

function isValidString(value: string) {
  return value || value?.trim();
}