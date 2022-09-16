import React from 'react'

function ContactUs({Data}) {
  return (
    <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact Details
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {Data.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
  )
}

export default ContactUs
