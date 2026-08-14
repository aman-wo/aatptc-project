function ProgramCard({ program }) {
      return (
          <article>
                <h3 className="section-title">{program.name}</h3>

                      <p className="section-description">{program.description}</p>
                          </article>
                            );
                            }

                            export default ProgramCard;
