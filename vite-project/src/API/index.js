const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/";

export async function getBooks() {
  try {
    const response = await fetch(`${APIURL}/books`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function register(fName, lName, email, password) {
  console.log(fName, lName, email, password);
  const firstname = fName;
  const lastname = lName;
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    console.log(result.token);
    return result.token;
  } catch (error) {
    console.error(error);
  }
}

export async function getBook(id) {
  try {
    const response = await fetch(`${APIURL}/books/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(token) {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function checkoutBook(id, token) {
  try {
    // fetch(URL,{})
    const response = await fetch(`${APIURL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        available: false,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function returnBook(id, token) {
  try {
    // fetch(URL,{})
    console.log("return", token);
    const response = await fetch(`${APIURL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        available: true,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
