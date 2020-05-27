export const authenticate = (email, password) => {
  return fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ password, email })
  });
} 