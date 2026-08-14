const StaffCard = ({ staff }) => {
        const imageUrl = staff.image
            ? `http://localhost:5000/uploads/staff/${staff.image}`
                : null;

                  return (
                      <article className="content-card staff-card">

                            {imageUrl ? (
                                    <img
                                              className="card-image staff-card-image"
                                                        src={imageUrl}
                                                                  alt={staff.full_name}
                                                                          />
                                                                                ) : (
                                                                                        <div className="card-image staff-card-image card-image-placeholder">
                                                                                                  No Photo
                                                                                                          </div>
                                                                                                                )}

                                                                                                                      <div className="content-card-body">

                                                                                                                              <h3>{staff.full_name}</h3>

                                                                                                                                      <p className="staff-position">
                                                                                                                                                {staff.position}
                                                                                                                                                        </p>

                                                                                                                                                                {staff.email && (
                                                                                                                                                                          <p>{staff.email}</p>
                                                                                                                                                                                  )}

                                                                                                                                                                                          {staff.phone && (
                                                                                                                                                                                                    <p>{staff.phone}</p>
                                                                                                                                                                                                            )}

                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                      </article>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        };

                                                                                                                                                                                                                        export default StaffCard;
