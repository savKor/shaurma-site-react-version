import { RegistrarionForm } from './registration-form/form'

export function RegistrationContainer() {
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container ">
          <div className="row justify-content-center align-items-center h-100 ">
            <div className=" col-xl-6">
              <div className="card p-5 " style={{ borderRadius: '15px' }}>
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
                <RegistrarionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
