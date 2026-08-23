function DepartmentCard({ department, image }) {
        return (
            <div className="department-card">

                  {image && (
                          <img
                                    src={image}
                                              alt={department.name}
                                                        className="department-card-image"
                                                                />
                                                                      )}

                                                                            <div className="department-card-content">
                                                                                    <h3>{department.name}</h3>
                                                                                            <p>{department.description}</p>
                                                                                                  </div>

                                                                                                      </div>
                                                                                                        );
                                                                                                        }

                                                                                                        export default DepartmentCard;


