// Esta es de google
const loginGoogle = async () => {
  const token = google.accounts.id.prompt(); 
  // La API usara este token
};

// Este es de facebook
const loginFacebook = () => {
  FB.login((respuesta) => {
    if (respuesta.authResponse) {
      console.log("Token:", respuesta.authResponse.accessToken);
    }
  }, { scope: 'email,public_profile' });
};

// Este es de apple ID
const loginApple = async () => {
  AppleID.auth.init({
    clientId: "com.tuapp.web",
    scope: "name email",
    redirectURI: "https://tuapp.com/callback",
    state: "12345"
  });

  const respuesta = await AppleID.auth.signIn();
  console.log(respuesta);
};

