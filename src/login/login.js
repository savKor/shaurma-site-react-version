import { LoginForm } from './login-form/form'

export function LoginContainer() {
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div id="loginContainer" className="container ">
          <div
            id="loginContent"
            className="card p-5 "
            style={{ borderRadius: '15px' }}
          >
            <h2 className="text-uppercase text-center mb-5">Login account</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}
