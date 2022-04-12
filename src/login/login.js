import { LoginForm } from './login-form/form'

export function LoginContainer() {
  return (
    <section
      class="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Login account</h2>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
