const AnnouncementCard = ({ announcement }) => {
        return (
            <article className="content-card announcement-card">
                  <div className="content-card-body">
                          <span className="card-label">
                                    {announcement.priority}
                                            </span>

                                                    <h3>{announcement.title}</h3>

                                                            <p>{announcement.content}</p>

                                                                    <div className="card-meta">
                                                                              <span>
                                                                                          Published:{" "}
                                                                                                      {new Date(
                                                                                                                    announcement.publish_date
                                                                                                                                ).toLocaleDateString()}
                                                                                                                                          </span>

                                                                                                                                                    {announcement.expire_date && (
                                                                                                                                                                <span>
                                                                                                                                                                              Expires:{" "}
                                                                                                                                                                                            {new Date(
                                                                                                                                                                                                            announcement.expire_date
                                                                                                                                                                                                                          ).toLocaleDateString()}
                                                                                                                                                                                                                                      </span>
                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                  </article>
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                    export default AnnouncementCard;

