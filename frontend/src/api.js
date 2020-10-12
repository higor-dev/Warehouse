const URL = process.env.REACT_APP_URL;

export function LoginUser(body) {
  return {
    url: URL + 'login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function getUserByToken(token) {
  return {
    url: URL + 'getUser',
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function createProduct(formData, token) {
  return {
    url: URL + 'createProduct',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: formData,
    },
  };
}

export function sellProduct(formData, token) {
  return {
    url: URL + 'sellProduct',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: formData,
    },
  };
}

export function updateProduct(formData, token) {
  return {
    url: URL + 'updateProduct',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: formData,
    },
  };
}

export function buyProduct(formData, token) {
  return {
    url: URL + 'buyProduct',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: formData,
    },
  };
}

export function getProduct(id, token) {
  return {
    url: URL + `getProduct/${id}`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function getBalance(token) {
  return {
    url: URL + `getBalance`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function deleteProduct(id, token) {
  return {
    url: URL + `deleteProduct/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function getAllProducts(token) {
  return {
    url: URL + `getAllProducts`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function getStatistics(token) {
  return {
    url: URL + `getStatistics`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}

export function getAllTransactions(token) {
  return {
    url: URL + `getAllTransactions`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}
