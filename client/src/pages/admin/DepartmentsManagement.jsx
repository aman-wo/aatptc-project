import { useEffect, useState } from "react";
import api from "../../services/api";

function DepartmentsManagement() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [headOfDepartment, setHeadOfDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editingSlug, setEditingSlug] = useState(null);

  const fetchDepartments = async () => {
    try {
      const response = await api.get("/departments");
      setDepartments(response.data.data || response.data);
    } catch (error) {
      console.error("Failed to load departments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const resetForm = () => {
    setName("");
    setSlug("");
    setDescription("");
    setHeadOfDepartment("");
    setEmail("");
    setPhone("");
    setEditingSlug(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

    const departmentData = {
      name,
      slug,
      description,
      head_of_department: headOfDepartment,
      email,
      phone,
    };

    try {
      if (editingSlug) {
        await api.put(`/departments/${editingSlug}`, departmentData);
      } else {
        await api.post("/departments", departmentData);
      }

      resetForm();
      await fetchDepartments();
    } catch (error) {
      console.error(
        "Failed to save department:",
        error.response?.data || error,
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (department) => {
    setEditingSlug(department.slug);

    setName(department.name || "");
    setSlug(department.slug || "");
    setDescription(department.description || "");
    setHeadOfDepartment(department.head_of_department || "");
    setEmail(department.email || "");
    setPhone(department.phone || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (slug) => {
    if (!window.confirm("Are you sure you want to delete this department?")) {
      return;
    }

    try {
      await api.delete(`/departments/${slug}`);
      await fetchDepartments();
    } catch (error) {
      console.error(
        "Failed to delete department:",
        error.response?.data || error,
      );
    }
  };

  if (loading) {
    return (
      <div className="admin-departments">
        <p>Loading departments...</p>
      </div>
    );
  }

  return (
    <div className="admin-departments">
      <div className="admin-page-header">
        <div>
          <h2>Departments Management</h2>
          <p>Manage college departments and their contact information.</p>
        </div>
      </div>

      {/* FORM */}

      <div className="department-form-card">
        <div className="department-form-header">
          <h3>{editingSlug ? "Edit Department" : "Add New Department"}</h3>

          <p>Add the department information shown on the college website.</p>
        </div>

        <form onSubmit={handleSubmit} className="department-form">
          <div className="department-form-grid">
            <div className="form-group">
              <label htmlFor="department-name">Department Name</label>

              <input
                id="department-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Information and Communication Technology"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="department-slug">Slug</label>

              <input
                id="department-slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="information-technology"
                required
              />
            </div>

            <div className="form-group department-full-width">
              <label htmlFor="department-description">Description</label>

              <textarea
                id="department-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the department, its training areas and practical activities..."
                rows="5"
              />
            </div>

            <div className="form-group">
              <label htmlFor="head-of-department">Head of Department</label>

              <input
                id="head-of-department"
                type="text"
                value={headOfDepartment}
                onChange={(e) => setHeadOfDepartment(e.target.value)}
                placeholder="Department Head"
              />
            </div>

            <div className="form-group">
              <label htmlFor="department-email">Email</label>

              <input
                id="department-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="department@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="department-phone">Phone</label>

              <input
                id="department-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+251 XXX XXX XXX"
              />
            </div>
          </div>

          <div className="department-form-actions">
            <button
              type="submit"
              className="admin-primary-button"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingSlug
                  ? "Update Department"
                  : "Add Department"}
            </button>

            {editingSlug && (
              <button
                type="button"
                className="admin-secondary-button"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* DEPARTMENT LIST */}

      <div className="department-list-header">
        <h3>All Departments</h3>
        <span>
          {departments.length} department
          {departments.length !== 1 ? "s" : ""}
        </span>
      </div>

      {departments.length === 0 ? (
        <div className="empty-state">
          <p>No departments found.</p>
        </div>
      ) : (
        <div className="department-admin-grid">
          {departments.map((department) => (
            <div className="department-admin-card" key={department.id}>
              <div className="department-card-top">
                <div className="department-icon">
                  {department.name
                    ? department.name.charAt(0).toUpperCase()
                    : "D"}
                </div>

                <div>
                  <h3>{department.name}</h3>

                  <span className="department-slug">{department.slug}</span>
                </div>
              </div>

              {department.description && (
                <p className="department-description">
                  {department.description}
                </p>
              )}

              <div className="department-details">
                {department.head_of_department && (
                  <div className="department-detail">
                    <strong>Head:</strong>
                    <span>{department.head_of_department}</span>
                  </div>
                )}

                {department.email && (
                  <div className="department-detail">
                    <strong>Email:</strong>
                    <span>{department.email}</span>
                  </div>
                )}

                {department.phone && (
                  <div className="department-detail">
                    <strong>Phone:</strong>
                    <span>{department.phone}</span>
                  </div>
                )}
              </div>

              <div className="department-card-actions">
                <button
                  className="admin-edit-button"
                  onClick={() => handleEdit(department)}
                >
                  Edit
                </button>

                <button
                  className="admin-delete-button"
                  onClick={() => handleDelete(department.slug)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DepartmentsManagement;
