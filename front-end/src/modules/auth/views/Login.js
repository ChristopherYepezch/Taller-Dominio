import "./auth.css";
import logo from "../../../assets/img/logo-fcc.png";

const Login = () => {

const handleSubmit = async(e)=>{
  e.preventDefault();
  alert("Bienvenido Hola");
}

  return (
    
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <br></br>
      <h4>Bienvenido al Sistema de FCC</h4>
      <h5>Ingresa tus credenciales</h5>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            class="form-control centered-placeholder"
            placeholder="usuario"
          />
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control centered-placeholder"
            placeholder="contraseña"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block mb-4">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
