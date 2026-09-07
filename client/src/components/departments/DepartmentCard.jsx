function DepartmentCard({ department, image }) {
  return (
    <article className="department-card content-card">
     {image && (
        <img
          src={image}
          alt={department.name}
          className="department-card-image"
        />
      )}

      <div className="department-card-content content-card-body">
       {/* {image && (<img src={image} alt={department.name} className="card-image"/>)}*/}
        <h3>{department.name}</h3>
        <p>{department.description}</p>
      </div>
    </article>
  );
}

export default DepartmentCard;
