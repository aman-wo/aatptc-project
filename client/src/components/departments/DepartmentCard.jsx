function DepartmentCard({ department }) {
        return (
            <article className="content-card department-card">
                  <div className="content-card-body">
                          <h3>{department.name}</h3>

                                  <p>{department.description}</p>
                                        </div>
                                            </article>
                                              );
                                              }

                                              export default DepartmentCard;

