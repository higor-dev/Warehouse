export function LoginUser(body) {
  return {
    url: 'http://solairedevelopment.com:8080/login',
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
    url: 'http://localhost:8080/getUser',
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
    url: 'http://localhost:8080/createProduct',
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
    url: 'http://localhost:8080/sellProduct',
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
    url: 'http://localhost:8080/buyProduct',
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
    url: `http://localhost:8080/getProduct/${id}`,
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
    url: `http://localhost:8080/getBalance`,
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
    url: `http://localhost:8080/deleteProduct/${id}`,
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
    url: `http://localhost:8080/getAllProducts`,
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
    url: `http://localhost:8080/getStatistics`,
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
    url: `http://localhost:8080/getAllTransactions`,
    options: {
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    },
  };
}
