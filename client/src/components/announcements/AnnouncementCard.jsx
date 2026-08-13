const AnnouncementCard = ({ announcement }) => {
      return (
          <article>
                <h3>{announcement.title}</h3>

                      <p>{announcement.content}</p>

                            <p>
                                    Priority: {announcement.priority}
                                          </p>

                                                <p>
                                                        Published:{" "}
                                                                {new Date(announcement.publish_date).toLocaleDateString()}
                                                                      </p>

                                                                            {announcement.expire_date && (
                                                                                    <p>
                                                                                              Expires:{" "}
                                                                                                        {new Date(announcement.expire_date).toLocaleDateString()}
                                                                                                                </p>
                                                                                                                      )}
                                                                                                                          </article>
                                                                                                                            );
                                                                                                                            };

                                                                                                                            export default AnnouncementCard;
