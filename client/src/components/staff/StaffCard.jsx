const StaffCard = ({ staff }) => {
      const imageUrl = staff.image
          ? `http://localhost:5000/uploads/staff/${staff.image}`
              : null;

                return (
                    <div>
                          {imageUrl && (
                                  <img
                                            src={imageUrl}
                                                      alt={staff.full_name}
                                                              />
                                                                    )}

                                                                          <h3>{staff.full_name}</h3>

                                                                                <p>{staff.position}</p>

                                                                                      {staff.email && <p>{staff.email}</p>}

                                                                                            {staff.phone && <p>{staff.phone}</p>}
                                                                                                </div>
                                                                                                  );
                                                                                                  };

                                                                                                  export default StaffCard;
