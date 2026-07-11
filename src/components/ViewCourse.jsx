import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourse = () => {
  const [data, changeData] = useState([])

  const fetchData = () => {
    axios
      .get('https://host-demo-app.onrender.com/api/courses')
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.error('Failed to fetch courses:', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {data.length === 0 ? (
                <div className="col-12">
                  <p>Loading courses...</p>
                </div>
              ) : (
                data.map((value, index) => (
                  <div
                    className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"
                    key={value.id ?? index}
                  >
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Details:</h5>
                        <p>
                          <b>Course Name: </b>
                          {value.course_name}
                        </p>
                        <p>
                          <b>Duration: </b>
                          {value.duration}
                        </p>
                        <p>
                          <b>Fee: </b>
                          {value.fee}
                        </p>
                        <p>
                          <b>Mode: </b>
                          {value.mode}
                        </p>
                        <p>
                          <b>Trainer: </b>
                          {value.trainer}
                        </p><p>
                          <b>Created At: </b>
                          {value.created_at}
                        </p>
                        <a href="#" className="btn btn-success">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCourse