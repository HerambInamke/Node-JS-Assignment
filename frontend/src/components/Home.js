import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section py-5 mb-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Find the Perfect School in Your Area</h1>
              <p className="lead mb-4">
                Discover educational institutions based on location, programs, and more.
                Our platform helps you make informed decisions about your educational journey.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/list-schools" className="btn btn-primary btn-lg px-4 py-3">
                  Find Schools
                </Link>
                <Link to="/add-school" className="btn btn-outline-primary btn-lg px-4 py-3">
                  Add a School
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Room-education-classroom-children-library-students-1237486.jpg"
                  alt="Students in a classroom"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 mb-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Our platform makes it easy to find and contribute to the educational 
              community with just a few simple steps.
            </p>
          </div>
          
          <div className="row g-5">
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-search" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Search</h3>
                <p className="text-muted mb-0">
                  Browse through our comprehensive database of schools using filters 
                  like location, programs offered, and more to find the perfect match for your needs.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-geo-alt" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Locate</h3>
                <p className="text-muted mb-0">
                  View schools on an interactive map to understand their proximity to 
                  your location and make decisions based on convenience and accessibility.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="feature-icon-wrapper mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" 
                     style={{ width: '80px', height: '80px' }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="var(--primary-color)" 
                    className="bi bi-plus-circle" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                </div>
                <h3 className="h4 mb-3">Contribute</h3>
                <p className="text-muted mb-0">
                  Add new schools to our database, helping others discover educational 
                  opportunities and expanding our collective knowledge of institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-card bg-primary text-white p-5 rounded-4 shadow position-relative overflow-hidden">
                <div className="row align-items-center">
                  <div className="col-lg-8 position-relative z-1">
                    <h2 className="display-6 fw-bold mb-3">Ready to Find Your Ideal School?</h2>
                    <p className="lead mb-4 opacity-90">
                      Start your search today and discover the perfect educational institution 
                      based on your preferences and requirements.
                    </p>
                    <Link to="/list-schools" className="btn btn-light btn-lg px-4 py-3">
                      Begin Searching Now
                    </Link>
                  </div>
                  <div className="col-lg-4 position-relative z-1 d-none d-lg-block">
                    <div className="cta-icon text-end">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="160" 
                        height="160" 
                        fill="rgba(255,255,255,0.2)" 
                        className="bi bi-mortarboard" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="background-decoration position-absolute" 
                     style={{ 
                       background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                       width: '500px',
                       height: '500px',
                       borderRadius: '50%',
                       top: '-200px',
                       right: '-200px'
                     }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials-section py-5 mb-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What Users Say</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Hear from users who have successfully used our platform to find or add schools.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="data:image/jpeg;base64,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" 
                      alt="Parent photo" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">ABC</h4>
                    <p className="text-muted mb-0">Parent</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "Description"
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="data:image/jpeg;base64,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" 
                      alt="SA" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">HeadMaster</h4>
                    <p className="text-muted mb-0">School Administrator</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "Adding our school to this platform has increased our visibility in the community. ."
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="testimonial-avatar me-3">
                    <img 
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEXb29v///+goKD08/F8fHzx8O7r6+vq6ef6+vp0dHTw8PDc3Nzu7evn5uSdnZ3k4+HU1NLPz83JycmkpKTDw8O1tbWtra2/v7+4uLjX19SQkJCFhYWfnpyXl5fMzMqqqaeKioqAf31tbW1vfqxzAAAMCUlEQVR4nO2dbZuqOAyGWRFFK+Ud1BE4s///R27BN0BpkzZFPetz7Zc5M0u5bZsmaVqdf/52Oa9+Aev6En6+voSfr/8fof/5UhCunE/X6kv46hc01pfwS/j++hJ+Cd9fX8Iv4fvrNYRsJIdZaabT/IQdUVQnWadEqI6jKzN5a7MTCoi4zFP+qEWT77PYoaeck1C8fJJ3NM90Bk3zLKKlnI+wxVtM0A1B07x26CBnImQsKlMl3Z0yLSMqxlkIBd9+Aea7QBYxDeMchMzB8l0YIwpE+4SMZerZNwG5J1gorROyuNHkaxHT2tgbsEzInFKfr2MsTXvRLiGLCjNAgVi8MyFLNCzMg5p3JRQTyHCEXsRTo6losQ/ZngRQIDYmiNYIGcuJALu5qL/62yOkA2wXRv1OtETIyIboBTF7tz4UfgwloEDUnop2CFlCDCjWjLciZE5KDajv3NghpLQyN2lGGjYILYxRIZ6/ESH9GO0QYy1EC4REztojYa617NMTMscOoG4nWiDMLQFqzkR6wsgWoEDUMafkhMTu2pBQxz0lJ7TYhUJvQGjLkJ7FEzwiMaENf62v4vWEVtyZnvC2hpqwsAso4kQsIi0hiyx3IccPU2JCq3amFT7vRkxoamfU24toa0pKyGLDLuSl8i/QnhstoaE/w/OtchCkSEBiQrNBytOdvz+p/gi7XlASmg5SHrruQfUIdF6RlNDMklbMd11XNQzQE5GU0Gi5547bSploTV9HyMzCijOgu1IOU+REpCQ08En5gp0BXV9lj7ErIiWhfvqCp4F/IVR2IjYMppyHjTZg4bk3+aV8wcC6pnSE+tOQl25fO8WSyF/Wh3rTkPNF5A8I3Vr+oApnagj7UM9l40UwAnQ9+XBHmhrCPtRZDU+nzH2UPKeM3IUiJNQA5E34BFAYGykiztSQEWo4pbx61oGt5CEGzquhI0Q7pU9m4E1hJfs/UXE+HSFyvedpPIWntKeoHRo6QlRsyBfZVgboupJtZJwxpSJE7alxvg98BeF2umgaZ0zJCBGG5pQ/taAjBacp3wYXIpIRQgtoOAfxubJVEVV5QkYI82havkkDOpI/nV5GANIRQgILvijFAqGYgD3ESYOKMaZkhCq60+nU1Dso3EXZ86mIMqZEhMoNCzE8HSReq+duBMqYUhFKQyfO02StwSf0fPBjPFMqwv6HPTxeIX4qwdblQYwPHnX5CZP4piK8uyC8Ke9HZNoTTDqj86Z+YorvnUvtPybfRkV4H03C3fR3l/dqSga2nBPqJabajLHfTQeMqaGypbfXcM4Dsu1TXrrao/Oqrb+/9iDzt0J+61pgvBoawlsWil8DBi9ttxhM+VqF5xWDJ9d/aF18RPU+EeHFlPLi1mli+bi/lIn88wQYPBkzEYkIL14pd/ovRkN4DhWrnjNboXagiAgvppT3XiziRIRBN/Hu0ZafoiYiEeElz5b2LQtVH7YTr9+FfpdNmJnwWgmV9wmziohQLD1F78fOusJrTUkIr6aUDwjDSpqJgSvhvP8kv1hg9mdoCK9eaTFY/+S5JrhEKNzbuenmISKlSEN480oHhCURYVDtBz9XKMeNhvDqlVaDAPBQ0xDuqoFre3bGwREUDeE1k8ij/qusI5dEXjP44C4DBpqsoSC8h79DU+MBU05KwqH3d/WAgcOUhLAX/g4+bc8lkRf0f7p+nFC3hoTwHsOdiJZAiW5xGjDQJyHs7RymRP02qeienIrmImT9nUOeGIeEMm17+27AYUpBOMxCrWwS+v3UOmyYUhAO0t08t0k4SEzB6oUpCIf7ary2N069YUugbI054cO+WhWqds60NbwmBRYkEhA+JoNtTcV8lOQHDVMCwsfMe2oF0cvHO4qgIJGA8PGClrYQj3igbt3Vk3Yg3jcB4bjdTg6xufGdZ7vekPXCmHBi12lUjWeq8HnhAlcDEhBO7DrxE3q3cBKvbKbu6QOsF+aEk5VCnBcFU7+/WtOFJ5BsjTmh7P6E055gOnqSBgBhsDmhbAP/dCIINaR1LDMQyg+NcvNklC/7CAErojGhovY5NRym26Gz/UCojqBMCZmiZJkb7QC7qtMJAFNjTKio7jYOpgL589VrvjGhqqyUmyXcFOXCgNS3MaHyiItZJwbypwPCC2NCZeHsyWjVV5bLxdb7UFmhf2oMAEPlOa/aeh+qzyDor4lbV/l0tWdqvB4Cip+5bkDsq4/hqBfEOQhH24pwKc8iQoLgWQh102+A613fhLCtZ9IAhJzgsE4Iva1FJzcVqw6uz0MYwQgHZyhhYpO1+rMSAkephmsTAp/7NoSj7WGlVN7a7bHvsVrgEQPICH03QsxchM3B7qHWfRrMPQq82MIy4ZijjMo0hv3YoqcmAQWLB8wxOOVWt/X4sK8iydQlNkGdIA72q6v2jQkxVyI3SZIputE7ZAmK0H6MH8PfpiVM6iySZPvD7tuREIT28zSoexLTOqmFkinG8Pz7GmGf1ftr5jlvhFm4EArGwyOjF9ZXIQjVWzN29y0eCO86BIPVccfi629iDKG6asicEGFq0jq+SZAcwrXXahewqPebOEYMizl2ZhDLcxrDBPcEAZvAtna5ZyIEFH4REMK9mjSOIEIQAmpMrdTTzEYIOXVBUfVFTgh9HqgoioIQHF6QE0IK2ygIwetFGjvRQS24IzhP1dewglau2AEAwglnqtwTArs1ESnhXNWXCGt6gozRwwF6GTHsRDfN2TWgeT+B+hAargAPdxGfe5KrOYA+L2AWA3hAj/R0nkrF+JuOJwRafqC3C9KeklW8UxaCAEPQ8gM9k09EqKiqOSt1YISw7R7oAUSqOxUAA4snIVSATgSf5p7lbpPzK+VgwDAE7I3OeobUAaRrTg0CMAxVX88KP5BPRqiq/ipQgMpehN8sONONdLxEAoYTld3oLiQklFgHntYBmjCU3baL+PZVwts9pzqRiw7UAAyDaHIyvuJ+mqmZyLlwHwNd1U31rEofdeke5W3XD50o8PIkXGkDCjlZwfkDJeYmYZs3lvM8Wq/XJnxC4glhlA0sK+7LA6zdq8+PP8vYFO+GGSx/jhVfnEfJi27ZdW7p77Sl+10ul5t6TSVn2UpQLtIU+Y1ItN/gkS9SXv35XZ61SXZUhPHm8kxBmYeob0QitKWi3fJG1xFmZITlpvfcn0UZtVHKjISsxUuKY/81WsI9FeGuWY4e/ZNmDgySJBMlOo8vR3itCo+I0Ds+PnyzOeYRAJJg34Ili2d4QgtvR6H1Lvh5+vzlpirt1+qzbDw47zqSAArCw1QLYrjmCkYzQimfMAlrIsJS0sjmt5AOVSNCFlWSpkXjIc0wdU+yVkQ/yr5Rz4SQ5VK+dsknIdyuJqbhvSHJd17oE6o6sG04pyGMVA0JTfqq2oQsUX2wQkcawkLd0nIzdWBWl5CVgFaXGwrAnXKQntuqSAnZHjBwWs90u/UMtfMSUFtixDxdN/QIgYBizXeNCT23grW1XP55hqhFyGTr00Ab8z70QmhjzxF1CFkCblIMU+MuHHvdsuaOJIQsAs38s46uKWEA70KBmIYUhOB50TbpGCK6KYZQRGzjXsQTgq3MWdyM0GWo1oTGO8NoQubgmtw4JsbG3T6JDOUaT0U8IWaMdi0aEeIGTKvNKF2MJoQuv/cWS4OLIxwsX6vIiJChR81yqX9cfY2w2ncNd96QhAzdhUI/uoD4SdhpMwilsITYWdip0iRUhmcTWugTslirxY0WoidLkMjb6ztvSMJCr9FNhT4H7Id/NPmEGm1CR2vmt4g/46/iVCnT51suf3UJtezMlbHZwRl9pjsFL431cho4QoSb/9jqbw5k9A/y3BpAPNQkNJgaLeOGJyv/LFf8dzlRejlX2v5TK7b/Meq/Tr/3BQNDyCA5LxXkT7ovsyyJI4eFq9VKeGarVRAyJ6qTrNwXlfgTY77BMEURgkN7eet9PfxIpFSP0GQazqw/eoR6TtRrdJuIGMLw1W+N0H0iIgixse9rVegQ1p9EyHUIs08iPGpYGmQK6sX60SGEbAG9j64R1F9LeAv0MYQftOC3+wkahOmr3xqj24KI6sPNB+nfDGhp/J7c7Sfp9toKwr9PX8LP15fw8/Ul/Hz9B/oqBuPvxiJnAAAAAElFTkSuQmCC" 
                      alt="Student" 
                      className="rounded-circle" 
                      width="60" 
                      height="60"
                    />
                  </div>
                  <div>
                    <h4 className="h5 mb-1">Me</h4>
                    <p className="text-muted mb-0">Student</p>
                  </div>
                </div>
                <p className="mb-0 text-muted">
                  "Description"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 