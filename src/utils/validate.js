export const ValidateData = (email, password) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      password
    );

  if (!isValidEmail) {
    return "Email not valid";
  }
  if (!isValidPassword) {
    return "Password not valid";
  }
  return null;
};
